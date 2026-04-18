import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, ShieldAlert, Users, Home as HomeIcon } from "lucide-react";
import { heroSets } from "@/assets/heroImages";
import { editorial } from "@/assets/editorial";
import { useLanguage } from "@/i18n/LanguageContext";
import { icons3d } from "@/assets/icons3d";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import AreaCard from "@/components/sections/AreaCard";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";

const HomePage = () => {
  const { t } = useLanguage();
  // Areas (3 Wege) — Linien-Icons in #4A7FA5:
  // Notlagen → Schild mit Ausrufezeichen, Erbengemeinschaften → Personen, Direktankauf → Haus
  const areaIcons = [ShieldAlert, Users, HomeIcon];
  const areaLinks = ["/fuer-eigentumer-in-not", "/kontakt", "/fuer-kaeufer"];
  // ProofPoints (4 Versprechen, auf Navy):
  // Diskretion → Schild, Substanz → Waage, Langfristigkeit → Gebäude, Klarheit → Vertrag
  const proofIconImages = [icons3d.shieldLight, icons3d.scaleLight, icons3d.foundationLight, icons3d.documentLight];

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
              {t.home.areas.map((path, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <AreaCard
                    icon={areaIcons[i]}
                    iconColor="#4A7FA5"
                    title={path.title}
                    text={path.desc}
                    cta={{ label: path.cta, to: areaLinks[i] }}
                  />
                </Reveal>
              ))}
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
                  {t.home.proofPoints.map((point, i) => (
                    <ProofCard
                      key={i}
                      iconImage={proofIconImages[i % proofIconImages.length]}
                      iconAlt={point.title}
                      index={i}
                      title={point.title}
                      text={point.text}
                    />
                  ))}
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
              {t.home.steps.map((item, i) => (
                <ProcessStep
                  key={i}
                  index={i}
                  total={t.home.steps.length}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
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

        {/* FAQ */}
        {t.home.faqItems && t.home.faqItems.length > 0 && (
          <section
            className="section-premium"
            style={{ background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
          >
            <div className="container-premium max-w-3xl">
              <SectionHeader title={t.home.faqTitle ?? ""} intro={t.home.faqIntro} />
              <FaqBlock items={t.home.faqItems} />
            </div>
          </section>
        )}

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
