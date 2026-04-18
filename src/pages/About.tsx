import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Home as HomeIcon, EyeOff, Clock, Phone } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Über Aurelia – Aurelia Grundbesitz GmbH";
  }, []);

  const approach = [
    {
      Icon: HomeIcon,
      title: "Direkter Ankauf",
      text: "Kein Makler. Kein Finanzierungsvorbehalt. Wir kaufen aus eigenen Mitteln – verbindlich und notariell abgesichert.",
    },
    {
      Icon: EyeOff,
      title: "Maximale Diskretion",
      text: "Keine öffentliche Vermarktung. Keine Aushänge. Gespräche bleiben zwischen Ihnen und uns.",
    },
    {
      Icon: Clock,
      title: "Schnelle Reaktion",
      text: "Innerhalb von 48 Stunden erhalten Sie eine erste Einschätzung. In dringenden Fällen schneller.",
    },
  ];

  const cases = [
    {
      label: "NOTLAGE · NRW · 2025",
      title: "Zwangsversteigerung abgewendet",
      text: "Alleinerbin, Mehrfamilienhaus NRW, laufendes Zwangsversteigerungsverfahren, Schulden höher als Verkehrswert.",
      results: [
        "Freihändiger Verkauf 4 Wochen vor Termin",
        "Verfahren eingestellt",
        "Eigentümerin schuldenfrei",
      ],
    },
    {
      label: "ERBENGEMEINSCHAFT · RHEINLAND · 2024",
      title: "Blockierten Verkauf gelöst",
      text: "3 Erben, Einfamilienhaus, blockierter Verkauf seit über 2 Jahren, keine Einigung.",
      results: [
        "Ankauf eines Erbteils",
        "Gesamtlösung in 6 Wochen",
        "Alle Parteien ausgezahlt",
      ],
    },
    {
      label: "DIREKTANKAUF · DÜSSELDORF · 2025",
      title: "Schneller Verkauf ohne Makler",
      text: "Eigentümer, Gewerbeobjekt Düsseldorf, Gläubigerdruck, Darlehen gekündigt.",
      results: [
        "Direktkontakt Gläubigerbank",
        "Strukturierter Ankauf",
        "Darlehen vollständig abgelöst",
      ],
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px] bg-primary">
        <div className="absolute inset-0 overflow-hidden bg-primary">
          <OptimizedImg
            src={heroSets.about.src}
            srcSet={heroSets.about.srcSet}
            sizes={heroSets.about.sizes}
            alt="Über Aurelia Grundbesitz"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
            }}
          />
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
        {/* BLOCK 1: Wer hinter Aurelia steht */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-premium">
            <div className="grid items-center gap-10 md:gap-14 md:grid-cols-2">
              <Reveal>
                <div>
                  <div className="mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                  <h2 className="mb-4 font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                    Wer hinter Aurelia steht
                  </h2>
                  <p className="text-[15px] md:text-[16px] leading-[1.7] text-foreground/85">
                    Aurelia Grundbesitz GmbH wurde von <strong>Eyüp Yasar Alkac</strong> gegründet – mit Sitz in
                    Düsseldorf und Fokus auf Immobilien in besonderen Situationen. Zwangsversteigerungen,
                    Erbengemeinschaften, notleidende Objekte. Wir handeln ausschließlich auf eigene Rechnung.
                    Kein Bankfinanzierungsvorbehalt. Keine Weitervermittlung. Wer mit uns spricht, spricht mit
                    dem Entscheider.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <figure className="mx-auto md:ml-auto md:mr-0">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      width: "100%",
                      maxWidth: 400,
                      aspectRatio: "4 / 5",
                      backgroundColor: "#D9D9D9",
                    }}
                    aria-label="Porträt-Platzhalter Eyüp Yasar Alkac"
                    role="img"
                  />
                  <figcaption
                    className="mt-3 text-center md:text-left"
                    style={{ fontSize: 13, color: "#1B2A4A", fontWeight: 500 }}
                  >
                    Eyüp Yasar Alkac — Geschäftsführer
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BLOCK 2: Unser Ansatz */}
        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  Unser Ansatz
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {approach.map((item, i) => {
                const Icon = item.Icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card h-full p-7 md:p-8 text-left">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="mb-5"
                        style={{ color: "hsl(var(--highlight))" }}
                        aria-hidden="true"
                      />
                      <h3 className="mb-2 text-[1.125rem] md:text-[1.25rem] font-heading font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] leading-[1.7] text-foreground/80">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* BLOCK 3: Beispiele aus der Praxis */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  Beispiele aus der Praxis
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:gap-7 md:grid-cols-3">
              {cases.map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <article
                    className="h-full flex flex-col"
                    style={{
                      backgroundColor: "#F7F6F2",
                      border: "1px solid #C9A84C",
                      borderRadius: 8,
                      padding: 32,
                    }}
                  >
                    <p
                      className="mb-3"
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "hsl(var(--highlight))",
                      }}
                    >
                      {c.label}
                    </p>
                    <h3 className="mb-3 text-[1.125rem] font-heading font-semibold text-primary leading-[1.25]">
                      {c.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-foreground/80 mb-5">{c.text}</p>
                    <div className="my-1" style={{ borderTop: "1px solid #E0DDD8" }} />
                    <ul className="mt-4 space-y-1.5 text-[14px] leading-[1.65] text-foreground/85">
                      {c.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span aria-hidden="true" style={{ color: "hsl(var(--accent))" }}>
                            ✓
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-center text-[12px] text-muted-foreground">
              Alle Fälle anonymisiert dargestellt.
            </p>
          </div>
        </section>

        {/* BLOCK 4: CTA */}
        <section style={{ backgroundColor: "#1B2A4A" }} className="px-0">
          <div className="container-premium" style={{ paddingTop: 64, paddingBottom: 64 }}>
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-4 font-heading font-bold text-white text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  Lassen Sie uns Ihren Fall einordnen.
                </h2>
                <p className="mb-8 text-[15px] md:text-[16px] leading-[1.7] text-white/80">
                  Ein vertrauliches Erstgespräch ist unverbindlich und kostenfrei. Wir sagen Ihnen ehrlich, was
                  möglich ist.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:bg-white/95"
                  >
                    Kontakt aufnehmen
                    <ArrowRight size={13} className="text-accent" />
                  </Link>
                  <a
                    href="tel:+4921169583033"
                    className="inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300"
                    style={{ backgroundColor: "hsl(var(--highlight))" }}
                  >
                    <Phone size={14} strokeWidth={1.75} />
                    +49 211 69583033
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
