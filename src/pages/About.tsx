import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Eye, Heart, Clock, ShieldCheck } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Über Aurelia – Aurelia Grundbesitz GmbH";
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.about.src}
            srcSet={heroSets.about.srcSet}
            sizes={heroSets.about.sizes}
            alt="Über Aurelia Grundbesitz"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Über Aurelia</p>
              <h1 className="hero-title">Über Aurelia Grundbesitz</h1>
              <p className="hero-description">Diskret, substanzorientiert, langfristig.</p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* GESCHICHTE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Unsere Geschichte
                </h2>
                <div className="space-y-4 text-[0.93rem] leading-[1.85] text-muted-foreground">
                  <p>
                    Aurelia Grundbesitz wurde gegründet, um professionelle Lösungen im Immobilienmarkt anzubieten — mit klarem Fokus auf Forderungsankauf, anspruchsvolle Objekte und nachhaltige Verwertung.
                  </p>
                  <p>
                    Mit kontinuierlicher Erfahrung entwickelten wir ein Geschäftsmodell, das hilfreiche Lösungen für Eigentümer mit Schwierigkeiten bietet, während wir gleichzeitig nachhaltige Geschäfte aufbauen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WERTE */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Unsere Werte
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Eye, title: "Transparenz", desc: "Offene Kommunikation in allen Geschäften." },
                { icon: Heart, title: "Hilfreiche Lösungen", desc: "Vor Profitmaximierung steht der nachhaltige Mehrwert." },
                { icon: Clock, title: "Langfristige Beziehungen", desc: "Statt kurzfristiger Transaktionen." },
                { icon: ShieldCheck, title: "Professionalität", desc: "Saubere, rechtssichere Abwicklung." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card-dark rounded-2xl p-7 h-full">
                      <Icon className="mb-4 text-teal-400" size={28} />
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-white">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* UNTERNEHMENSDATEN */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
                <h3 className="mb-5 text-[1.1rem] font-heading font-semibold text-foreground">
                  Aurelia Grundbesitz GmbH
                </h3>
                <div className="space-y-2 text-[0.9rem] leading-[1.8] text-muted-foreground">
                  <p>Grevenbroicher Weg 2</p>
                  <p>40547 Düsseldorf</p>
                  <p>Deutschland</p>
                  <p className="pt-2">
                    <a href="mailto:info@aureliaestates.de" className="text-teal-700 hover:text-teal-800">
                      info@aureliaestates.de
                    </a>
                  </p>
                </div>
                <p className="mt-5 text-[0.78rem] text-muted-foreground/80">
                  Vollständige Registerangaben finden Sie im <Link to="/impressum" className="underline hover:text-teal-700">Impressum</Link>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--primary)) 0%, hsl(var(--highlight)) 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Lernen Sie uns kennen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Vereinbaren Sie ein unverbindliches Gespräch — wir freuen uns, Ihre Fragen zu beantworten.
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

export default About;
