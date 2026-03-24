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
      <section id="hero" className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt="Aurelia Grundbesitz" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/80 via-[#0F1113]/30 to-transparent" />
        </div>
        <div className="relative container pb-12 md:pb-14">
          <div className="max-w-lg">
            <h1 className="text-[1.75rem] md:text-[2.15rem] lg:text-[2.5rem] font-heading font-semibold text-white leading-[1.08] mb-3 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-white/80 text-[0.85rem] leading-[1.7] mb-3 max-w-sm animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <p className="text-white/75 text-[10px] font-medium tracking-[0.14em] uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {t.landing.trustLine}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.landing.heroCta}
                <ArrowRight size={11} />
              </Link>
              <button
                onClick={() => {
                  const hero = document.getElementById('hero');
                  const next = hero?.nextElementSibling as HTMLElement | null;
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 border border-white/40 bg-black/10 backdrop-blur-sm text-white/92 px-5 py-2 text-[10px] font-medium tracking-[0.14em] uppercase hover:border-white/60 hover:bg-black/20 hover:text-white transition-colors duration-300"
              >
                {t.landing.heroCtaSecondary}
              </button>
            </div>
            <p className="text-white/70 text-[10px] mt-2 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
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
            className="absolute left-1/2 -translate-x-1/2 bottom-4 h-7 w-7 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 hover:border-white/55 hover:bg-black/30 transition-all duration-300"
            aria-label={t.common.scrollDownAria}
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.problemLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 max-w-xl text-balance">
              {t.landing.problemTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {t.landing.problemPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="text-accent shrink-0 mt-0.5" size={13} />
                  <div>
                    <h3 className="text-[0.82rem] font-heading font-semibold text-foreground mb-0.5">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.8rem] leading-[1.7]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LÖSUNG ── */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.solutionLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 max-w-xl text-balance">
              {t.landing.solutionTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {t.landing.solutionPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                  <div>
                    <h3 className="text-[0.82rem] font-heading font-semibold text-foreground mb-0.5">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.8rem] leading-[1.7]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRUST / Zahlen ── */}
      <section className="relative py-10 md:py-14">
        <div className="absolute inset-0">
          <OptimizedImg src={trustImg} alt={t.landing.trustTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1113]/85" />
        </div>
        <div className="relative container max-w-3xl text-center">
          <Reveal>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.trustLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-[#E5E5E5] leading-[1.2] mb-5 text-balance">
              {t.landing.trustTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 max-w-md mx-auto">
            {t.landing.trustPoints.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <p className="text-[1.5rem] md:text-[1.85rem] font-heading font-semibold text-accent leading-none mb-1">{stat.value}</p>
                  <p className="text-[#B0B0B0] text-[9px] tracking-[0.1em] uppercase">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEISTUNGEN ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.servicesLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 max-w-xl text-balance">
              {t.landing.servicesTitle}
            </h2>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.landing.serviceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/leistungen" className="group grid md:grid-cols-[1fr_2fr_auto] gap-1.5 md:gap-8 py-5 first:pt-0 last:pb-0 items-center">
                  <h3 className="text-[0.83rem] font-heading font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-[0.8rem] leading-[1.7]">{card.text}</p>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={12} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WERTE ── */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.valuesLabel}
            </p>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 max-w-md text-balance">
              {t.landing.valuesTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {t.landing.valuePoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-[0.82rem] font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.7]">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABSCHLUSS CTA ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-md text-center">
          <Reveal>
            <div className="w-6 h-px bg-accent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.ctaLabel}
            </p>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-3 text-balance">
              {t.landing.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[0.85rem] leading-[1.7] mb-5">
              {t.landing.ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
            >
              {t.landing.ctaButton}
              <ArrowRight size={11} />
            </Link>
            <p className="text-muted-foreground/70 text-[9px] mt-2">{t.common.initialAssessmentNote}</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
