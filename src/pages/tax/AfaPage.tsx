import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-afa.jpg";
import { BadgePercent, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const links = [
  { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
  { label: "Finanzamt (Elster)", url: "https://www.elster.de" },
];

const AfaPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.tax.afaTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <BadgePercent className="text-accent" size={20} />
              <span className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase">{t.tax.categoryTax}</span>
            </div>
            <h1 className="text-[2.25rem] md:text-[3rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.afaTitle}
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
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.tax.afaSectionTitle}</p>
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-semibold text-foreground leading-[1.2] mb-10 max-w-2xl text-balance">
              {t.tax.afaSectionTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.95] max-w-2xl mb-16">{t.tax.afaIntro}</p>
          </Reveal>
          <div className="divide-y divide-border/60">
            {t.tax.afaSections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.08}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-14 first:pt-0 last:pb-0">
                  <h3 className="text-[1.05rem] font-heading font-semibold text-foreground">{s.heading}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-[1.85]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-accent font-sans text-[11px] tracking-[0.2em] uppercase mb-8">{t.tax.furtherLinks}</p>
            <div className="flex flex-wrap gap-6 mb-10">
              {links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.9rem] text-accent hover:text-accent/80 transition-colors">
                  <ExternalLink size={13} />
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[0.8rem] text-muted-foreground italic leading-relaxed">{t.tax.taxDisclaimer}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[0.8rem] text-muted-foreground italic leading-relaxed mt-8">{t.tax.disclaimer}</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default AfaPage;
