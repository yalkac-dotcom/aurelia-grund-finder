import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import { ArrowRight, ChevronDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── 1. HERO ── */}
      <section id="hero" className="relative h-[92vh] min-h-[660px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Architektur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/80 via-[#0F1113]/30 to-transparent" />
        </div>
        <div className="relative container pb-28 md:pb-36">
          <div className="max-w-xl">
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-heading font-semibold text-white leading-[1.08] mb-6 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-[#B0B0B0] text-[1.05rem] leading-[1.85] mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <p className="text-white/30 text-[11px] tracking-[0.12em] uppercase mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {t.landing.trustLine}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-accent text-white px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
              >
                {t.landing.heroCta}
                <ArrowRight size={13} />
              </Link>
              <button
                onClick={() => {
                  const hero = document.getElementById('hero');
                  const next = hero?.nextElementSibling as HTMLElement | null;
                  next?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:border-white/40 hover:text-white transition-colors duration-300"
              >
                {t.landing.heroCtaSecondary}
              </button>
            </div>
            <p className="text-white/25 text-[11px] mt-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              Unverbindlich · Persönlich · Diskret
            </p>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => {
              const hero = document.getElementById('hero');
              const next = hero?.nextElementSibling as HTMLElement | null;
              next?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 h-10 w-10 flex items-center justify-center rounded-full border border-white/25 bg-white/[0.05] text-white/60 hover:border-white/40 hover:bg-white/[0.09] transition-all duration-300"
            aria-label="Weiter scrollen"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.problemLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-2xl text-balance">
              {t.landing.problemTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-20 gap-y-14">
            {t.landing.problemPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="text-accent shrink-0 mt-1" size={16} />
                  <div>
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LÖSUNG ── */}
      <section className="py-40 md:py-56 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.solutionLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-2xl text-balance">
              {t.landing.solutionTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-20 gap-y-14">
            {t.landing.solutionPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                  <div>
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRUST / Zahlen ── */}
      <section className="relative py-40 md:py-56">
        <div className="absolute inset-0">
          <img src={trustImg} alt={t.landing.trustTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1113]/85" />
        </div>
        <div className="relative container max-w-4xl text-center">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.trustLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-[#E5E5E5] leading-[1.2] mb-20 text-balance">
              {t.landing.trustTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-xl mx-auto">
            {t.landing.trustPoints.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <p className="text-[2.5rem] md:text-[3rem] font-heading font-semibold text-accent leading-none mb-3">{stat.value}</p>
                  <p className="text-[#9A9A9A] text-[11px] tracking-[0.1em] uppercase">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEISTUNGEN ── */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.servicesLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-2xl text-balance">
              {t.landing.servicesTitle}
            </h2>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.landing.serviceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/leistungen" className="group grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-16 py-14 first:pt-0 last:pb-0 items-center">
                  <h3 className="text-[1.05rem] font-heading font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{card.text}</p>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WERTE ── */}
      <section className="py-40 md:py-56 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.valuesLabel}
            </p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-lg text-balance">
              {t.landing.valuesTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-20 gap-y-16">
            {t.landing.valuePoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABSCHLUSS CTA ── */}
      <section className="py-40 md:py-56">
        <div className="container max-w-xl text-center">
          <Reveal>
            <div className="w-8 h-px bg-accent mx-auto mb-16" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.ctaLabel}
            </p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-7 text-balance">
              {t.landing.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.85] mb-12">
              {t.landing.ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 bg-accent text-white px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
            >
              {t.landing.ctaButton}
              <ArrowRight size={13} />
            </Link>
            <p className="text-muted-foreground/50 text-[11px] mt-4">Keine Verpflichtung · Antwort innerhalb von 24 h</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
