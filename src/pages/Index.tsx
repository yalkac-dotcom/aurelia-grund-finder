import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import { ArrowRight, ChevronDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── 1. HERO ── */}
      <section id="hero" className="relative h-[70vh] min-h-[480px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt="Aurelia Grundbesitz" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/80 via-[#0F1113]/30 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-20">
          <div className="max-w-lg">
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-heading font-semibold text-white leading-[1.08] mb-4 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-white/80 text-[0.9rem] leading-[1.8] mb-4 max-w-sm animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <p className="text-white/75 text-[11px] font-medium tracking-[0.14em] uppercase mb-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {t.landing.trustLine}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.landing.heroCta}
                <ArrowRight size={12} />
              </Link>
              <button
                onClick={() => {
                  const hero = document.getElementById('hero');
                  const next = hero?.nextElementSibling as HTMLElement | null;
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 border border-white/40 bg-black/10 backdrop-blur-sm text-white/92 px-6 py-2.5 text-[11px] font-medium tracking-[0.14em] uppercase hover:border-white/60 hover:bg-black/20 hover:text-white transition-colors duration-300"
              >
                {t.landing.heroCtaSecondary}
              </button>
            </div>
            <p className="text-white/70 text-[11px] mt-2.5 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              {t.common.heroMeta}
            </p>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => {
              const hero = document.getElementById('hero');
              const next = hero?.nextElementSibling as HTMLElement | null;
              next?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute left-1/2 -translate-x-1/2 bottom-5 h-8 w-8 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 hover:border-white/55 hover:bg-black/30 transition-all duration-300"
            aria-label={t.common.scrollDownAria}
          >
            <ChevronDown size={15} />
          </button>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.problemLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-xl text-balance">
              {t.landing.problemTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {t.landing.problemPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-accent shrink-0 mt-0.5" size={14} />
                  <div>
                    <h3 className="text-[0.88rem] font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.83rem] leading-[1.75]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LÖSUNG ── */}
      <section className="py-16 md:py-20 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.solutionLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-xl text-balance">
              {t.landing.solutionTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {t.landing.solutionPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                  <div>
                    <h3 className="text-[0.88rem] font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.83rem] leading-[1.75]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRUST / Zahlen ── */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <OptimizedImg src={trustImg} alt={t.landing.trustTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1113]/85" />
        </div>
        <div className="relative container max-w-3xl text-center">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.trustLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-[#E5E5E5] leading-[1.2] mb-8 text-balance">
              {t.landing.trustTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-md mx-auto">
            {t.landing.trustPoints.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <p className="text-[1.75rem] md:text-[2.15rem] font-heading font-semibold text-accent leading-none mb-1.5">{stat.value}</p>
                  <p className="text-[#B0B0B0] text-[10px] tracking-[0.1em] uppercase">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEISTUNGEN ── */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.servicesLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-xl text-balance">
              {t.landing.servicesTitle}
            </h2>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.landing.serviceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/leistungen" className="group grid md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-10 py-7 first:pt-0 last:pb-0 items-center">
                  <h3 className="text-[0.9rem] font-heading font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-[0.85rem] leading-[1.75]">{card.text}</p>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WERTE ── */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.valuesLabel}
            </p>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-md text-balance">
              {t.landing.valuesTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {t.landing.valuePoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-[0.88rem] font-heading font-semibold text-foreground mb-1.5">{point.title}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.75]">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABSCHLUSS CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container max-w-md text-center">
          <Reveal>
            <div className="w-7 h-px bg-accent mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              {t.landing.ctaLabel}
            </p>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 text-balance">
              {t.landing.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.75] mb-7">
              {t.landing.ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
            >
              {t.landing.ctaButton}
              <ArrowRight size={12} />
            </Link>
            <p className="text-muted-foreground/70 text-[10px] mt-2.5">{t.common.initialAssessmentNote}</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
