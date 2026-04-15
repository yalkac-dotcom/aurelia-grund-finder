import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { ArrowRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import ceoImg from "@/assets/about-ceo.jpg";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt={t.about.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
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
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-8">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.companyLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.about.companyTitle}
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.about.companyP1}</p>
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.about.companyP2}</p>
              </div>
              <Link to="/leistungen" className="inline-flex items-center gap-2 border border-foreground/15 text-foreground px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-foreground/40 transition-colors duration-300 rounded-sm mt-6">
                {t.nav.services}
                <ArrowRight size={11} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-8">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.philosophyLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.about.philosophyTitle}
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.about.philosophyP1}</p>
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.about.philosophyP2}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team & Experience */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <OptimizedImg src={ceoImg} alt={t.about.experienceTitle} className="w-full h-[320px] object-cover rounded-xl" />
                <div>
                  <div className="section-shell-accent mb-4">
                    <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.about.experienceLabel}</p>
                    <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                      {t.about.experienceTitle}
                    </h2>
                  </div>
                  <div className="space-y-2.5 mt-4">
                    <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{t.about.experienceP1}</p>
                    <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{t.about.experienceP2}</p>
                    <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{t.about.experienceP3}</p>
                  </div>
                  <Link to="/kontakt" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 rounded-sm mt-6">
                    {t.hero.cta}
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
