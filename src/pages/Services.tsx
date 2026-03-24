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
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.services.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/80 font-sans text-[10px] font-medium tracking-[0.16em] uppercase mb-2">{t.nav.services}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.services.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <div className="section-shell">
            <Reveal>
              <div className="section-shell-accent">
                <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">{t.services.introLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.services.introTitle}
                </h2>
              </div>
            </Reveal>
            <div className="mt-4 space-y-3">
              <Reveal delay={0.15}>
                <p className="text-muted-foreground text-[0.85rem] leading-[1.8] max-w-xl">{t.services.introSubtitle}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted-foreground text-[0.85rem] leading-[1.8] max-w-xl">{t.services.introText}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-10 md:py-14 border-t border-border/60">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="section-shell">
                <h3 className="text-[0.85rem] font-heading font-semibold text-foreground mb-3">{t.services.holdTitle}</h3>
                <ul className="space-y-2">
                  {t.services.holdItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={12} />
                      <span className="text-muted-foreground text-[0.8rem] leading-[1.7]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="section-shell">
                <h3 className="text-[0.85rem] font-heading font-semibold text-foreground mb-3">{t.services.renovateTitle}</h3>
                <ul className="space-y-2">
                  {t.services.renovateItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={12} />
                      <span className="text-muted-foreground text-[0.8rem] leading-[1.7]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-3xl">
          <div className="section-shell" style={{ borderColor: 'hsl(var(--border) / 0.3)', background: 'hsl(var(--background) / 0.5)' }}>
            <Reveal>
              <div className="section-shell-accent">
                <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">{t.services.comparisonLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.services.comparisonTitle}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-x-auto mt-5">
                <table className="w-full text-[0.8rem]">
                  <thead>
                    <tr className="border-b border-accent/40">
                      {t.services.comparisonHeaders.map((h) => (
                        <th key={h} className="text-left py-2 pr-4 font-heading font-semibold text-foreground text-[0.78rem]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.services.comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-b border-border/60">
                        <td className="py-2 pr-4 font-medium text-foreground">{row[0]}</td>
                        <td className="py-2 pr-4 text-muted-foreground">{row[1]}</td>
                        <td className="py-2 text-muted-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="section-shell max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Reveal>
                <OptimizedImg src={heroImg} alt={t.services.experienceTitle} className="w-full h-56 object-cover" />
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <div className="section-shell-accent">
                    <p className="text-accent font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-2">{t.services.experienceLabel}</p>
                    <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                      {t.services.experienceTitle}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-[0.85rem] leading-[1.8] mt-3">{t.services.experienceText}</p>
                  <Link to="/kontakt" className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 mt-5">
                    {t.landing.heroCta}
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;