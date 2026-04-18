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
import { Building2, Wallet, Users, Gavel, Lock, Scale, FileCheck, ShieldCheck, Phone } from "lucide-react";

// Situations
const situationIcons = [Building2, Wallet, Users, Gavel];
// Proof (auf Navy): Diskretion, Faire Bewertung, Klare Vereinbarung, Verlässliche Abwicklung
const proofIcons = [Lock, Scale, FileCheck, ShieldCheck];

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
        phoneLine={{ href: "tel:+4921169583033", label: "📞 +49 211 69583033 — auch bei laufendem Verfahren" }}
        trustLine={o.heroTrustLine}
      />

      <div className="page-shell">
        {/* SITUATIONEN */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={o.situationsTitle} intro={o.situationsIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2">
              {o.situations.map((s, i) => {
                const Icon = situationIcons[i % situationIcons.length];
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <AreaCard icon={Icon} iconAlt={s.title} title={s.title} text={s.desc} />
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
                    icon={proofIcons[i % proofIcons.length]}
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
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
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
          style={{ background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
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

      {/* Sticky Mobile Bottom Bar — nur auf dieser Seite */}
      <div
        className="fixed bottom-0 inset-x-0 z-[60] md:hidden flex"
        style={{ backgroundColor: "hsl(var(--primary))", height: 56 }}
      >
        <a
          href="tel:+4921169583033"
          className="flex flex-1 items-center justify-center gap-2 text-white text-[13px] font-semibold uppercase tracking-[0.08em]"
          style={{ borderRight: "1px solid rgba(255,255,255,0.2)" }}
        >
          <Phone size={15} strokeWidth={1.75} />
          Anrufen
        </a>
        <a
          href="/kontakt"
          className="flex flex-1 items-center justify-center text-white text-[13px] font-semibold uppercase tracking-[0.08em]"
        >
          Anfragen
        </a>
      </div>
      {/* Spacer damit Content nicht hinter Sticky-Bar verschwindet */}
      <div className="md:hidden" style={{ height: 56 }} aria-hidden="true" />
    </Layout>
  );
};

export default ForOwnerInTrouble;
