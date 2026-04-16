import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, AlertTriangle } from "lucide-react";

const HowItWorks = () => {
  useEffect(() => {
    document.title = "Wie es funktioniert – Aurelia Grundbesitz GmbH";
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.arbeitsweise.src}
            srcSet={heroSets.arbeitsweise.srcSet}
            sizes={heroSets.arbeitsweise.sizes}
            alt="Die Aurelia-Strategie"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Wie es funktioniert</p>
              <h1 className="hero-title">Die Aurelia-Strategie erklärt</h1>
              <p className="hero-description">Drei Geschäftsbereiche, ein konsistentes Prinzip.</p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium text-center">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <p className="mx-auto max-w-3xl text-[0.95rem] leading-[1.85] text-muted-foreground">
                Aurelia arbeitet in drei Bereichen: Forderungsankauf von Eigentümern, Immobilienverkauf an Käufer, Geschäftspartnerschaften für Projekte. Alle drei bauen auf derselben Grundlage auf — faire Transaktionen, Transparenz, langfristige Wertschöpfung.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SEGMENT 1 */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white font-heading font-bold">1</span>
                  <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground">
                    Segment 1: Forderungsankauf
                  </h2>
                </div>
                <p className="mb-6 text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Aurelia kauft Forderungen von Eigentümern an. Nach Abschluss wird Aurelia Eigentümer der Immobilie. Diese wird verwertet oder langfristig gehalten.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { n: "1", t: "Projekt-Identifikation", d: "Eigentümer mit Schwierigkeiten kontaktieren Aurelia." },
                    { n: "2", t: "Bewertung", d: "Faire Marktbewertung nach Standard-Kriterien." },
                    { n: "3", t: "Angebot", d: "Schriftliches Kaufangebot." },
                    { n: "4", t: "Vertrag", d: "Rechtliche Dokumentation und Abwicklung." },
                  ].map((s, i) => (
                    <div key={i} className="glass-card rounded-2xl p-5">
                      <p className="mb-2 text-[1.2rem] font-heading font-bold text-red-500">{s.n}</p>
                      <h3 className="mb-1.5 text-[0.92rem] font-heading font-semibold text-foreground">{s.t}</h3>
                      <p className="text-[0.82rem] leading-[1.7] text-muted-foreground">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEGMENT 2 */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-heading font-bold">2</span>
                  <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground">
                    Segment 2: Immobilienverkauf
                  </h2>
                </div>
                <p className="mb-6 text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Aurelia verkauft Objekte aus seinem Bestand. Durch die Konditionsvorteile beim Forderungsankauf können wir transparente Preise ohne Makler bieten.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { n: "1", t: "Angebot", d: "Käufer durchsuchen Portfolio." },
                    { n: "2", t: "Verhandlung", d: "Transparente Preise, individuelle Vereinbarung." },
                    { n: "3", t: "Rechtssicherheit", d: "Notarielle Beurkundung." },
                    { n: "4", t: "Übergabe", d: "Käufer wird Eigentümer." },
                  ].map((s, i) => (
                    <div key={i} className="glass-card rounded-2xl p-5">
                      <p className="mb-2 text-[1.2rem] font-heading font-bold text-green-600">{s.n}</p>
                      <h3 className="mb-1.5 text-[0.92rem] font-heading font-semibold text-foreground">{s.t}</h3>
                      <p className="text-[0.82rem] leading-[1.7] text-muted-foreground">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEGMENT 3 */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-heading font-bold">3</span>
                  <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground">
                    Segment 3: Geschäftspartnerschaften
                  </h2>
                </div>
                <p className="mb-6 text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Aurelia arbeitet mit strategischen Partnern zusammen. Alle Partnerschaften sind individuell gestaltet — es gibt keine Standard-Modelle.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { n: "1", t: "Projekt-Identifikation", d: "Aurelia findet geeignete Projekte." },
                    { n: "2", t: "Vereinbarung", d: "Partner und Aurelia verhandeln transparent." },
                    { n: "3", t: "Verwertung", d: "Aurelia entwickelt und verwaltet das Projekt." },
                    { n: "4", t: "Dokumentation", d: "Regelmäßige Reports und transparente Kommunikation." },
                  ].map((s, i) => (
                    <div key={i} className="glass-card rounded-2xl p-5">
                      <p className="mb-2 text-[1.2rem] font-heading font-bold text-amber-600">{s.n}</p>
                      <h3 className="mb-1.5 text-[0.92rem] font-heading font-semibold text-foreground">{s.t}</h3>
                      <p className="text-[0.82rem] leading-[1.7] text-muted-foreground">{s.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-start gap-3 max-w-2xl rounded-lg bg-amber-50 border border-amber-200/60 p-4">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-700" />
                  <p className="text-[0.82rem] leading-[1.7] text-amber-900">
                    Siehe <Link to="/fuer-geschaeftspartner" className="underline hover:text-amber-700">Geschäftspartner-Seite</Link> für wichtige rechtliche Informationen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BESTAND-STRATEGIE */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                  <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                    Langfristiger Vermögensaufbau: Die Bestand-Strategie
                  </h2>
                  <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                    Nicht alle Objekte werden sofort verkauft. Aurelia baut einen strategischen Bestand auf.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
                  {[
                    { n: "1", t: "Erwerb", d: "Immobilie wird erworben." },
                    { n: "2", t: "Optimierung", d: "Ggf. Renovierung und Verbesserung." },
                    { n: "3", t: "Vermietung", d: "Mieteinnahmen generieren." },
                    { n: "4", t: "Wertsteigerung", d: "Immobilienwert entwickelt sich." },
                    { n: "5", t: "Langfristig", d: "Bestand bleibt und generiert Ertrag." },
                  ].map((s, i) => (
                    <div key={i} className="glass-card-dark rounded-2xl p-5">
                      <p className="mb-2 text-[1.2rem] font-heading font-bold text-teal-400">{s.n}</p>
                      <h3 className="mb-1.5 text-[0.92rem] font-heading font-semibold text-white">{s.t}</h3>
                      <p className="text-[0.82rem] leading-[1.7] text-white/70">{s.d}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-white/5 border border-white/10 p-5">
                  <p className="text-[0.85rem] leading-[1.75] text-white/75 italic">
                    Hinweis: Dies beschreibt das allgemeine Vorgehen. Tatsächliche Ergebnisse variieren. Märkte können volatil sein, Risiken sind möglich.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BEISPIEL-SZENARIO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                  <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                    Beispiel: Wie die Bestand-Strategie funktioniert
                  </h2>
                </div>

                {/* Prominenter Disclaimer */}
                <div className="mb-6 rounded-xl border-2 border-amber-300 bg-amber-50/70 p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-700" />
                    <div className="text-[0.85rem] leading-[1.75] text-amber-950">
                      <p className="mb-2 font-semibold">Wichtig: Theoretisches Beispiel</p>
                      <p>
                        Dies ist ein <strong>theoretisches Beispiel</strong> basierend auf historischen Durchschnittswerten. Es ist <strong>nicht repräsentativ</strong> für zukünftige Ergebnisse und stellt <strong>keine Garantie</strong> dar. Tatsächliche Ergebnisse können erheblich abweichen. Immobilienmärkte sind volatil und unterliegen Marktrisiken. Verluste sind möglich.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Szenario */}
                <div className="glass-card rounded-2xl p-7 md:p-9">
                  <h3 className="mb-5 text-[1.05rem] font-heading font-semibold text-foreground">Beispielobjekt</h3>
                  <div className="space-y-5 text-[0.9rem] leading-[1.8] text-muted-foreground">
                    <div>
                      <p className="mb-2 font-semibold text-foreground">Erwerb:</p>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>Marktwert: ca. 300.000 €</li>
                        <li>Aurelias Kaufpreis (durch Forderungsankauf): ca. 180.000 €</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-foreground">Nach 5 Jahren (Annahme):</p>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>Geschätzter Wert: ca. 220.000–240.000 € <span className="text-[0.78rem] italic">(basierend auf historischer durchschnittlicher Wertsteigerung)</span></li>
                        <li>Kumulierte Mieteinnahmen: ca. 50.000–70.000 € <span className="text-[0.78rem] italic">(basierend auf durchschnittlichen Mietrenditen)</span></li>
                      </ul>
                    </div>
                    <p className="pt-3 border-t border-border/40 text-[0.82rem] italic text-amber-900">
                      Dies ist ein Szenario. Keine Garantien. Risiken möglich.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Fragen zum Vorgehen?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Wir erläutern Ihnen die einzelnen Schritte gerne im persönlichen Gespräch.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Kontakt aufnehmen
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;
