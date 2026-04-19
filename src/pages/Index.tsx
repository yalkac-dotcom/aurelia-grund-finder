import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { heroSets } from "@/assets/heroImages";
import { editorial } from "@/assets/editorial";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import EditorialPoint from "@/components/sections/EditorialPoint";
import FinalCta from "@/components/sections/FinalCta";
import FaqHint from "@/components/sections/FaqHint";
import { icons3d } from "@/assets/icons3d";

const HomePage = () => {
  const { t } = useLanguage();

  // Areas (3 Wege)
  const areaImages = cardImages.areas;
  const areaLinks = ["/fuer-eigentumer-in-not", "/kontakt", "/fuer-kaeufer"];

  // Schritte — dezente 3D-Icons
  const stepIcons = [icons3d.dialogueLight, icons3d.magnifier, icons3d.contract];

  return (
    <Layout>
      <PageHero
        image={heroSets.premium}
        imageAlt="Ruhige Wohnstraße mit gepflegtem Mehrfamilienhaus bei Tageslicht – sinnbildlich für diskrete Immobilienlösungen in besonderen Situationen"
        kicker={t.home.heroKicker}
        title={t.home.heroTitle}
        description={t.home.heroDescription}
        primaryCta={{ label: t.home.heroPrimaryCta ?? t.home.finalCtaButton, to: "/kontakt" }}
        secondaryCta={{ label: t.home.heroSecondaryCta ?? "Wie wir vorgehen", href: "#ablauf" }}
        trustLine={t.home.heroTrustLine}
        imagePosition="62% center"
      />

      {/* ═══════════════════════════════════════════════════════════
          1) DREI WEGE — editoriale Areas-Sektion (luxuriöser Rhythmus)
          ─────────────────────────────────────────────────────────── */}
      <section className="surface-paper section-y-lux">
        <div className="container-premium">
          <SectionHeader
            eyebrow={t.home.areasEyebrow ?? "Drei Wege"}
            title={t.home.areasTitle}
            intro={t.home.areasIntro}
          />
          <div className="grid gap-10 md:gap-12 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.areas.map((path, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ProofCard
                  editorial
                  image={areaImages[i % areaImages.length]}
                  imageAlt={path.title}
                  index={i}
                  title={path.title}
                  text={path.desc}
                  cta={{ label: path.cta, to: areaLinks[i] }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2) PRINZIPIEN — Navy-Editorial (typografisch, ohne Icons)
          ─────────────────────────────────────────────────────────── */}
      <section className="surface-ink section-y-base relative">
        <div className="container-premium">
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
            {/* Linke Spalte — Eyebrow + Headline */}
            <Reveal>
              <div className="md:col-span-5">
                <p className="eyebrow eyebrow--dark mb-5">
                  {t.home.trustEyebrow ?? "Unsere Prinzipien"}
                </p>
                <h2 className="font-heading font-medium text-white leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem] lg:text-[2.45rem]">
                  {t.home.trustTitle}
                </h2>
                <p className="mt-6 max-w-md text-[0.95rem] leading-[1.85] text-white/70">
                  {t.home.trustText}
                </p>
              </div>
            </Reveal>

            {/* Rechte Spalte — typografische Liste */}
            {t.home.proofPoints && t.home.proofPoints.length > 0 && (
              <div className="md:col-span-7 grid gap-y-10 gap-x-10 sm:grid-cols-2">
                {t.home.proofPoints.map((point, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.06}>
                    <EditorialPoint
                      index={i}
                      title={point.title}
                      text={point.text}
                      tone="dark"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {/* Vertraulichkeits-Insel — ruhige editoriale Inschrift */}
          <Reveal delay={0.25}>
            <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
              <div className="h-px w-12 mx-auto bg-accent/50 mb-6" aria-hidden="true" />
              <h3 className="font-heading text-[1.15rem] md:text-[1.35rem] font-medium text-white leading-snug">
                {t.home.trustClaimTitle}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.85] text-white/72">
                {t.home.trustClaimText}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3) ABLAUF — Stone-Layer, asymmetrisch eingefasst
          ─────────────────────────────────────────────────────────── */}
      <section
        id="ablauf"
        className="bg-gradient-stone-cream section-y-base scroll-mt-24"
      >
        <div className="container-premium">
          <SectionHeader
            eyebrow={t.home.stepsEyebrow ?? "So arbeiten wir"}
            title={t.home.stepsTitle}
          />
          <div className="grid gap-8 md:gap-10 sm:grid-cols-3">
            {t.home.steps.map((item, i) => (
              <ProcessStep
                key={i}
                index={i}
                total={t.home.steps.length}
                title={item.title}
                desc={item.desc}
                iconImage={stepIcons[i % stepIcons.length]}
                iconAlt={item.title}
              />
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 md:mt-14 max-w-2xl mx-auto text-center">
              <p className="text-[0.85rem] leading-[1.85] text-muted-foreground italic">
                {t.home.stepsNote}
              </p>
              <Link
                to="/wie-es-funktioniert"
                className="mt-6 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-primary border-b border-accent/60 pb-1 transition-colors hover:text-accent hover:border-accent"
              >
                {t.home.stepsLink}
                <ArrowRight size={13} className="text-accent" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4) HALTUNG / EINWANDBEHANDLUNG — editorialer Text-Block
          ─────────────────────────────────────────────────────────── */}
      {t.home.objections && t.home.objections.length > 0 && (
        <section className="surface-cream section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow={t.home.objectionsEyebrow ?? "Was Eigentümer fragen"}
              title={t.home.objectionsTitle ?? ""}
              intro={t.home.objectionsIntro}
              align="left"
            />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 max-w-5xl">
              {t.home.objections.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ObjectionCard q={item.q} a={item.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          5) FAQ-HINWEIS — websiteweit einheitlich
          ─────────────────────────────────────────────────────────── */}
      <FaqHint />

      {/* ═══════════════════════════════════════════════════════════
          6) FINAL CTA — editorialer Split (Cream + Navy-Insel)
          ─────────────────────────────────────────────────────────── */}
      <FinalCta
        variant="split"
        eyebrow={t.home.finalCtaEyebrow ?? "Nächster Schritt"}
        title={t.home.finalCtaTitle}
        text={t.home.finalCtaText}
        buttonLabel={t.home.finalCtaButton}
        buttonTo="/kontakt"
      />
    </Layout>
  );
};

export default HomePage;
