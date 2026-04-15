import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.services.src} srcSet={heroSets.services.srcSet} sizes={heroSets.services.sizes} alt={t.services.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.nav.services}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.services.heroTitle}
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-8">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.services.introLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.services.introTitle}
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.services.introSubtitle}</p>
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">{t.services.introText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <div className="bg-card rounded-[1.25rem] p-8 md:p-10 shadow-[0_8px_40px_-8px_hsl(212_55%_20%/0.06),0_2px_10px_-4px_hsl(212_55%_20%/0.03)] border border-border/8 h-full">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-4">{t.services.holdTitle}</h3>
                <ul className="space-y-2.5">
                  {t.services.holdItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                      <span className="text-muted-foreground text-sm leading-[1.75]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-card rounded-[1.25rem] p-8 md:p-10 shadow-[0_8px_40px_-8px_hsl(212_55%_20%/0.06),0_2px_10px_-4px_hsl(212_55%_20%/0.03)] border border-border/8 h-full">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-4">{t.services.renovateTitle}</h3>
                <ul className="space-y-2.5">
                  {t.services.renovateItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={13} />
                      <span className="text-muted-foreground text-sm leading-[1.75]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-8">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.services.comparisonLabel}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.services.comparisonTitle}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-accent/30">
                      {t.services.comparisonHeaders.map((h) => (
                        <th key={h} className="text-left py-3 pr-4 font-heading font-semibold text-foreground text-sm">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.services.comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-b border-border/40">
                        <td className="py-3 pr-4 font-medium text-foreground">{row[0]}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row[1]}</td>
                        <td className="py-3 text-muted-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <OptimizedImg src={heroSets.services.src} srcSet={heroSets.services.srcSet} sizes={heroSets.services.sizes} alt={t.services.experienceTitle} className="w-full h-56 object-cover rounded-xl" />
                <div>
                  <div className="section-shell-accent mb-4">
                    <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.services.experienceLabel}</p>
                    <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 text-balance">
                      {t.services.experienceTitle}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-3">{t.services.experienceText}</p>
                  <Link to="/kontakt" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 rounded-sm mt-6">
                    {t.landing.heroCta}
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

export default Services;
