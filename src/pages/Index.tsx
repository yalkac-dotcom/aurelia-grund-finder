import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/home/HomeHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Users, Building } from "lucide-react";

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
        {/* Trust Pillars */}
        <section className="border-b border-teal-100/30 bg-gradient-warm">
          <div className="page-frame page-frame-wide py-5 md:py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              {t.landing.trustPillars.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-teal-600/50" />
                    <p className="text-[0.78rem] font-medium leading-[1.5] text-foreground md:text-[0.82rem]">
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Positioning / Problem Section */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="glass-card card-hover p-8 md:p-12">
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
                    <div className="flex items-center gap-3 border-b border-teal-100/30 py-3">
                      <CheckCircle size={14} className="shrink-0 text-teal-600" />
                      <p className="text-[0.9rem] leading-[1.5] text-foreground">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process / Arbeitsweise Section */}
        <section
          id="arbeitsweise"
          className="scroll-mt-20 section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
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
            <div className="glass-card p-6 md:p-10">
              {t.landing.processSteps.map((step, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    className={`grid grid-cols-[3rem_1fr] items-start py-6 md:grid-cols-[4.5rem_1fr] ${
                      i < t.landing.processSteps.length - 1 ? "border-b border-teal-100/20" : ""
                    }`}
                  >
                    <div className="icon-badge w-10 h-10 md:w-12 md:h-12 rounded-lg">
                      <p className="text-[1.1rem] font-heading font-semibold text-teal-700 md:text-[1.3rem]">
                        {step.num}
                      </p>
                    </div>
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

        {/* Entrepreneur / Trust Section */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <div className="glass-card-dark p-8 md:p-12">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-400">
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
                <p className="border-l-2 border-teal-600/30 pl-4 text-[0.86rem] leading-[1.75] text-white/55">
                  {t.landing.entrepreneurText2}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="glass-card p-8 md:p-12">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {t.landing.whyLabel}
                </p>
                <h2 className="mb-8 text-[1.3rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.7rem]">
                  {t.landing.whyTitle}
                </h2>
              </Reveal>
              <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
                {t.landing.whyPoints.map((point, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="border-b border-teal-100/20 py-4 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={16} className="shrink-0 text-teal-600" />
                        <p className="text-[0.93rem] font-heading font-semibold leading-[1.4] text-foreground">
                          {point.title}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not-For Section */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(32 16% 96%) 100%)" }}
        >
          <div className="container-premium">
            <div className="glass-card p-8 md:p-12">
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

        {/* Objections Section */}
        <section className="section-premium section-navy-warm text-white">
          <div className="container-premium">
            <div className="glass-card-dark p-8 md:p-12">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-400">
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

        {/* FAQ Section */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="glass-card p-8 md:p-12">
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {t.landing.homeFaqLabel}
                </p>
                <h2 className="mb-8 text-[1.3rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.7rem]">
                  {t.landing.homeFaqTitle}
                </h2>
              </Reveal>
              <div className="max-w-2xl">
                {t.landing.homeFaqItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className={`py-6 ${i < t.landing.homeFaqItems.length - 1 ? "border-b border-teal-100/20" : ""}`}>
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

        {/* CTA Section */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <div className="mx-auto mb-10 h-[2px] w-10 rounded-full bg-white/30" />
                <h2 className="mb-6 text-[1.4rem] font-heading font-semibold leading-[1.2] text-white text-balance md:text-[1.85rem]">
                  {t.landing.ctaTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-lg text-[0.92rem] leading-[1.75] text-white/75">
                  {t.landing.ctaText}
                </p>
                <div>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                  >
                    {t.landing.ctaButton}
                    <ArrowRight size={13} />
                  </Link>
                </div>
                <p className="mt-5 text-[0.75rem] tracking-wide text-white/50">
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
