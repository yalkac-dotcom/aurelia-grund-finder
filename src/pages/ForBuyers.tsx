import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, TrendingDown, Home, Zap, DollarSign } from "lucide-react";

const ForBuyers = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.building.src}
            srcSet={heroSets.building.srcSet}
            sizes={heroSets.building.sizes}
            alt="Modernes Wohngebäude"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Geschäftsbereich Immobilienerwerb</p>
              <h1 className="hero-title">Immobilien zu fairen Marktbedingungen</h1>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                Qualitätsimmobilien ohne Maklergebühren
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Aurelia bietet Immobilien aus seinem Forderungsankauf-Portfolio an — typischerweise zu 20-40% unter dem üblichen Marktpreis. Direkter Kaufabschluss ohne Maklerprovision. Vollständige Preistransparenz.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WARUM MIT AURELIA */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Unterscheidungsmerkmale
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: TrendingDown,
                  title: "Signifikante Kostenersparnis",
                  desc: "Durch direkten Forderungsankauf erwerben wir Immobilien mit Kostenvorteilen, die wir an Käufer weitergeben."
                },
                {
                  icon: Zap,
                  title: "Rasche Abwicklung",
                  desc: "Ohne Makler-Intermediäre verkürzen sich Verhandlungen und Abschlussfristen erheblich."
                },
                {
                  icon: DollarSign,
                  title: "Keine Maklergebühren",
                  desc: "Typischerweise 3-7% Einsparung durch Wegfall der Maklerprovisionen — echte Kostenersparnis."
                },
                {
                  icon: Home,
                  title: "Vollständige Transparenz",
                  desc: "Alle Konditionen werden offen kommuniziert. Keine versteckten Kosten, keine Überraschungen."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-8">
                      <Icon className="mb-4 text-teal-600" size={32} />
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Verfügbare Objekte
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  Unser Portfolio wird kontinuierlich erweitert. Die verfügbaren Objekte umfassen diverse Assetklassen.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 mb-10">
              {[
                {
                  type: "Eigentumswohnungen",
                  range: "Verschiedene Größen",
                  desc: "Von Einzelobjekten bis zu mehrgeschossigen Wohnkomplexen — vermietbar oder zur Eigennutzung."
                },
                {
                  type: "Einfamilienhäuser",
                  range: "Verschiedene Zustände",
                  desc: "Objekte in unterschiedlichen Sanierungsständen — sofort bezugsfertig oder mit Renovierungspotenzial."
                },
                {
                  type: "Bauland & Grundstücke",
                  range: "Variabel",
                  desc: "Bauland mit Entwicklungspotenzial und freie Flächen für Projekte."
                },
                {
                  type: "Gewerbeimmobilien",
                  range: "Unterschiedliche Nutzungen",
                  desc: "Einzelhandelsflächen, Büroimmobilien und Praxisräume — häufig mit Umsatzpotenzial."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card-dark rounded-2xl p-8">
                    <h3 className="mb-2 text-[1.05rem] font-heading font-semibold text-white">{item.type}</h3>
                    <p className="mb-3 text-[0.85rem] text-teal-400">{item.range}</p>
                    <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="text-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Verfügbare Objekte einsehen
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* KAUFPROZESS */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Abwicklungsprozess
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-4 mb-10">
              {[
                {
                  step: "1",
                  title: "Portfolio-Sichtung",
                  desc: "Durchsicht verfügbarer Objekte"
                },
                {
                  step: "2",
                  title: "Besichtigung",
                  desc: "Vor-Ort-Besichtigung arrangieren"
                },
                {
                  step: "3",
                  title: "Angebot",
                  desc: "Kaufpreisangebot erhalten"
                },
                {
                  step: "4",
                  title: "Abschluss",
                  desc: "Notarielle Beurkundung"
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8 text-center">
                    <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                      <span className="text-[1.3rem] font-heading font-bold text-teal-700">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <h3 className="mb-5 text-[1.1rem] font-heading font-semibold text-foreground">Leistungen & Standards</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "✓ Sachverständige Immobilienbewertung",
                    "✓ Keine Maklergebühren",
                    "✓ Flexible Finanzierungsberatung",
                    "✓ Transparente Vertragsbedingungen",
                    "✓ Durchgehende Abwicklungsbetreuung",
                    "✓ Faire Preisverhandlung nach Marktstandards"
                  ].map((point, i) => (
                    <p key={i} className="text-[0.88rem] text-muted-foreground">{point}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Häufig gestellte Fragen von Käufern
                </h2>
              </div>
            </Reveal>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "Warum sind die Kaufpreise gegenüber dem Markt reduziert?",
                  a: "Aurelia erwirbt Immobilien durch Forderungsankauf mit Kostenvorteilen. Diese Ersparnis wird weitergegeben. Zudem entfallen Maklergebühren — eine echte Kostenreduktion für den Käufer."
                },
                {
                  q: "Gibt es Mängel oder versteckte Lasten?",
                  a: "Nein. Alle Objekte werden sachverständig bewertet. Wir sind transparent über den Zustand jeder Immobilie. Mängel werden offen kommuniziert und in die Preisgestaltung einbezogen."
                },
                {
                  q: "Kann ich vor dem Kauf eine Besichtigung durchführen?",
                  a: "Ja, selbstverständlich. Alle Objekte sind zu vereinbarten Terminen besichtigbar. Sie kennen das Objekt, bevor Sie kaufen — keine Überraschungen."
                },
                {
                  q: "Wie lange dauert typischerweise die Abwicklung?",
                  a: "Von Besichtigung bis notariellem Abschluss: 2-6 Wochen. Abhängig davon, ob die Finanzierung noch arrangiert werden muss oder ob die Zahlung sofort erfolgt."
                },
                {
                  q: "Benötige ich zusätzlich einen Makler?",
                  a: "Nein. Aurelia ist Ihr direkter Vertragspartner. Keine zusätzlichen Maklergebühren, keine Zwischenhändler — nur direkte Geschäftsabwicklung."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="mb-3 text-[0.95rem] font-heading font-semibold text-foreground">{item.q}</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{item.a}</p>
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Beginnen Sie Ihre Immobiliensuche</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Durchsuchen Sie unser aktuelles Portfolio oder lassen Sie sich auf unsere Benachrichtigungsliste setzen. Neue Objekte werden kontinuierlich hinzugefügt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                >
                  Objekte ansehen
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-white/90 hover:text-white transition-colors"
                >
                  Zur Benachrichtigungsliste anmelden
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForBuyers;