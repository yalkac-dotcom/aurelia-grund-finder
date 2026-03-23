import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-steuervorteile.jpg";
import { Landmark, Leaf, Banknote, BadgePercent, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

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
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.tax.heroTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-20 md:pb-28">
          <Reveal>
            <p className="text-white/80 font-sans text-[12px] font-medium tracking-[0.16em] uppercase mb-5">{t.nav.taxBenefits}</p>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.heroTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[12px] font-medium tracking-[0.18em] uppercase mb-8">{t.nav.taxBenefits}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-12 max-w-2xl text-balance">
              {t.tax.introTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl">{t.tax.introSubtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Topics */}
      <section className="py-40 md:py-56 border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="divide-y divide-border/60">
            {topics.map((tp, i) => (
              <Reveal key={tp.id} delay={i * 0.08}>
                <Link to={tp.path} className="group grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-16 py-14 first:pt-0 last:pb-0 items-center">
                  <div className="flex items-center gap-3">
                    <tp.icon className="text-accent" size={18} />
                    <span className="text-accent font-sans text-[12px] font-medium tracking-[0.14em] uppercase">{tp.category}</span>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-2">{tp.title}</h3>
                    <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{tp.shortDesc}</p>
                  </div>
                  <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-40 md:py-56 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[12px] font-medium tracking-[0.18em] uppercase mb-8">{t.tax.categoryKnowledge}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-20 max-w-2xl text-balance">
              {t.tax.overviewTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.9rem]">
                <thead>
                  <tr className="border-b border-accent/40">
                    {t.tax.overviewHeaders.map((h, i) => (
                      <th key={i} className="text-left py-4 pr-4 font-heading font-semibold text-foreground text-[0.85rem]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topics.map((tp) => (
                    <tr key={tp.id} className="border-b border-border/60">
                      <td className="py-4 pr-4 text-muted-foreground">{tp.category}</td>
                      <td className="py-4 pr-4">
                        <Link to={tp.path} className="text-foreground font-medium hover:text-accent transition-colors">{tp.title}</Link>
                      </td>
                      <td className="py-4 text-muted-foreground">{tp.shortDesc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Glossar Link */}
      <section className="py-40 md:py-56">
        <div className="container max-w-4xl">
          <Reveal>
            <Link to="/steuervorteile/glossar" className="group grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-16 items-center">
              <div className="flex items-center gap-3">
                <BookOpen className="text-accent" size={18} />
                <span className="text-accent font-sans text-[12px] font-medium tracking-[0.14em] uppercase">{t.tax.categoryKnowledge}</span>
              </div>
              <div>
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-2">{t.tax.glossarTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{t.tax.glossarDesc}</p>
              </div>
              <ArrowRight className="text-accent transition-transform group-hover:translate-x-1 hidden md:block" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="pb-32">
        <div className="container max-w-4xl space-y-6">
          <p className="text-[0.8rem] text-muted-foreground italic leading-relaxed">{t.tax.disclaimer}</p>
          <p className="text-[0.8rem] text-muted-foreground italic leading-relaxed">
            <strong className="text-foreground">{t.tax.externalLinksDisclaimer.split(":")[0]}:</strong> {t.tax.externalLinksDisclaimer.substring(t.tax.externalLinksDisclaimer.indexOf(":") + 2)}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TaxBenefits;
