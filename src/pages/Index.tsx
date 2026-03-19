import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import valuesImg from "@/assets/section-values.jpg";
import portfolioImg from "@/assets/portfolio.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium Architektur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <div className="max-w-2xl">
            <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-6 animate-fade-in">
              {t.landing.heroLabel}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-[1.15] mb-6 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                {t.landing.heroCta}
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-primary-foreground/5 transition-colors"
              >
                {t.landing.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Über Aurelia / Positionierung ── */}
      <section className="py-28 md:py-40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-5xl mx-auto">
            <div>
              <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-5">
                {t.landing.aboutLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.2] text-balance">
                {t.landing.aboutTitle}
              </h2>
            </div>
            <div className="md:pt-2">
              <p className="text-muted-foreground text-[1.05rem] leading-[1.85] mb-8">
                {t.landing.aboutText}
              </p>
              <p className="text-muted-foreground text-[1.05rem] leading-[1.85]">
                {t.landing.aboutText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fokusbereiche ── */}
      <section className="py-28 md:py-40 border-t border-border">
        <div className="container max-w-5xl">
          <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-5">
            {t.landing.servicesLabel}
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-lg">
            {t.landing.servicesTitle}
          </h2>
          <div className="space-y-0 divide-y divide-border">
            {t.landing.serviceCards.map((card, i) => (
              <div key={i} className="grid md:grid-cols-[4rem_1fr_2fr] gap-6 md:gap-10 items-baseline py-10 first:pt-0 last:pb-0">
                <span className="text-accent/60 font-sans text-sm tracking-widest tabular-nums hidden md:block">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-heading font-semibold text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vertrauen / Werte ── */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <img src={valuesImg} alt={t.landing.valuesTitle} className="w-full aspect-[4/5] object-cover" />
            </div>
            <div>
              <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-5">
                {t.landing.valuesLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight mb-8 text-balance">
                {t.landing.valuesTitle}
              </h2>
              <div className="space-y-5">
                {t.landing.valuePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-px h-5 bg-accent shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projekte / Investmentfokus ── */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <img src={trustImg} alt={t.landing.projectsTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-5">
              {t.landing.projectsLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground leading-tight mb-8 text-balance">
              {t.landing.projectsTitle}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
              {t.landing.projectsText}
            </p>
            <div className="grid sm:grid-cols-3 gap-px mt-14">
              {t.landing.stats.map((stat, i) => (
                <div key={i} className="text-center py-6">
                  <span className="text-3xl md:text-4xl font-heading font-semibold text-accent">{stat.value}</span>
                  <p className="text-primary-foreground/60 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt / CTA ── */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-sans text-xs tracking-widest-plus uppercase mb-5">
              {t.landing.ctaLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight mb-6 text-balance">
              {t.landing.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t.landing.ctaText}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              {t.landing.ctaButton}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
