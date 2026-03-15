import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-services.jpg";
import { Building2, Hammer, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.services.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.services.heroTitle}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title={t.services.introTitle} subtitle={t.services.introSubtitle} />
          <p className="text-muted-foreground leading-relaxed">{t.services.introText}</p>
        </div>
      </section>

      {/* Two strategies cards */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 md:p-10 border border-border">
              <Building2 className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-4">{t.services.holdTitle}</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {t.services.holdItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 md:p-10 border border-border">
              <Hammer className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-4">{t.services.renovateTitle}</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {t.services.renovateItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title={t.services.comparisonTitle} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent">
                  {t.services.comparisonHeaders.map((h) => (
                    <th key={h} className="text-left py-3 pr-6 font-medium text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.services.comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-border">
                    <td className="py-3 pr-6 font-medium text-foreground">{row[0]}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{row[1]}</td>
                    <td className="py-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img src={heroImg} alt={t.services.experienceTitle} className="w-full h-80 object-cover" />
            <div>
              <SectionHeading title={t.services.experienceTitle} />
              <p className="text-muted-foreground leading-relaxed">{t.services.experienceText}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
