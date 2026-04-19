import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import EditorialPoint from "@/components/sections/EditorialPoint";
import FinalCta from "@/components/sections/FinalCta";
import FaqHint from "@/components/sections/FaqHint";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  const w = t.howItWorks;

  useEffect(() => {
    document.title = `${w.heroTitle} – Aurelia Grundbesitz GmbH`;
  }, [w.heroTitle]);

  return (
    <Layout>
      <PageHero
        image={heroSets.arbeitsweise}
        imageAlt={w.heroImageAlt}
        kicker={w.heroKicker}
        title={w.heroTitle}
        description={w.heroDescription}
        primaryCta={{ label: w.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: w.heroSecondaryCta, href: "#ablauf" }}
        trustLine={w.heroTrustLine}
      />

      <div className="page-shell">
        {/* ═══════════════════════════════════════════════════════════
            1) INTRO — ruhiger editorialer Auftakt auf Paper
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-base">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-5">Unsere Arbeitsweise</p>
                <h2 className="font-heading font-medium text-primary leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.35rem] lg:text-[2.55rem]">
                  {w.introTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-[0.96rem] md:text-[1rem] leading-[1.85] text-muted-foreground">
                  {w.introText}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2) SEGMENTE — EditorialPoint-Liste auf Stone-Layer
            ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-stone-cream section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Wo wir tätig werden"
              title={w.segmentsTitle}
              intro={w.segmentsIntro}
            />
            <div className="grid gap-y-10 gap-x-12 md:grid-cols-3 max-w-5xl mx-auto">
              {w.segments.map((s, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <EditorialPoint
                    index={i}
                    title={s.title}
                    text={s.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3) BESTAND-STRATEGIE — Navy-Editorial mit asymmetrischer Spalte
            ─────────────────────────────────────────────────────────── */}
        <section
          id="ablauf"
          className="surface-ink section-y-base scroll-mt-24"
        >
          <div className="container-premium">
            <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
              <Reveal>
                <div className="md:col-span-5">
                  <p className="eyebrow eyebrow--dark mb-5">Strategie</p>
                  <h2 className="font-heading font-medium text-white leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem] lg:text-[2.45rem]">
                    {w.holdTitle}
                  </h2>
                  <p className="mt-6 max-w-md text-[0.95rem] leading-[1.85] text-white/70">
                    {w.holdIntro}
                  </p>
                </div>
              </Reveal>

              <div className="md:col-span-7 grid gap-y-10 gap-x-10 sm:grid-cols-2">
                {w.holdSteps.map((s, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.06}>
                    <EditorialPoint
                      index={i}
                      title={s.title}
                      text={s.desc}
                      tone="dark"
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.3}>
              <p className="mt-14 mx-auto max-w-2xl text-center text-[0.85rem] leading-[1.85] text-white/65 italic">
                {w.holdNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4) GRUNDPRINZIPIEN — EditorialPoint-Liste auf Cream
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-cream section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Was uns leitet"
              title={w.principlesTitle}
              intro={w.principlesIntro}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {w.principles.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <EditorialPoint
                    index={i}
                    title={p.title}
                    text={p.text}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5) FAQ-Hinweis */}
        <FaqHint />

        {/* 6) Final CTA — editorial Split */}
        <FinalCta
          variant="split"
          eyebrow="Nächster Schritt"
          title={w.finalCtaTitle}
          text={w.finalCtaText}
          buttonLabel={w.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default HowItWorks;
