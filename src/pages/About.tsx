import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { ArrowRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import ceoImg from "@/assets/about-ceo.jpg";
import heroImg from "@/assets/hero-building.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.about.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.nav.about}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.about.heroTitle}
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Company */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.companyLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.about.companyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3 mt-4">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl">{t.about.companyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl">{t.about.companyP2}</p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link to="/leistungen" className="inline-flex items-center gap-2 border border-foreground/15 text-foreground px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:border-foreground/40 transition-colors duration-300 mt-5">
              {t.nav.services}
              <ArrowRight size={11} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-10 md:py-14 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.philosophyLabel}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.about.philosophyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3 mt-4">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl">{t.about.philosophyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl">{t.about.philosophyP2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team & Experience */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <OptimizedImg src={ceoImg} alt={t.about.experienceTitle} className="w-full h-[320px] object-cover" />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <div className="section-shell-accent">
                  <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.experienceLabel}</p>
                  <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                    {t.about.experienceTitle}
                  </h2>
                </div>
              </Reveal>
              <div className="space-y-2.5 mt-4">
                <Reveal delay={0.2}>
                  <p className="text-muted-foreground text-base leading-[1.75]">{t.about.experienceP1}</p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="text-muted-foreground text-base leading-[1.75]">{t.about.experienceP2}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-muted-foreground text-base leading-[1.75]">{t.about.experienceP3}</p>
                </Reveal>
              </div>
              <Reveal delay={0.35}>
                <Link to="/kontakt" className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-5">
                  {t.landing.heroCta}
                  <ArrowRight size={11} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
