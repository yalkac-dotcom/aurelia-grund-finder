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

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const inputClasses =
  "w-full border border-border bg-background px-3.5 py-2.5 text-base text-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-muted-foreground/60";

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
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218 46% 14%)]/70 via-[hsl(218 46% 14%)]/25 to-transparent" />
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
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="divide-y divide-border/40">
                <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5 first:pt-0">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="text-accent" size={13} />
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.common.address}</h3>
                  </div>
                  <address className="not-italic text-muted-foreground text-sm leading-[1.75]">
                    Aurelia Grundbesitz GmbH<br />
                    Grevenbroicher Weg 2<br />
                    40547 Düsseldorf<br />
                    {t.common.country}
                  </address>
                </div>
                <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5">
                  <div className="flex items-center gap-2.5">
                    <Mail className="text-accent" size={13} />
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.contact.email}</h3>
                  </div>
                  <a href="mailto:info@aureliaestates.de" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    info@aureliaestates.de
                  </a>
                </div>
                <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5 last:pb-0">
                  <div className="flex items-center gap-2.5">
                    <Clock className="text-accent" size={13} />
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.common.availability}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    {t.common.availabilityText}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section id="kontaktformular" className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-2xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-8">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.contact.formLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                  {t.contact.formTitle}
                </h2>
              </div>

              {submitted ? (
                <div className="py-6 text-center">
                  <CheckCircle className="text-accent mx-auto mb-3" size={24} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1.5">{t.contact.successTitle}</h3>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.7] max-w-sm mx-auto">{t.contact.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      {t.contact.phone}
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClasses} />
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

                  {error && <p className="text-destructive text-sm">{error}</p>}

                  <div className="flex items-center justify-between pt-1">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">*</span> {t.common.requiredFields}
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 rounded-sm disabled:opacity-60"
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
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <ContactFAQ />

      {/* Map */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.common.address}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                  {t.common.ourLocation}
                </h2>
              </div>
              <div className="overflow-hidden rounded-xl">
                <ConsentMap
                  title={`${t.common.ourLocation} – Aurelia Grundbesitz GmbH`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                />
              </div>
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
    <section className="py-6 md:py-10 bg-secondary/30">
      <div className="container max-w-3xl">
        <Reveal>
          <div className={`${panelBase} ${panelPadding}`}>
            <div className="section-shell-accent mb-8">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.contact.faqLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                {t.contact.faqTitle}
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-[1.7] mb-6">
              {t.contact.faqSubtitle}
            </p>
            <div className="space-y-3">
              {t.contact.faqItems.map((item, i) => (
                <div key={i} className="bg-secondary/40 rounded-[1.1rem] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left gap-4 group"
                  >
                    <span className="text-sm font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{item.q}</span>
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === i && (
                    <p className="text-muted-foreground text-sm leading-[1.8] px-7 pb-5 -mt-1">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
