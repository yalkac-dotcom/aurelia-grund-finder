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
      <section className="relative h-[32vh] min-h-[240px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={t.tax.afaTitle} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <BadgePercent className="text-accent" size={16} />
              <span className="text-white/80 font-sans text-[10px] font-medium tracking-[0.16em] uppercase">{t.tax.categoryTax}</span>
            </div>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1] max-w-lg text-balance">
              {t.tax.afaTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-4">
        <div className="container max-w-3xl">
          <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-[0.8rem] text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={13} />
            {t.tax.backToOverview}
          </Link>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <div className="section-shell">
            <Reveal>
              <div className="section-shell-accent">
                <p className="text-accent font-sans text-[10px] font-medium tracking-[0.16em] uppercase mb-2">{t.tax.categoryTax}</p>
                <h2 className="text-[1.2rem] md:text-[1.55rem] font-heading font-semibold text-foreground leading-[1.2] mb-0 max-w-xl text-balance">
                  {t.tax.afaSectionTitle}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-[0.85rem] leading-[1.85] max-w-xl mt-4 mb-5">{t.tax.afaIntro}</p>
            </Reveal>
            <div className="divide-y divide-border/60">
              {t.tax.afaSections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 0.08}>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8 py-5 first:pt-0 last:pb-0">
                    <h3 className="text-[0.85rem] font-heading font-semibold text-foreground">{s.heading}</h3>
                    <p className="text-muted-foreground text-[0.82rem] leading-[1.75]">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container max-w-3xl">
          <div className="section-shell" style={{ borderColor: 'hsl(var(--border) / 0.3)', background: 'hsl(var(--background) / 0.5)' }}>
            <Reveal>
              <p className="text-accent font-sans text-[10px] font-medium tracking-[0.16em] uppercase mb-2">{t.tax.furtherLinks}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.8rem] text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink size={11} />
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="text-[0.75rem] text-muted-foreground italic leading-relaxed">{t.tax.taxDisclaimer}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.75rem] text-muted-foreground italic leading-relaxed mt-4">{t.tax.disclaimer}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AfaPage;