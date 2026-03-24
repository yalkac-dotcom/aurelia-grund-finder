import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { ArrowRight } from "lucide-react";
import ceoImg from "@/assets/about-ceo.jpg";
import heroImg from "@/assets/hero-building.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[42vh] min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.about.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-12 md:pb-16">
          <Reveal>
            <p className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-3">{t.nav.about}</p>
            <h1 className="text-[1.85rem] md:text-[2.5rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.about.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Company */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.about.companyLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-6 max-w-xl text-balance">
              {t.about.companyTitle}
            </h2>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">{t.about.companyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">{t.about.companyP2}</p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link to="/leistungen" className="inline-flex items-center gap-2.5 border border-foreground/15 text-foreground px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-foreground/40 transition-colors duration-300 mt-7">
              {t.nav.services}
              <ArrowRight size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.about.philosophyLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-6 max-w-xl text-balance">
              {t.about.philosophyTitle}
            </h2>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">{t.about.philosophyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">{t.about.philosophyP2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team & Experience */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
            <Reveal>
              <OptimizedImg src={ceoImg} alt={t.about.experienceTitle} className="w-full h-[360px] object-cover" />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.about.experienceLabel}</p>
                <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-6 text-balance">
                  {t.about.experienceTitle}
                </h2>
              </Reveal>
              <div className="space-y-3">
                <Reveal delay={0.2}>
                  <p className="text-muted-foreground text-[0.85rem] leading-[1.8]">{t.about.experienceP1}</p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="text-muted-foreground text-[0.85rem] leading-[1.8]">{t.about.experienceP2}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-muted-foreground text-[0.85rem] leading-[1.8]">{t.about.experienceP3}</p>
                </Reveal>
              </div>
              <Reveal delay={0.35}>
                <Link to="/kontakt" className="inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-6">
                  {t.landing.heroCta}
                  <ArrowRight size={12} />
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
