import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].faq.title, pageSeo[language].faq.description);
  const f = t.faqPage;

  return (
    <Layout>
      {/* HERO – sichtbarer Titel, Bild rein dekorativ */}
      <section className="relative overflow-hidden bg-background pt-28 pb-12 md:pt-36 md:pb-16">
        <div aria-hidden="true" className="absolute inset-0 opacity-25">
          <OptimizedImg src={heroSets.faq.src} srcSet={heroSets.faq.srcSet} sizes={heroSets.faq.sizes} alt="" className="h-full w-full object-cover object-center" priority />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="container-premium relative">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">{f.kicker}</p>
            <h1 className="mt-3 font-heading text-[2rem] font-semibold leading-tight text-primary md:text-[2.6rem]">{f.title}</h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.75] text-foreground/80 md:text-[1rem]">{f.intro}</p>
          </Reveal>
        </div>
      </section>

      <div className="page-shell">
        {/* FAQ-LISTE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            {true ? (
            <div className="mx-auto max-w-[760px]">
              <div aria-hidden="true" className="mx-auto mb-10 h-px w-16 bg-accent md:mb-12" />
              <div className="space-y-5 md:space-y-6">
              {f.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.04}>
                    <div
                      className={`rounded-xl border bg-card transition-all duration-300 shadow-[0_6px_24px_-12px_hsl(var(--primary)/0.18)] ${isOpen ? "border-accent/60 shadow-[0_12px_36px_-14px_hsl(var(--primary)/0.25)]" : "border-primary/15 hover:border-accent/50"}`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-8 md:py-6"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-start gap-4">
                          <span aria-hidden="true" className="mt-[0.35rem] hidden h-4 w-px shrink-0 bg-accent md:block" />
                          <h2 className="text-[1rem] font-heading font-semibold leading-snug text-primary md:text-[1.08rem]">
                            {item.q}
                          </h2>
                        </span>
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? "border-accent bg-accent/10" : "border-primary/20"}`}>
                          <ChevronDown size={18} className={`text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-6 md:px-8 md:pb-8">
                          <div className="border-t border-accent/30 pt-5 md:pl-5">
                            <p className="text-[0.93rem] leading-[1.85] text-foreground/85">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
              </div>
            </div>
            ) : (
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
                        <h2 className="text-[0.95rem] md:text-[1rem] font-heading font-semibold text-foreground">
                          {item.q}
                        </h2>
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
            )}
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
