import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Volume2, Eye, ShieldCheck, Anchor } from "lucide-react";

const sections = [
  {
    title: "Nicht jede Immobilie braucht denselben Weg",
    text: "Manche Konstellationen lassen sich über den offenen Markt lösen. Andere brauchen zunächst Struktur, Ruhe und eine ehrliche Einordnung. Aurelia arbeitet genau an dieser Schnittstelle: dort, wo Standardprozesse an Grenzen stoßen und ein belastbarer nächster Schritt gebraucht wird.",
  },
  {
    title: "Diskret, strukturiert, handlungsfähig",
    text: "Unsere Arbeit beginnt mit Verständnis der Ausgangslage und endet nicht bei unverbindlichen Gesprächen. In passenden Fällen prüfen wir auch unternehmerische Lösungen, bis hin zur direkten Übernahme, strukturierten Weiterentwicklung oder anderen realistischen Wegen, wenn sie sinnvoll und tragfähig sind.",
  },
  {
    title: "Substanz vor Inszenierung",
    text: "Aurelia interessiert sich nicht für große Worte ohne Fundament. Entscheidend sind Lage, Struktur, Handlungsspielraum und die Frage, ob sich aus einer Situation ein sinnvoller Weg entwickeln lässt. Genau dort setzen wir an – nüchtern, diskret und mit Verantwortung für die Qualität der Entscheidung.",
  },
];

const values = [
  {
    icon: Volume2,
    title: "Ruhe statt Lautstärke",
    text: "Wir bevorzugen klare Prozesse und diskrete Kommunikation gegenüber öffentlicher Inszenierung.",
  },
  {
    icon: Eye,
    title: "Frühe Klarheit",
    text: "Wir sagen früh, ob ein Fall tragfähig ist oder ob ein anderer Weg sinnvoller wäre.",
  },
  {
    icon: ShieldCheck,
    title: "Unternehmerische Verantwortung",
    text: "Wir prüfen nicht nur, wir handeln in passenden Fällen auch selbst.",
  },
  {
    icon: Anchor,
    title: "Belastbare Lösungen",
    text: "Am Ende zählt nicht die Erzählung, sondern ob ein Schritt tatsächlich trägt.",
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
              <h1 className="hero-title">
                Ein ruhiger, unternehmerischer Blick auf Immobilien in besonderen Situationen
              </h1>
              <p className="hero-description">
                Aurelia arbeitet dort, wo Immobilien nicht sauber in Standards passen. Im Mittelpunkt
                stehen keine lauten Auftritte und keine allgemeinen Versprechen, sondern diskrete
                Einordnung, klare Entscheidungen und tragfähige Lösungen in ausgewählten Fällen.
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
                  Was Aurelia ausmacht
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Aurelia ist kein lauter Marktauftritt und kein abstraktes Beteiligungsmodell. Der
                  Ansatz ist unternehmerisch, diskret und auf Substanz ausgerichtet. Wir prüfen
                  sorgfältig, sprechen klar und handeln in passenden Fällen auch selbst.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTIONS */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <div className="mx-auto max-w-4xl space-y-6">
              {sections.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8 md:p-10">
                    <h3 className="mb-3 text-[1.05rem] md:text-[1.15rem] font-heading font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-[0.93rem] leading-[1.85] text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
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
                  Wofür wir stehen
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
                  Aurelia ist dann sinnvoll, wenn eine Lage mehr als Standard braucht
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Wenn eine Immobilie, ein Grundstück oder eine besondere Konstellation nicht
                  sauber in einen einfachen Marktprozess passt, hilft oft zuerst eine ruhige und
                  belastbare Einordnung. Genau dafür steht Aurelia.
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
                Lassen Sie uns die Situation vertraulich besprechen
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/85">
                Wenn Sie einschätzen möchten, ob und wie ein sinnvoller nächster Schritt möglich
                ist, sprechen Sie mit uns. Ohne Druck. Ohne unnötige Schleifen. Mit klarem Blick
                auf das, was realistisch ist.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Vertraulich anfragen
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
