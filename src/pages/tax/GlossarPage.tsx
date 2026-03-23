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
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.tax.glossarTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="text-accent" size={20} />
              <span className="text-white/80 font-sans text-[12px] font-medium tracking-[0.16em] uppercase">{t.tax.categoryKnowledge}</span>
            </div>
            <h1 className="text-[2.25rem] md:text-[3rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.glossarTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container max-w-4xl">
          <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-[0.85rem] text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={14} />
            {t.tax.backToOverview}
          </Link>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[12px] font-medium tracking-[0.16em] uppercase mb-8">{t.tax.categoryKnowledge}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-2xl text-balance">
              {t.tax.glossarSectionTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl mb-16">{t.tax.glossarSectionSubtitle}</p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.tax.glossarItems.map((g, i) => (
              <Reveal key={g.term} delay={i * 0.05}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-10 first:pt-0 last:pb-0">
                  <dt className="text-[0.95rem] font-heading font-semibold text-foreground">{g.term}</dt>
                  <dd className="text-muted-foreground text-[0.9rem] leading-[1.85]">{g.definition}</dd>
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
