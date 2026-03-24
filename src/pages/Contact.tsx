import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-contact.jpg";
import { MapPin, Mail, Phone, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const inputClasses =
  "w-full border border-border/60 bg-background px-4 py-2.5 text-[0.85rem] text-foreground transition-colors focus:outline-none focus:border-accent/60 placeholder:text-muted-foreground/40";

const labelClasses = "block text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground mb-1.5";

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
      <section className="relative h-[42vh] min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.contact.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-12 md:pb-16">
          <Reveal>
            <p className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-3">{t.contact.title}</p>
            <h1 className="text-[1.85rem] md:text-[2.5rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.contact.subtitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">
              {t.contact.introText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-border/60">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-10 py-7">
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={14} />
                  <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{t.common.address}</h3>
                </div>
                <address className="not-italic text-muted-foreground text-[0.83rem] leading-[1.8]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf<br />
                  {t.common.country}
                </address>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-10 py-7">
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={14} />
                  <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{t.contact.email}</h3>
                </div>
                <a href="mailto:info@aurelia-grundbesitz.de" className="text-muted-foreground text-[0.83rem] hover:text-accent transition-colors">
                  info@aurelia-grundbesitz.de
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-10 py-7">
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={14} />
                  <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{t.contact.phone}</h3>
                </div>
                <p className="text-muted-foreground text-[0.83rem]">{t.contact.phonePending}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-10 py-7">
                <div className="flex items-center gap-3">
                  <Clock className="text-accent" size={14} />
                  <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{t.common.availability}</h3>
                </div>
                <div className="text-muted-foreground text-[0.83rem] space-y-0.5">
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
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-2xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.contact.formLabel}</p>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 text-balance">
              {t.contact.formTitle}
            </h2>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="py-8 text-center">
                <CheckCircle className="text-accent mx-auto mb-4" size={26} />
                <h3 className="text-[1rem] font-heading font-semibold text-foreground mb-2">{t.contact.successTitle}</h3>
                <p className="text-muted-foreground text-[0.85rem] leading-[1.75] max-w-sm mx-auto">{t.contact.successText}</p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="anrede" className={labelClasses}>{t.contact.salutation}</label>
                <select id="anrede" name="anrede" className={inputClasses}>
                  <option value="">{t.common.pleaseSelect}</option>
                  {t.common.salutationOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 border-border accent-accent" />
                  <span className="text-[0.8rem] text-muted-foreground leading-relaxed">
                    {t.common.privacyCheckbox} <span className="text-accent">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="rueckruf" className="mt-1 h-4 w-4 border-border accent-accent" />
                  <span className="text-[0.8rem] text-muted-foreground leading-relaxed">
                    {t.common.callbackRequest}
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] text-muted-foreground">
                  <span className="text-accent">*</span> {t.common.requiredFields}
                </p>
                <button type="submit" className="inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
                  {t.contact.send}
                  <ArrowRight size={12} />
                </button>
              </div>
              <p className="text-muted-foreground/70 text-[10px] text-right mt-1.5">{t.contact.privacyNote}</p>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.common.address}</p>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 text-balance">
              {t.common.ourLocation}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-border/60">
              <iframe
                title={`${t.common.ourLocation} – Aurelia Grundbesitz GmbH`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
