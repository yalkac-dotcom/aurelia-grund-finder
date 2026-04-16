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
      <HomeHero />

      <div className="page-shell">
        <section className="border-b border-border/30 bg-[hsl(32_16%_95%)]">
          <div className="page-frame page-frame-wide py-5 md:py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              {t.landing.trustPillars.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-accent/50" />
                    <p className="text-[0.78rem] font-medium leading-[1.5] text-foreground md:text-[0.82rem]">
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cream py-16 md:py-24">
          <div className="page-frame">
            <div className="content-frame">
              <Reveal>
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.landing.positioningTitle}
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mb-8 max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                  {t.landing.positioningText}
                </p>
              </Reveal>
              <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {t.landing.situationsList.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className="flex items-center gap-3 border-b border-border/20 py-3">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-[0.9rem] leading-[1.5] text-foreground">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="arbeitsweise"
          className="scroll-mt-20 py-16 md:py-24"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="page-frame">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {t.landing.processLabel}
              </p>
              <h2 className="mb-2 max-w-xl text-[1.3rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.7rem]">
                {t.landing.processTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mb-10 max-w-lg text-sm leading-[1.7] text-muted-foreground">
                {t.landing.processSubtitle}
              </p>
            </Reveal>
            <div className="content-frame">
              {t.landing.processSteps.map((step, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    className={`grid grid-cols-[3rem_1fr] items-start py-6 md:grid-cols-[4.5rem_1fr] ${
                      i < t.landing.processSteps.length - 1 ? "border-b border-border/15" : ""
                    }`}
                  >
                    <p className="text-[1.5rem] font-heading font-semibold text-accent/40 md:text-[1.7rem]">
                      {step.num}
                    </p>
                    <div>
                      <h3 className="mb-1.5 text-[0.95rem] font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="max-w-lg text-[0.84rem] leading-[1.75] text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-navy py-16 text-white md:py-24">
          <div className="page-frame">
            <div className="content-frame-dark">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[hsl(195_50%_55%)]">
                  {t.landing.entrepreneurLabel}
                </p>
                <h2 className="mb-6 text-[1.3rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.7rem]">
                  {t.landing.entrepreneurTitle}
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mb-6 text-[0.93rem] leading-[1.85] text-white/75">
                  {t.landing.entrepreneurText}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="border-l-2 border-[hsl(195_50%_40%)]/30 pl-4 text-[0.86rem] leading-[1.75] text-white/55">
                  {t.landing.entrepreneurText2}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-cream py-16 md:py-24">
          <div className="page-frame">
            <div className="content-frame">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  {t.landing.whyLabel}
                </p>
                <h2 className="mb-8 text-[1.3rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.7rem]">
                  {t.landing.whyTitle}
                </h2>
              </Reveal>
              <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
                {t.landing.whyPoints.map((point, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="border-b border-border/15 py-4 last:border-b-0">
                      <p className="text-[0.93rem] font-heading font-semibold leading-[1.4] text-foreground">
                        {point.title}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-14 md:py-20"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(32 16% 96%) 100%)" }}
        >
          <div className="page-frame">
            <div className="content-frame">
              <Reveal>
                <h2 className="mb-5 text-[1.15rem] font-heading font-semibold leading-[1.2] text-foreground text-balance md:text-[1.4rem]">
                  Wann wir nicht der richtige Ansprechpartner sind
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mb-4 max-w-2xl text-[0.9rem] leading-[1.8] text-muted-foreground">
                  Nicht jede Anfrage passt zu unserem Ansatz. Wenn Sie eine klassische öffentliche Vermarktung, ein breites Maklernetzwerk oder eine standardisierte Verkaufsstrecke suchen, sind andere Anbieter wahrscheinlich passender.
                </p>
                <p className="max-w-2xl text-[0.9rem] leading-[1.8] text-muted-foreground">
                  Aurelia wird dort relevant, wo Diskretion, Struktur und unternehmerische Entscheidungsfähigkeit wichtiger sind als Reichweite und Vermarktungsroutine.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-navy-warm py-16 text-white md:py-24">
          <div className="page-frame">
            <div className="content-frame-dark">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[hsl(195_50%_55%)]">
                  {t.landing.objectionsLabel}
                </p>
                <h2 className="mb-8 text-[1.3rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.7rem]">
                  {t.landing.objectionsTitle}
                </h2>
              </Reveal>
              <div className="max-w-2xl">
                {t.landing.objections.map((obj, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className={`py-6 ${i < t.landing.objections.length - 1 ? "border-b border-white/8" : ""}`}>
                      <p className="mb-2.5 text-[0.96rem] font-heading font-semibold italic text-white/90">
                        „{obj.q}"
                      </p>
                      <p className="text-[0.86rem] leading-[1.85] text-white/60">{obj.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-cream py-16 md:py-24">
          <div className="page-frame">
            <div className="content-frame">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  {t.landing.homeFaqLabel}
                </p>
                <h2 className="mb-8 text-[1.3rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.7rem]">
                  {t.landing.homeFaqTitle}
                </h2>
              </Reveal>
              <div className="max-w-2xl">
                {t.landing.homeFaqItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className={`py-6 ${i < t.landing.homeFaqItems.length - 1 ? "border-b border-border/15" : ""}`}>
                      <h3 className="mb-2 text-left text-[0.92rem] font-heading font-semibold text-foreground">
                        {item.q}
                      </h3>
                      <p className="text-[0.86rem] leading-[1.85] text-muted-foreground">{item.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section-dark relative py-20 text-white md:py-28">
          <div className="page-frame">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <div className="mx-auto mb-10 h-[2px] w-10 rounded-full bg-[hsl(195_50%_45%)]" />
                <h2 className="mb-6 text-[1.4rem] font-heading font-semibold leading-[1.2] text-white text-balance md:text-[1.85rem]">
                  {t.landing.ctaTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-lg text-[0.92rem] leading-[1.75] text-white/65">
                  {t.landing.ctaText}
                </p>
                <div>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2.5 rounded-sm bg-accent px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_24px_-8px_hsl(195_55%_20%_/_0.4)] transition-all duration-300 hover:bg-accent/88"
                  >
                    {t.landing.ctaButton}
                    <ArrowRight size={13} />
                  </Link>
                </div>
                <p className="mt-5 text-[0.75rem] tracking-wide text-white/40">
                  Unverbindlich · Persönlich · Ohne öffentliche Vermarktung
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
