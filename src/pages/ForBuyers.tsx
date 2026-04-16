import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Scale, Home, Zap, Shield } from "lucide-react";

const ForBuyers = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.investors.src}
            srcSet={heroSets.investors.srcSet}
            sizes={heroSets.investors.sizes}
            alt="Immobilie aus dem Aurelia-Bestand"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Für Käufer</p>
              <h1 className="hero-title">Qualitätsimmobilien zu transparenten Preisen</h1>
              <p className="hero-description">Direkt aus unserem Bestand, ohne Makler.</p>
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
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                Immobilien mit Potenzial
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Aurelia verkauft Immobilien aus seinem Bestand. Da wir diese durch Forderungsankauf zu besseren Konditionen erwerben, können wir transparente Preise anbieten. Keine Maklergebühren, professionelle Begleitung.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MERKMALE */}
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
                { icon: Scale, title: "Transparente Preisgestaltung", desc: "Wir kalkulieren fair und transparent — ohne versteckte Kosten." },
                { icon: Home, title: "Keine Maklergebühren", desc: "Sie sparen die typischen Makler-Provisionen — das Geld bleibt bei Ihnen." },
                { icon: Zap, title: "Zügige Abwicklung", desc: "Kurze Entscheidungswege und strukturierte Kaufabwicklung." },
                { icon: Shield, title: "Professionelle Betreuung", desc: "Rechtliche Unterstützung und kontinuierlicher Kontakt während des gesamten Prozesses." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-7 h-full">
                      <Icon className="mb-4 text-teal-600" size={28} />
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PORTFOLIO TEASER */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Unser aktuelles Angebot
                </h2>
                <p className="text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia verfügt über ein regelmäßig wechselndes Portfolio von qualitätsgeprüften Immobilien in der Region Düsseldorf und Umland. Aktuelle Objekte und Details erfahren Sie auf Anfrage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="text-center">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-white/20"
                >
                  Zum Portfolio
                  <ArrowRight size={13} />
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
                  Kaufprozess
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", title: "Besichtigung & Information", desc: "Vollständige Informationen und Vor-Ort-Besichtigung." },
                { step: "2", title: "Verhandlung", desc: "Wir verhandeln offen Preis und Bedingungen." },
                { step: "3", title: "Rechtliche Sicherheit", desc: "Notariat und rechtliche Partner begleiten die Beurkundung." },
                { step: "4", title: "Übergabe", desc: "Nach Abschluss werden Sie Eigentümer der Immobilie." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="glass-card rounded-2xl p-7 text-center h-full">
                    <div className="icon-badge mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg">
                      <span className="text-[1.15rem] font-heading font-bold text-teal-700">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-[0.95rem] font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-[0.82rem] leading-[1.7] text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Interessiert? Wir helfen Ihnen weiter</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Sprechen Sie mit uns über Ihre Wünsche — wir prüfen, welche Objekte aus unserem Bestand für Sie passen könnten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                >
                  Portfolio ansehen
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/20"
                >
                  Beratungstermin
                  <ArrowRight size={13} />
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
