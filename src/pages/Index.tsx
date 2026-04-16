import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/home/HomeHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
    }
  }, []);

  return (
    <Layout>
      {/* 1. HERO */}
      <HomeHero />

      {/* 2. PROOF BAR */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-5xl py-5 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {t.landing.trustPillars.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-2.5">
                  <div className="w-[3px] h-4 bg-accent/50 rounded-full shrink-0 mt-0.5" />
                  <p className="text-foreground text-[0.78rem] md:text-[0.82rem] leading-[1.5] font-medium">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EINSTIEGSSITUATIONEN */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-[1.4rem] md:text-[1.9rem] font-heading font-semibold text-foreground leading-[1.18] mb-5 text-balance">
              {t.landing.positioningTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-10 max-w-2xl">
              {t.landing.positioningText}
            </p>
          </Reveal>
          <div className="space-y-3">
            {t.landing.situationsList.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 py-2.5 border-b border-border/30 last:border-b-0">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <p className="text-foreground text-[0.93rem] leading-[1.5]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARBEITSWEISE */}
      <section id="arbeitsweise" className="py-16 md:py-24 bg-secondary/30 scroll-mt-20">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
              {t.landing.processLabel}
            </p>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-2 text-balance max-w-xl">
              {t.landing.processTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-sm leading-[1.7] mb-10 max-w-lg">
              {t.landing.processSubtitle}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {t.landing.processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <p className="text-[1.6rem] font-heading font-semibold text-accent/70 mb-2">
                    {step.num}
                  </p>
                  <h3 className="text-[0.92rem] font-heading font-semibold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.82rem] leading-[1.7]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UNTERNEHMERISCHER ANSATZ — DARK */}
      <section className="py-16 md:py-24 bg-[hsl(212_55%_10%)] text-white">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-[hsl(195_50%_55%)] font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
              {t.landing.entrepreneurLabel}
            </p>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-white leading-[1.18] mb-6 text-balance">
              {t.landing.entrepreneurTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-white/75 text-[0.93rem] leading-[1.85] mb-5">
              {t.landing.entrepreneurText}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/60 text-[0.86rem] leading-[1.75] border-l-2 border-[hsl(195_50%_40%)]/40 pl-4">
              {t.landing.entrepreneurText2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. WARUM AURELIA */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
              {t.landing.whyLabel}
            </p>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-10 text-balance">
              {t.landing.whyTitle}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {t.landing.whyPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <div className="w-[3px] h-5 bg-accent/50 rounded-full shrink-0 mt-0.5" />
                  <p className="text-foreground text-[0.95rem] font-heading font-semibold">
                    {point.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABGRENZUNG — Wann wir NICHT der richtige Ansprechpartner sind */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-[1.15rem] md:text-[1.4rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 text-balance">
              Wann wir nicht der richtige Ansprechpartner sind
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.8] mb-4 max-w-2xl">
              Nicht jede Anfrage passt zu unserem Ansatz. Wenn Sie eine klassische öffentliche Vermarktung, ein breites Maklernetzwerk oder eine standardisierte Verkaufsstrecke suchen, sind andere Anbieter wahrscheinlich passender.
            </p>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.8] max-w-2xl">
              Aurelia wird dort relevant, wo Diskretion, Struktur und unternehmerische Entscheidungsfähigkeit wichtiger sind als Reichweite und Vermarktungsroutine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. HÄUFIGE BEDENKEN */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
              {t.landing.objectionsLabel}
            </p>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-10 text-balance">
              {t.landing.objectionsTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {t.landing.objections.map((obj, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-l-2 border-accent/30 pl-5 md:pl-7">
                  <p className="text-[0.98rem] font-heading font-semibold text-foreground mb-2 italic">
                    „{obj.q}"
                  </p>
                  <p className="text-muted-foreground text-[0.88rem] leading-[1.8]">
                    {obj.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
              {t.landing.homeFaqLabel}
            </p>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-10 text-balance">
              {t.landing.homeFaqTitle}
            </h2>
          </Reveal>
          <div className="space-y-0">
            {t.landing.homeFaqItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-b border-border/40 py-5 last:border-b-0">
                  <h3 className="text-[0.92rem] font-heading font-semibold text-foreground text-left mb-2.5">
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground text-[0.88rem] leading-[1.8] pr-0 md:pr-6">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ABSCHLUSS-CTA — DARK */}
      <section className="py-16 md:py-24 bg-[hsl(212_55%_10%)] text-white">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <div className="w-8 h-[2px] bg-[hsl(195_50%_45%)] rounded-full mx-auto mb-8" />
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-white leading-[1.2] mb-5 text-balance">
              {t.landing.ctaTitle}
            </h2>
            <p className="text-white/70 text-[0.9rem] leading-[1.75] mb-8 max-w-lg mx-auto">
              {t.landing.ctaText}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-[hsl(195_55%_30%)] text-white px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.15em] uppercase hover:bg-[hsl(195_55%_36%)] transition-colors duration-300 rounded-sm"
            >
              {t.landing.ctaButton}
              <ArrowRight size={13} />
            </Link>
            <p className="text-white/45 text-[0.75rem] mt-4 tracking-wide">
              Unverbindlich · Persönlich · Ohne öffentliche Vermarktung
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
