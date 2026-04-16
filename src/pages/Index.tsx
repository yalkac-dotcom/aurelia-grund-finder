import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import NewsletterSignup from "@/components/NewsletterSignup";

const helpModules = [
  {
    title: "Einordnen und prüfen",
    text: "Wir sichten die Ausgangslage, ordnen Risiken und Handlungsspielräume ein und schaffen zuerst Klarheit, bevor unnötige Schritte ausgelöst werden.",
  },
  {
    title: "Strukturieren und vorbereiten",
    text: "Wenn eine Lage festgefahren ist, helfen wir dabei, sie wieder entscheidungsfähig zu machen – ruhig, diskret und mit Blick auf einen belastbaren nächsten Schritt.",
  },
  {
    title: "Direkt übernehmen, wenn es passt",
    text: "In passenden Fällen prüfen wir die direkte Übernahme von Immobilien oder Grundstücken auf eigene Rechnung – nicht pauschal, sondern nur dort, wo Substanz, Lage und Struktur eine tragfähige Lösung erkennen lassen.",
  },
  {
    title: "Unternehmerisch weiterdenken",
    text: "Je nach Objekt und Ausgangslage kann der sinnvolle Weg in Neuordnung, Entwicklung, Halten oder selektiver Weiterveräußerung liegen. Entscheidend ist nicht Aktivität, sondern ein sauberer wirtschaftlicher Schritt.",
  },
];

const processSteps = [
  {
    title: "Vertrauliche Erstaufnahme",
    text: "Sie schildern die Ausgangslage. Wir hören zu, fragen nach und ordnen den Fall ohne unnötige Schleifen ein.",
  },
  {
    title: "Erste Einordnung",
    text: "Wir prüfen, ob die Konstellation grundsätzlich zu unserem Ansatz passt und wo die kritischen Punkte liegen.",
  },
  {
    title: "Vertiefte Prüfung",
    text: "Wenn es sinnvoll ist, sichten wir Struktur, Substanz, Zeitfaktoren und wirtschaftliche Optionen genauer.",
  },
  {
    title: "Nächster realistischer Schritt",
    text: "Dann wird entschieden, ob Einordnung, Strukturierung, direkte Übernahme oder kein weiterer Schritt der richtige Weg ist.",
  },
];

const whyPoints = [
  {
    title: "Diskret statt öffentlich",
    text: "Nicht jede Immobilie sollte breit in den Markt getragen werden. Wir arbeiten ruhig und vertraulich.",
  },
  {
    title: "Frühe Klarheit",
    text: "Wir sagen früh, ob eine Lage grundsätzlich tragfähig ist oder ob man keine Zeit in den falschen Weg investieren sollte.",
  },
  {
    title: "Unternehmerischer Blick",
    text: "Wir denken nicht nur in Gesprächen, sondern in umsetzbaren Entscheidungen und realistischen Strukturen.",
  },
  {
    title: "Substanz vor Fassade",
    text: "Uns interessieren keine großen Worte, sondern belastbare Lösungen auf Basis von Lage, Struktur und Handlungsspielraum.",
  },
];

const objections = [
  {
    q: "Unsere Situation ist vermutlich zu speziell.",
    a: "Gerade dafür ist unser Ansatz gedacht. Wir arbeiten dort, wo Standardprozesse oft nicht mehr sauber greifen.",
  },
  {
    q: "Wir möchten keine unnötige Öffentlichkeit.",
    a: "Müssen Sie auch nicht. Wenn Diskretion sinnvoll ist, behandeln wir die Situation entsprechend.",
  },
  {
    q: "Wir wollen erst wissen, ob es überhaupt passt.",
    a: "Genau dafür dient die erste Einordnung. Wir sagen früh, ob ein Fall grundsätzlich sinnvoll erscheint.",
  },
];

const faqItems = [
  {
    q: "Was tun, wenn der Verkauf nicht vorankommt?",
    a: "Dann lohnt sich oft zuerst eine saubere Einordnung: Liegt das Problem am Preis, an der Struktur, am Zeitdruck oder an der Ausgangslage? Genau dort setzt das Erstgespräch an.",
  },
  {
    q: "Kann ich mich auch melden, wenn bereits Zeitdruck besteht?",
    a: "Ja. Gerade in zeitkritischen Situationen ist eine frühe, realistische Einordnung oft wichtiger als ein weiterer unklarer Anlauf.",
  },
  {
    q: "Kaufen Sie in passenden Fällen auch selbst?",
    a: "Ja. In passenden Konstellationen prüfen wir die direkte Übernahme von Immobilien oder Grundstücken auf eigene Rechnung.",
  },
  {
    q: "Arbeiten Sie diskret?",
    a: "Ja. Wenn die Lage es erfordert oder gewünscht ist, behandeln wir sie entsprechend vertraulich.",
  },
  {
    q: "Muss schon alles vollständig vorbereitet sein?",
    a: "Nein. Oft beginnt ein sinnvoller Prozess gerade damit, dass eine unklare Lage erst sauber sortiert wird.",
  },
  {
    q: "Übernehmen Sie jeden Fall?",
    a: "Nein. Und genau das ist wichtig. Wir prüfen ehrlich, ob eine Situation zu unserem Ansatz passt.",
  },
  {
    q: "Prüfen Sie auch immobiliennahe wirtschaftliche Konstellationen?",
    a: "In ausgewählten Fällen ja, wenn ein klarer Immobilienbezug besteht und klassische Wege nicht sinnvoll weiterführen.",
  },
];

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
              <h1 className="hero-title">Immobilien mit Substanz – diskret geprüft, klar entwickelt</h1>
              <p className="hero-description">
                Nicht jede Immobilie lässt sich über den Standardmarkt sinnvoll lösen. Manche Fälle brauchen eine ruhige Einordnung, klare Entscheidungen und einen Partner, der strukturiert vorgeht. Aurelia prüft Immobilien, Grundstücke und ausgewählte immobiliennahe Konstellationen in schwierigen oder zeitkritischen Situationen – diskret, unternehmerisch und mit Blick auf tragfähige Lösungen.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 text-[11px] font-semibold tracking-[0.13em] uppercase btn-gradient rounded-sm transition-all duration-300"
                >
                  Vertraulich anfragen
                </Link>
                <a
                  href="#hilfe"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-semibold tracking-[0.13em] uppercase rounded-sm border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Wie wir helfen
                </a>
              </div>
              <p className="mt-6 text-[11px] tracking-[0.18em] uppercase text-white/70">
                Diskret · Inhabergeführt · Unternehmerisch handlungsfähig
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* SEKTION 2 — Einordnung */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="mb-5 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-5 text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                  Wenn der Verkauf stockt oder der Druck steigt, braucht es einen klaren nächsten Schritt
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Aurelia ist Ansprechpartner für Eigentümer, Beteiligte und ausgewählte professionelle Konstellationen, wenn eine Immobilie nicht in einen sauberen Standardprozess passt. Das kann ein stockender Verkauf sein, eine zeitkritische Situation, eine drohende Verwertung oder eine wirtschaftlich festgefahrene Lage rund um ein Grundstück oder eine Immobilie. Wir ordnen ein, prüfen die Handlungsmöglichkeiten und entscheiden in passenden Fällen auch unternehmerisch selbst.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SEKTION 3 — So können wir helfen */}
        <section id="hilfe" className="section-premium">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <p className="mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-teal-700/80">Unser Ansatz</p>
                <h2 className="mb-4 text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                  So können wir helfen
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Nicht jede Situation braucht denselben Weg. Entscheidend ist, was realistisch, wirtschaftlich sinnvoll und in der konkreten Lage tragfähig ist.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {helpModules.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.06}>
                  <div className="glass-card rounded-2xl p-7 h-full border-l-2 border-teal-600/60">
                    <h3 className="mb-3 text-[1.05rem] font-heading font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.8] text-muted-foreground">
                      {m.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEKTION 4 — Unternehmerischer Ansatz */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="mb-5 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.5rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[2rem]">
                  Wir begleiten nicht nur Prozesse. Wir treffen auch Entscheidungen.
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-white/80">
                  Aurelia versteht sich nicht als lauter Vermittler, sondern als unternehmerisch geprägter Immobilienakteur. Wir prüfen sorgfältig, sprechen klar und handeln in passenden Fällen auch selbst. Dazu können direkte Übernahme, strukturierte Weiterentwicklung oder ausgewählte immobiliennahe Konstellationen gehören, wenn klassische Wege nicht mehr weiterführen.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SEKTION 5 — Arbeitsweise-Teaser */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <p className="mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-teal-700/80">Arbeitsweise</p>
                <h2 className="mb-4 text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                  Ein klarer Ablauf statt offener Baustellen
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Gerade in schwierigen Situationen hilft keine Show, sondern ein geordneter Prozess.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div className="glass-card rounded-2xl p-6 h-full">
                    <div className="icon-badge mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                      <span className="text-[1rem] font-heading font-bold text-teal-700">{i + 1}</span>
                    </div>
                    <h3 className="mb-2 text-[0.98rem] font-heading font-semibold text-foreground">{s.title}</h3>
                    <p className="text-[0.85rem] leading-[1.75] text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 text-center">
                <Link
                  to="/arbeitsweise"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Zur ausführlichen Arbeitsweise
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEKTION 6 — Warum Aurelia */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <p className="mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-teal-700/80">Haltung</p>
                <h2 className="text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                  Warum Aurelia
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {whyPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="glass-card rounded-2xl p-7 h-full">
                    <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{p.title}</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEKTION 7 — Einwände */}
        <section className="section-premium">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="text-center mb-10">
                  <p className="mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-teal-700/80">Vor dem Gespräch</p>
                  <h2 className="text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                    Typische Fragen vor dem ersten Gespräch
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-4">
                {objections.map((o, i) => (
                  <Reveal key={o.q} delay={i * 0.06}>
                    <div className="glass-card rounded-2xl p-6 border-l-2 border-teal-600/50">
                      <p className="mb-2 text-[0.95rem] font-heading font-semibold text-foreground">„{o.q}"</p>
                      <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{o.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="text-center mb-10">
                  <p className="mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-teal-700/80">FAQ</p>
                  <h2 className="text-[1.5rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[2rem]">
                    Häufige Fragen
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-3">
                {faqItems.map((f, i) => (
                  <Reveal key={f.q} delay={i * 0.04}>
                    <details className="glass-card rounded-2xl p-5 group">
                      <summary className="cursor-pointer text-[0.95rem] font-heading font-semibold text-foreground list-none flex items-start justify-between gap-4">
                        <span>{f.q}</span>
                        <ArrowRight size={16} className="mt-1 shrink-0 text-teal-600 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-[0.88rem] leading-[1.8] text-muted-foreground">{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="section-premium">
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white text-balance">
                Der erste Schritt muss nicht groß sein. Nur klar.
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Wenn eine Immobilie, ein Grundstück oder eine festgefahrene Konstellation eine ruhige und belastbare Einordnung braucht, sprechen Sie mit uns. Oft spart ein klares erstes Gespräch mehr Zeit als ein langer Umweg über ungeeignete Prozesse.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Jetzt vertraulich anfragen
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
