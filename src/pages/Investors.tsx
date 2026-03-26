import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, CheckCircle, Shield, MapPin, Calendar, TrendingUp } from "lucide-react";

const DISCLAIMER_KEY = "aurelia-investor-disclaimer";

const InvestorDisclaimer = ({ onAccept }: { onAccept: () => void }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="border border-border/60 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-accent shrink-0" size={20} />
                <h1 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                  {t.investors.disclaimerTitle}
                </h1>
              </div>

              <div className="text-muted-foreground text-sm leading-[1.8] space-y-4 mb-8">
                {t.investors.disclaimerText.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onAccept}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/85 transition-colors duration-300"
                >
                  {t.investors.disclaimerAccept}
                  <ArrowRight size={12} />
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center gap-2 border border-border/60 text-muted-foreground px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:border-border hover:text-foreground transition-colors duration-300"
                >
                  {t.investors.disclaimerDecline}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const Investors = () => {
  const { t } = useLanguage();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(DISCLAIMER_KEY);
    if (stored === "true") setAccepted(true);
  }, []);

  useEffect(() => {
    document.title = t.investors.metaTitle;
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute("content", t.investors.metaDescription);
  }, [t]);

  const handleAccept = () => {
    sessionStorage.setItem(DISCLAIMER_KEY, "true");
    setAccepted(true);
  };

  if (!accepted) return <InvestorDisclaimer onAccept={handleAccept} />;

  const ex = t.investors.projectExample;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
              Aurelia Grundbesitz
            </p>
            <h1 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.15] mb-4 max-w-lg text-balance">
              {t.investors.heroTitle}
            </h1>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.8] max-w-xl">
              {t.investors.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Audience */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.investors.audienceLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.investors.audienceTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-sm leading-[1.7] mt-4 max-w-xl">
              {t.investors.audienceText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selection */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.investors.selectionLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.investors.selectionTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-sm leading-[1.7] mt-4 mb-5 max-w-xl">
              {t.investors.selectionText}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {t.investors.selectionPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                  <div>
                    <h3 className="text-base font-heading font-semibold text-foreground mb-0.5">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.investors.prioritiesLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.investors.prioritiesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-5">
            {t.investors.priorityPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-4">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.investors.projectsLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.investors.projectsTitle}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-muted-foreground/80 text-xs leading-[1.7] mb-6 max-w-xl border-l-2 border-accent/30 pl-4">
              {t.investors.projectsDisclaimer}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-border/50 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium tracking-wide uppercase">
                  <MapPin size={12} /> {ex.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} /> {ex.year}
                </span>
              </div>

              <h3 className="text-sm font-heading font-semibold text-foreground mb-4">{ex.type}</h3>

              <div className="space-y-3 mb-5">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Ankauf</p>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{ex.acquisition}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Maßnahmen</p>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{ex.measures}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Ergebnis</p>
                  <p className="text-sm text-foreground leading-[1.6]">{ex.result}</p>
                </div>
              </div>

              {/* ROI highlight */}
              <div className="border-t border-border/40 pt-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-accent shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">{ex.roiLabel}</p>
                    <p className="text-[1.5rem] md:text-[2rem] font-heading font-semibold text-accent leading-none mb-2">{ex.roiValue}</p>
                    <p className="text-muted-foreground/70 text-xs leading-[1.7] max-w-lg">
                      {ex.roiNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <div className="cta-module text-center">
            <Reveal>
              <div className="section-divider mx-auto mb-5" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.investors.ctaLabel}
              </p>
              <h2 className="text-[1.35rem] md:text-[1.65rem] font-heading font-semibold text-foreground leading-[1.2] mb-3 text-balance">
                {t.investors.ctaTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.7] mb-5 max-w-xl mx-auto">
                {t.investors.ctaText}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.investors.ctaButton}
                <ArrowRight size={12} />
              </Link>
              <p className="text-muted-foreground/70 text-xs mt-2.5">{t.investors.ctaNote}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
