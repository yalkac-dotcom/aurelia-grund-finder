import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { Landmark, Leaf, Banknote, BadgePercent, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

const TaxBenefits = () => {
  const { t } = useLanguage();

  const topics = [
    { id: "afa", category: t.tax.categoryTax, icon: BadgePercent, title: t.tax.afaTitle, shortDesc: t.tax.afaShortDesc, path: "/steuervorteile/afa" },
    { id: "energetisch", category: t.tax.categoryTax, icon: Leaf, title: t.tax.energetischTitle, shortDesc: t.tax.energetischShortDesc, path: "/steuervorteile/energetisch" },
    { id: "kfw", category: t.tax.categoryFunding, icon: Landmark, title: t.tax.kfwTitle, shortDesc: t.tax.kfwShortDesc, path: "/steuervorteile/kfw" },
    { id: "bafa", category: t.tax.categoryFunding, icon: Banknote, title: t.tax.bafaTitle, shortDesc: t.tax.bafaShortDesc, path: "/steuervorteile/bafa" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[260px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.steuervorteile.src} srcSet={heroSets.steuervorteile.srcSet} sizes={heroSets.steuervorteile.sizes} alt={t.tax.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-12">
          <Reveal>
            <p className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.nav.taxBenefits}</p>
            <h1 className="text-[1.6rem] md:text-[2.15rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.heroTitle}
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.nav.taxBenefits}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.tax.introTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-sm leading-[1.8] max-w-2xl mt-4">{t.tax.introSubtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Topics */}
      <section className="py-10 md:py-14 border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="divide-y divide-border/60">
            {topics.map((tp, i) => (
              <Reveal key={tp.id} delay={i * 0.08}>
                <Link to={tp.path} className="group grid md:grid-cols-[1fr_2fr_auto] gap-1.5 md:gap-8 py-5 first:pt-0 last:pb-0 items-center">
                  <div className="flex items-center gap-2.5">
                    <tp.icon className="text-accent" size={14} />
                    <span className="text-accent font-sans text-xs font-medium tracking-[0.14em] uppercase">{tp.category}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-0.5">{tp.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">{tp.shortDesc}</p>
                  </div>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={12} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">{t.tax.categoryKnowledge}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.tax.overviewTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto mt-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent/40">
                    {t.tax.overviewHeaders.map((h, i) => (
                      <th key={i} className="text-left py-2 pr-4 font-heading font-semibold text-foreground text-sm">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topics.map((tp) => (
                    <tr key={tp.id} className="border-b border-border/60">
                      <td className="py-2 pr-4 text-muted-foreground">{tp.category}</td>
                      <td className="py-2 pr-4">
                        <Link to={tp.path} className="text-foreground font-medium hover:text-accent transition-colors">{tp.title}</Link>
                      </td>
                      <td className="py-2 text-muted-foreground">{tp.shortDesc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Glossar Link */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <Link to="/steuervorteile/glossar" className="group grid md:grid-cols-[1fr_2fr_auto] gap-1.5 md:gap-8 items-center">
              <div className="flex items-center gap-2.5">
                <BookOpen className="text-accent" size={14} />
                <span className="text-accent font-sans text-xs font-medium tracking-[0.14em] uppercase">{t.tax.categoryKnowledge}</span>
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-foreground mb-0.5">{t.tax.glossarTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{t.tax.glossarDesc}</p>
              </div>
              <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="pb-10">
        <div className="container max-w-4xl space-y-3">
          <p className="text-[0.72rem] text-muted-foreground italic leading-relaxed">{t.tax.disclaimer}</p>
          <p className="text-[0.72rem] text-muted-foreground italic leading-relaxed">
            <strong className="text-foreground">{t.tax.externalLinksDisclaimer.split(":")[0]}:</strong> {t.tax.externalLinksDisclaimer.substring(t.tax.externalLinksDisclaimer.indexOf(":") + 2)}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TaxBenefits;
