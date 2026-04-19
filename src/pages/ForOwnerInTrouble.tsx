import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import EditorialPoint from "@/components/sections/EditorialPoint";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FinalCta from "@/components/sections/FinalCta";
import FaqHint from "@/components/sections/FaqHint";
import { heroSets } from "@/assets/heroImages";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";
import { Phone } from "lucide-react";

const situationImages = cardImages.ownerSituations;

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
        {/* ═══════════════════════════════════════════════════════════
            1) SITUATIONEN — editorial ProofCards (asymmetrisch, hairline)
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-lux">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Typische Konstellationen"
              title={o.situationsTitle}
              intro={o.situationsIntro}
            />
            <div className="grid gap-10 md:gap-12 lg:gap-14 sm:grid-cols-2 max-w-5xl mx-auto">
              {o.situations.map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <ProofCard
                    editorial
                    image={situationImages[i % situationImages.length]}
                    imageAlt={s.title}
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
            2) UNSERE LÖSUNG — Navy-Editorial mit asymmetrischer Spalte
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-ink section-y-base">
          <div className="container-premium">
            <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
              <Reveal>
                <div className="md:col-span-5">
                  <p className="eyebrow eyebrow--dark mb-5">Unser Ansatz</p>
                  <h2 className="font-heading font-medium text-white leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem] lg:text-[2.45rem]">
                    {o.solutionTitle}
                  </h2>
                  <p className="mt-6 max-w-md text-[0.95rem] leading-[1.85] text-white/70">
                    {o.solutionText}
                  </p>
                </div>
              </Reveal>

              <div className="md:col-span-7 grid gap-y-10 gap-x-10 sm:grid-cols-2">
                {o.proofPoints.map((p, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.06}>
                    <EditorialPoint
                      index={i}
                      title={p.title}
                      text={p.text}
                      tone="dark"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3) ABLAUF — Stone-Layer, EditorialPoint-Liste statt Icon-Karten
            ─────────────────────────────────────────────────────────── */}
        <section
          id="ablauf"
          className="bg-gradient-stone-cream section-y-base scroll-mt-24"
        >
          <div className="container-premium">
            <SectionHeader
              eyebrow="So gehen wir vor"
              title={o.stepsTitle}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {o.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <EditorialPoint
                    index={i}
                    title={s.title}
                    text={s.desc}
                  />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-12 mx-auto max-w-2xl text-center text-[0.85rem] leading-[1.85] text-muted-foreground italic">
                {o.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4) EINWANDBEHANDLUNG — editorialer Text-Block auf Cream
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-cream section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Häufige Bedenken"
              title={o.objectionsTitle}
              intro={o.objectionsIntro}
              align="left"
            />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-3 max-w-5xl">
              {o.objections.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <ObjectionCard q={item.q} a={item.a} />
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
          title={o.finalCtaTitle}
          text={o.finalCtaText}
          buttonLabel={o.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>

      {/* Sticky Mobile Bottom Bar */}
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
      <div className="md:hidden" style={{ height: 56 }} aria-hidden="true" />
    </Layout>
  );
};

export default ForOwnerInTrouble;
