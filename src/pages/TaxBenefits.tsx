import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-steuervorteile.jpg";
import { Landmark, Leaf, Banknote, BadgePercent, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const TaxBenefits = () => {
  const { t } = useLanguage();

  const topics = [
    {
      id: "afa",
      category: t.tax.categoryTax,
      icon: BadgePercent,
      title: t.tax.afaTitle,
      shortDesc: t.tax.afaShortDesc,
      path: "/steuervorteile/afa",
    },
    {
      id: "energetisch",
      category: t.tax.categoryTax,
      icon: Leaf,
      title: t.tax.energetischTitle,
      shortDesc: t.tax.energetischShortDesc,
      path: "/steuervorteile/energetisch",
    },
    {
      id: "kfw",
      category: t.tax.categoryFunding,
      icon: Landmark,
      title: t.tax.kfwTitle,
      shortDesc: t.tax.kfwShortDesc,
      path: "/steuervorteile/kfw",
    },
    {
      id: "bafa",
      category: t.tax.categoryFunding,
      icon: Banknote,
      title: t.tax.bafaTitle,
      shortDesc: t.tax.bafaShortDesc,
      path: "/steuervorteile/bafa",
    },
  ];

  return (
    <Layout>
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.tax.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.tax.heroTitle}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title={t.tax.introTitle} subtitle={t.tax.introSubtitle} />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((tp) => (
              <Link
                key={tp.id}
                to={tp.path}
                className="text-left bg-card p-8 border border-border hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <tp.icon className="text-accent" size={24} />
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">{tp.category}</span>
                  </div>
                  <ChevronRight className="text-accent transition-transform group-hover:translate-x-1" size={18} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{tp.title}</h3>
                <p className="text-muted-foreground text-sm">{tp.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title={t.tax.overviewTitle} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent">
                  {t.tax.overviewHeaders.map((h, i) => (
                    <th key={i} className="text-left py-3 pr-4 font-medium text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topics.map((tp) => (
                  <tr key={tp.id} className="border-b border-border">
                    <td className="py-3 pr-4 text-muted-foreground">{tp.category}</td>
                    <td className="py-3 pr-4">
                      <Link to={tp.path} className="text-foreground font-medium hover:text-accent transition-colors">{tp.title}</Link>
                    </td>
                    <td className="py-3 text-muted-foreground">{tp.shortDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl">
          <Link
            to="/steuervorteile/glossar"
            className="flex items-center justify-between bg-card p-8 border border-border hover:border-accent/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <BookOpen className="text-accent" size={28} />
              <div>
                <h3 className="text-lg font-bold text-foreground">{t.tax.glossarTitle}</h3>
                <p className="text-muted-foreground text-sm">{t.tax.glossarDesc}</p>
              </div>
            </div>
            <ChevronRight className="text-accent transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl space-y-4">
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded">
            {t.tax.disclaimer}
          </p>
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded">
            <strong className="text-foreground">{t.tax.externalLinksDisclaimer.split(":")[0]}:</strong> {t.tax.externalLinksDisclaimer.substring(t.tax.externalLinksDisclaimer.indexOf(":") + 2)}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TaxBenefits;
