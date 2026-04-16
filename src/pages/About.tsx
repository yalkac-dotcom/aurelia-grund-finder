import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, ShieldCheck, Compass, Clock, Lock } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Diskretion",
    desc: "Anfragen und Konstellationen werden vertraulich behandelt — selbstverständlich, nicht als Versprechen.",
  },
  {
    icon: Compass,
    title: "Substanz vor Tempo",
    desc: "Wir prüfen ruhig, ordnen klar und entscheiden erst, wenn das Bild belastbar ist.",
  },
  {
    icon: ShieldCheck,
    title: "Unternehmerische Verantwortung",
    desc: "Wo es passt, übernimmt Aurelia selbst — und trägt damit auch die unternehmerische Verantwortung.",
  },
  {
    icon: Clock,
    title: "Langer Atem",
    desc: "Objekte werden nicht durchgereicht. Wir denken in Jahren, nicht in Quartalen.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "Über Aurelia — Aurelia Grundbesitz GmbH";
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
              <h1 className="hero-title">Ruhig im Auftritt, handlungsfähig in der Sache</h1>
              <p className="hero-description">
                Ein unternehmerisch geprägter Immobilienakteur für besondere, blockierte oder
                zeitkritische Situationen.
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* PROFIL */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Wer wir sind
                </h2>
                <div className="space-y-4 text-[0.95rem] leading-[1.85] text-muted-foreground">
                  <p>
                    Aurelia Grundbesitz ist ein diskreter, unternehmerisch geprägter
                    Immobilienakteur mit Sitz in Düsseldorf. Wir arbeiten dort, wo Substanz,
                    Ordnung und Entscheidungsfähigkeit gebraucht werden — ruhig, strukturiert und
                    mit langem Atem.
                  </p>
                  <p>
                    Wir prüfen Konstellationen, bereiten sie geordnet vor — und übernehmen, wenn es
                    wirtschaftlich und menschlich passt, auch selbst. Was uns wichtig ist: ein
                    klares Bild, ein belastbarer nächster Schritt und ein Umgang, der der
                    Situation der Beteiligten gerecht wird.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HALTUNG */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Unsere Haltung
                </h2>
                <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.85] text-white/75">
                  Vier Linien, die unser Vorgehen prägen — auf der Startseite, in jedem Gespräch
                  und in jedem Projekt.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="glass-card-dark rounded-2xl p-7 h-full">
                      <Icon className="mb-4 text-teal-400" size={26} />
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* UNTERNEHMENSDATEN */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
                <p className="mb-2 text-[0.72rem] font-sans font-semibold uppercase tracking-[0.15em] text-teal-700">
                  Sitz
                </p>
                <h3 className="mb-5 text-[1.1rem] font-heading font-semibold text-foreground">
                  Aurelia Grundbesitz GmbH
                </h3>
                <div className="space-y-1.5 text-[0.92rem] leading-[1.8] text-muted-foreground">
                  <p>Grevenbroicher Weg 2</p>
                  <p>40547 Düsseldorf</p>
                  <p>Deutschland</p>
                  <p className="pt-3">
                    <a
                      href="mailto:info@aureliaestates.de"
                      className="text-teal-700 hover:text-teal-800 transition-colors"
                    >
                      info@aureliaestates.de
                    </a>
                  </p>
                </div>
                <p className="mt-6 text-[0.78rem] text-muted-foreground/80">
                  Vollständige Registerangaben finden Sie im{" "}
                  <Link to="/impressum" className="underline hover:text-teal-700">
                    Impressum
                  </Link>
                  .
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
                Lernen Sie uns in einem Gespräch kennen
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/85">
                Vertraulich, unverbindlich und ohne Erwartung an einen sofortigen Abschluss.
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
