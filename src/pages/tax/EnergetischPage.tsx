import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-energetisch.jpg";
import { Leaf, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const links = [
  { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
  { label: "BMWi – Energieeffizienz", url: "https://www.energiewechsel.de" },
];

const EnergetischPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.tax.energetischTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-14 md:pb-18">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-accent" size={18} />
              <span className="text-white/80 font-sans text-[11px] font-medium tracking-[0.16em] uppercase">{t.tax.categoryTax}</span>
            </div>
            <h1 className="text-[2rem] md:text-[2.5rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.energetischTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-6">
        <div className="container max-w-3xl">
          <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-[0.8rem] text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={13} />
            {t.tax.backToOverview}
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-6">{t.tax.categoryTax}</p>
            <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.2] mb-8 max-w-xl text-balance">
              {t.tax.energetischSectionTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-[0.95rem] leading-[1.95] max-w-xl mb-12">{t.tax.energetischIntro}</p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.tax.energetischSections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.08}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-12 py-10 first:pt-0 last:pb-0">
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground">{s.heading}</h3>
                  <p className="text-muted-foreground text-[0.88rem] leading-[1.85]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] font-medium tracking-[0.16em] uppercase mb-6">{t.tax.furtherLinks}</p>
            <div className="flex flex-wrap gap-5 mb-8">
              {links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.85rem] text-accent hover:text-accent/80 transition-colors">
                  <ExternalLink size={12} />
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[0.75rem] text-muted-foreground italic leading-relaxed">{t.tax.taxDisclaimer}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[0.75rem] text-muted-foreground italic leading-relaxed mt-6">{t.tax.disclaimer}</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default EnergetischPage;
