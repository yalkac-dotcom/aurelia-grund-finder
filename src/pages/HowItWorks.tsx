import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Lock, Eye, Briefcase, Layers } from "lucide-react";

const steps = [
  {
    title: "Vertrauliche Erstaufnahme",
    text: "Sie schildern die Ausgangslage. Wir hören zu, fragen gezielt nach und verschaffen uns ein erstes Bild der Situation. Im Mittelpunkt steht dabei nicht Geschwindigkeit um jeden Preis, sondern das richtige Verständnis der tatsächlichen Lage.",
  },
  {
    title: "Erste Einordnung",
    text: "Wir prüfen, ob die Konstellation grundsätzlich zu unserem Ansatz passt und wo die entscheidenden Punkte liegen. Schon in diesem Schritt wird oft klar, ob ein Fall tragfähig ist oder ob ein anderer Weg sinnvoller wäre.",
  },
  {
    title: "Vertiefte Prüfung",
    text: "Wenn die Ausgangslage grundsätzlich passt, sehen wir genauer hin: Struktur, Substanz, Zeitfaktoren, Beteiligte und wirtschaftliche Optionen. Ziel ist keine theoretische Analyse, sondern eine belastbare Grundlage für die Entscheidung.",
  },
  {
    title: "Nächster realistischer Schritt",
    text: "Dann wird entschieden, wie es weitergeht: Einordnung, Strukturierung, direkte Übernahme oder bewusst kein weiterer Schritt. Wichtig ist nicht, jeden Fall weiterzuführen, sondern nur die Wege zu gehen, die tatsächlich sinnvoll sind.",
  },
];

const values = [
  {
    icon: Lock,
    title: "Diskret",
    text: "Nicht jede Lage gehört in die Öffentlichkeit. Wenn Vertraulichkeit sinnvoll ist, behandeln wir sie entsprechend.",
  },
  {
    icon: Eye,
    title: "Klar",
    text: "Wir sagen früh, ob ein Fall grundsätzlich passt oder nicht. Das spart Zeit und unnötige Umwege.",
  },
  {
    icon: Briefcase,
    title: "Unternehmerisch",
    text: "Wir denken nicht nur in Gesprächsprozessen, sondern in umsetzbaren Entscheidungen.",
  },
  {
    icon: Layers,
    title: "Strukturiert",
    text: "Gerade in unklaren Situationen schaffen klare Reihenfolgen oft mehr Fortschritt als vorschneller Aktionismus.",
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
              <h1 className="hero-title">Ein geordneter Ablauf statt offener Baustellen</h1>
              <p className="hero-description">
                In schwierigen Situationen hilft keine Show, sondern ein klarer Prozess. Aurelia
                arbeitet ruhig, vertraulich und mit Blick auf das, was tatsächlich tragfähig ist –
                Schritt für Schritt und ohne unnötige Komplexität.
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
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Wie wir vorgehen
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Nicht jede Konstellation führt zu derselben Lösung. Aber jede sinnvolle Lösung
                  beginnt mit einer sauberen Reihenfolge: verstehen, einordnen, prüfen und dann
                  entscheiden, welcher Weg wirklich passt.
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
                      <p className="text-[0.9rem] leading-[1.8] text-muted-foreground">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Was unsere Arbeitsweise auszeichnet
                </h2>
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
                      <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Der nächste Schritt muss nicht groß sein. Nur klar.
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">
                  In vielen Fällen ist nicht sofort eine Lösung nötig, sondern zuerst eine
                  belastbare Einordnung. Genau dafür ist unsere Arbeitsweise gedacht: ruhig,
                  nachvollziehbar und auf das ausgerichtet, was in der konkreten Lage tatsächlich
                  Sinn ergibt.
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
                Der erste Schritt ist kein großer Prozess, sondern ein klares Gespräch
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/85">
                Wenn Sie eine Situation einordnen möchten, reicht zunächst eine vertrauliche
                Erstaufnahme. Danach zeigt sich, ob und wie ein weiterer Schritt sinnvoll ist.
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
