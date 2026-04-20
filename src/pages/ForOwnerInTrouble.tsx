import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ObjectionCard from "@/components/sections/ObjectionCard";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";
import { Phone, MessageSquare, Compass, Scale, FileText, Handshake } from "lucide-react";

// Situations (4) — Zwangsversteigerung, Finanznot, Erben, Recht (Fotos beibehalten)
const situationImages = cardImages.ownerSituations;
// Steps (5) — kleine, zurückhaltende Lucide-Icons für die Prozess-Schritte
const stepIcons = [MessageSquare, Compass, Scale, FileText, Handshake];

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
        {/* SITUATIONEN – filigrane editoriale Kacheln */}
        <section className="section-premium bg-gradient-warm !pt-16 md:!pt-20">
          <div className="container-premium">
            <SectionHeader title={o.situationsTitle} intro={o.situationsIntro} />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
              {o.situations.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ProofCard
                    image={situationImages[i % situationImages.length]}
                    imageAlt={s.title}
                    index={i}
                    title={s.title}
                    text={s.desc}
                    compact
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* UNSERE LÖSUNG (Navy) — typografisch, ohne Icons */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={o.solutionTitle} intro={o.solutionText} tone="dark" />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {o.proofPoints.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border-l border-accent/50 pl-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2.5 text-[0.98rem] font-heading font-semibold text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.75] text-white/75">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABLAUF — kleine, zurückhaltende Prozess-Icons */}
        <section
          id="ablauf"
          className="section-premium scroll-mt-24"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={o.stepsTitle} />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {o.steps.map((s, i) => {
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
