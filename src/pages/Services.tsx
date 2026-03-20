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
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.services.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-5">{t.nav.services}</p>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.services.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.services.introLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-12 max-w-2xl text-balance">
              {t.services.introTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.services.introSubtitle}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl mt-6">{t.services.introText}</p>
          </Reveal>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-40 md:py-56 border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <Reveal>
              <div>
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-6">{t.services.holdTitle}</h3>
                <ul className="space-y-4">
                  {t.services.holdItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      <span className="text-muted-foreground text-[0.9rem] leading-[1.85]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-6">{t.services.renovateTitle}</h3>
                <ul className="space-y-4">
                  {t.services.renovateItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      <span className="text-muted-foreground text-[0.9rem] leading-[1.85]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-40 md:py-56 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.services.comparisonTitle}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-2xl text-balance">
              {t.services.comparisonTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.9rem]">
                <thead>
                  <tr className="border-b border-accent/40">
                    {t.services.comparisonHeaders.map((h) => (
                      <th key={h} className="text-left py-4 pr-6 font-heading font-semibold text-foreground text-[0.85rem]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.services.comparisonRows.map((row) => (
                    <tr key={row[0]} className="border-b border-border/60">
                      <td className="py-4 pr-6 font-medium text-foreground">{row[0]}</td>
                      <td className="py-4 pr-6 text-muted-foreground">{row[1]}</td>
                      <td className="py-4 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-40 md:py-56">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-5xl mx-auto">
            <Reveal>
              <img src={heroImg} alt={t.services.experienceTitle} className="w-full h-80 object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.services.experienceTitle}</p>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 text-balance">
                  {t.services.experienceTitle}
                </h2>
                <p className="text-muted-foreground text-[1.05rem] leading-[1.95]">{t.services.experienceText}</p>
                <Link to="/kontakt" className="inline-flex items-center gap-3 bg-accent text-white px-9 py-4 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-10">
                  {t.landing.heroCta}
                  <ArrowRight size={13} />
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
