import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-premium.jpg";
import trustImg from "@/assets/section-trust.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative h-[92vh] min-h-[660px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Architektur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/80 via-[#0F1113]/30 to-transparent" />
        </div>
        <div className="relative container pb-28 md:pb-36">
          <div className="max-w-xl">
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-heading font-semibold text-white leading-[1.08] mb-8 animate-fade-in-up text-balance">
              {t.hero.slogan}
            </h1>
            <p className="text-white/55 text-[1.05rem] leading-[1.85] mb-14 max-w-md animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t.landing.heroSubtitle}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:border-white/60 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {t.landing.heroCta}
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Über Aurelia ── */}
      <section className="py-36 md:py-52">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.aboutLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-2xl text-balance">
              {t.landing.aboutTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">
              {t.landing.aboutText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Fokusbereiche ── */}
      <section className="py-36 md:py-52 border-t border-border/60">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.servicesLabel}
            </p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.landing.serviceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14 first:pt-0 last:pb-0">
                  <h3 className="text-[1.05rem] font-heading font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wofür Aurelia steht ── */}
      <section className="py-36 md:py-52 bg-secondary/50">
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

      {/* ── Investmentfokus ── */}
      <section className="relative py-36 md:py-52">
        <div className="absolute inset-0">
          <img src={trustImg} alt={t.landing.projectsTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1113]/80" />
        </div>
        <div className="relative container max-w-3xl text-center">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">
              {t.landing.projectsLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-[#E5E5E5] leading-[1.2] mb-8 text-balance">
              {t.landing.projectsTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 text-[1.05rem] leading-[1.85] max-w-xl mx-auto">
              {t.landing.projectsText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-36 md:py-52">
        <div className="container max-w-xl text-center">
          <Reveal>
            <div className="w-8 h-px bg-accent mx-auto mb-14" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-7 text-balance">
              {t.landing.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.85] mb-16">
              {t.landing.ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 border border-foreground/15 text-foreground px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:border-foreground/60 transition-colors duration-300"
            >
              {t.landing.ctaButton}
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
