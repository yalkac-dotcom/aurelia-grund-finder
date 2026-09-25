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
import { z } from "zod";
import { usePageSeo } from "@/hooks/usePageSeo";

const heroTurkeyProperties = "/heroes/AdobeStock_502929748-1024w.webp";
const heroTurkeyPropertiesSrcSet = [640, 1024, 1440, 2048]
  .map((width) => `/heroes/AdobeStock_502929748-${width}w.webp ${width}w`)
  .join(", ");

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
      <section className="relative flex min-h-[535px] items-center overflow-hidden bg-primary md:min-h-[87vh]">
        <img
          src={heroTurkeyProperties}
          srcSet={heroTurkeyPropertiesSrcSet}
          sizes="(max-width: 640px) 100vw, (max-width: 1440px) 75vw, 1920px"
          alt={page.hero.imageAlt}
          width={2048}
          height={751}
          loading="eager"
          {...({ fetchpriority: "high" } as React.HTMLAttributes<HTMLImageElement>)}
          className="img-tone absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--primary) / 0.78) 0%, hsl(var(--primary) / 0.62) 42%, hsl(var(--primary) / 0.14) 100%)",
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
              {language === "de" ? (
                <a href="#ablauf" className="btn-secondary">{page.hero.secondaryCta}</a>
              ) : (
                <Link to="/kontakt" className="btn-secondary">
                  {page.hero.secondaryCta}
                </Link>
              )}
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
                  <ProofCard index={index} title={service.title} text={service.text} compact frame={language === "de"} />
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
            {language === "de" && (
              <Reveal delay={0.1}>
                <div className="mt-10 flex justify-center">
                  <Link to="/immobilie-anbieten?land=tuerkei" className="btn-primary">
                    Unverbindliche Erstanfrage für Türkei-Immobilie stellen
                    <ArrowRight size={13} className="ml-2 text-accent" />
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </section>}

        <section id="ablauf" className="section-premium bg-background scroll-mt-24">
          <div className="container-premium">
            <SectionHeader title={page.processTitle} />
            <div className={`grid gap-6 md:gap-8 sm:grid-cols-2 ${page.process.length === 4 ? "" : "lg:grid-cols-3"}`}>
              {page.process.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  index={index}
                  total={page.process.length}
                  title={step.title}
                  desc={step.text}
                  arrowDirection={page.process.length === 4 && index === 1 ? "down" : "right"}
                />
              ))}
            </div>
          </div>
        </section>

        {page.faq && <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl">
              <SectionHeader title={page.faq.title} align="left" disableOffset />
              <div className="space-y-8">
                {page.faq.items.map((item) => (
                  <Reveal key={item.q}>
                    <div className="border-l-2 border-accent pl-5">
                      <h3 className="font-heading text-[1.1rem] font-semibold leading-snug text-primary">{item.q}</h3>
                      <p className="mt-2 text-[0.94rem] leading-[1.8] text-muted-foreground">{item.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>}

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

        {language === "de" && <section className="section-premium bg-background">
          <div className="container-premium">
            <Reveal>
              <div className="border-l-2 border-accent bg-card px-6 py-8 md:px-10">
                <h2 className="font-heading text-[1.55rem] font-semibold text-primary">Auch Interesse an Immobilien in Deutschland?</h2>
                <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">Neben der Betreuung von Eigentümern mit Immobilien in der Türkei bietet Aurelia ausgewählte Immobilien aus dem eigenen Bestand oder aus Kooperationen in Deutschland an. Auch Interessenten aus der Türkei können verfügbare Objekte bei uns anfragen.</p>
                <Link to="/fuer-kaeufer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-[0.78rem] font-semibold uppercase text-primary hover:text-accent">Immobilien in Deutschland anfragen<ArrowRight size={13} className="text-accent" /></Link>
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
                      <p className={language === "de" && point === "Deutsch und Türkisch" ? "text-[0.94rem] leading-[1.7] font-semibold text-white" : "text-[0.94rem] leading-[1.7] text-white/85"}>{point}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        <section className="section-premium bg-background">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl text-center">
              <ShieldCheck className="mx-auto mb-5 text-accent" size={32} strokeWidth={1.5} />
              <h2 className="font-heading text-[1.75rem] font-bold leading-[1.2] text-primary md:text-[2.25rem]">{page.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[0.94rem] leading-[1.85] text-muted-foreground">{page.cta.text}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link to={language === "de" ? "/immobilie-anbieten?land=tuerkei" : "/immobilie-anbieten"} className="btn-primary">{page.cta.primary}<ArrowRight size={13} className="ml-2 text-accent" /></Link>
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