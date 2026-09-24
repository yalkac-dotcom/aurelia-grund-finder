import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].faq.title, pageSeo[language].faq.description);
  const f = t.faqPage;
  const extras = pageExtras[language];

  return (
    <Layout>
      {/* HERO – bewusst niedriger als die übrigen Hauptseiten */}
      <section className="relative flex min-h-[300px] items-end overflow-hidden bg-background md:h-[48vh] md:max-h-[430px]">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.faq.src} srcSet={heroSets.faq.srcSet} sizes={heroSets.faq.sizes} alt={extras.shared.faqHeroAlt} className="h-full w-full object-cover object-center max-md:object-[86%_center]" priority />
        </div>
        <h1 className="sr-only">{f.title}</h1>
        {/* Text im Header, unten bündig, in Blau */}
        <div className="container-premium relative pb-4 md:pb-6">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              {f.kicker}
            </p>
            <p className="mt-2 max-w-xl text-[0.95rem] font-medium leading-[1.7] text-primary md:text-[1rem] md:leading-[1.75]">
              {f.intro}
            </p>
          </Reveal>
        </div>
        {/* Feine blaue Abschlusslinie unten am Header */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-primary/40" />
      </section>

      <div className="page-shell">
        {/* FAQ-LISTE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl space-y-4">
              {f.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.04}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full glass-card rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:shadow-md"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[0.95rem] md:text-[1rem] font-heading font-semibold text-foreground">
                          {item.q}
                        </h3>
                        <ChevronDown
                          size={20}
                          className={`text-accent transition-transform duration-300 shrink-0 mt-0.5 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <p className="text-[0.88rem] leading-[1.8] text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--primary)) 0%, hsl(var(--highlight)) 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">{f.ctaTitle}</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                {f.ctaText}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                {f.ctaButton}
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
