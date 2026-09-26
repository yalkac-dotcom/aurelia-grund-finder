import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { buyerInterestCopy } from "@/i18n/buyerInterestCopy";
import { stockRequestCopy } from "@/i18n/stockRequestCopy";

// Kaufinteresse-Formular (alle Sprachen) – Interessenten für den
// EIGENEN Aurelia-Bestand. Kein Makler-, Vermittlungs- oder Suchauftrag.

const labelClass = "text-[0.76rem] font-semibold uppercase tracking-[0.11em] text-primary";
const fieldClass = (err: boolean) =>
  `mt-2 w-full rounded-sm border bg-background px-4 py-3 text-[0.92rem] normal-case tracking-normal outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${err ? "border-destructive" : "border-border"}`;

const schema = z.object({
  name: z.string().trim().min(2).max(160),
  phone: z.string().trim().min(5).max(50),
  email: z.string().trim().email().max(254),
  regions: z.string().trim().max(500),
  size: z.string().trim().max(120),
  wishes: z.string().trim().max(1500),
  timeframe: z.string().trim().max(120),
});

type Text = { name: string; phone: string; email: string; regions: string; size: string; wishes: string; timeframe: string };
const initialText: Text = { name: "", phone: "", email: "", regions: "", size: "", wishes: "", timeframe: "" };

const ChipGroup = ({ legend, options, labels, selected, onToggle, error }: { legend: string; options: string[]; labels: string[]; selected: string[]; onToggle: (v: string) => void; error?: string }) => (
  <fieldset className="md:col-span-2">
    <legend className={labelClass}>{legend}</legend>
    <div className="mt-3 flex flex-wrap gap-2.5">
      {options.map((o, idx) => {
        const active = selected.includes(o);
        return (
          <label key={o} className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm border px-4 py-2 text-[0.88rem] transition-colors ${active ? "border-accent bg-secondary text-primary ring-2 ring-accent/20" : "border-border bg-background text-muted-foreground hover:border-accent/60"}`}>
            <input type="checkbox" checked={active} onChange={() => onToggle(o)} className="!h-4 !w-4 !min-h-0 !min-w-0 shrink-0 accent-primary" />
            {labels[idx] ?? o}
          </label>
        );
      })}
    </div>
    {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
  </fieldset>
);

const Select = ({ label, value, options, labels, onChange }: { label: string; value: string; options: string[]; labels: string[]; onChange: (v: string) => void }) => (
  <label className={labelClass}>{label}
    <select value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass(false)}>
      <option value="">—</option>
      {options.map((o, idx) => <option key={o} value={o}>{labels[idx] ?? o}</option>)}
    </select>
  </label>
);

const BuyerInterestForm = ({ variant = "full" }: { variant?: "full" | "stock" }) => {
  const compact = variant === "stock";
  const { toast } = useToast();
  const { language } = useLanguage();
  const c = buyerInterestCopy[language];
  const sc = stockRequestCopy[language];
  const base = buyerInterestCopy.de;
  const markets = base.marketOptions, propertyTypes = base.typeOptions, budgets = base.budgetOptions, usages = base.usageOptions, languages = base.languageOptions;
  const langIndex = { de: 0, tr: 1, en: 2, it: 3, es: 4, fr: 5, nl: 6 }[language] ?? 0;
  const [text, setText] = useState<Text>(initialText);
  const [selMarkets, setSelMarkets] = useState<string[]>([]);
  const [selTypes, setSelTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [usage, setUsage] = useState("");
  const [lang, setLang] = useState(base.languageOptions[langIndex]);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, key: string) => (v: string) => {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
    setErrors((e) => ({ ...e, [key]: "" }));
  };
  const upd = (k: keyof Text) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText((t) => ({ ...t, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    const parsed = schema.safeParse(text);
    if (!parsed.success) parsed.error.issues.forEach((i) => {
      const k = String(i.path[0]);
      next[k] = k === "email" ? c.errEmail : c.errField;
    });
    if (!text.name.trim()) next.name = c.errRequired;
    if (!text.phone.trim()) next.phone = c.errRequired;
    if (!compact && selMarkets.length === 0) next.markets = c.errMarkets;
    if (!privacy) next.privacy = c.errPrivacy;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setSubmitting(true);
    const message = [
      "Kaufinteresse – Immobilien aus dem Aurelia-Bestand",
      compact && "Anfrage über: Unser Bestand",
      !compact && `Märkte: ${selMarkets.join(", ")}`,
      text.regions && `Regionen / Städte: ${text.regions}`,
      selTypes.length && `Immobilienarten: ${selTypes.join(", ")}`,
      budget && `Kaufpreisrahmen: ${budget}`,
      usage && `Nutzung: ${usage}`,
      text.size && `Gewünschte Größe: ${text.size}`,
      text.timeframe && `Kaufzeitraum: ${text.timeframe}`,
      !compact && `Bevorzugte Sprache: ${lang}`,
      "",
      "Besondere Wünsche:",
      text.wishes || "Keine Angaben.",
    ].filter(Boolean).join("\n").slice(0, 4900);
    const [firstName, ...rest] = text.name.trim().split(/\s+/);
    try {
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        first_name: firstName, last_name: rest.join(" ") || "-", email: text.email.trim(), phone: text.phone.trim(),
        property_type: "Kaufinteresse – Bestand", subject: compact ? "Kaufinteresse – Anfrage über: Unser Bestand" : "Kaufinteresse", message, callback_requested: false,
      });
      if (dbError) throw dbError;
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: text.name.trim(), email: text.email.trim(), phone: text.phone.trim(), property_type: "Kaufinteresse – Bestand", subject: compact ? "Kaufinteresse – Anfrage über: Unser Bestand" : "Kaufinteresse", message, language, preferred_language: compact ? base.languageOptions[langIndex] : lang, form_type: "general_contact", privacy_consent: true },
      });
      if (error || !data?.success) throw error ?? new Error("send failed");
      setSuccess(true);
      setText(initialText); setSelMarkets([]); setSelTypes([]); setBudget(""); setUsage(""); setPrivacy(false);
      toast({ title: c.toastOkTitle, description: c.toastOkText });
    } catch (err) {
      console.error("Buyer interest submission failed");
      toast({ title: c.toastErrTitle, description: c.toastErrText, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const input = (k: keyof Text, label: string, type = "text", required = false) => (
    <label className={labelClass}>{label}{required && (k === "name" ? "*" : " *")}
      <input type={type} value={text[k]} onChange={upd(k)} className={fieldClass(Boolean(errors[k]))} aria-invalid={Boolean(errors[k])} />
      {errors[k] && <span className="mt-1 block normal-case tracking-normal text-destructive">{errors[k]}</span>}
    </label>
  );

  return (
    <form onSubmit={submit} noValidate className="mx-auto max-w-5xl rounded-sm border border-border bg-card p-5 shadow-sm sm:p-8 md:p-12">
      <p className="text-sm text-muted-foreground">{c.required}</p>
      <div className="mt-6 grid gap-7 md:grid-cols-2">
        {compact ? (<>
        <ChipGroup legend={sc.types} options={propertyTypes.slice(0, 6)} labels={sc.typeLabels} selected={selTypes} onToggle={toggle(selTypes, setSelTypes, "types")} />
        <label className={`${labelClass} md:col-span-2`}>{sc.region}
          <input value={text.regions} onChange={upd("regions")} maxLength={500} className={fieldClass(Boolean(errors.regions))} />
        </label>
        <Select label={c.budget} value={budget} options={budgets} labels={c.budgetOptions} onChange={setBudget} />
        {input("name", c.name, "text", true)}
        {input("email", c.email, "email", true)}
        {input("phone", c.phone, "tel", true)}
        <label className={`${labelClass} md:col-span-2`}>{sc.wishes}
          <textarea value={text.wishes} onChange={upd("wishes")} rows={4} maxLength={1500} className={fieldClass(false)} />
        </label>
        </>) : (<>
        <ChipGroup legend={c.markets} options={markets} labels={c.marketOptions} selected={selMarkets} onToggle={toggle(selMarkets, setSelMarkets, "markets")} error={errors.markets} />
        <label className={`${labelClass} md:col-span-2`}>{c.regions}
          <input value={text.regions} onChange={upd("regions")} maxLength={500} className={fieldClass(Boolean(errors.regions))} />
        </label>
        <ChipGroup legend={c.types} options={propertyTypes} labels={c.typeOptions} selected={selTypes} onToggle={toggle(selTypes, setSelTypes, "types")} />
        <Select label={c.budget} value={budget} options={budgets} labels={c.budgetOptions} onChange={setBudget} />
        <Select label={c.usage} value={usage} options={usages} labels={c.usageOptions} onChange={setUsage} />
        {input("size", c.size)}
        {input("timeframe", c.timeframe)}
        <label className={`${labelClass} md:col-span-2`}>{c.wishes}
          <textarea value={text.wishes} onChange={upd("wishes")} rows={4} maxLength={1500} className={fieldClass(false)} />
        </label>
        {input("name", c.name, "text", true)}
        {input("phone", c.phone, "tel", true)}
        {input("email", c.email, "email", true)}
        <Select label={c.language} value={lang} options={languages} labels={c.languageOptions} onChange={(v) => setLang(v || base.languageOptions[langIndex])} />
        </>)}
      </div>
      <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
        <input type="checkbox" checked={privacy} onChange={(e) => { setPrivacy(e.target.checked); setErrors((er) => ({ ...er, privacy: "" })); }} className="mt-1 !h-4 !w-4 !min-h-0 !min-w-0 shrink-0 accent-primary" />
        <span>{c.privacyBefore}<Link to="/datenschutz" className="font-semibold text-primary underline">{c.privacyLink}</Link>{c.privacyAfter}</span>
      </label>
      {errors.privacy && <p className="mt-1 text-sm text-destructive">{errors.privacy}</p>}
      {success && (
        <div className="mt-7 flex gap-3 rounded-sm bg-secondary p-5 text-primary">
          <CheckCircle2 className="mt-0.5 shrink-0 text-accent" />
          <p>{c.success}</p>
        </div>
      )}
      <Button type="submit" disabled={submitting} size="lg" className="mt-8 min-h-12 h-auto w-full whitespace-normal rounded-sm px-4 py-3 text-center leading-snug uppercase tracking-[0.1em] sm:w-auto sm:px-8">
        {submitting ? c.sending : compact ? sc.submit : c.submit}
      </Button>
      <p className="mt-6 max-w-3xl text-[0.8rem] leading-[1.7] text-muted-foreground">
        {c.disclaimer}
      </p>
    </form>
  );
};

export default BuyerInterestForm;
