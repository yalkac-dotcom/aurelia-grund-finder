import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-services.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.services.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-20">
          <Reveal>
            <p className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-4">{t.nav.services}</p>
            <h1 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.services.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.services.introLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-xl text-balance">
              {t.services.introTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl">{t.services.introSubtitle}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl mt-5">{t.services.introText}</p>
          </Reveal>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <Reveal>
              <div>
                <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-5">{t.services.holdTitle}</h3>
                <ul className="space-y-3">
                  {t.services.holdItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                      <span className="text-muted-foreground text-[0.85rem] leading-[1.85]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-5">{t.services.renovateTitle}</h3>
                <ul className="space-y-3">
                  {t.services.renovateItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                      <span className="text-muted-foreground text-[0.85rem] leading-[1.85]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.services.comparisonLabel}</p>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-14 max-w-xl text-balance">
              {t.services.comparisonTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="border-b border-accent/40">
                    {t.services.comparisonHeaders.map((h) => (
                      <th key={h} className="text-left py-3 pr-5 font-heading font-semibold text-foreground text-[0.8rem]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.services.comparisonRows.map((row) => (
                    <tr key={row[0]} className="border-b border-border/60">
                      <td className="py-3 pr-5 font-medium text-foreground">{row[0]}</td>
                      <td className="py-3 pr-5 text-muted-foreground">{row[1]}</td>
                      <td className="py-3 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-4xl mx-auto">
            <Reveal>
              <OptimizedImg src={heroImg} alt={t.services.experienceTitle} className="w-full h-72 object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-6">{t.services.experienceLabel}</p>
                <h2 className="text-[1.5rem] md:text-[2rem] font-heading font-semibold text-foreground leading-[1.2] mb-6 text-balance">
                  {t.services.experienceTitle}
                </h2>
                <p className="text-muted-foreground text-[0.95rem] leading-[1.95]">{t.services.experienceText}</p>
                <Link to="/kontakt" className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-8">
                  {t.landing.heroCta}
                  <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
