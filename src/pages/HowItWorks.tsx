import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Vertrauliche Erstaufnahme",
    desc: "Ein erstes, diskretes Gespräch. Wir hören zu, ordnen die Situation grob ein und klären gemeinsam, ob eine vertiefte Prüfung sinnvoll ist.",
  },
  {
    title: "Erste Einordnung",
    desc: "Auf Basis der Ausgangslage prüfen wir den groben Rahmen — rechtlich, wirtschaftlich, zeitlich. Ohne Vorfestlegung, ohne Druck.",
  },
  {
    title: "Vertiefte Prüfung",
    desc: "Wenn Substanz und Konstellation passen, gehen wir in die strukturierte Detailprüfung. Klar, nachvollziehbar, mit belastbaren Ergebnissen.",
  },
  {
    title: "Nächster realistischer Schritt",
    desc: "Am Ende steht eine klare Linie: ein konkreter nächster Schritt, eine geordnete Vorbereitung — oder eine ehrliche Absage, wenn es nicht passt.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    document.title = "Arbeitsweise — Aurelia Grundbesitz GmbH";
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
            alt="Arbeitsweise — Aurelia Grundbesitz"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Arbeitsweise</p>
              <h1 className="hero-title">Geordnet vom ersten Gespräch bis zur Entscheidung</h1>
              <p className="hero-description">
                Vier klare Schritte — vertraulich, strukturiert und ohne unnötigen Druck.
              </p>
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
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-4 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Vertraulich, strukturiert, nachvollziehbar
                </h2>
                <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Jede Konstellation ist anders. Was gleich bleibt, ist die Art, wie wir
                  herangehen — ruhig, geordnet und mit Respekt vor der Situation der Beteiligten.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SCHRITTE */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-8 h-full">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg icon-badge">
                        <span className="text-[1.3rem] font-heading font-bold text-teal-700">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="mb-3 text-[1.05rem] font-heading font-semibold text-foreground">
                        {s.title}
                      </h3>
                      <p className="text-[0.9rem] leading-[1.8] text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <p className="mt-10 mx-auto max-w-2xl text-center text-[0.82rem] leading-[1.75] text-muted-foreground/80 italic">
                  Nicht jede Konstellation führt zu einer Übernahme. Eine ehrliche Einordnung — auch
                  eine Absage — gehört zum Vorgehen genauso dazu wie ein konkreter nächster Schritt.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HALTUNG */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Diskretion ist kein Versprechen, sondern Voraussetzung
                </h2>
                <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.85] text-white/80">
                  Anfragen werden vertraulich behandelt. Inhalte verlassen die unmittelbar
                  Beteiligten nicht. Zeitpläne richten sich nach der Situation — nicht umgekehrt.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative section-premium overflow-hidden text-white"
          style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-5 text-[1.7rem] md:text-[1.95rem] font-heading font-bold text-white">
                Erstes Gespräch — vertraulich und unverbindlich
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/85">
                Ein kurzer Anruf oder eine Nachricht genügt, um die Ausgangslage in Ruhe zu prüfen.
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
