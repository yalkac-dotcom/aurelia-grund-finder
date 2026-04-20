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

// Features (4) — Direkter Eigentümer, Unterlagen, Preisbasis, Verlässliche Abwicklung (Fotos beibehalten)
const featureImages = cardImages.buyerFeatures;
// Steps (4) — themenbezogene, zurückhaltende Lucide-Icons:
// Erstkontakt (Gespräch), Besichtigung (Auge), Verhandlung (Handshake), Beurkundung & Übergabe (Urkunde)
const stepIcons = [MessageSquare, Eye, Handshake, FileSignature];

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
        <section className="section-premium bg-gradient-warm !pt-12 md:!pt-16">
          <div className="container-premium">
            <SectionHeader title={b.featuresTitle} intro={b.featuresIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {b.features.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ProofCard
                    image={featureImages[i % featureImages.length]}
                    imageAlt={f.title}
                    index={i}
                    title={f.title}
                    text={f.desc}
                    compact
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
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2.5 text-[0.98rem] font-heading font-semibold text-primary leading-snug">
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
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon size={16} strokeWidth={1.5} className="text-accent/80" aria-hidden="true" />
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-3 text-[0.98rem] font-heading font-semibold text-primary leading-snug">
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
              Weitere Fragen beantworten wir in unseren{" "}
              <Link to="/faq" className="text-primary underline-offset-4 hover:underline">
                FAQ
              </Link>
              .
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
