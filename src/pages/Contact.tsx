import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-contact.jpg";
import { MapPin, Mail, Phone, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const inputClasses =
  "w-full border border-border/60 bg-background px-5 py-3.5 text-[0.9rem] text-foreground transition-colors focus:outline-none focus:border-accent/60 placeholder:text-muted-foreground/40";

const labelClasses = "block text-[11px] font-sans uppercase tracking-[0.15em] text-muted-foreground mb-2.5";

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
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.contact.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-5">{t.contact.title}</p>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.contact.subtitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">
              {t.contact.introText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14">
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={16} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.common.address}</h3>
                </div>
                <address className="not-italic text-muted-foreground text-[0.9rem] leading-[1.85]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf<br />
                  Deutschland
                </address>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14">
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={16} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.contact.email}</h3>
                </div>
                <a href="mailto:info@aurelia-grundbesitz.de" className="text-muted-foreground text-[0.9rem] hover:text-accent transition-colors">
                  info@aurelia-grundbesitz.de
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14">
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={16} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.contact.phone}</h3>
                </div>
                <p className="text-muted-foreground text-[0.9rem]">+49 (0) 211 – XXX XXXX</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14">
                <div className="flex items-center gap-3">
                  <Clock className="text-accent" size={16} />
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{t.common.availability}</h3>
                </div>
                <div className="text-muted-foreground text-[0.9rem] space-y-1">
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
      <section className="py-40 md:py-56 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.contact.send}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 text-balance">
              {t.contact.send}
            </h2>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="py-16 text-center">
                <CheckCircle className="text-accent mx-auto mb-6" size={32} />
                <h3 className="text-[1.25rem] font-heading font-semibold text-foreground mb-3">{t.contact.successTitle}</h3>
                <p className="text-muted-foreground text-[0.95rem] leading-[1.85] max-w-md mx-auto">{t.contact.successText}</p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="anrede" className={labelClasses}>{t.contact.salutation}</label>
                <select id="anrede" name="anrede" className={inputClasses}>
                  <option value="">{t.common.pleaseSelect}</option>
                  {t.common.salutationOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="grid sm:grid-cols-2 gap-6">
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
                  id="nachricht" name="nachricht" rows={5} required
                  className={`${inputClasses} resize-none`}
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 border-border accent-accent" />
                  <span className="text-[0.85rem] text-muted-foreground leading-relaxed">
                    {t.common.privacyCheckbox} <span className="text-accent">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="rueckruf" className="mt-1 h-4 w-4 border-border accent-accent" />
                  <span className="text-[0.85rem] text-muted-foreground leading-relaxed">
                    {t.common.callbackRequest}
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-[11px] text-muted-foreground">
                  <span className="text-accent">*</span> {t.common.requiredFields}
                </p>
                <button type="submit" className="inline-flex items-center gap-3 bg-accent text-white px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
                  {t.contact.send}
                  <ArrowRight size={13} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.common.ourLocation}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 text-balance">
              {t.common.ourLocation}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-border/60">
              <iframe
                title="Standort Aurelia Grundbesitz GmbH"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
