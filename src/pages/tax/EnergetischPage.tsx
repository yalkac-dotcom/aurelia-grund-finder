import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { Leaf, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";
const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const links = [
  { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
  { label: "BMWi – Energieeffizienz", url: "https://www.energiewechsel.de" },
];

const EnergetischPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative h-[32vh] min-h-[240px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.energetisch.src} srcSet={heroSets.energetisch.srcSet} sizes={heroSets.energetisch.sizes} alt={t.tax.energetischTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="text-accent" size={16} />
              <span className="text-white/90 font-sans text-xs font-medium tracking-[0.16em] uppercase">{t.tax.categoryTax}</span>
            </div>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.energetischTitle}
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

      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.16em] uppercase mb-2">{t.tax.categoryTax}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.tax.energetischSectionTitle}
                </h2>
              </div>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl mb-8">{t.tax.energetischIntro}</p>
              <div className="divide-y divide-border/30">
                {t.tax.energetischSections.map((s, i) => (
                  <Reveal key={s.heading} delay={i * 0.08}>
                    <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8 py-5 first:pt-0 last:pb-0">
                      <h3 className="text-[0.93rem] font-heading font-semibold text-foreground">{s.heading}</h3>
                      <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <p className="text-accent font-sans text-xs font-medium tracking-[0.16em] uppercase mb-4">{t.tax.furtherLinks}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink size={11} />
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">{t.tax.taxDisclaimer}</p>
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed mt-3">{t.tax.disclaimer}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default EnergetischPage;
