import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();
  const f = t.faqPage;

  useEffect(() => {
    document.title = `${f.title} – Aurelia Grundbesitz GmbH`;
  }, [f.title]);

  return (
    <Layout>
      {/* HERO – schlank, ruhig */}
      <section className="bg-gradient-warm border-b border-border/40">
        <div className="container-premium py-16 md:py-20 text-center">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent mb-3">
              {f.kicker}
            </p>
            <h1 className="font-heading font-semibold text-primary text-[1.85rem] md:text-[2.4rem] leading-tight tracking-tight mb-4">
              {f.title}
            </h1>
            <p className="mx-auto max-w-xl text-[0.95rem] leading-[1.75] text-muted-foreground">
              {f.intro}
            </p>
          </Reveal>
        </div>
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
