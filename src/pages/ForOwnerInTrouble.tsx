import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import AreaCard from "@/components/sections/AreaCard";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { icons3d } from "@/assets/icons3d";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Lock,
  Scale,
  Handshake,
  CheckCircle2,
} from "lucide-react";

// Situations: komplexe Eigentumsverhältnisse → Gebäude, Finanzielle Belastung → Wallet, Konflikte zwischen Eigentümern → Erben/Mehrere, Zwangsversteigerung → Hammer
const situationImages = [icons3d.building, icons3d.wallet, icons3d.heirs, icons3d.gavel];
// Proof (auf Navy): Diskretion, Faire Bewertung, Klare Vereinbarung (Handschlag), Verlässliche Abwicklung
const proofImagesLight = [icons3d.lockLight, icons3d.scaleLight, icons3d.handshakeLight, icons3d.checkLight];

const ForOwnerInTrouble = () => {
  const { t } = useLanguage();
  const o = t.ownerInTrouble;

  return (
    <Layout>
      <PageHero
        image={heroSets.building}
        imageAlt={o.heroImageAlt}
        kicker={o.heroKicker}
        title={o.heroTitle}
        description={o.heroDescription}
        primaryCta={{ label: o.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: o.heroSecondaryCta, href: "#ablauf" }}
        trustLine={o.heroTrustLine}
      />

      <div className="page-shell">
        {/* SITUATIONEN */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={o.situationsTitle} intro={o.situationsIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2">
              {o.situations.map((s, i) => {
                const img = situationImages[i % situationImages.length];
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <AreaCard iconImage={img} iconAlt={s.title} title={s.title} text={s.desc} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* UNSERE LÖSUNG (Navy + Proof Points) */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={o.solutionTitle} intro={o.solutionText} tone="dark" />
            <Reveal delay={0.1}>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {o.proofPoints.map((p, i) => (
                  <ProofCard
                    key={i}
                    iconImage={proofImagesLight[i % proofImagesLight.length]}
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
        <section
          id="ablauf"
          className="section-premium scroll-mt-24"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={o.stepsTitle} />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {o.steps.map((s, i) => (
                <ProcessStep
                  key={i}
                  index={i}
                  total={o.steps.length}
                  title={s.title}
                  desc={s.desc}
                />
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                {o.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* EINWANDBEHANDLUNG */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={o.objectionsTitle} intro={o.objectionsIntro} />
            <div className="grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {o.objections.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <ObjectionCard q={item.q} a={item.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 10% 96%) 0%, hsl(30 12% 97.5%) 100%)" }}
        >
          <div className="container-premium max-w-3xl">
            <SectionHeader title={o.faqTitle} intro={o.faqIntro} />
            <FaqBlock items={o.faqItems} />
          </div>
        </section>

        <FinalCta
          title={o.finalCtaTitle}
          text={o.finalCtaText}
          buttonLabel={o.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default ForOwnerInTrouble;
