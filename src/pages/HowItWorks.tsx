import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";
import { icons3d } from "@/assets/icons3d";

// Hold-Steps (5) — einzige Icon-Akzente auf der Seite (zentrale Prozessschritte)
const holdStepIcons = [icons3d.key, icons3d.compassLight, icons3d.building, icons3d.shieldLight, icons3d.foundationLight];

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
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={w.introTitle} intro={w.introText} />
          </div>
        </section>

        {/* SEGMENTE */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={w.segmentsTitle} intro={w.segmentsIntro} />
            <div className="grid gap-6 md:gap-7 md:grid-cols-3">
              {w.segments.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ProofCard
                    iconImage={segmentIcons[i % segmentIcons.length]}
                    iconAlt={s.title}
                    index={i}
                    title={s.title}
                    text={s.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BESTAND-STRATEGIE (Navy + Steps) */}
        <section id="ablauf" className="section-premium section-navy text-white scroll-mt-24">
          <div className="container-premium">
            <SectionHeader title={w.holdTitle} intro={w.holdIntro} tone="dark" />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {w.holdSteps.map((s, i) => (
                <ProcessStep
                  key={i}
                  index={i}
                  total={w.holdSteps.length}
                  title={s.title}
                  desc={s.desc}
                  iconImage={holdStepIcons[i % holdStepIcons.length]}
                  iconAlt={s.title}
                />
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-white/65 italic">
                {w.holdNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* GRUNDPRINZIPIEN */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={w.principlesTitle} intro={w.principlesIntro} />
            <Reveal delay={0.1}>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {w.principles.map((p, i) => (
                  <ProofCard
                    key={i}
                    iconImage={principleIcons[i % principleIcons.length]}
                    iconAlt={p.title}
                    index={i}
                    title={p.title}
                    text={p.text}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
        >
          <div className="container-premium max-w-3xl">
            <SectionHeader title={w.faqTitle} intro={w.faqIntro} />
            <FaqBlock items={w.faqItems} />
          </div>
        </section>

        <FinalCta
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
