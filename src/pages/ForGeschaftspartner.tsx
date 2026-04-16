import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight } from "lucide-react";

const ForGeschaftspartner = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.investors.src}
            srcSet={heroSets.investors.srcSet}
            sizes={heroSets.investors.sizes}
            alt="Projektbezogene Kooperationen Aurelia Grundbesitz"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Aurelia Grundbesitz</p>
              <h1 className="hero-title">Projektbezogene Kooperationen mit klarem Rahmen</h1>
              <p className="hero-description">
                In ausgewählten Fällen prüfen wir individuelle, objektbezogene Kooperationen rund um Immobilien und Grundstücke. Im Mittelpunkt stehen keine standardisierten Modelle, sondern klar strukturierte Vereinbarungen, die zur jeweiligen Situation passen.
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* DEZENTER HINWEIS */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="container-premium py-4">
            <p className="mx-auto max-w-3xl text-[0.78rem] leading-[1.7] text-muted-foreground text-center">
              <span className="font-medium text-foreground/80">Hinweis:</span> Diese Seite stellt kein öffentliches Angebot von Vermögensanlagen und keine Aufforderung zur Investition dar. Etwaige Vereinbarungen erfolgen ausschließlich individuell, projektbezogen und nach gesonderter Prüfung.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem] text-center">
                Zusammenarbeit im Einzelfall
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground text-center">
                Aurelia arbeitet in ausgewählten Konstellationen mit langfristig orientierten Partnern zusammen. Jede Kooperation wird objektbezogen geprüft, individuell besprochen und sauber dokumentiert. Standardmodelle gibt es bewusst nicht — jede Konstellation entsteht aus dem konkreten Projekt heraus.
              </p>
            </Reveal>
          </div>
        </section>

        {/* KOOPERATIONS-GRUNDSÄTZE */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Mögliche Formen der Zusammenarbeit
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Objektbezogene Kooperation",
                  desc: "Zusammenarbeit rund um ein konkretes Immobilienprojekt. Aurelia entwickelt und begleitet die Verwertung. Die Konstellation wird individuell besprochen.",
                },
                {
                  title: "Mehrere Projekte",
                  desc: "Begleitung mehrerer Konstellationen über einen längeren Zeitraum. Regelmäßige, transparente Abstimmung zum Stand der jeweiligen Vorhaben.",
                },
                {
                  title: "Individuelle Vereinbarung",
                  desc: "Keine standardisierten Modelle. Jede Konstellation wird auf Basis der konkreten Situation und der jeweiligen Anforderungen ausgearbeitet.",
                },
                {
                  title: "Direkter Austausch",
                  desc: "Direkter, vertraulicher Kontakt zur Geschäftsleitung. Klare Kommunikation und ruhige, sachliche Abstimmung.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-7 h-full">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GRUNDLAGEN */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Grundlagen einer guten Zusammenarbeit
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Klare Kommunikation",
                  desc: "Offener Austausch über Ziele, Rahmenbedingungen und Erwartungen.",
                },
                {
                  title: "Langfristige Perspektive",
                  desc: "Keine kurzfristige Spekulation, sondern ruhige, nachhaltige Zusammenarbeit.",
                },
                {
                  title: "Verlässlicher Rahmen",
                  desc: "Stabile, planbare Voraussetzungen auf beiden Seiten.",
                },
                {
                  title: "Geteiltes Verständnis",
                  desc: "Gemeinsames Verständnis für sorgfältige, projektbezogene Arbeit im Immobilienbereich.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card-dark rounded-2xl p-7 h-full">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="relative section-premium text-white overflow-hidden"
          style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Konstellation besprechen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Wenn eine projektbezogene Zusammenarbeit für Sie grundsätzlich denkbar ist, freuen wir uns über einen vertraulichen, unverbindlichen Austausch. Inhalte und Rahmen werden ausschließlich im Einzelfall besprochen.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Unverbindlich Kontakt aufnehmen
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForGeschaftspartner;
