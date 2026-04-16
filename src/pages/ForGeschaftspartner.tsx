import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, AlertTriangle } from "lucide-react";

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
            alt="Geschäftspartnerschaft Aurelia"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Geschäftsbereich Partnerschaften</p>
              <h1 className="hero-title">Geschäftspartnerschaften im Immobilienmarkt</h1>
              <p className="hero-description">
                Individuelle Finanzierungsstrukturen für einzelne Projekte.
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* PROMINENTER HINWEIS oben */}
        <section className="bg-amber-50 border-y border-amber-200/60">
          <div className="container-premium py-5">
            <div className="flex items-start gap-3 max-w-3xl mx-auto">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-700" />
              <p className="text-[0.85rem] leading-[1.7] text-amber-900">
                <strong>Wichtiger Hinweis:</strong> Die hier beschriebenen Partnerschaften sind <strong>keine Finanzanlage</strong> und <strong>kein reguliertes Finanzprodukt</strong>. Es handelt sich um individuelle, projektbezogene Vereinbarungen.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem] text-center">
                Partner statt Investoren
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground text-center">
                Aurelia arbeitet mit strategischen Partnern zusammen. Für ausgewählte Immobilien-Projekte können individuelle Finanzierungsstrukturen vereinbart werden. Jede Partnerschaft wird transparent verhandelt und rechtlich dokumentiert. Es gibt keine Standard-Modelle — alles wird individuell gestaltet.
              </p>
            </Reveal>
          </div>
        </section>

        {/* KOOPERATIONS-MODELLE */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Mögliche Kooperations-Modelle
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Projektfinanzierung",
                  desc: "Sie finanzieren ein einzelnes Immobilien-Projekt. Aurelia entwickelt und verwertet. Struktur wird individuell vereinbart.",
                },
                {
                  title: "Mehrfach-Beteiligung",
                  desc: "Sie unterstützen mehrere Projekte parallel. Regelmäßige Berichte über Fortschritt. Flexible Struktur pro Projekt.",
                },
                {
                  title: "Flexible Vereinbarung",
                  desc: "Keine Standard-Modelle — alles wird individuell gestaltet, basierend auf Ihrer Anforderung und Aurelias Kapazität.",
                },
                {
                  title: "Direkte Kommunikation",
                  desc: "Direkter Kontakt zum Aurelia-Management. Transparente Kommunikation und regelmäßige Updates.",
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

        {/* WAS WIR ERWARTEN */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Grundlagen für erfolgreiche Partnerschaften
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Transparente Kommunikation",
                  desc: "Offenes Verständnis von Zielen, Risiken und Chancen.",
                },
                {
                  title: "Langfristige Perspektive",
                  desc: "Keine kurzfristige Spekulation, sondern nachhaltige Zusammenarbeit.",
                },
                {
                  title: "Finanzielle Stabilität",
                  desc: "Das Kapital sollte stabil zur Verfügung stehen.",
                },
                {
                  title: "Geteilte Geschäftsphilosophie",
                  desc: "Verständnis für nachhaltige Lösungen im Immobilienmarkt.",
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

        {/* RECHTLICHER HINWEIS — prominent */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/50 p-8 md:p-10 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-5">
                  <AlertTriangle size={22} className="text-amber-700" />
                  <h2 className="text-[1.2rem] font-heading font-semibold text-amber-900">
                    Rechtlicher Hinweis
                  </h2>
                </div>
                <div className="space-y-4 text-[0.88rem] leading-[1.85] text-amber-950/90">
                  <p>
                    Aurelia Grundbesitz ist <strong>kein reguliertes Finanzinstitut</strong>. Diese Seite stellt <strong>keine Finanzanlage-Produkte</strong> dar und ist <strong>kein Angebot</strong> zum Abschluss eines Finanzdienstleistungsvertrags.
                  </p>
                  <div>
                    <p className="mb-2 font-semibold">Die hier beschriebenen Partnerschaften:</p>
                    <ul className="space-y-1.5 list-disc pl-5">
                      <li>sind <strong>keine Finanzinvestitionen</strong></li>
                      <li>haben <strong>keine Rendite-Garantien</strong></li>
                      <li>unterliegen keiner Garantie von Rückzahlung oder Gewinnen</li>
                      <li>sind mit erheblichen Risiken verbunden</li>
                      <li>können zu Kapitalverlust oder Totalverlust führen</li>
                    </ul>
                  </div>
                  <p>
                    Alle Gewinne sind spekulativ und nicht zugesichert. Immobilienmärkte unterliegen Volatilität und Marktrisiken.
                  </p>
                  <div>
                    <p className="mb-2 font-semibold">Vor einer Vereinbarung sollten Sie:</p>
                    <ul className="space-y-1.5 list-disc pl-5">
                      <li>Unabhängige rechtliche Beratung einholen</li>
                      <li>Das individuelle Angebot gründlich prüfen</li>
                      <li>Alle Bedingungen und Risiken verstehen</li>
                      <li>Nur Kapital einsetzen, das Sie entbehren können</li>
                    </ul>
                  </div>
                  <p className="text-[0.82rem] text-amber-900/80 pt-2 border-t border-amber-300/50">
                    Weitere Informationen finden Sie in unserer <Link to="/datenschutz" className="underline hover:text-amber-700">Datenschutzerklärung</Link>.
                  </p>
                </div>
              </div>
            </Reveal>
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Lassen Sie uns sprechen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Wenn Sie an einer Partnerschaft interessiert sind, kontaktieren Sie uns für ein vertrauliches Gespräch. Bitte beachten Sie die oben genannten rechtlichen Hinweise.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Vertraulich Kontakt aufnehmen
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
