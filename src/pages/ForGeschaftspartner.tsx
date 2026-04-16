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
              <h1 className="hero-title">Strategische Geschäftspartnerschaften</h1>
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
                Individuelle Projektpartnerschaften
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Aurelia arbeitet mit ausgewählten Geschäftspartnern zusammen — auf Basis individueller Vereinbarungen, gemeinsamer Projektverantwortung und einer transparenten Aufteilung der erzielten Erträge. Der Schwerpunkt liegt auf realen Immobilien, klaren Strukturen und einem partnerschaftlichen Umgang.
              </p>
            </Reveal>
          </div>
        </section>

        {/* THE MODEL */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  So funktioniert die Zusammenarbeit
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {[
                {
                  num: "1",
                  title: "Projekt-Identifikation",
                  desc: "Aurelia identifiziert geeignete Immobilienprojekte mit Entwicklungspotenzial und prüft sie sorgfältig.",
                },
                {
                  num: "2",
                  title: "Partnerschafts-Vereinbarung",
                  desc: "Geschäftspartner und Aurelia einigen sich auf Struktur, Laufzeit und Aufteilung der Projekterträge.",
                },
                {
                  num: "3",
                  title: "Projekt-Verwertung",
                  desc: "Aurelia verwaltet, renoviert und optimiert die Immobilie professionell entlang der vereinbarten Strategie.",
                },
                {
                  num: "4",
                  title: "Transparente Abrechnung",
                  desc: "Nach abgeschlossener Verwertung werden alle Erträge entsprechend der individuellen Vereinbarung transparent abgerechnet.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8 text-center h-full">
                    <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                      <span className="text-[1.3rem] font-heading font-bold text-teal-700">{item.num}</span>
                    </div>
                    <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-[0.78rem] font-sans uppercase tracking-[0.16em] text-teal-700">Für Geschäftspartner</p>
                    <p className="text-[0.95rem] leading-[1.75] text-foreground">
                      Transparente Beteiligung an Projekterträgen — nach individuell vereinbarter Struktur.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-[0.78rem] font-sans uppercase tracking-[0.16em] text-teal-700">Für Aurelia</p>
                    <p className="text-[0.95rem] leading-[1.75] text-foreground">
                      Verlässliche Partner für Forderungsankauf und nachhaltige Immobilienverwertung.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY PARTNERSHIP */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Was eine Partnerschaft mit Aurelia ausmacht
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reale Sachwerte",
                  desc: "Jede Partnerschaft basiert auf konkreten Immobilien — keine abstrakten Finanzkonstrukte.",
                },
                {
                  title: "Branchenerfahrung",
                  desc: "Geschäftsführung mit langjähriger Erfahrung in Forderungsankauf und Immobilienverwertung.",
                },
                {
                  title: "Strukturvorteile",
                  desc: "Durch den Forderungsankauf erwirbt Aurelia Objekte unter marktüblichen Konditionen.",
                },
                {
                  title: "Transparenz",
                  desc: "Alle Zahlen, Verträge und Abrechnungen werden offengelegt — ohne versteckte Provisionen.",
                },
                {
                  title: "Individuelle Vereinbarungen",
                  desc: "Jede Partnerschaft wird passgenau strukturiert — abgestimmt auf Projekt und Partner.",
                },
                {
                  title: "Langfristige Perspektive",
                  desc: "Wir suchen Partner für nachhaltige Zusammenarbeit — nicht für kurzfristige Transaktionen.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card-dark rounded-2xl p-8 h-full">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
                <p className="mb-3 text-[0.78rem] font-sans uppercase tracking-[0.16em] text-muted-foreground">Wichtiger Hinweis</p>
                <p className="text-[0.88rem] leading-[1.85] text-muted-foreground">
                  Die Inhalte dieser Seite dienen ausschließlich der allgemeinen Information über die Form möglicher Geschäftspartnerschaften mit Aurelia Grundbesitz. Sie stellen keine Anlageberatung, Steuer- oder Rechtsberatung dar und enthalten kein öffentliches Angebot von Vermögensanlagen oder Finanzinstrumenten im Sinne aufsichtsrechtlicher Vorschriften. Konkrete Vereinbarungen werden ausschließlich individuell und schriftlich zwischen den Vertragspartnern getroffen.
                </p>
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Vertraulich Kontakt aufnehmen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Sie interessieren sich für eine strategische Geschäftspartnerschaft mit Aurelia? Wir prüfen Ihre Anfrage diskret und melden uns mit einer ersten Einschätzung zurück.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Gespräch vereinbaren
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
