import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/home/HomeHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

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
      <section className="border-b border-border/30 bg-[hsl(32_16%_95%)]">
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
      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-4xl">
          <div className="content-frame">
            <Reveal>
              <h2 className="text-[1.4rem] md:text-[1.9rem] font-heading font-semibold text-foreground leading-[1.18] mb-5 text-balance">
                {t.landing.positioningTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8 max-w-2xl">
                {t.landing.positioningText}
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {t.landing.situationsList.map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-center gap-3 py-3 border-b border-border/20">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    <p className="text-foreground text-[0.9rem] leading-[1.5]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARBEITSWEISE */}
      <section id="arbeitsweise" className="py-16 md:py-24 scroll-mt-20" style={{ background: 'linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)' }}>
        <div className="container max-w-4xl">
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
          <div className="content-frame">
            {t.landing.processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] items-start py-6 ${i < t.landing.processSteps.length - 1 ? 'border-b border-border/15' : ''}`}>
                  <p className="text-[1.5rem] md:text-[1.7rem] font-heading font-semibold text-accent/40">
                    {step.num}
                  </p>
                  <div>
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.84rem] leading-[1.75] max-w-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UNTERNEHMERISCHER ANSATZ — dark focus */}
      <section className="py-16 md:py-24 section-navy text-white">
        <div className="container max-w-4xl">
          <div className="content-frame-dark">
            <Reveal>
              <p className="text-[hsl(195_50%_55%)] font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
                {t.landing.entrepreneurLabel}
              </p>
              <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-white leading-[1.18] mb-6 text-balance">
                {t.landing.entrepreneurTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-white/75 text-[0.93rem] leading-[1.85] mb-6">
                {t.landing.entrepreneurText}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/55 text-[0.86rem] leading-[1.75] border-l-2 border-[hsl(195_50%_40%)]/30 pl-4">
                {t.landing.entrepreneurText2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. WARUM AURELIA */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-4xl">
          <div className="content-frame">
            <Reveal>
              <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
                {t.landing.whyLabel}
              </p>
              <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-8 text-balance">
                {t.landing.whyTitle}
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              {t.landing.whyPoints.map((point, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="py-4 border-b border-border/15 last:border-b-0">
                    <p className="text-foreground text-[0.93rem] font-heading font-semibold leading-[1.4]">
                      {point.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABGRENZUNG */}
      <section className="py-14 md:py-20" style={{ background: 'linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(32 16% 96%) 100%)' }}>
        <div className="container max-w-4xl">
          <div className="content-frame">
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
        </div>
      </section>

      {/* 8. HÄUFIGE BEDENKEN */}
      <section className="py-16 md:py-24 section-navy-warm text-white">
        <div className="container max-w-4xl">
          <div className="content-frame-dark">
            <Reveal>
              <p className="text-[hsl(195_50%_55%)] font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
                {t.landing.objectionsLabel}
              </p>
              <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-white leading-[1.18] mb-8 text-balance">
                {t.landing.objectionsTitle}
              </h2>
            </Reveal>
            <div className="max-w-2xl">
              {t.landing.objections.map((obj, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className={`py-6 ${i < t.landing.objections.length - 1 ? 'border-b border-white/8' : ''}`}>
                    <p className="text-[0.96rem] font-heading font-semibold text-white/90 mb-2.5 italic">
                      „{obj.q}"
                    </p>
                    <p className="text-white/60 text-[0.86rem] leading-[1.85]">
                      {obj.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-4xl">
          <div className="content-frame">
            <Reveal>
              <p className="text-accent font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">
                {t.landing.homeFaqLabel}
              </p>
              <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.18] mb-8 text-balance">
                {t.landing.homeFaqTitle}
              </h2>
            </Reveal>
            <div className="max-w-2xl">
              {t.landing.homeFaqItems.map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className={`py-6 ${i < t.landing.homeFaqItems.length - 1 ? 'border-b border-border/15' : ''}`}>
                    <h3 className="text-[0.92rem] font-heading font-semibold text-foreground text-left mb-2">
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground text-[0.86rem] leading-[1.85]">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. ABSCHLUSS-CTA */}
      <section className="relative py-20 md:py-28 cta-section-dark text-white">
        <div className="relative container max-w-3xl text-center">
          <Reveal>
            <div className="w-10 h-[2px] bg-[hsl(195_50%_45%)] rounded-full mx-auto mb-10" />
            <h2 className="text-[1.4rem] md:text-[1.85rem] font-heading font-semibold text-white leading-[1.2] mb-6 text-balance">
              {t.landing.ctaTitle}
            </h2>
            <p className="text-white/65 text-[0.92rem] leading-[1.75] mb-10 max-w-lg mx-auto">
              {t.landing.ctaText}
            </p>
            <div>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 text-[0.72rem] font-semibold tracking-[0.15em] uppercase hover:bg-accent/88 transition-all duration-300 rounded-sm shadow-[0_8px_24px_-8px_hsl(195_55%_20%_/_0.4)]"
              >
                {t.landing.ctaButton}
                <ArrowRight size={13} />
              </Link>
            </div>
            <p className="text-white/40 text-[0.75rem] mt-5 tracking-wide">
              Unverbindlich · Persönlich · Ohne öffentliche Vermarktung
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
