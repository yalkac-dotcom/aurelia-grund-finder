import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";

import ProcessStep from "@/components/sections/ProcessStep";
import FinalCta from "@/components/sections/FinalCta";
import { Link } from "react-router-dom";
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
        size="compact"
      />

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm !pt-16 md:!pt-20 !pb-12 md:!pb-16">
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
            <div className="grid gap-8 md:gap-10 md:grid-cols-3">
              {w.segments.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border-l border-accent/40 pl-6">
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-[1.05rem] font-heading font-semibold text-primary leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-[1.75] text-muted-foreground">{s.desc}</p>
                  </div>
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
              <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {w.principles.map((p, i) => (
                  <div key={i} className="border-l border-accent/40 pl-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2.5 text-[0.98rem] font-heading font-semibold text-primary leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.75] text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hinweis auf zentrale FAQ */}
        <section className="bg-gradient-warm">
          <div className="container-premium py-10 md:py-12 text-center">
            <p className="text-[0.9rem] leading-[1.7] text-muted-foreground">
              Weitere Fragen beantworten wir in unseren{" "}
              <Link to="/faq" className="text-primary underline-offset-4 hover:underline">
                FAQ
              </Link>
              .
            </p>
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
