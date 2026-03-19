import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative h-[90vh] min-h-[640px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium Architektur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative container pb-24 md:pb-32">
          <div className="max-w-2xl">
            <p className="text-accent font-sans text-[11px] tracking-widest-plus uppercase mb-8 animate-fade-in">
              {t.landing.heroLabel}
            </p>
            <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-heading font-semibold text-white leading-[1.1] mb-7 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-white/65 text-lg md:text-[1.2rem] leading-[1.8] mb-12 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-5 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-[13px] font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                {t.landing.heroCta}
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 text-[13px] font-medium tracking-wider uppercase hover:border-white/50 transition-colors"
              >
                {t.landing.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Über Aurelia ── */}
      <section className="py-32 md:py-44">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 lg:gap-28 items-start max-w-5xl mx-auto">
            <div>
              <p className="text-accent font-sans text-[11px] tracking-widest-plus uppercase mb-6">
                {t.landing.aboutLabel}
              </p>
              <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.15] text-balance">
                {t.landing.aboutTitle}
              </h2>
            </div>
            <div className="md:pt-3">
              <p className="text-muted-foreground text-[1.1rem] leading-[1.9] mb-8">
                {t.landing.aboutText}
              </p>
              <p className="text-muted-foreground text-[1.1rem] leading-[1.9]">
                {t.landing.aboutText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fokusbereiche ── */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="container max-w-5xl">
          <p className="text-accent font-sans text-[11px] tracking-widest-plus uppercase mb-6">
            {t.landing.servicesLabel}
          </p>
          <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.15] mb-24 max-w-md">
            {t.landing.servicesTitle}
          </h2>
          <div className="divide-y divide-border">
            {t.landing.serviceCards.map((card, i) => (
              <div key={i} className="grid md:grid-cols-[3.5rem_1fr_2.5fr] gap-6 md:gap-12 items-baseline py-12 first:pt-0 last:pb-0">
                <span className="text-accent/50 font-sans text-[13px] tracking-widest tabular-nums hidden md:block">
                  0{i + 1}
                </span>
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-[1rem] leading-[1.8]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wofür Aurelia steht ── */}
      <section className="py-32 md:py-44 bg-secondary">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 lg:gap-28">
            <div>
              <p className="text-accent font-sans text-[11px] tracking-widest-plus uppercase mb-6">
                {t.landing.valuesLabel}
              </p>
              <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.15] text-balance">
                {t.landing.valuesTitle}
              </h2>
            </div>
            <div className="space-y-12 md:pt-3">
              {t.landing.valuePoints.map((point, i) => (
                <div key={i}>
                  <h3 className="text-[1rem] font-heading font-semibold text-foreground mb-2.5">{point.title}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.8]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Investmentfokus ── */}
      <section className="relative py-32 md:py-44">
        <div className="absolute inset-0">
          <img src={trustImg} alt={t.landing.projectsTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-sans text-[11px] tracking-widest-plus uppercase mb-6">
              {t.landing.projectsLabel}
            </p>
            <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-white leading-[1.15] mb-8 text-balance">
              {t.landing.projectsTitle}
            </h2>
            <p className="text-white/60 text-[1.1rem] leading-[1.8] max-w-2xl mx-auto">
              {t.landing.projectsText}
            </p>
            <div className="grid sm:grid-cols-3 gap-px mt-20">
              {t.landing.stats.map((stat, i) => (
                <div key={i} className="text-center py-8">
                  <span className="text-[2.5rem] md:text-[3rem] font-heading font-semibold text-accent">{stat.value}</span>
                  <p className="text-white/50 text-[13px] tracking-wide mt-3 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt / CTA ── */}
      <section className="py-32 md:py-44">
        <div className="container max-w-2xl">
          <div className="text-center">
            <div className="w-10 h-px bg-accent mx-auto mb-12" />
            <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.15] mb-7 text-balance">
              {t.landing.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-[1.1rem] leading-[1.8] mb-14 max-w-lg mx-auto">
              {t.landing.ctaText}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-9 py-4 text-[13px] font-medium tracking-wider uppercase hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {t.landing.ctaButton}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
