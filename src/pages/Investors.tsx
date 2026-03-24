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
    <div className="bg-background max-w-xl w-full p-8 md:p-12 border border-border/60">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-accent shrink-0" size={22} />
        <h2 className="text-[1rem] font-heading font-semibold text-foreground">{t.investor.disclaimerTitle}</h2>
      </div>
      <p className="text-muted-foreground text-[0.85rem] leading-[1.85] mb-8">{t.investor.disclaimerText}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onAccept} className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
          {t.investor.acceptButton}
        </button>
        <button onClick={onDecline} className="inline-flex items-center gap-2.5 border border-border text-muted-foreground px-7 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-foreground/30 transition-colors duration-300">
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
      <div className="py-12 text-center">
        <h3 className="text-[1.1rem] font-heading font-semibold text-foreground mb-2">{t.investor.successTitle}</h3>
        <p className="text-muted-foreground text-[0.88rem] leading-[1.85]">{t.investor.successText}</p>
      </div>
    );
  }

  const inputClasses = "w-full border border-border/60 bg-background px-4 py-3 text-[0.85rem] text-foreground transition-colors focus:outline-none focus:border-accent/60 placeholder:text-muted-foreground/40";
  const labelClasses = "block text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground mb-2";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
      <div>
        <label htmlFor="inv-anrede" className={labelClasses}>{t.contact.salutation}</label>
        <select id="inv-anrede" name="anrede" className={inputClasses}>
          <option value="">{t.common.pleaseSelect}</option>
          {t.common.salutationOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
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
        <textarea id="inv-nachricht" name="nachricht" rows={5} required placeholder={t.investor.messagePlaceholder} className={`${inputClasses} resize-none`} />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 border-border accent-accent" />
        <span className="text-[0.8rem] text-muted-foreground leading-relaxed">
          {t.common.privacyCheckbox} <span className="text-accent">*</span>
        </span>
      </label>
      <p className="text-[10px] text-muted-foreground"><span className="text-accent">*</span> {t.common.requiredFields}</p>
      <button type="submit" className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300">
        {t.investor.sendInquiry}
      </button>
      <p className="text-muted-foreground/70 text-[10px] mt-2">{t.investor.formNote}</p>
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
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.investor.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-20">
          <Reveal>
            <p className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-4">{t.nav.investors}</p>
            <h1 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.investor.heroTitle}
            </h1>
            <p className="text-white/80 text-[0.95rem] leading-[1.85] mt-5 max-w-sm">{t.investor.heroSubtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.investor.whyLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-xl text-balance">
              {t.investor.whyTitle}
            </h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={0.2}><p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl">{t.investor.whyP1}</p></Reveal>
            <Reveal delay={0.25}><p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl">{t.investor.whyP2}</p></Reveal>
          </div>
          <Reveal delay={0.3}>
            <p className="text-[0.75rem] text-muted-foreground mt-6 italic">{t.investor.whyDisclaimer}</p>
          </Reveal>
        </div>
      </section>

      {/* Cooperation */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.investor.cooperationLabel}</p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.investor.cooperationModels.map((model, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={model.title} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-12 py-10 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Icon className="text-accent" size={16} />
                      <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{model.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-[0.88rem] leading-[1.85]">{model.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3}>
            <p className="text-[0.75rem] text-muted-foreground mt-8 italic">{t.investor.cooperationDisclaimer}</p>
          </Reveal>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-accent" size={18} />
              <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase">{t.investor.transparencyLabel}</p>
            </div>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-xl text-balance">
              {t.investor.transparencyTitle}
            </h2>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl">{t.investor.transparencyText}</p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.investor.formLabel}</p>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 text-balance">
              {t.investor.formTitle}
            </h2>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.85] mb-12">{t.investor.formSubtitle}</p>
          </Reveal>
          <InvestorForm t={t} />
          <Reveal delay={0.1}>
            <p className="text-[0.75rem] text-muted-foreground mt-10 italic leading-relaxed">
              <strong className="text-foreground">{t.investor.transparencyTitle}:</strong> {t.investor.liabilityNotice}
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
