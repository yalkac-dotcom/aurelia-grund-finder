import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-contact.jpg";
import { MapPin, Mail, Phone, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const inputClasses =
  "w-full border border-border/60 bg-background px-3.5 py-2 text-base text-foreground transition-colors focus:outline-none focus:border-accent/60 placeholder:text-muted-foreground/40";

const labelClasses = "block text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground mb-1";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.contact.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.contact.title}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.contact.subtitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl">
              {t.contact.introText}
            </p>
          </Reveal>
        </div>
      </section>

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
                <div className="text-muted-foreground text-sm space-y-0.5">
                  <p>{t.common.monFri}: 09:00 – 18:00</p>
                  <p>{t.common.saturday}: {t.common.byAppointment}</p>
                  <p>{t.common.sunday}: {t.common.closed}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 md:py-14 bg-secondary/50">
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
                <div>
                  <label htmlFor="anrede" className={labelClasses}>{t.contact.salutation}</label>
                  <select id="anrede" name="anrede" className={inputClasses}>
                    <option value="">{t.common.pleaseSelect}</option>
                    {t.common.salutationOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="vorname" className={labelClasses}>
                      {t.contact.firstName} <span className="text-accent">*</span>
                    </label>
                    <input id="vorname" name="vorname" type="text" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="nachname" className={labelClasses}>
                      {t.contact.lastName} <span className="text-accent">*</span>
                    </label>
                    <input id="nachname" name="nachname" type="text" required className={inputClasses} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      {t.contact.email} <span className="text-accent">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="telefon" className={labelClasses}>{t.contact.phone}</label>
                    <input id="telefon" name="telefon" type="tel" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label htmlFor="betreff" className={labelClasses}>{t.contact.subject}</label>
                  <select id="betreff" name="betreff" className={inputClasses}>
                    <option value="">{t.common.pleaseSelect}</option>
                    {t.contact.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className={labelClasses}>
                    {t.contact.message} <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="nachricht" name="nachricht" rows={4} required
                    className={`${inputClasses} resize-none`}
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" name="datenschutz" required className="mt-1 h-3.5 w-3.5 border-border accent-accent" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {t.common.privacyCheckbox} <span className="text-accent">*</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" name="rueckruf" className="mt-1 h-3.5 w-3.5 border-border accent-accent" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {t.common.callbackRequest}
                    </span>
                  </label>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">*</span> {t.common.requiredFields}
                  </p>
                  <button type="submit" className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
                    {t.contact.send}
                    <ArrowRight size={11} />
                  </button>
                </div>
                <p className="text-muted-foreground/70 text-xs text-right mt-1">{t.contact.privacyNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>

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
              <iframe
                title={`${t.common.ourLocation} – Aurelia Grundbesitz GmbH`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
