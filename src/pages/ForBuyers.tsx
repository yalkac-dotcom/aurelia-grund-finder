import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { icons3d } from "@/assets/icons3d";
import { editorial } from "@/assets/editorial";
import { useLanguage } from "@/i18n/LanguageContext";

// Features (4) — 3D-Icons im ProofCard-Stil
const featureIcons = [icons3d.scale, icons3d.wallet, icons3d.house, icons3d.contract];
// Proof (Navy) — 3D-Icons in light-Variante
const proofIcons = [icons3d.userCheckLight, icons3d.documentLight, icons3d.scaleLight, icons3d.checkCircleLight];
// Steps (4) — eigene 3D-Icons
const stepIcons = [icons3d.dialogue, icons3d.house, icons3d.scale, icons3d.contract];

const ForBuyers = () => {
  const { t } = useLanguage();
  const b = t.buyers;

  return (
    <Layout>
      <PageHero
        image={heroSets.contact}
        imageAlt={b.heroImageAlt}
        kicker={b.heroKicker}
        title={b.heroTitle}
        description={b.heroDescription}
        primaryCta={{ label: b.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: b.heroSecondaryCta, href: "#ablauf" }}
        trustLine={b.heroTrustLine}
      />

      <div className="page-shell">
        {/* MERKMALE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={b.featuresTitle} intro={b.featuresIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {b.features.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ProofCard
                    iconImage={featureIcons[i % featureIcons.length]}
                    iconAlt={f.title}
                    index={i}
                    title={f.title}
                    text={f.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO TEASER (Navy) */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={b.portfolioTitle} intro={b.portfolioText} tone="dark" />
            <Reveal delay={0.1}>
              <div className="text-center">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/20"
                >
                  {b.portfolioCta}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GRUNDE / PROOF POINTS */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="mb-12 md:mb-16 overflow-hidden rounded-sm border-l-2 border-l-[hsl(45_70%_55%_/_0.5)]">
                <img
                  src={editorial.interiorCalm}
                  alt="Ruhiger, lichtdurchfluteter Wohnraum mit Eichenparkett – sinnbildlich für geprüfte Qualitätsimmobilien aus dem Aurelia-Bestand"
                  loading="lazy"
                  width={1600}
                  height={520}
                  className="h-56 md:h-72 w-full object-cover"
                />
              </div>
            </Reveal>
            <SectionHeader title={b.proofTitle} intro={b.proofIntro} />
            <Reveal delay={0.1}>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {b.proofPoints.map((p, i) => (
                  <ProofCard
                    key={i}
                    iconImage={proofIcons[i % proofIcons.length]}
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

        {/* ABLAUF */}
        <section id="ablauf" className="section-premium bg-gradient-warm scroll-mt-24">
          <div className="container-premium">
            <SectionHeader title={b.stepsTitle} />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {b.steps.map((s, i) => (
                <ProcessStep
                  key={i}
                  index={i}
                  total={b.steps.length}
                  title={s.title}
                  desc={s.desc}
                  iconImage={stepIcons[i % stepIcons.length]}
                  iconAlt={s.title}
                />
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                {b.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* EINWANDE */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={b.objectionsTitle} intro={b.objectionsIntro} />
            <div className="grid gap-6 md:gap-7 md:grid-cols-3">
              {b.objections.map((o, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ObjectionCard q={o.q} a={o.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium max-w-3xl">
            <SectionHeader title={b.faqTitle} intro={b.faqIntro} />
            <FaqBlock items={b.faqItems} />
          </div>
        </section>

        <FinalCta
          title={b.finalCtaTitle}
          text={b.finalCtaText}
          buttonLabel={b.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default ForBuyers;
