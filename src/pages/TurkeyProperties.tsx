import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Home, Landmark, MapPin, ShieldCheck, Upload } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import heroTurkeyProperties from "@/assets/hero-turkey-properties.jpg";
import { z } from "zod";
import { usePageSeo } from "@/hooks/usePageSeo";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  preferredLanguage: string;
  ownerLocation: string;
  ownerCount: string;
  propertyType: string;
  provinceCity: string;
  district: string;
  area: string;
  rooms: string;
  yearBuilt: string;
  rented: string;
  ownership: string;
  priceExpectation: string;
  description: string;
  privacy: boolean;
};

type UploadedFileInfo = {
  name: string;
  path: string;
  size: number;
  type: string;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const ACCEPTED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png"]);

const getInitialForm = (preferredLanguage: string): FormState => ({
  fullName: "",
  phone: "",
  email: "",
  preferredLanguage,
  ownerLocation: "",
  ownerCount: "",
  propertyType: "",
  provinceCity: "",
  district: "",
  area: "",
  rooms: "",
  yearBuilt: "",
  rented: "",
  ownership: "",
  priceExpectation: "",
  description: "",
  privacy: false,
});

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
const turkeyFormSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  phone: z.string().trim().min(5).max(50),
  email: z.string().trim().email().max(254),
  preferredLanguage: z.string().trim().min(1).max(50),
  ownerLocation: z.string().trim().max(120),
  ownerCount: z.string().trim().regex(/^$|^[1-9]\d{0,2}$/),
  propertyType: z.string().trim().min(1).max(120),
  provinceCity: z.string().trim().min(2).max(120),
  district: z.string().trim().max(120),
  area: z.string().trim().max(80),
  rooms: z.string().trim().max(50),
  yearBuilt: z.string().trim().regex(/^$|^\d{4}$/),
  rented: z.string().trim().max(80),
  ownership: z.string().trim().max(80),
  priceExpectation: z.string().trim().max(120),
  description: z.string().trim().max(1800),
  privacy: z.literal(true),
});

const sanitizeFileName = (fileName: string) =>
  fileName
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);

const formatSize = (bytes: number) => {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts.shift() ?? fullName.trim();
  const lastName = parts.join(" ");
  return { firstName, lastName: lastName || null };
};

const TurkeyProperties = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const page = t.turkeyProperties;
  const languageOptionIndex = { de: 0, tr: 1, en: 2, nl: 3, it: 4, es: 5, fr: 6 } as const;
  const defaultLanguage = useMemo(() => page.form.languageOptions[languageOptionIndex[language]] ?? page.form.languageOptions[0] ?? "Deutsch", [language, page.form.languageOptions]);
  const [form, setForm] = useState<FormState>(() => getInitialForm(defaultLanguage));
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "files", boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  usePageSeo(page.seoTitle, page.seoDescription);

  useEffect(() => {
    setForm((current) => ({ ...current, preferredLanguage: defaultLanguage }));
  }, [defaultLanguage]);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: false }));
  };

  const validateFiles = (selected: File[]) =>
    selected.every((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      return file.size <= MAX_FILE_SIZE && ACCEPTED_EXTENSIONS.has(extension) && (ACCEPTED_TYPES.has(file.type) || file.type === "");
    });

  const onFilesChange = (selectedFiles: FileList | null) => {
    const nextFiles = Array.from(selectedFiles ?? []);
    if (!validateFiles(nextFiles)) {
      setErrors((current) => ({ ...current, files: true }));
      setFiles([]);
      toast({ title: page.form.validationError, description: page.form.fileError, variant: "destructive" });
      return;
    }
    setFiles(nextFiles);
    setErrors((current) => ({ ...current, files: false }));
  };

  const validateForm = () => {
    const parsed = turkeyFormSchema.safeParse(form);
    const issueFields = new Set(parsed.success ? [] : parsed.error.issues.map((issue) => String(issue.path[0])));
    const nextErrors: Partial<Record<keyof FormState | "files", boolean>> = {
      fullName: issueFields.has("fullName"),
      phone: issueFields.has("phone"),
      email: issueFields.has("email"),
      propertyType: issueFields.has("propertyType"),
      provinceCity: issueFields.has("provinceCity"),
      ownerLocation: issueFields.has("ownerLocation"),
      ownerCount: issueFields.has("ownerCount"),
      yearBuilt: issueFields.has("yearBuilt"),
      privacy: issueFields.has("privacy"),
      files: !validateFiles(files),
    };
    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const buildMessage = (uploadedFiles: UploadedFileInfo[]) => {
    const lines = [
      "Türkei-Immobilienanfrage",
      `Bevorzugte Sprache: ${form.preferredLanguage}`,
      form.ownerLocation ? `Aktueller Aufenthaltsort: ${form.ownerLocation}` : "",
      form.ownerCount ? `Anzahl Eigentümer: ${form.ownerCount}` : "",
      `Immobilienart: ${form.propertyType}`,
      `Provinz / Stadt: ${form.provinceCity}`,
      form.district ? `Stadtteil / Bezirk: ${form.district}` : "",
      form.area ? `Fläche: ${form.area}` : "",
      form.rooms ? `Zimmer: ${form.rooms}` : "",
      form.yearBuilt ? `Baujahr: ${form.yearBuilt}` : "",
      form.rented ? `Vermietet: ${form.rented}` : "",
      form.ownership ? `Tapu-Eigentümerstatus: ${form.ownership}` : "",
      form.priceExpectation ? `Preisvorstellung: ${form.priceExpectation}` : "",
      uploadedFiles.length > 0 ? `Dateien: ${uploadedFiles.map((file) => file.name).join(", ")}` : "Dateien: Keine Dateien hochgeladen",
      "",
      "Beschreibung:",
      form.description || "Keine zusätzliche Beschreibung.",
    ].filter(Boolean);

    return lines.join("\n").slice(0, 4900);
  };

  const uploadFiles = async () => {
    if (files.length === 0) return [];
    const uploaded: UploadedFileInfo[] = [];
    for (const file of files) {
      const safeName = sanitizeFileName(file.name);
      const path = `${crypto.randomUUID()}/${safeName}`;
      const { error } = await supabase.storage.from("turkey-property-documents").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type || undefined,
      });
      if (error) throw error;
      uploaded.push({ name: file.name, path, size: file.size, type: file.type || "application/octet-stream" });
    }
    return uploaded;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(false);
    setConfirmationSent(false);
    if (!validateForm()) {
      toast({ title: page.form.validationError, description: page.form.errorText, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const uploadedFiles = await uploadFiles();
      const message = buildMessage(uploadedFiles);
      const { firstName, lastName } = splitName(form.fullName);

      const { error: insertError } = await supabase.from("contact_submissions").insert({
        first_name: firstName,
        last_name: lastName,
        email: form.email.trim(),
        phone: form.phone.trim(),
        property_type: "Immobilien in der Türkei",
        subject: form.propertyType,
        message,
        callback_requested: true,
      });
      if (insertError) throw insertError;

      const { data: functionResult, error: functionError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          property_type: "Immobilien in der Türkei",
          message,
          language,
          preferred_language:
            (["de", "tr", "en", "nl", "it", "es", "fr"] as const)[
              page.form.languageOptions.indexOf(form.preferredLanguage)
            ] ?? language,
          form_type: "turkey_property",
          privacy_consent: true,
          files: uploadedFiles,
        },
      });
      if (functionError) throw functionError;
      if (!functionResult?.success || !functionResult?.internalMailResult?.accepted) {
        throw new Error("Internal enquiry email was not accepted");
      }

      setIsSuccess(true);
      const wasConfirmationAccepted = functionResult?.customerConfirmationResult?.accepted === true;
      setConfirmationSent(wasConfirmationAccepted);
      setForm(getInitialForm(defaultLanguage));
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      toast({
        title: page.form.successTitle,
        description: wasConfirmationAccepted ? page.form.successText : page.form.confirmationWarning,
      });
    } catch (error) {
      console.error("Turkey property submission failed:", error);
      toast({ title: page.form.validationError, description: page.form.errorText, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field: keyof FormState | "files") =>
    `mt-2 w-full rounded-sm border bg-background px-4 py-3 text-[0.92rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20 ${
      errors[field] ? "border-destructive" : "border-border"
    }`;
  const labelClass = "text-[0.76rem] font-semibold uppercase tracking-[0.11em] text-primary";

  return (
    <Layout>
      <section className="relative flex min-h-[83svh] items-center overflow-hidden bg-primary pt-20 md:min-h-[87vh]">
        <img
          src={heroTurkeyProperties}
          alt={page.hero.imageAlt}
          width={1600}
          height={1000}
          loading="eager"
          {...({ fetchpriority: "high" } as React.HTMLAttributes<HTMLImageElement>)}
          className="img-tone absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.78) 42%, hsl(var(--primary) / 0.42) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="page-frame-hero relative py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="hero-kicker">{page.hero.kicker}</p>
            <h1 className="hero-title">{page.hero.title}</h1>
            <p className="hero-description max-w-2xl whitespace-pre-line">{page.hero.subtitle}</p>
            <div className="mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
              <Link to="/immobilie-anbieten?land=tuerkei" className="btn-primary">
                {page.hero.primaryCta}
                <ArrowRight size={13} className="ml-2 text-accent" />
              </Link>
              <Link to="/kontakt" className="btn-secondary">
                {page.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl">
              <SectionHeader title={page.problem.title} align="left" disableOffset />
              <div className="space-y-5 text-[0.98rem] leading-[1.9] text-muted-foreground">
                {page.problem.paragraphs.map((paragraph) => (
                  <Reveal key={paragraph}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-premium bg-background">
          <div className="container-premium">
            <SectionHeader title={page.servicesTitle} intro={page.servicesIntro} />
            <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.04}>
                  <ProofCard index={index} title={service.title} text={service.text} compact />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={page.propertyTypesTitle} intro={page.propertyTypesIntro} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.propertyTypes.map((item, index) => {
                const icons = [Home, Landmark, MapPin, Home, FileText, Landmark];
                const Icon = icons[index] ?? Home;
                return (
                  <Reveal key={item} delay={index * 0.04}>
                    <article className="flex h-full items-center gap-4 rounded-sm bg-card p-5 shadow-sm">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                        <Icon size={19} strokeWidth={1.6} />
                      </span>
                      <h3 className="font-heading text-[1rem] font-semibold leading-snug text-primary">{item}</h3>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <p className="mx-auto mt-7 max-w-3xl text-center text-[0.9rem] leading-[1.8] text-muted-foreground">{page.propertyTypesExtra}</p>
          </div>
        </section>

        {page.audience && <section className="section-premium bg-background">
          <div className="container-premium">
            <SectionHeader title={page.audience.title} intro={page.audience.text} />
            <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-3 md:grid-cols-2">
              {page.audience.items.map((item, index) => (
                <Reveal key={item} delay={(index % 2) * 0.04}>
                  <div className="flex min-h-14 items-start gap-3 py-2">
                    <CheckCircle2 className="mt-1 shrink-0 text-accent" size={17} />
                    <p className="text-[0.92rem] leading-[1.75] text-muted-foreground">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>}

        <section className="section-premium bg-background">
          <div className="container-premium">
            <SectionHeader title={page.processTitle} />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {page.process.map((step, index) => (
                <ProcessStep key={step.title} index={index} total={page.process.length} title={step.title} desc={step.text} />
              ))}
            </div>
          </div>
        </section>

        {page.crossLink && <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="border-l-2 border-accent bg-card px-6 py-8 md:px-10">
                <h2 className="font-heading text-[1.55rem] font-semibold text-primary">{page.crossLink.title}</h2>
                <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">{page.crossLink.text}</p>
                <Link to="/fuer-eigentumer-in-not" className="mt-5 inline-flex min-h-11 items-center text-[0.78rem] font-semibold uppercase text-primary hover:text-accent">{page.crossLink.cta}</Link>
              </div>
            </Reveal>
          </div>
        </section>}

        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
              <Reveal>
                <div>
                  <div className="mb-4 h-[2px] w-10 bg-accent" />
                  <h2 className="font-heading text-[1.8rem] font-bold leading-[1.2] md:text-[2.35rem]">{page.trust.title}</h2>
                  <p className="mt-5 text-[0.98rem] leading-[1.9] text-white/75">{page.trust.text}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="space-y-4 border-l-2 border-l-accent/70 pl-6">
                  {page.trust.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} strokeWidth={1.7} />
                      <p className="text-[0.94rem] leading-[1.7] text-white/85">{point}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {language !== "de" && <section id="tuerkei-formular" className="section-premium scroll-mt-24 bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl">
              <SectionHeader title={page.form.title} intro={page.form.intro} />
              <form onSubmit={handleSubmit} className="bg-card p-6 shadow-[0_16px_48px_-34px_hsl(var(--primary)/0.5)] md:p-8">
                <p className="mb-6 text-[0.82rem] text-muted-foreground">{page.form.requiredHint}</p>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className={labelClass}>{page.form.fullName} *<input className={fieldClass("fullName")} value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} autoComplete="name" maxLength={200} /></label>
                  <label className={labelClass}>{page.form.phone} *<input className={fieldClass("phone")} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" maxLength={50} /></label>
                  <label className={labelClass}>{page.form.email} *<input className={fieldClass("email")} value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" inputMode="email" maxLength={254} /></label>
                  <label className={labelClass}>{page.form.preferredLanguage}<select className={fieldClass("preferredLanguage")} value={form.preferredLanguage} onChange={(event) => updateField("preferredLanguage", event.target.value)}>{page.form.languageOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                  <label className={labelClass}>{page.form.ownerLocation ?? ""}<input className={fieldClass("ownerLocation")} value={form.ownerLocation} onChange={(event) => updateField("ownerLocation", event.target.value)} maxLength={120} /></label>
                  <label className={labelClass}>{page.form.ownerCount ?? ""}<input className={fieldClass("ownerCount")} value={form.ownerCount} onChange={(event) => updateField("ownerCount", event.target.value)} inputMode="numeric" maxLength={3} /></label>
                  <label className={labelClass}>{page.form.propertyType} *<select className={fieldClass("propertyType")} value={form.propertyType} onChange={(event) => updateField("propertyType", event.target.value)}><option value="">{page.form.selectPlaceholder}</option>{page.form.propertyTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                  <label className={labelClass}>{page.form.provinceCity} *<input className={fieldClass("provinceCity")} value={form.provinceCity} onChange={(event) => updateField("provinceCity", event.target.value)} maxLength={120} /></label>
                  <label className={labelClass}>{page.form.district}<input className={fieldClass("district")} value={form.district} onChange={(event) => updateField("district", event.target.value)} maxLength={120} /></label>
                  <label className={labelClass}>{page.form.area}<input className={fieldClass("area")} value={form.area} onChange={(event) => updateField("area", event.target.value)} maxLength={80} /></label>
                  <label className={labelClass}>{page.form.rooms}<input className={fieldClass("rooms")} value={form.rooms} onChange={(event) => updateField("rooms", event.target.value)} /></label>
                  <label className={labelClass}>{page.form.yearBuilt}<input className={fieldClass("yearBuilt")} value={form.yearBuilt} onChange={(event) => updateField("yearBuilt", event.target.value)} inputMode="numeric" /></label>
                  <label className={labelClass}>{page.form.rented}<select className={fieldClass("rented")} value={form.rented} onChange={(event) => updateField("rented", event.target.value)}><option value="">{page.form.selectPlaceholder}</option>{page.form.rentedOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                  <label className={labelClass}>{page.form.ownership}<select className={fieldClass("ownership")} value={form.ownership} onChange={(event) => updateField("ownership", event.target.value)}><option value="">{page.form.selectPlaceholder}</option>{page.form.ownershipOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                  <label className={`${labelClass} md:col-span-2`}>{page.form.priceExpectation}<input className={fieldClass("priceExpectation")} value={form.priceExpectation} onChange={(event) => updateField("priceExpectation", event.target.value)} /></label>
                  <label className={`${labelClass} md:col-span-2`}>{page.form.description}<textarea className={`${fieldClass("description")} min-h-36 resize-y`} value={form.description} onChange={(event) => updateField("description", event.target.value)} maxLength={1800} /></label>
                  <div className={`${labelClass} md:col-span-2`}>
                    <span className="flex items-center gap-2"><Upload size={15} className="text-accent" />{page.form.files}</span>
                    <input ref={fileInputRef} className="sr-only" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" onChange={(event) => onFilesChange(event.target.files)} />
                    <div className={`mt-2 flex min-h-12 flex-col gap-3 rounded-sm border bg-background px-4 py-3 sm:flex-row sm:items-center ${errors.files ? "border-destructive" : "border-border"}`}>
                      <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} className="min-h-11 shrink-0 rounded-sm">
                        <Upload size={15} className="mr-2 text-accent" />
                        {page.form.uploadChoose}
                      </Button>
                      <span className="normal-case tracking-normal text-[0.82rem] font-normal text-muted-foreground">
                        {files.length === 0 ? page.form.uploadEmpty : `${page.form.uploadSelected} ${files.map((file) => file.name).join(", ")}`}
                      </span>
                    </div>
                    <span className="mt-2 block text-[0.78rem] normal-case text-muted-foreground">{page.form.uploadHelp}</span>
                  </div>
                </div>
                {files.length > 0 && <p className="mt-3 text-[0.78rem] text-muted-foreground">{files.map((file) => `${file.name} · ${formatSize(file.size)}`).join(" · ")}</p>}
                <label className="mt-6 flex items-start gap-3 text-[0.86rem] leading-[1.7] text-muted-foreground">
                  <input type="checkbox" checked={form.privacy} onChange={(event) => updateField("privacy", event.target.checked)} className={`mt-1 h-4 w-4 rounded-sm border ${errors.privacy ? "border-destructive" : "border-border"}`} />
                  <span>{page.form.privacy} <Link to="/datenschutz" className="text-primary underline-offset-4 hover:underline">{page.form.privacyLink}</Link></span>
                </label>
                {isSuccess && (
                  <div className="mt-6 border-l-2 border-l-accent bg-secondary/60 p-4 text-[0.9rem] leading-[1.7] text-primary">
                    <strong className="block font-heading">{page.form.successTitle}</strong>
                     <span>{confirmationSent ? page.form.successText : page.form.confirmationWarning}</span>
                  </div>
                )}
                <div className="mt-7">
                  <Button type="submit" disabled={isSubmitting} className="min-h-11 rounded-sm bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                    {isSubmitting ? page.form.submitting : page.form.button}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>}
        {language === "de" && <section id="tuerkei-formular" className="section-premium scroll-mt-24 bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-4xl border-l-2 border-accent bg-card px-6 py-10 md:px-10">
                <h2 className="font-heading text-[1.55rem] font-semibold text-primary">Möchten Sie Ihre Immobilie anbieten?</h2>
                <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">Nutzen Sie dafür unsere zentrale Immobilienanfrage. Wählen Sie dort einfach „Türkei“ aus und senden Sie uns die wichtigsten Angaben zu Ihrer Immobilie.</p>
                <Link to="/immobilie-anbieten?land=tuerkei" className="btn-primary mt-7">
                  IMMOBILIE IN DER TÜRKEI ANBIETEN
                  <ArrowRight size={13} className="ml-2 text-accent" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>}

        <section className="section-premium bg-background">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl text-center">
              <ShieldCheck className="mx-auto mb-5 text-accent" size={32} strokeWidth={1.5} />
              <h2 className="font-heading text-[1.75rem] font-bold leading-[1.2] text-primary md:text-[2.25rem]">{page.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[0.94rem] leading-[1.85] text-muted-foreground">{page.cta.text}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href="#tuerkei-formular" className="btn-primary">{page.cta.primary}<ArrowRight size={13} className="ml-2 text-accent" /></a>
                <a href="tel:+4921169583033" className="btn-secondary">{page.cta.secondary}</a>
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-[0.78rem] leading-[1.75] text-muted-foreground">{page.legalNotice}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TurkeyProperties;