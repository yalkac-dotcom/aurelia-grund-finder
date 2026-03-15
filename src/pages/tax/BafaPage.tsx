import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-bafa.jpg";
import { Banknote, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const links = [
  { label: "BAFA", url: "https://www.bafa.de" },
  { label: "BAFA – Förderübersicht", url: "https://www.bafa.de/DE/Energie/Energieeffizienz/energieeffizienz_node.html" },
];

const BafaPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.tax.bafaTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="text-accent" size={32} />
            <span className="text-xs font-medium uppercase tracking-widest text-accent">{t.tax.categoryFunding}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.tax.bafaTitle}</h1>
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
          <SectionHeading title={t.tax.bafaSectionTitle} />
          <p className="text-muted-foreground leading-relaxed mb-12 text-lg">{t.tax.bafaIntro}</p>
          <div className="space-y-10">
            {t.tax.bafaSections.map((s) => (
              <div key={s.heading} className="border-l-2 border-accent pl-6">
                <h3 className="text-base font-bold text-foreground mb-2">{s.heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl">
          <h3 className="text-sm font-bold text-foreground mb-4">{t.tax.furtherLinks}</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            {links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors">
                <ExternalLink size={14} />
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic leading-relaxed">{t.tax.taxDisclaimer}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded mt-16">{t.tax.disclaimer}</p>
        </div>
      </section>
    </Layout>
  );
};

export default BafaPage;
