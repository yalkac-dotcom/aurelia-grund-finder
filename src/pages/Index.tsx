import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { heroSets } from "@/assets/heroImages";
import { editorial } from "@/assets/editorial";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";
import { icons3d } from "@/assets/icons3d";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FinalCta from "@/components/sections/FinalCta";

// Robuste, semantische Zuordnung statt Index-Mapping.
// Reihenfolge in i18n bleibt führend; jeder Eintrag bekommt zusätzlich einen
// stabilen Schlüssel und ein dediziertes Asset – Sprach-/Reihenfolgewechsel
// können die Bedeutung damit nicht mehr kippen.

type AreaKey = "notlagen" | "erbe" | "direktankauf";
type ProofKey = "diskretion" | "substanz" | "langfristigkeit" | "klarheit";
type StepKey = "kontakt" | "pruefung" | "angebot";

const HomePage = () => {
  const { t } = useLanguage();

  // 3 Bereiche – stabile Schlüssel, Assets + Routen pro Schlüssel
  const areaKeys: AreaKey[] = ["notlagen", "erbe", "direktankauf"];
  const areaAssets: Record<AreaKey, { image: string; link: string }> = {
    notlagen:      { image: cardImages.areas[0], link: "/fuer-eigentumer-in-not" },
    erbe:          { image: cardImages.areas[1], link: "/kontakt" },
    direktankauf:  { image: cardImages.areas[2], link: "/fuer-kaeufer" },
  };

  // 4 Versprechen – stabile Schlüssel, Icon pro Schlüssel (Light-Familie für Navy-Sektion)
  const proofKeys: ProofKey[] = ["diskretion", "substanz", "langfristigkeit", "klarheit"];
  const proofIcons: Record<ProofKey, string> = {
    diskretion:      icons3d.shieldLight,      // Schutz / Vertraulichkeit
    substanz:        icons3d.foundationLight,  // Fundament / Substanz
    langfristigkeit: icons3d.horizonLight,     // Horizont / Langfristigkeit
    klarheit:        icons3d.checkLight,       // Klare Entscheidung
  };

  // 3 Schritte – stabile Schlüssel; einheitliche Stilfamilie (Standard, nicht-light),
  // weil keine Light-Variante für magnifier/contract existiert.
  const stepKeys: StepKey[] = ["kontakt", "pruefung", "angebot"];
  const stepIconsByKey: Record<StepKey, string> = {
    kontakt:  icons3d.dialogue,   // Erstkontakt / Gespräch
    pruefung: icons3d.magnifier,  // Prüfung
    angebot:  icons3d.contract,   // Angebot / Beurkundung
  };

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

      <div className="page-shell">
        {/* DIE 3 BEREICHE */}
        <section className="section-premium bg-gradient-warm pt-10 md:pt-16">
          <div className="container-premium">
            <SectionHeader title={t.home.areasTitle} intro={t.home.areasIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-3">
              {t.home.areas.map((path, i) => {
                const key = areaKeys[i];
                const asset = areaAssets[key];
                return (
                  <Reveal key={key} delay={i * 0.06}>
                    <ProofCard
                      image={asset.image}
                      imageAlt={path.title}
                      index={i}
                      title={path.title}
                      text={path.desc}
                      cta={{ label: path.cta, to: asset.link }}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={t.home.trustTitle} intro={t.home.trustText} tone="dark" />

            {t.home.proofPoints && t.home.proofPoints.length > 0 && (
              <Reveal delay={0.1}>
                <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  {t.home.proofPoints.map((point, i) => {
                    const key = proofKeys[i];
                    return (
                      <ProofCard
                        key={key}
                        iconImage={proofIcons[key]}
                        iconAlt={point.title}
                        index={i}
                        title={point.title}
                        text={point.text}
                      />
                    );
                  })}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.15}>
              <div className="glass-card-dark border-l-2 border-l-[hsl(45_70%_55%_/_0.6)] grid md:grid-cols-[260px_1fr] gap-0 overflow-hidden">
                <div className="relative h-48 md:h-auto min-h-[200px] overflow-hidden">
                  <img
                    src={editorial.notaryQuiet}
                    alt="Ruhige Bibliothek mit Messinglampe und Marmoroberfläche – sinnbildlich für vertrauliche, gewissenhafte Bearbeitung"
                    loading="lazy"
                    width={520}
                    height={520}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(212_52%_12%_/_0.55)]" aria-hidden="true" />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="mb-3 text-[1.1rem] font-heading font-semibold text-white">
                    {t.home.trustClaimTitle}
                  </h3>
                  <p className="text-[0.93rem] leading-[1.85] text-white/70">
                    {t.home.trustClaimText}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3-SCHRITT-TEASER */}
        <section
          id="ablauf"
          className="section-premium scroll-mt-24"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={t.home.stepsTitle} />
            <div className="grid gap-6 md:gap-10 sm:grid-cols-3">
              {t.home.steps.map((item, i) => {
                const key = stepKeys[i];
                return (
                  <ProcessStep
                    key={key}
                    index={i}
                    total={t.home.steps.length}
                    title={item.title}
                    desc={item.desc}
                    iconImage={stepIconsByKey[key]}
                    iconAlt={item.title}
                  />
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                {t.home.stepsNote}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-6 text-center">
                <Link
                  to="/wie-es-funktioniert"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary hover:text-primary/80 transition-colors"
                >
                  {t.home.stepsLink}
                  <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EINWANDBEHANDLUNG */}
        {t.home.objections && t.home.objections.length > 0 && (
          <section className="section-premium bg-gradient-warm">
            <div className="container-premium">
              <SectionHeader
                title={t.home.objectionsTitle ?? ""}
                intro={t.home.objectionsIntro}
              />
              <div className="grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                {t.home.objections.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <ObjectionCard q={item.q} a={item.a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

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
          title={t.home.finalCtaTitle}
          text={t.home.finalCtaText}
          buttonLabel={t.home.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
