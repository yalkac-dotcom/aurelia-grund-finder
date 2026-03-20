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
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.about.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-5">{t.nav.about}</p>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.about.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Company */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.about.companyLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-12 max-w-2xl text-balance">
              {t.about.companyTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.about.companyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.about.companyP2}</p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link to="/leistungen" className="inline-flex items-center gap-3 border border-foreground/15 text-foreground px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:border-foreground/40 transition-colors duration-300 mt-12">
              {t.nav.services}
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 md:py-56 border-t border-border/60 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.about.philosophyLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-12 max-w-2xl text-balance">
              {t.about.philosophyTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.about.philosophyP1}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.about.philosophyP2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team & Experience */}
      <section className="py-40 md:py-56">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-5xl mx-auto">
            <Reveal>
              <img src={ceoImg} alt={t.about.experienceTitle} className="w-full h-[480px] object-cover" />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.about.experienceTitle}</p>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-heading font-semibold text-foreground leading-[1.2] mb-12 text-balance">
                  {t.about.experienceTitle}
                </h2>
              </Reveal>
              <div className="space-y-5">
                <Reveal delay={0.2}>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{t.about.experienceP1}</p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{t.about.experienceP2}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{t.about.experienceP3}</p>
                </Reveal>
              </div>
              <Reveal delay={0.35}>
                <Link to="/kontakt" className="inline-flex items-center gap-3 bg-accent text-white px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-8">
                  {t.landing.heroCta}
                  <ArrowRight size={13} />
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
