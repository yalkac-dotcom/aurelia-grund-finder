import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import { heroSets } from "@/assets/heroImages";
import { MapPin, Mail, Phone, Clock, CheckCircle, ArrowRight, Loader2, AlertCircle, PhoneCall, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { buyerInterestCopy } from "@/i18n/buyerInterestCopy";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { pageExtras } from "@/i18n/pageExtras";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";

const inputClasses =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground rounded-none transition-colors focus:outline-none focus:ring-0 focus:border-accent placeholder:text-muted-foreground/55";

const optionalLabel: Record<string, string> = { de: "optional", en: "optional", tr: "isteğe bağlı", nl: "optioneel", it: "facoltativo", es: "opcional", fr: "facultatif" };

const labelClasses = "block text-xs font-sans uppercase tracking-[0.15em] text-foreground/70 mb-1 font-medium";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationWarning, setConfirmationWarning] = useState(false);
  const [propertyLocation, setPropertyLocation] = useState("");
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].contact.title, pageSeo[language].contact.description);
  const contactCopy = pageExtras[language].contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setConfirmationWarning(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const contactSchema = z.object({
      name: z.string().trim().min(2).max(200),
      email: z.string().trim().email().max(254),
      phone: z.string().trim().max(50),
      subject: z.string().trim().min(1).max(120),
      propertyLocation: z.string().trim().max(80),
      propertyType: z.string().trim().max(120),
      message: z.string().trim().min(1).max(5000),
    });
    const phone = String(formData.get("phone") ?? "").trim();
    const phoneValidation = z.string().trim().min(1).max(50).safeParse(phone);
    if (!phoneValidation.success) {
      setError(phone ? t.common.formError : buyerInterestCopy[language].errRequired);
      const phoneInput = form.elements.namedItem("phone");
      if (phoneInput instanceof HTMLInputElement) phoneInput.focus();
      return;
    }

    const subject = String(formData.get("subject") ?? "").trim();
    if (!z.string().trim().min(1).max(120).safeParse(subject).success) {
      setError(t.contact.subjectRequired);
      const subjectInput = form.elements.namedItem("subject");
      if (subjectInput instanceof HTMLSelectElement) subjectInput.focus();
      return;
    }

    if (!formData.get("privacy_consent")) {
      setError(t.contact.consentRequired);
      const consentInput = form.elements.namedItem("privacy_consent");
      if (consentInput instanceof HTMLInputElement) consentInput.focus();
      return;
    }

    const parsedContact = contactSchema.safeParse({
      name: formData.get("name"), email: formData.get("email"), phone,
      subject, propertyLocation: formData.get("property_location") ?? "",
      propertyType: formData.get("property_type") ?? "", message: formData.get("message"),
    });
    if (!parsedContact.success) {
      setError(t.common.formError);
      return;
    }

    setSubmitting(true);

    const rawMessage = formData.get("message") as string;
    const payload = {
      first_name: formData.get("name") as string,
      last_name: "",
      email: formData.get("email") as string,
      phone: phoneValidation.data || null,
      property_type: (formData.get("property_type") as string) || null,
      message: `${t.contact.propertyLocation ?? "Property location"}: ${String(formData.get("property_location") ?? "")}\n${t.contact.subject}: ${subject}\n\n${rawMessage}`,
    };

    // 1) In Datenbank speichern (Backup / Audit)
    const { error: dbError } = await supabase.from("contact_submissions").insert(payload);

    if (dbError) {
      console.error("Contact form DB error:", dbError);
      trackEvent("form_submit_error", { form: "contact", stage: "db" });
      setSubmitting(false);
      setError(t.common.formError);
      return;
    }

    // 2) E-Mail-Versand (Benachrichtigung + Bestätigung)
    const { data: emailData, error: emailError } = await supabase.functions.invoke(
      "send-contact-email",
      {
        body: {
          name: payload.first_name,
          email: payload.email,
          phone: payload.phone ?? undefined,
          property_type: payload.property_type,
          subject,
          message: payload.message,
          language,
          form_type: "general_contact",
          privacy_consent: true,
        },
      }
    );

    setSubmitting(false);

    if (emailError || (emailData && emailData.success === false)) {
      console.error("Contact form email error:", emailError || emailData);
      trackEvent("form_submit_error", { form: "contact", stage: "email" });
      setError(t.common.formError);
      return;
    }

    trackEvent("form_submit", { form: "contact" });
    trackEvent("generate_lead", { form: "contact" });
    setConfirmationWarning(emailData?.confirmationSent === false);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="grid overflow-hidden bg-primary lg:h-[calc(100svh-129px)] lg:min-h-[580px] lg:grid-cols-[0.86fr_1.14fr]">
        <div className="flex min-h-[350px] items-center justify-center bg-primary px-6 py-14 text-center sm:min-h-[390px] sm:px-10 sm:py-16 lg:min-h-0 lg:px-12 lg:py-20">
          <Reveal className="w-full">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.16em] text-accent">{t.contact.title}</p>
            <h1 className="mx-auto max-w-[29rem] text-balance font-heading text-[2rem] font-semibold leading-[1.1] text-accent md:text-[3rem] lg:max-w-[19rem]">
              {t.contact.subtitle}
            </h1>
            <p className="mx-auto mt-5 max-w-[27rem] text-[0.95rem] leading-[1.8] text-accent/85 md:text-base">{t.contact.introText}</p>
          </Reveal>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
          <OptimizedImg src={heroSets.contact.src} srcSet={heroSets.contact.srcSet} sizes={heroSets.contact.sizes} alt="Freundliche Ansprechpartnerin der Aurelia Grundbesitz GmbH mit Headset am Schreibtisch in einem hochwertigen Buero" className="absolute inset-0 h-full w-full object-cover object-center lg:object-right" tone="soft" priority />
          <div className="absolute inset-0 bg-primary/10" />
          <AiImageDisclosure type="illustrative" />
        </div>
      </section>

      <section id="kontaktformular" className="bg-secondary/55 pb-9 pt-6 md:pb-12 md:pt-6 lg:pb-16 lg:pt-8">
        <div className="container-premium">
          <Reveal>
            <div className="mx-auto grid max-w-[1080px] overflow-hidden rounded-lg border border-border bg-card shadow-[0_26px_70px_-34px_hsl(var(--primary)/0.35)] lg:grid-cols-[0.78fr_1.22fr]">
              <aside className="flex flex-col justify-between bg-primary px-7 py-9 text-primary-foreground md:px-10 md:py-12 lg:px-12 lg:py-14">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">{t.contact.moduleHeading}</p>
                  <h2 className="max-w-sm text-balance font-heading text-[1.8rem] font-semibold leading-[1.18] md:text-[2.2rem]">{t.contact.hereForYou}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-[1.8] text-primary-foreground/72">{t.contact.moduleIntro2}</p>

                  <div className="mt-9 divide-y divide-primary-foreground/12 border-y border-primary-foreground/12">
                    <ContactDetail icon={Mail} label={contactCopy.email}>
                      <a href="mailto:office@aureliaestates.de" className="break-all text-sm text-primary-foreground transition-colors hover:text-accent">office@aureliaestates.de</a>
                    </ContactDetail>
                    <ContactDetail icon={Phone} label={contactCopy.phone}>
                      <a href="tel:+4921169583033" className="text-sm text-primary-foreground transition-colors hover:text-accent">+49 211 69583033</a>
                    </ContactDetail>
                    <ContactDetail icon={Clock} label={t.common.availability}>
                      <p className="text-sm leading-[1.65] text-primary-foreground/72">{t.common.availabilityText}</p>
                    </ContactDetail>
                    <ContactDetail icon={MapPin} label={t.common.address}>
                      <address className="not-italic text-sm leading-[1.65] text-primary-foreground/72">Aurelia Grundbesitz GmbH<br />Grevenbroicher Weg 2<br />40547 Düsseldorf · {t.common.country}</address>
                    </ContactDetail>
                  </div>
                </div>

                <div className="mt-10 border-t border-primary-foreground/15 pt-7">
                  <p className="mb-4 text-xs uppercase tracking-[0.16em] text-accent">{contactCopy.personalPrompt}</p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                    <a href={`mailto:office@aureliaestates.de?subject=${encodeURIComponent(t.contact.callbackSubject)}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-accent"><PhoneCall size={15} />{t.contact.moduleCta2}</a>
                    <a href={`mailto:office@aureliaestates.de?subject=${encodeURIComponent(t.contact.appointmentSubject)}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-accent"><CalendarDays size={15} />{t.contact.moduleCta3}</a>
                  </div>
                </div>
              </aside>

              <div className="bg-card px-6 py-9 md:px-12 md:py-12 lg:px-14 lg:py-14">
                <div className="mb-9">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">{t.contact.formLabel}</p>
                  <h2 className="text-balance font-heading text-[1.8rem] font-semibold leading-[1.2] text-foreground md:text-[2.25rem]">{t.contact.formTitle}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-[1.75] text-muted-foreground">{t.contact.moduleIntro}</p>
                </div>

              {submitted ? (
                <div className="border-y border-border py-12 text-center">
                  <CheckCircle className="mx-auto mb-4 text-accent" size={28} />
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{t.contact.successTitle}</h3>
                  <p className="mx-auto max-w-sm text-[0.93rem] leading-[1.7] text-muted-foreground">
                    {confirmationWarning ? contactCopy.confirmationWarning : t.contact.successText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    <div>
                    <label htmlFor="name" className={labelClasses}>
                      {t.contact.name} <span className="text-accent">*</span>
                    </label>
                    <input id="name" name="name" type="text" required className={inputClasses} />
                    </div>
                    <div>
                    <label htmlFor="email" className={labelClasses}>
                      {t.contact.email} <span className="text-accent">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    <div>
                    <label htmlFor="phone" className={labelClasses}>
                      {t.contact.phone} <span className="text-accent">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required maxLength={50} className={inputClasses} onInvalid={(e) => e.currentTarget.setCustomValidity(buyerInterestCopy[language].errRequired)} onInput={(e) => e.currentTarget.setCustomValidity("")} />
                    </div>
                    <div>
                    <label htmlFor="subject" className={labelClasses}>
                      {t.contact.subject} <span className="text-accent">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      aria-describedby="subject-error"
                      className={inputClasses}
                      onInvalid={(event) => event.currentTarget.setCustomValidity(t.contact.subjectRequired)}
                      onChange={(event) => event.currentTarget.setCustomValidity("")}
                    >
                      <option value="" disabled>{t.common.pleaseSelect}</option>
                      {t.contact.subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {error === t.contact.subjectRequired && (
                      <p id="subject-error" role="alert" className="mt-1.5 text-sm text-destructive">
                        {t.contact.subjectRequired}
                      </p>
                    )}
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    <div>
                    <label htmlFor="property_location" className={labelClasses}>{t.contact.propertyLocation ?? ""}</label>
                    <select id="property_location" name="property_location" className={inputClasses} value={propertyLocation} onChange={(event) => setPropertyLocation(event.target.value)}>
                      <option value="">{t.common.pleaseSelect}</option>
                      {(t.contact.propertyLocationOptions ?? []).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {propertyLocation === t.contact.propertyLocationOptions?.[1] && (
                      <div className="mt-3 border-l-2 border-accent bg-secondary/50 px-4 py-3 text-sm leading-relaxed text-foreground/80">
                        {t.contact.turkeyFormHint} <Link to="/immobilie-anbieten?land=tuerkei" className="font-semibold text-primary hover:text-accent">{t.contact.turkeyFormCta}</Link>
                      </div>
                    )}
                    </div>
                    <div>
                    <label htmlFor="property_type" className={labelClasses}>{t.contact.propertyType}</label>
                    <select id="property_type" name="property_type" className={inputClasses}>
                      <option value="">{t.common.pleaseSelect}</option>
                      {t.contact.propertyTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      {t.contact.message} <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4} required
                      className={`${inputClasses} min-h-28 resize-none`}
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  <div className="pt-1">
                    <label htmlFor="privacy_consent" className="flex items-start gap-3 cursor-pointer">
                      <input
                        id="privacy_consent"
                        name="privacy_consent"
                        type="checkbox"
                        required
                        aria-describedby="consent-error"
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[hsl(var(--accent))]"
                        onInvalid={(event) => event.currentTarget.setCustomValidity(t.contact.consentRequired)}
                        onChange={(event) => event.currentTarget.setCustomValidity("")}
                      />
                      <span className="text-[0.85rem] leading-[1.6] text-foreground/85">
                        {t.contact.consentCheckbox} <span className="text-accent">*</span>{" "}
                        <Link to="/datenschutz" className="text-accent hover:underline">
                          {t.contact.consentNoticeLink}
                        </Link>
                      </span>
                    </label>
                    {error === t.contact.consentRequired && (
                      <p id="consent-error" role="alert" className="mt-1.5 text-sm text-destructive">
                        {t.contact.consentRequired}
                      </p>
                    )}
                  </div>


                  {error && (
                    <div role="alert" className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2.5">
                      <AlertCircle className="text-destructive mt-0.5 shrink-0" size={14} />
                      <p className="text-destructive text-sm leading-[1.5]">{error}</p>
                    </div>
                  )}

                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="h-12 w-full rounded-sm bg-accent px-8 text-xs uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent/85 sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={11} className="animate-spin" />
                          {t.common.submitting}
                        </>
                      ) : (
                        <>
                          {t.contact.send}
                          <ArrowRight size={11} />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-muted-foreground/70 text-xs mt-1">
                    {t.contact.requiredHint}
                  </p>
                </form>
              )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </Layout>
  );
};

const ContactDetail = ({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-5">
    <Icon className="mt-0.5 text-accent" size={16} aria-hidden="true" />
    <div>
      <h3 className="mb-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary-foreground/55">{label}</h3>
      {children}
    </div>
  </div>
);

export default Contact;
