import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { MapPin, Mail, Clock, CheckCircle, ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ConsentMap from "@/components/ConsentMap";
import PremiumContactModule from "@/components/contact/PremiumContactModule";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { supabase } from "@/integrations/supabase/client";

const inputClasses =
  "w-full border border-border bg-background px-3.5 py-2.5 text-base text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-muted-foreground/60";

const labelClasses = "block text-xs font-sans uppercase tracking-[0.15em] text-foreground/70 mb-1.5 font-medium";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      first_name: formData.get("name") as string,
      last_name: "",
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      property_type: (formData.get("property_type") as string) || null,
      message: formData.get("message") as string,
    });

    setSubmitting(false);

    if (dbError) {
      console.error("Contact form error:", dbError);
      setError(t.common.formError);
      return;
    }

    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.contact.src} srcSet={heroSets.contact.srcSet} sizes={heroSets.contact.sizes} alt={t.contact.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.contact.title}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.contact.subtitle}
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Premium Contact Module */}
      <PremiumContactModule />


      {/* Contact Info */}
      <section className="border-t border-border/60">
        <div className="container max-w-4xl py-10 md:py-14">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5 first:pt-0">
                <div className="flex items-center gap-2.5">
                  <MapPin className="text-accent" size={13} />
                  <h3 className="text-base font-heading font-semibold text-foreground">{t.common.address}</h3>
                </div>
                <address className="not-italic text-muted-foreground text-sm leading-[1.75]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf<br />
                  {t.common.country}
                </address>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5">
                <div className="flex items-center gap-2.5">
                  <Mail className="text-accent" size={13} />
                  <h3 className="text-base font-heading font-semibold text-foreground">{t.contact.email}</h3>
                </div>
                <a href="mailto:info@aurelia-grundbesitz.de" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  info@aurelia-grundbesitz.de
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5 last:pb-0">
                <div className="flex items-center gap-2.5">
                  <Clock className="text-accent" size={13} />
                  <h3 className="text-base font-heading font-semibold text-foreground">{t.common.availability}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-[1.75]">
                  {t.common.availabilityText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form – 5 fields only */}
      <section id="kontaktformular" className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.contact.formLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                {t.contact.formTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-5">
            {submitted ? (
              <Reveal>
                <div className="py-6 text-center">
                  <CheckCircle className="text-accent mx-auto mb-3" size={24} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1.5">{t.contact.successTitle}</h3>
                  <p className="text-muted-foreground text-base leading-[1.7] max-w-sm mx-auto">{t.contact.successText}</p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    {t.contact.name} <span className="text-accent">*</span>
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} />
                </div>

                {/* 2. Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    {t.contact.email} <span className="text-accent">*</span>
                  </label>
                  <input id="email" name="email" type="email" required className={inputClasses} />
                </div>

                {/* 3. Phone (optional) */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    {t.contact.phone}
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClasses} />
                </div>

                {/* 4. Property type dropdown */}
                <div>
                  <label htmlFor="property_type" className={labelClasses}>{t.contact.propertyType}</label>
                  <select id="property_type" name="property_type" className={inputClasses}>
                    <option value="">{t.common.pleaseSelect}</option>
                    {t.contact.propertyTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* 5. Short message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    {t.contact.message} <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4} required
                    className={`${inputClasses} resize-none`}
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {error && (
                  <p className="text-destructive text-sm">{error}</p>
                )}

                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">*</span> {t.common.requiredFields}
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 disabled:opacity-60"
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
                  </button>
                </div>
                <p className="text-muted-foreground/70 text-xs text-right mt-1">{t.contact.privacyNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ContactFAQ />

      {/* Map */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.common.address}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                {t.common.ourLocation}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-border/40 mt-5">
              <ConsentMap
                title={`${t.common.ourLocation} – Aurelia Grundbesitz GmbH`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const ContactFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-14 border-t border-border/60">
      <div className="container max-w-2xl">
        <Reveal>
          <div className="section-shell-accent">
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.contact.faqLabel}</p>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
              {t.contact.faqTitle}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-muted-foreground text-sm leading-[1.7] mt-3 mb-5">
            {t.contact.faqSubtitle}
          </p>
        </Reveal>
        <div className="divide-y divide-border/60">
          {t.contact.faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left gap-4 group"
                >
                  <span className="text-sm font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{item.q}</span>
                  <ChevronDown
                    size={14}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <p className="text-muted-foreground text-sm leading-[1.7] pb-4 -mt-1">
                    {item.a}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
