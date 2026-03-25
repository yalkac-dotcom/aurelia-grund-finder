import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-glossar.jpg";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const GlossarPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative h-[32vh] min-h-[240px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.tax.glossarTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-accent" size={16} />
              <span className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase">{t.tax.categoryKnowledge}</span>
            </div>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.glossarTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-4">
        <div className="container max-w-4xl">
          <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={13} />
            {t.tax.backToOverview}
          </Link>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.tax.categoryKnowledge}</p>
              <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                {t.tax.glossarSectionTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-[0.85rem] leading-[1.85] max-w-2xl mt-4 mb-5">{t.tax.glossarSectionSubtitle}</p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.tax.glossarItems.map((g, i) => (
              <Reveal key={g.term} delay={i * 0.05}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8 py-5 first:pt-0 last:pb-0">
                  <dt className="text-base font-heading font-semibold text-foreground">{g.term}</dt>
                  <dd className="text-muted-foreground text-sm leading-[1.75]">{g.definition}</dd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlossarPage;
