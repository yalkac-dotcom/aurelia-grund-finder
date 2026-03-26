import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, CheckCircle, Shield, TrendingUp } from "lucide-react";

const DISCLAIMER_KEY = "aurelia-investor-disclaimer";

const InvestorDisclaimer = ({ onAccept }: { onAccept: () => void }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [checked, setChecked] = useState(false);
  const g = t.investors.gate;

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="border border-border/60 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-accent shrink-0" size={20} />
                <h1 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                  {g.title}
                </h1>
              </div>

              <div className="text-muted-foreground text-sm leading-[1.8] space-y-4 mb-6">
                <p>{g.intro}</p>
                <p>{g.body1}</p>
                <p>{g.body2}</p>
                <p>{g.body3}</p>
              </div>

              <label className="flex items-start gap-2.5 mb-8 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mt-1 accent-accent"
                />
                <span className="text-sm text-foreground leading-[1.6]">{g.checkbox}</span>
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onAccept}
                  disabled={!checked}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/85 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {g.acceptBtn}
                  <ArrowRight size={12} />
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center gap-2 border border-border/60 text-muted-foreground px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:border-border hover:text-foreground transition-colors duration-300"
                >
                  {g.declineBtn}
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
    document.title = t.investors.seoTitle;
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute("content", t.investors.seoDesc);
  }, [t]);

  const handleAccept = () => {
    sessionStorage.setItem(DISCLAIMER_KEY, "true");
    setAccepted(true);
  };

  if (!accepted) return <InvestorDisclaimer onAccept={handleAccept} />;

  const inv = t.investors;
  const cs = inv.caseStudy;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
              {inv.heroBadge}
            </p>
            <h1 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.15] mb-4 max-w-lg text-balance">
              {inv.heroTitle}
            </h1>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.8] max-w-xl mb-5">
              {inv.heroDesc}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
            >
              {inv.heroBtn}
              <ArrowRight size={12} />
            </Link>
            <p className="text-muted-foreground/70 text-xs mt-2.5">{inv.heroMicro}</p>
          </Reveal>
        </div>
      </section>

      {/* Audience */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {inv.audienceBadge}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {inv.audienceTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-sm leading-[1.7] mt-4 max-w-xl">
              {inv.audienceDesc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {inv.processBadge}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {inv.processTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-5">
            {inv.processItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                  <div>
                    <h3 className="text-base font-heading font-semibold text-foreground mb-0.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">{item.desc}</p>
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
                {inv.prioritiesBadge}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {inv.prioritiesTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-sm leading-[1.7] mt-4 mb-5 max-w-xl">
              {inv.prioritiesDesc}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-x-8 gap-y-5">
            {inv.prioritiesItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-4">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {inv.completedBadge}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {inv.completedTitle}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-sm leading-[1.7] mb-6 max-w-xl">
              {inv.completedDesc}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-border/50 p-6 md:p-8">
              <h3 className="text-sm font-heading font-semibold text-foreground mb-5">{cs.title}</h3>

              <div className="space-y-3 mb-5">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{cs.startLabel}</p>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{cs.startText}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{cs.actionLabel}</p>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{cs.actionText}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{cs.resultLabel}</p>
                  <p className="text-sm text-foreground leading-[1.6]">{cs.resultText}</p>
                </div>
              </div>

              {/* ROI highlight */}
              <div className="border-t border-border/40 pt-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-accent shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">Return on Investment</p>
                    <p className="text-[1.5rem] md:text-[2rem] font-heading font-semibold text-accent leading-none mb-2">14 %</p>
                    <p className="text-muted-foreground/70 text-xs leading-[1.7] max-w-lg">
                      {cs.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="border-l-2 border-accent/30 pl-4">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {inv.disclaimerBadge}
              </p>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2">{inv.disclaimerTitle}</h3>
              <p className="text-muted-foreground/80 text-xs leading-[1.7] max-w-xl">
                {inv.disclaimerDesc}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="cta-module text-center">
            <Reveal>
              <div className="section-divider mx-auto mb-5" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {inv.contactBadge}
              </p>
              <h2 className="text-[1.35rem] md:text-[1.65rem] font-heading font-semibold text-foreground leading-[1.2] mb-3 text-balance">
                {inv.contactTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.7] mb-5 max-w-xl mx-auto">
                {inv.contactDesc}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {inv.contactBtn}
                <ArrowRight size={12} />
              </Link>
              <p className="text-muted-foreground/70 text-xs mt-2.5">{inv.contactMicro}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;