import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import { ArrowRight, ChevronDown, AlertTriangle, CheckCircle, Clock, Building2, Users, MapPin, Calendar, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const trustIcons = [Clock, Building2, Users];

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
            <p className="text-white/90 text-sm leading-[1.7] mb-3 max-w-sm animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <p className="text-white/75 text-xs font-medium tracking-[0.14em] uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {t.landing.trustLine}
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.landing.heroCta}
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => {
                  const hero = document.getElementById('hero');
                  const next = hero?.nextElementSibling as HTMLElement | null;
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 border border-white/40 bg-black/25 backdrop-blur-sm text-white px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase hover:border-white/60 hover:bg-black/35 transition-colors duration-300"
              >
                {t.landing.heroCtaSecondary}
              </button>
            </div>
            <p className="flex items-center gap-1.5 text-white/90 text-xs mt-3 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <CheckCircle size={12} className="text-accent shrink-0" />
              {t.landing.heroMetaLine}
            </p>
          </div>

          <button
            onClick={() => {
              const hero = document.getElementById('hero');
              const next = hero?.nextElementSibling as HTMLElement | null;
              next?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 h-7 w-7 flex items-center justify-center rounded-full border border-white/40 bg-black/20 text-white/85 hover:border-white/55 hover:bg-black/30 transition-all duration-300"
            aria-label={t.common.scrollDownAria}
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </section>

      {/* ── 1b. TRUST STATS ── */}
      <section className="py-10 md:py-14 border-b border-border/60">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-6">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.trustStatsLabel}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.landing.trustStatsItems.map((stat, i) => {
              const Icon = trustIcons[i];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-l-2 border-accent/30 pl-5 py-3">
                    <Icon className="text-accent mb-2" size={20} />
                    <p className="text-4xl font-heading font-semibold text-foreground leading-none mb-1.5">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm leading-[1.5]">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.problemLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.landing.problemTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5">
            {t.landing.problemPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="text-accent shrink-0 mt-0.5" size={13} />
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

      {/* ── 3. LÖSUNG ── */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.solutionLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.landing.solutionTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-5">
            {t.landing.solutionPoints.map((point, i) => (
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

      {/* ── 4. TRUST / Zahlen ── */}
      <section className="relative py-10 md:py-14">
        <div className="absolute inset-0">
          <OptimizedImg src={trustImg} alt={t.landing.trustTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1113]/65" />
        </div>
        <div className="relative container max-w-4xl text-center">
          <Reveal>
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
              {t.landing.trustLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-[#E5E5E5] leading-[1.2] mb-5 text-balance">
              {t.landing.trustTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-lg mx-auto">
            {t.landing.trustPoints.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-[1.5rem] md:text-[1.85rem] font-heading font-semibold text-accent leading-none mb-1.5">{stat.value}</p>
                  <p className="text-[#B0B0B0] text-xs tracking-[0.1em] uppercase leading-snug">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEISTUNGEN ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.servicesLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.landing.servicesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="divide-y divide-border/60 mt-5">
            {t.landing.serviceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/leistungen" className="group grid md:grid-cols-[1fr_2fr_auto] gap-1.5 md:gap-8 py-5 first:pt-0 last:pb-0 items-center">
                  <h3 className="text-[0.83rem] font-heading font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7]">{card.text}</p>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={12} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WERTE ── */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.valuesLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-md text-balance">
                {t.landing.valuesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-5">
            {t.landing.valuePoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. REFERENZEN ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-6">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.referencesLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.landing.referencesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {t.landing.referenceProjects.map((project, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-border/50 p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium tracking-wide uppercase">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} /> {project.year}
                    </span>
                  </div>
                  <p className="text-sm font-heading font-semibold text-foreground mb-3">{project.type}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t.landing.refBeforeLabel}</p>
                      <p className="text-sm text-muted-foreground leading-[1.6]">{project.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t.landing.refAfterLabel}</p>
                      <p className="text-sm text-foreground leading-[1.6]">{project.after}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pt-2 border-t border-border/40">
                    <TrendingUp size={14} className="text-accent" />
                    <p className="text-sm font-medium text-accent">{project.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ABSCHLUSS CTA ── */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-4xl">
          <div className="cta-module text-center">
            <Reveal>
              <div className="section-divider mx-auto mb-5" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.ctaLabel}
              </p>
              <h2 className="text-[1.35rem] md:text-[1.65rem] font-heading font-semibold text-foreground leading-[1.2] mb-3 text-balance">
                {t.landing.ctaTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.7] mb-5 max-w-xl mx-auto">
                {t.landing.ctaText}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.landing.ctaButton}
                <ArrowRight size={12} />
              </Link>
              <p className="text-muted-foreground/70 text-xs mt-2.5">{t.common.initialAssessmentNote}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;