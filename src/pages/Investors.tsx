import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-investors.jpg";
import { Handshake, Building, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Translations } from "@/i18n/types";

const InvestorDisclaimer = ({ t, onAccept, onDecline }: { t: Translations; onAccept: () => void; onDecline: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F1113]/80 backdrop-blur-sm p-4">
    <div className="bg-background max-w-xl w-full p-6 md:p-8 border border-border/60">
      <div className="flex items-center gap-2.5 mb-3">
        <AlertTriangle className="text-accent shrink-0" size={18} />
        <h2 className="text-[0.9rem] font-heading font-semibold text-foreground">{t.investor.disclaimerTitle}</h2>
      </div>
      <p className="text-muted-foreground text-sm leading-[1.7] mb-5">{t.investor.disclaimerText}</p>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <button onClick={onAccept} className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
          {t.investor.acceptButton}
        </button>
        <button onClick={onDecline} className="inline-flex items-center gap-2 border border-border text-muted-foreground px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:border-foreground/30 transition-colors duration-300">
          {t.investor.declineButton}
        </button>
      </div>
    </div>
  </div>
);

const InvestorForm = ({ t }: { t: Translations }) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1.5">{t.investor.successTitle}</h3>
        <p className="text-muted-foreground text-base leading-[1.7]">{t.investor.successText}</p>
      </div>
    );
  }

  const inputClasses = "w-full border border-border/60 bg-background px-3.5 py-2 text-base text-foreground transition-colors focus:outline-none focus:border-accent/60 placeholder:text-muted-foreground/40";
  const labelClasses = "block text-[9px] font-sans uppercase tracking-[0.15em] text-muted-foreground mb-1";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div>
        <label htmlFor="inv-anrede" className={labelClasses}>{t.contact.salutation}</label>
        <select id="inv-anrede" name="anrede" className={inputClasses}>
          <option value="">{t.common.pleaseSelect}</option>
          {t.common.salutationOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="inv-vorname" className={labelClasses}>{t.contact.firstName} <span className="text-accent">*</span></label>
          <input id="inv-vorname" name="vorname" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="inv-nachname" className={labelClasses}>{t.contact.lastName} <span className="text-accent">*</span></label>
          <input id="inv-nachname" name="nachname" type="text" required className={inputClasses} />
        </div>
      </div>
      <div>
        <label htmlFor="inv-firma" className={labelClasses}>{t.contact.company}</label>
        <input id="inv-firma" name="firma" type="text" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="inv-email" className={labelClasses}>{t.contact.email} <span className="text-accent">*</span></label>
        <input id="inv-email" name="email" type="email" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="inv-telefon" className={labelClasses}>{t.contact.phone} <span className="text-accent">*</span></label>
        <input id="inv-telefon" name="telefon" type="tel" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="inv-nachricht" className={labelClasses}>{t.investor.messageLabel} <span className="text-accent">*</span></label>
        <textarea id="inv-nachricht" name="nachricht" rows={3} required placeholder={t.investor.messagePlaceholder} className={`${inputClasses} resize-none`} />
      </div>
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" name="datenschutz" required className="mt-1 h-3.5 w-3.5 border-border accent-accent" />
        <span className="text-[0.78rem] text-muted-foreground leading-relaxed">
          {t.common.privacyCheckbox} <span className="text-accent">*</span>
        </span>
      </label>
      <p className="text-[9px] text-muted-foreground"><span className="text-accent">*</span> {t.common.requiredFields}</p>
      <button type="submit" className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
        {t.investor.sendInquiry}
      </button>
      <p className="text-muted-foreground/70 text-[9px] mt-1">{t.investor.formNote}</p>
    </form>
  );
};

const Investors = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const { t } = useLanguage();

  const handleDecline = () => {
    window.location.href = "/";
  };

  const icons = [Handshake, Building, TrendingUp];

  return (
    <Layout>
      {!disclaimerAccepted && (
        <InvestorDisclaimer t={t} onAccept={() => setDisclaimerAccepted(true)} onDecline={handleDecline} />
      )}

      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.investor.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/65 via-[#0F1113]/30 to-[#0F1113]/10" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.nav.investors}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.investor.heroTitle}
            </h1>
            <p className="text-white/95 text-[0.85rem] leading-[1.7] mt-3 max-w-sm">{t.investor.heroSubtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.investor.whyLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.investor.whyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3 mt-4">
            <Reveal delay={0.2}><p className="text-muted-foreground text-[0.85rem] leading-[1.8] max-w-2xl">{t.investor.whyP1}</p></Reveal>
            <Reveal delay={0.25}><p className="text-muted-foreground text-[0.85rem] leading-[1.8] max-w-2xl">{t.investor.whyP2}</p></Reveal>
          </div>
          <Reveal delay={0.3}>
            <p className="text-[0.72rem] text-muted-foreground mt-4 italic">{t.investor.whyDisclaimer}</p>
          </Reveal>
        </div>
      </section>

      {/* Cooperation */}
      <section className="py-10 md:py-14 border-t border-border/60">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.investor.cooperationLabel}</p>
            </div>
          </Reveal>
          <div className="divide-y divide-border/60 mt-4">
            {t.investor.cooperationModels.map((model, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={model.title} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-1.5 md:gap-8 py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2.5">
                      <Icon className="text-accent" size={14} />
                      <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{model.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-[1.7]">{model.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3}>
            <p className="text-[0.72rem] text-muted-foreground mt-5 italic">{t.investor.cooperationDisclaimer}</p>
          </Reveal>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="text-accent" size={15} />
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase">{t.investor.transparencyLabel}</p>
            </div>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 max-w-xl text-balance">
              {t.investor.transparencyTitle}
            </h2>
            <p className="text-muted-foreground text-[0.85rem] leading-[1.8] max-w-2xl">{t.investor.transparencyText}</p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 md:py-14">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.investor.formLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                {t.investor.formTitle}
              </h2>
            </div>
          </Reveal>
          <p className="text-muted-foreground text-[0.85rem] leading-[1.7] mt-3 mb-5">{t.investor.formSubtitle}</p>
          <InvestorForm t={t} />
          <Reveal delay={0.1}>
            <p className="text-[0.72rem] text-muted-foreground mt-6 italic leading-relaxed">
              <strong className="text-foreground">{t.investor.transparencyTitle}:</strong> {t.investor.liabilityNotice}
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
