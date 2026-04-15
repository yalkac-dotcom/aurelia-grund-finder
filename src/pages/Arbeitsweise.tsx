import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Arbeitsweise = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg
            src={heroSets.building.src}
            srcSet={heroSets.building.srcSet}
            sizes={heroSets.building.sizes}
            alt={t.landing.processTitle}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">
              {t.nav.workApproach}
            </p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.landing.processTitle}
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Intro */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">
                {t.landing.processSubtitle}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-5xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.processLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.processTitle}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {t.landing.processSteps.map((step, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="relative">
                      <p className="text-[1.5rem] font-heading font-semibold text-accent mb-2">
                        {step.num}
                      </p>
                      {i < t.landing.processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-4 left-full w-full h-px bg-border/40 -translate-x-4" />
                      )}
                      <h3 className="text-sm font-heading font-semibold text-foreground mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-[1.7]">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding} text-center`}>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 text-balance">
                {t.landing.ctaTitle}
              </h2>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-xl mx-auto mb-8">
                {t.landing.ctaText}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-md text-xs font-semibold tracking-[0.13em] uppercase hover:bg-accent/88 transition-all duration-300"
              >
                {t.landing.ctaButton}
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Arbeitsweise;
