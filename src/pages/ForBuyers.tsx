import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Eye, Handshake, FileSignature } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import { aureliaCard } from "@/lib/cardStyle";

// Features (4) — Direkter Eigentümer, Unterlagen, Preisbasis, Verlässliche Abwicklung (Fotos beibehalten)
const featureImages = cardImages.buyerFeatures;
const buyersHeroImage = {
  src: "/heroes/AdobeStock_302581671-1024w.webp",
  srcSet: [640, 1024, 1440, 2048]
    .map((width) => `/heroes/AdobeStock_302581671-${width}w.webp ${width}w`)
    .join(", "),
  sizes: heroSets.buyers.sizes,
};

const replacementFeatureImages = {
  pricing: { image: "/cards/AdobeStock_461475949.jpeg", imagePosition: "50% 53%" },
  contact: { image: "/cards/AdobeStock_356467514.jpeg", imagePosition: "50% 45%" },
  documents: { image: "/cards/AdobeStock_541665662.jpeg", imagePosition: "50% 62%" },
  purchase: { image: "/cards/AdobeStock_586889892.jpeg", imagePosition: "50% 58%" },
} as const;

const normalizeFeatureTitle = (title: string) =>
  title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

const getReplacementFeatureImage = (title: string) => {
  const normalizedTitle = normalizeFeatureTitle(title);
  if (/preis und konditionen|price and terms|fiyat ve kosullar|prijs en voorwaarden|prezzo e condizioni|precio y condiciones|prix et conditions/.test(normalizedTitle)) {
    return replacementFeatureImages.pricing;
  }
  if (/ansprechpartner|point of contact|muhatab|aanspreekpunt|referente|interlocutor|interlocuteur/.test(normalizedTitle)) {
    return replacementFeatureImages.contact;
  }
  if (/unterlagen zum objekt|property documents|nesneye dair belgeler|documenten over het object|documentazione sull'immobile|documentacion del inmueble|documents relatifs au bien/.test(normalizedTitle)) {
    return replacementFeatureImages.documents;
  }
  if (/kaufabwicklung|purchase process|satın alma islemi|koopafwikkeling|svolgimento dell'acquisto|tramitacion de la compra|deroulement de l'achat/.test(normalizedTitle)) {
    return replacementFeatureImages.purchase;
  }
  return undefined;
};
// Steps (4) — themenbezogene, zurückhaltende Lucide-Icons:
// Erstkontakt (Gespräch), Besichtigung (Auge), Verhandlung (Handshake), Beurkundung & Übergabe (Urkunde)
const stepIcons = [MessageSquare, Eye, Handshake, FileSignature];

const ForBuyers = () => {
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].buyers.title, pageSeo[language].buyers.description);
  const b = t.buyers;
  const extras = pageExtras[language];

  return (
    <Layout>
      <PageHero
        image={buyersHeroImage}
        imageAlt={b.heroImageAlt}
        kicker={b.heroKicker}
        title={b.heroTitle}
        description={b.heroDescription}
        primaryCta={{ label: b.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: b.heroSecondaryCta, href: "#ablauf" }}
        trustLine={b.heroTrustLine}
        size="compact"
        imagePosition="50% 58%"
        overlayGradient="linear-gradient(to right, hsl(var(--primary) / 0.72) 0%, hsl(var(--primary) / 0.58) 36%, hsl(var(--primary) / 0.20) 68%, hsl(var(--primary) / 0.06) 100%)"
      />

      <div className="page-shell">
        {/* MERKMALE */}
        <section className="section-premium bg-gradient-warm !pt-0 md:!pt-0">
          <div className="container-premium">
            <SectionHeader title={b.featuresTitle} intro={b.featuresIntro} disableOffset />
            {language === "de" && (
              <Reveal>
                <p className="-mt-4 mb-10 mx-auto max-w-3xl text-center text-[0.94rem] leading-[1.8] text-muted-foreground">
                  Unsere verfügbaren Immobilien in Deutschland richten sich nicht nur an Interessenten aus Deutschland. Auch Kaufinteressenten aus der Türkei können ausgewählte Objekte aus unserem eigenen Bestand oder aus ausgewählten Kooperationen anfragen.
                </p>
              </Reveal>
            )}
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {b.features.map((f, i) => {
                const replacement = getReplacementFeatureImage(f.title);
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <ProofCard
                      image={replacement?.image ?? featureImages[i % featureImages.length]}
                      imageAlt={f.title}
                      imagePosition={replacement?.imagePosition}
                      index={i}
                      title={f.title}
                      text={f.desc}
                      compact
                      frame={language === "de"}
                      aiDisclosure={replacement ? undefined : "standard"}
                    />
                  </Reveal>
                );
              })}
            </div>
            {language === "de" && (
              <Reveal delay={0.2}>
                <div className="mt-10 flex justify-center">
                  <Link to="/kontakt#kontaktformular" className="btn-primary">
                    Detailliertes Exposé & Objektliste anfragen
                    <ArrowRight size={13} className="ml-2 text-accent" />
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {language === "de" && (
          <section className="section-premium bg-background">
            <div className="container-premium">
              <Reveal>
                <div className="border-l-2 border-accent bg-card px-6 py-8 md:px-10">
                  <h2 className="font-heading text-[1.55rem] font-semibold text-primary">Immobilien in Deutschland und der Türkei für internationale Kaufinteressenten</h2>
                  <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">Unsere verfügbaren Immobilien richten sich nicht nur an Interessenten aus dem jeweiligen Land. Ausgewählte Immobilien in Deutschland können auch Kaufinteressenten aus der Türkei angeboten werden. Ebenso können ausgewählte Objekte aus unserem Bestand oder aus Kooperationen in der Türkei Interessenten aus Deutschland und anderen europäischen Ländern vorgestellt werden.</p>
                  <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">Sie leben in der Türkei und interessieren sich für eine Immobilie in Deutschland? Wir stellen Ihnen verfügbare Objekte aus unserem Bestand oder aus ausgewählten Kooperationen vor und koordinieren die erforderlichen Informationen und Unterlagen.</p>
                  <p className="mt-3 max-w-3xl text-[0.94rem] leading-[1.8] text-muted-foreground">Verfügbarkeit, Unterlagen und konkrete Kaufabwicklung richten sich nach dem jeweiligen Objekt, Standort und den rechtlichen Voraussetzungen des betreffenden Landes.</p>
                </div>
              </Reveal>
            </div>
          </section>
        )}


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

        {/* GRUNDE / PROOF POINTS — typografisch, ohne Icons */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={b.proofTitle} intro={b.proofIntro} />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {b.proofPoints.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border-l border-accent/40 pl-5">
                    <h3 className="text-[0.98rem] font-heading font-semibold text-primary leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.75] text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABLAUF — kleine, zurückhaltende Prozess-Icons */}
        <section id="ablauf" className="section-premium bg-gradient-warm scroll-mt-24">
          <div className="container-premium">
            <SectionHeader title={b.stepsTitle} />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {b.steps.map((s, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className={language === "de" ? `h-full p-6 md:p-7 ${aureliaCard}` : undefined}>
                      <Icon size={16} strokeWidth={1.5} className="text-accent/80" aria-hidden="true" />
                      <h3 className="text-[0.98rem] font-heading font-semibold text-primary leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[0.85rem] leading-[1.75] text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
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

        {/* Hinweis auf zentrale FAQ */}
        <section className="bg-gradient-warm">
          <div className="container-premium py-10 md:py-12 text-center">
            <p className="text-[0.9rem] leading-[1.7] text-muted-foreground">
              <Link to="/faq" className="text-primary underline-offset-4 hover:underline">{extras.shared.faqPrompt}</Link>
            </p>
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
