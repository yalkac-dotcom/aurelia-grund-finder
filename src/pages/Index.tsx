import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { heroSets } from "@/assets/heroImages";
import { editorial } from "@/assets/editorial";
import versprechenAsset from "@/assets/versprechen-haende.jpeg.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import { icons3d } from "@/assets/icons3d";
import { cardImages } from "@/assets/cards";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FinalCta from "@/components/sections/FinalCta";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import HomeDeSections from "@/components/home/HomeDeSections";
import portfolioHero1024 from "@/assets/hero-portfolio-1024w.webp";

// Robuste, semantische Zuordnung statt Index-Mapping.
// Reihenfolge in i18n bleibt führend; jeder Eintrag bekommt zusätzlich einen
// stabilen Schlüssel und ein dediziertes Asset – Sprach-/Reihenfolgewechsel
// können die Bedeutung damit nicht mehr kippen.

type AreaKey = "deutschland" | "tuerkei";
type ProofKey = "diskretion" | "substanz" | "langfristigkeit" | "klarheit";
type StepKey = "kontakt" | "pruefung" | "angebot";

const quoteMarks = {
  de: ["„", "“"],
  en: ["“", "”"],
  nl: ["‘", "’"],
  it: ["«", "»"],
  es: ["«", "»"],
  fr: ["« ", " »"],
  tr: ["“", "”"],
} as const;

const homeHeroImage = {
  src: "/heroes/AdobeStock_141562359-1024w.webp",
  srcSet: [640, 1024, 1440, 1920]
    .map((width) => `/heroes/AdobeStock_141562359-${width}w.webp ${width}w`)
    .join(", "),
  sizes: heroSets.premium.sizes,
};

const HomePage = () => {
  const { t, language } = useLanguage();
  usePageSeo(
    language === "de" ? "Immobilie direkt verkaufen & Kaufinteresse | Aurelia Grundbesitz" : `${t.home.heroTitle} | Aurelia Grundbesitz`,
    language === "de" ? "Aurelia kauft Immobilien auf eigene Rechnung – auch vor einer Zwangsversteigerung. Immobilie zum Ankauf anbieten oder Kaufinteresse für den eigenen Bestand hinterlegen. Deutschland & Türkei." : t.home.heroDescription,
  );
  const extras = pageExtras[language];

  // 3 Bereiche – stabile Schlüssel, Assets + Routen pro Schlüssel
  const areaKeys: AreaKey[] = ["deutschland", "tuerkei"];
  const areaAssets: Record<AreaKey, { image: string; imagePosition?: string; link: string }> = {
    deutschland: { image: "/cards/pexels-aibek-skakov-22081475.jpg", imagePosition: "50% 85%", link: "/immobilie-anbieten?land=deutschland" },
    tuerkei: { image: "/cards/pexels-aydinjpg-39511030.jpg", imagePosition: "50% 58%", link: "/immobilie-anbieten?land=tuerkei" },
  };

  // 4 Versprechen – stabile Schlüssel, Icon pro Schlüssel (Light-Familie für Navy-Sektion)
  const proofKeys: ProofKey[] = ["diskretion", "substanz", "langfristigkeit", "klarheit"];
  const proofIcons: Record<ProofKey, string> = {
    diskretion:      icons3d.shieldLight,      // Schutz / Vertraulichkeit
    substanz:        icons3d.foundationLight,  // Fundament / Substanz
    langfristigkeit: icons3d.horizonLight,     // Horizont / Langfristigkeit
    klarheit:        icons3d.checkLight,       // Klare Entscheidung
  };
  // Bei drei Versprechen entfällt der Langfristigkeits-Schlüssel.
  const proofKeysActive: ProofKey[] =
    t.home.proofPoints && t.home.proofPoints.length === 3
      ? ["diskretion", "substanz", "klarheit"]
      : proofKeys;

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
        image={homeHeroImage}
        imageAlt={extras.accessibility.homeHeroAlt}
        kicker={t.home.heroKicker}
        title={language === "de" ? "Immobilien kaufen und verkaufen – persönlich und auf eigene Rechnung." : t.home.heroTitle}
        description={language === "de" ? "\nAurelia kauft ausgewählte Immobilien für den eigenen Bestand.\nSie möchten verkaufen? Dann können Sie uns Ihre Immobilie direkt anbieten. Sie interessieren sich für ein Objekt aus unserem Bestand?\u00a0\nDann hinterlegen Sie einfach Ihr Kaufinteresse." : (t.home.heroIntro ?? t.home.heroDescription)}
        primaryCta={{ label: language === "de" ? "Immobilie zum Ankauf anbieten" : (t.home.heroPrimaryCta ?? t.home.finalCtaButton), to: "/immobilie-anbieten" }}
        secondaryCta={language === "de" ? { label: "Kaufinteresse hinterlegen", href: "/fuer-kaeufer#kaufinteresse" } : t.home.heroSecondaryCta ? { label: t.home.heroSecondaryCta, href: "#bereiche" } : undefined}
        trustLine={t.home.heroTrustLine}
        imagePosition="55% 70%"
        overlayGradient="linear-gradient(to right, hsl(var(--primary) / 0.46) 0%, hsl(var(--primary) / 0.32) 32%, hsl(var(--primary) / 0.10) 60%, hsl(var(--primary) / 0.01) 100%)"
        descriptionClassName="font-medium !text-white [text-shadow:0_1px_10px_hsl(218_50%_8%_/_0.45)]"
        mobileHomeFlow
      />

      <div className="page-shell">
        {/* DIE 3 BEREICHE */}
        <section id="bereiche" className="section-premium bg-gradient-warm !pt-0 md:!pt-0 scroll-mt-24">
          <div className="container-premium">
            {language === "de" ? (
              <>
                <SectionHeader title="Was Sie bei Aurelia tun können" intro="Schwerpunkt Deutschland und Türkei – ergänzt um ausgewählte Möglichkeiten in weiteren europäischen Ländern." disableOffset />
                <div className="grid gap-6 md:grid-cols-3 md:gap-7">
                  {[
                    { title: "Immobilie anbieten", text: "Sie möchten eine Immobilie verkaufen? Wir prüfen, ob ein direkter Ankauf durch Aurelia auf eigene Rechnung grundsätzlich möglich ist.", cta: "Immobilie anbieten", to: "/immobilie-anbieten", image: areaAssets.deutschland.image, pos: areaAssets.deutschland.imagePosition },
                    { title: "Kaufinteresse hinterlegen", text: "Teilen Sie uns mit, welche Länder, Regionen und Immobilienarten für Sie interessant sind. Wenn ein passendes Objekt aus unserem eigenen Bestand verfügbar ist, können wir Sie informieren.", cta: "Kaufinteresse hinterlegen", to: "/fuer-kaeufer#kaufinteresse", image: areaAssets.tuerkei.image, pos: areaAssets.tuerkei.imagePosition },
                    { title: "Unser Bestand", text: "Hier finden Sie ausgewählte Immobilien, die Aurelia selbst erworben hat und aus dem eigenen Bestand anbietet.", cta: "Unseren Bestand ansehen", to: "/portfolio", image: portfolioHero1024, pos: "50% 50%" },
                  ].map((card, i) => (
                    <Reveal key={card.title} delay={i * 0.06}>
                      <ProofCard image={card.image} imagePosition={card.pos} imageAlt={card.title} index={i} title={card.title} text={card.text} cta={{ label: card.cta, to: card.to }} />
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              <>
            <SectionHeader title={t.home.areasTitle} intro={t.home.areasIntro} disableOffset />
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-7">
              {t.home.areas.map((path, i) => {
                if (i >= areaKeys.length) return null;
                const key = areaKeys[i % areaKeys.length];
                const asset = areaAssets[key];
                if (!asset) return null;
                return (
                  <Reveal key={key} delay={i * 0.06}>
                    <ProofCard
                      image={asset.image}
                      imagePosition={asset.imagePosition}
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
              </>
            )}
            {language === "de" && (
              <Reveal delay={0.12}>
                <p className="mx-auto mt-8 max-w-3xl border-l-2 border-accent/60 pl-5 text-[0.9rem] leading-[1.8] text-muted-foreground">
                  Unser Schwerpunkt liegt auf Deutschland und der Türkei. Auch in Italien, Spanien, Frankreich und den Niederlanden prüfen wir ausgewählte Immobilien. Ob ein Objekt zu unserem Bestand passt, entscheiden wir immer im Einzelfall.
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {language === "de" && <HomeDeSections />}

        {/* TRUST */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={t.home.trustTitle} intro={t.home.trustText} tone="dark" />

            {t.home.proofPoints && t.home.proofPoints.length > 0 && (
              <Reveal delay={0.1}>
                <div className={`grid gap-5 md:gap-6 sm:grid-cols-2 ${t.home.proofPoints.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} ${t.home.trustClaimTitle ? "mb-8" : ""}`}>
                  {t.home.proofPoints.map((point, i) => {
                    const key = proofKeysActive[i];
                    return (
                      <ProofCard
                        key={key}
                        iconImage={proofIcons[key]}
                        iconAlt={point.title}
                        index={i}
                        title={point.title}
                        text={point.text}
                        frame={language === "de"}
                      />
                    );
                  })}
                </div>
              </Reveal>
            )}

            {t.home.trustClaimTitle && t.home.trustClaimText && (
            <Reveal delay={0.15}>
              <div className="glass-card-dark border-l-2 border-l-[hsl(45_70%_55%_/_0.6)] grid md:grid-cols-[260px_1fr] gap-0 overflow-hidden">
                <div className="relative h-48 md:h-auto min-h-[200px] overflow-hidden">
                  <img
                    src={versprechenAsset.url}
                    alt={extras.accessibility.promisesAlt}
                    loading="lazy"
                    className="img-tone absolute inset-0 h-full w-full object-cover"
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
            )}
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
                    <ObjectionCard q={item.q} a={item.a} quoteMarks={quoteMarks[language]} />
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
              <Link to="/faq" className="text-primary underline-offset-4 hover:underline">{extras.shared.faqPrompt}</Link>
            </p>
          </div>
        </section>

        <FinalCta
          title={t.home.finalCtaTitle}
          text={t.home.finalCtaText}
          buttonLabel={t.home.finalCtaButton}
          buttonTo="/immobilie-anbieten"
          secondary={language === "de" ? { label: "Kaufinteresse hinterlegen", to: "/fuer-kaeufer#kaufinteresse" } : undefined}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
