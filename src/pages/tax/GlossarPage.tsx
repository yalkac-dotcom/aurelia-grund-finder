import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-glossar.jpg";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const GlossarPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.tax.glossarTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-accent" size={32} />
            <span className="text-xs font-medium uppercase tracking-widest text-accent">{t.tax.categoryKnowledge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.tax.glossarTitle}</h1>
        </div>
      </section>

      <section className="py-6">
        <div className="container max-w-4xl">
          <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={16} />
            {t.tax.backToOverview}
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <SectionHeading title={t.tax.glossarSectionTitle} subtitle={t.tax.glossarSectionSubtitle} />
          <div className="space-y-0 mt-12">
            {t.tax.glossarItems.map((g, i) => (
              <div
                key={g.term}
                className={`grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 py-4 ${
                  i < t.tax.glossarItems.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-bold text-foreground text-sm">{g.term}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{g.definition}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlossarPage;
