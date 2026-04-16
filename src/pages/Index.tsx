import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, Handshake, Home as HomeIcon, Briefcase } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import NewsletterSignup from "@/components/NewsletterSignup";

const HomePage = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.premium.src}
            srcSet={heroSets.premium.srcSet}
            sizes={heroSets.premium.sizes}
            alt="Gepflegtes Mehrfamilienhaus in einer ruhigen Wohnstraße"
            className="hero-media h-full w-full object-cover object-[62%_center] md:object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Aurelia Grundbesitz</p>
              <h1 className="hero-title">Lösungen für Immobilien in Schwierigkeiten</h1>
              <p className="hero-description">
                Aurelia kauft Forderungen von Eigentümern in Schwierigkeiten
                und bietet individuelle Lösungen.
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* DIE 3 BEREICHE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Unsere Geschäftsbereiche
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Drei klar getrennte Bereiche — abgestimmt auf Ihre individuelle Ausgangslage.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Handshake,
                  title: "Eigentümer in Schwierigkeiten",
                  desc: "Wir kaufen Forderungen von Eigentümern an und zahlen nach Vereinbarung. Sie erhalten Kapital, wir übernehmen die Immobilie. Professionelle Begleitung, diskrete Behandlung.",
                  cta: "Mehr erfahren",
                  link: "/fuer-eigentumer-in-not",
                  color: "bg-red-500"
                },
                {
                  icon: HomeIcon,
                  title: "Für Käufer",
                  desc: "Qualitätsimmobilien aus unserem Bestand. Transparente Preise, zügige Kaufabwicklung. Direkt vom Eigentümer, ohne Makler.",
                  cta: "Portfolio anfragen",
                  link: "/fuer-kaeufer",
                  color: "bg-green-500"
                },
                {
                  icon: Briefcase,
                  title: "Für Geschäftspartner",
                  desc: "Aurelia sucht strategische Partner für einzelne Immobilien-Projekte. Individuelle Strukturen, transparente Vereinbarungen.",
                  cta: "Kontakt aufnehmen",
                  link: "/fuer-geschaeftspartner",
                  color: "bg-yellow-500"
                }
              ].map((path, i) => {
                const Icon = path.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <Link to={path.link} className="glass-card card-hover block rounded-2xl p-8 text-center transition-all duration-300 h-full">
                      <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${path.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-2 text-[1.05rem] font-heading font-semibold text-foreground">
                        {path.title}
                      </h3>
                      <p className="mb-4 text-[0.88rem] leading-[1.7] text-muted-foreground">
                        {path.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-teal-700">
                        {path.cta} <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRUST — ohne konkrete Zahlen */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Professionelle Expertise im Immobilienmarkt
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia Grundbesitz spezialisiert sich auf den Ankauf von Immobilienforderungen, den Erwerb anspruchsvoller Objekte und deren wirtschaftliche Verwertung. Unser Geschäftsmodell basiert auf Transparenz, fairer Preisgestaltung und langfristiger Wertschöpfung.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card-dark rounded-2xl p-8 md:p-10">
                <h3 className="mb-3 text-[1.1rem] font-heading font-semibold text-white">
                  Unser Anspruch
                </h3>
                <p className="text-[0.93rem] leading-[1.85] text-white/70">
                  Transparente Kommunikation. Ethisches Handeln. Nachhaltige Wertschöpfung. Aurelia verzichtet auf intransparente Intermediäre und undurchschaubare Prozesse. Alle Geschäfte werden zu fairen Bedingungen und auf Basis objektiver Marktwerte abgewickelt.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3-SCHRITT-TEASER */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Unser Ansatz in 3 Schritten
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Kontakt & Beratung",
                  desc: "Sie nehmen Kontakt auf, wir hören zu und ordnen Ihre Situation sachlich ein."
                },
                {
                  step: "2",
                  title: "Bewertung & Angebot",
                  desc: "Wir analysieren Ihre Situation und unterbreiten ein nachvollziehbares Angebot."
                },
                {
                  step: "3",
                  title: "Vertrag & Abwicklung",
                  desc: "Nach Vereinbarung erfolgt die professionelle, rechtssichere Abwicklung."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <div className="glass-card rounded-2xl p-8 text-center h-full">
                      <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                        <span className="text-[1.3rem] font-heading font-bold text-teal-700">{item.step}</span>
                      </div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2">
                        <ArrowRight className="text-teal-600/30" size={24} />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                Zeitrahmen sind Richtwerte und hängen von der individuellen Situation ab.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-6 text-center">
                <Link
                  to="/arbeitsweise"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Zum detaillierten Prozess
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-2xl">
              <Reveal>
                <div className="text-center mb-8">
                  <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                  <h2 className="mb-3 text-[1.3rem] font-heading font-semibold leading-[1.2] text-foreground md:text-[1.7rem]">
                    Newsletter abonnieren
                  </h2>
                  <p className="text-[0.92rem] leading-[1.8] text-muted-foreground">
                    Gelegentliche Marktbeobachtungen und Mitteilungen zu neuen Objekten in unserem Bestand. Jederzeit kündbar.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="glass-card rounded-2xl p-6 md:p-8">
                  <NewsletterSignup source="homepage" variant="light" />
                </div>
              </Reveal>
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Kontaktieren Sie uns unverbindlich.</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Gerne erläutern wir, wie Aurelia Grundbesitz Ihre Situation einordnen und unterstützen kann. Die erste Beratung ist kostenlos und unverbindlich.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Beratungstermin vereinbaren
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
