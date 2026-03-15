import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-investors.jpg";
import { Handshake, Building, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Translations } from "@/i18n/types";

const InvestorDisclaimer = ({ t, onAccept, onDecline }: { t: Translations; onAccept: () => void; onDecline: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
    <div className="bg-card max-w-2xl w-full p-8 md:p-10 border border-border shadow-2xl rounded">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-accent shrink-0" size={28} />
        <h2 className="text-xl font-bold text-foreground">{t.investor.disclaimerTitle}</h2>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.investor.disclaimerText}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onAccept} className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:bg-primary/90 transition-colors">
          {t.investor.acceptButton}
        </button>
        <button onClick={onDecline} className="border border-border text-muted-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:bg-secondary transition-colors">
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
      <div className="bg-secondary border border-border p-10 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">{t.contact.successTitle}</h3>
        <p className="text-muted-foreground">{t.contact.successText}</p>
      </div>
    );
  }

  const inputClasses = "w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
      <div>
        <label htmlFor="inv-anrede" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.salutation}</label>
        <select id="inv-anrede" name="anrede" className={inputClasses}>
          <option value="">{t.common.pleaseSelect}</option>
          {t.common.salutationOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inv-vorname" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.firstName} <span className="text-accent">*</span></label>
          <input id="inv-vorname" name="vorname" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="inv-nachname" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.lastName} <span className="text-accent">*</span></label>
          <input id="inv-nachname" name="nachname" type="text" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="inv-firma" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.company}</label>
        <input id="inv-firma" name="firma" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="inv-email" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.email} <span className="text-accent">*</span></label>
        <input id="inv-email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="inv-telefon" className="block text-sm font-medium text-foreground mb-1.5">{t.contact.phone} <span className="text-accent">*</span></label>
        <input id="inv-telefon" name="telefon" type="tel" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="inv-nachricht" className="block text-sm font-medium text-foreground mb-1.5">{t.investor.messageLabel} <span className="text-accent">*</span></label>
        <textarea id="inv-nachricht" name="nachricht" rows={6} required placeholder={t.investor.messagePlaceholder} className={`${inputClasses} resize-none`} />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 border-border text-primary rounded focus:ring-accent" />
        <span className="text-sm text-muted-foreground leading-relaxed">
          {t.common.privacyCheckbox} <span className="text-accent">*</span>
        </span>
      </label>

      <p className="text-xs text-muted-foreground"><span className="text-accent">*</span> {t.common.requiredFields}</p>

      <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide rounded hover:bg-primary/90 transition-colors">
        {t.investor.sendInquiry}
      </button>
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
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.investor.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.investor.heroTitle}</h1>
          <p className="text-primary-foreground/80 text-lg mt-4 max-w-2xl">{t.investor.heroSubtitle}</p>
        </div>
      </section>

      {/* Why */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title={t.investor.whyTitle} />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.investor.whyP1}</p>
            <p>{t.investor.whyP2}</p>
          </div>
          <p className="text-xs text-muted-foreground mt-6 italic">{t.investor.whyDisclaimer}</p>
        </div>
      </section>

      {/* Cooperation models */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading title={t.investor.cooperationTitle} align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {t.investor.cooperationModels.map((model, i) => {
              const Icon = icons[i];
              return (
                <div key={model.title} className="bg-card p-8 border border-border">
                  <Icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{model.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 italic max-w-2xl mx-auto">
            {t.investor.cooperationDisclaimer}
          </p>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="bg-secondary border border-border p-8 md:p-10 rounded">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-accent shrink-0" size={24} />
              <h2 className="text-xl font-bold text-foreground">{t.investor.transparencyTitle}</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.investor.transparencyText}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-3xl">
          <SectionHeading title={t.investor.formTitle} align="center" subtitle={t.investor.formSubtitle} />
          <InvestorForm t={t} />
          <div className="mt-8 p-6 bg-card border border-border rounded">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{t.investor.transparencyTitle}:</strong> {t.investor.liabilityNotice}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
