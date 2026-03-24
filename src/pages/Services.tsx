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
      <section className="relative h-[42vh] min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.services.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-12 md:pb-16">
          <Reveal>
            <p className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-3">{t.nav.services}</p>
            <h1 className="text-[1.85rem] md:text-[2.5rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.services.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.services.introLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-6 max-w-xl text-balance">
              {t.services.introTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl">{t.services.introSubtitle}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.85] max-w-xl mt-4">{t.services.introText}</p>
          </Reveal>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <Reveal>
              <div>
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-4">{t.services.holdTitle}</h3>
                <ul className="space-y-2.5">
                  {t.services.holdItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                      <span className="text-muted-foreground text-[0.83rem] leading-[1.75]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-4">{t.services.renovateTitle}</h3>
                <ul className="space-y-2.5">
                  {t.services.renovateItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                      <span className="text-muted-foreground text-[0.83rem] leading-[1.75]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.services.comparisonLabel}</p>
            <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-xl text-balance">
              {t.services.comparisonTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-accent/40">
                    {t.services.comparisonHeaders.map((h) => (
                      <th key={h} className="text-left py-2.5 pr-4 font-heading font-semibold text-foreground text-[0.8rem]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.services.comparisonRows.map((row) => (
                    <tr key={row[0]} className="border-b border-border/60">
                      <td className="py-2.5 pr-4 font-medium text-foreground">{row[0]}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{row[1]}</td>
                      <td className="py-2.5 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
            <Reveal>
              <OptimizedImg src={heroImg} alt={t.services.experienceTitle} className="w-full h-64 object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-accent font-sans text-[11px] font-medium tracking-[0.18em] uppercase mb-4">{t.services.experienceLabel}</p>
                <h2 className="text-[1.35rem] md:text-[1.85rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 text-balance">
                  {t.services.experienceTitle}
                </h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{t.services.experienceText}</p>
                <Link to="/kontakt" className="inline-flex items-center gap-2.5 bg-accent text-white px-6 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-6">
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
