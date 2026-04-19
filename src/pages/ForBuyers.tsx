import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const featureImages = cardImages.buyerFeatures;

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
        {/* ═══════════════════════════════════════════════════════════
            1) MERKMALE — editoriale ProofCards (4-Spalten, asymmetrisch)
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-lux">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Was uns auszeichnet"
              title={b.featuresTitle}
              intro={b.featuresIntro}
            />
            <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {b.features.map((f, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <ProofCard
                    editorial
                    image={featureImages[i % featureImages.length]}
                    imageAlt={f.title}
                    index={i}
                    title={f.title}
                    text={f.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2) PORTFOLIO TEASER — Navy-Editorial mit ruhigem CTA
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-ink section-y-base">
          <div className="container-premium">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <p className="eyebrow eyebrow--dark eyebrow--center justify-center mb-5">
                  Aktuelle Auswahl
                </p>
                <h2 className="font-heading font-medium text-white leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.35rem]">
                  {b.portfolioTitle}
                </h2>
                <p className="mt-6 mx-auto max-w-xl text-[0.95rem] leading-[1.85] text-white/72">
                  {b.portfolioText}
                </p>
                <div className="mt-9">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2.5 border-b border-accent/70 pb-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {b.portfolioCta}
                    <ArrowRight size={14} className="text-accent" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3) GRÜNDE / PROOF POINTS — EditorialPoint-Liste auf Stone
            ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-stone-cream section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Warum mit Aurelia"
              title={b.proofTitle}
              intro={b.proofIntro}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {b.proofPoints.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <EditorialPoint
                    index={i}
                    title={p.title}
                    text={p.text}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4) ABLAUF — Cream-Layer, EditorialPoint-Liste
            ─────────────────────────────────────────────────────────── */}
        <section id="ablauf" className="surface-cream section-y-base scroll-mt-24">
          <div className="container-premium">
            <SectionHeader
              eyebrow="So läuft eine Anfrage"
              title={b.stepsTitle}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {b.steps.map((s, i) => (
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
                {b.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            5) EINWÄNDE — editorialer Text-Block
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-base">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Häufige Bedenken"
              title={b.objectionsTitle}
              intro={b.objectionsIntro}
              align="left"
            />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-3 max-w-5xl">
              {b.objections.map((o, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ObjectionCard q={o.q} a={o.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6) FAQ-Hinweis */}
        <FaqHint />

        {/* 7) Final CTA — editorial Split */}
        <FinalCta
          variant="split"
          eyebrow="Nächster Schritt"
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
