import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, MapPin, Building2, TreePine, Store } from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio – Aurelia Grundbesitz GmbH";
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.premium.src}
            srcSet={heroSets.premium.srcSet}
            sizes={heroSets.premium.sizes}
            alt="Aurelia Immobilien-Portfolio"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Portfolio</p>
              <h1 className="hero-title">Aktuelle Immobilien</h1>
              <p className="hero-description">Qualitätsgeprüfte Objekte in Düsseldorf und Umland.</p>
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
                Regelmäßig wechselnde Auswahl
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Aurelia verfügt über ein regelmäßig wechselndes Portfolio von qualitätsgeprüften Immobilien in der Region Düsseldorf und Umland. Da unser Bestand vertraulich verwaltet wird und sich laufend verändert, stellen wir konkrete Objekte ausschließlich auf direkte Anfrage vor.
              </p>
            </Reveal>
          </div>
        </section>

        {/* KATEGORIEN */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Objektkategorien
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Unser Bestand umfasst diverse Assetklassen — Verfügbarkeit variiert.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Building2,
                  title: "Eigentumswohnungen",
                  desc: "Einzelobjekte und mehrgeschossige Wohnanlagen.",
                  img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=70",
                  alt: "Modernes Wohngebäude mit Balkonen",
                },
                {
                  icon: Building2,
                  title: "Einfamilienhäuser",
                  desc: "Verschiedene Sanierungszustände.",
                  img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=70",
                  alt: "Freistehendes Einfamilienhaus",
                },
                {
                  icon: TreePine,
                  title: "Grundstücke",
                  desc: "Bauland und freie Flächen mit Entwicklungspotenzial.",
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=70",
                  alt: "Luftbild eines Baugrundstücks",
                },
                {
                  icon: Store,
                  title: "Gewerbeimmobilien",
                  desc: "Einzelhandel, Büro und gemischte Nutzung.",
                  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=70",
                  alt: "Bürogebäude Außenansicht",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card overflow-hidden h-full" style={{ borderRadius: 12 }}>
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        className="block w-full"
                        style={{ height: 180, objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                      />
                      <div className="p-7">
                        <Icon className="mb-4 text-teal-600" size={28} />
                        <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                        <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* REGION */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <MapPin className="mx-auto mb-4 text-teal-400" size={32} />
                <h2 className="mb-4 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.7rem]">
                  Regionaler Fokus
                </h2>
                <p className="text-[0.93rem] leading-[1.85] text-white/75">
                  Düsseldorf, Mettmann, Neuss, Ratingen, Hilden und weitere Standorte im Rheinland mit Substanz, Nachfrage und Entwicklungspotenzial.
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Konkrete Objekte anfragen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Beschreiben Sie uns kurz, wonach Sie suchen — wir prüfen, welche Objekte aus unserem aktuellen Bestand für Sie in Frage kommen.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Portfolio anfragen
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
