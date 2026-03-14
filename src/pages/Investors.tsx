import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-building.jpg";
import { Handshake, Building, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";

const InvestorDisclaimer = ({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
    <div className="bg-card max-w-2xl w-full p-8 md:p-10 border border-border shadow-2xl rounded">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-accent shrink-0" size={28} />
        <h2 className="text-xl font-bold text-foreground">Wichtiger Hinweis für Interessenten</h2>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        Die Informationen im Bereich „Für Investoren" dienen ausschließlich allgemeinen
        Informationszwecken und richten sich an Personen, die sich grundsätzlich mit den Chancen
        und Risiken unternehmerischer Investments in Immobilien auseinandersetzen. Sie stellen
        weder eine Anlageberatung noch eine Empfehlung oder ein Angebot zum Erwerb bestimmter
        Anlagen dar. Investitionen in unternehmerische Projekte und immobiliennahe Finanzierungen
        sind mit Risiken bis hin zum vollständigen Verlust des eingesetzten Kapitals verbunden.
        Bitte lassen Sie sich vor einer Investitionsentscheidung von unabhängigen rechtlichen,
        steuerlichen und finanziellen Beratern individuell beraten.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onAccept}
          className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:bg-[hsl(226,40%,30%)] transition-colors"
        >
          Hinweis verstanden – weiter
        </button>
        <button
          onClick={onDecline}
          className="border border-border text-muted-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:bg-secondary transition-colors"
        >
          Zur Startseite zurück
        </button>
      </div>
    </div>
  </div>
);

const cooperationModels = [
  {
    icon: Handshake,
    title: "Kapitalüberlassung auf Basis individueller Vereinbarungen",
    text: "Investoren können Aurelia Grundbesitz auf vertraglicher Basis Kapital zur Verfügung stellen. Die genauen Konditionen, Laufzeiten und Rückzahlungsmodalitäten werden stets individuell vereinbart und richten sich nach dem jeweiligen Projektprofil.",
  },
  {
    icon: Building,
    title: "Projektbezogene Kooperationen",
    text: "Für ausgewählte Immobilienprojekte besteht die Möglichkeit einer projektbezogenen Zusammenarbeit. Das konkrete Modell – etwa als stille Beteiligung, Gesellschafterstellung oder individuelle Vereinbarung – wird im Einzelfall geprüft und strukturiert.",
  },
  {
    icon: TrendingUp,
    title: "Langfristig orientierte Partnerschaften",
    text: "Aurelia Grundbesitz sucht Investoren, die an einer nachhaltigen Wertentwicklung interessiert sind. Langfristige Kooperationen ermöglichen eine gemeinsame Portfolioentwicklung auf Basis von Vertrauen, Transparenz und klaren Strukturen.",
  },
];

const InvestorForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-secondary border border-border p-10 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">
          Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
      <div>
        <label htmlFor="inv-anrede" className="block text-sm font-medium text-foreground mb-1.5">Anrede</label>
        <select id="inv-anrede" name="anrede" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent">
          <option value="">Bitte wählen</option>
          <option value="Herr">Herr</option>
          <option value="Frau">Frau</option>
          <option value="Divers">Divers</option>
          <option value="Keine Angabe">Keine Angabe</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inv-vorname" className="block text-sm font-medium text-foreground mb-1.5">Vorname <span className="text-accent">*</span></label>
          <input id="inv-vorname" name="vorname" type="text" required placeholder="Ihr Vorname" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
        </div>
        <div>
          <label htmlFor="inv-nachname" className="block text-sm font-medium text-foreground mb-1.5">Nachname <span className="text-accent">*</span></label>
          <input id="inv-nachname" name="nachname" type="text" required placeholder="Ihr Nachname" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
        </div>
      </div>

      <div>
        <label htmlFor="inv-firma" className="block text-sm font-medium text-foreground mb-1.5">Firma / Institution</label>
        <input id="inv-firma" name="firma" type="text" placeholder="Optional" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
      </div>

      <div>
        <label htmlFor="inv-email" className="block text-sm font-medium text-foreground mb-1.5">E-Mail-Adresse <span className="text-accent">*</span></label>
        <input id="inv-email" name="email" type="email" required placeholder="ihre.email@beispiel.de" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
      </div>

      <div>
        <label htmlFor="inv-telefon" className="block text-sm font-medium text-foreground mb-1.5">Telefonnummer <span className="text-accent">*</span></label>
        <input id="inv-telefon" name="telefon" type="tel" required placeholder="+49 (0) 211 ..." className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
      </div>

      <div>
        <label htmlFor="inv-nachricht" className="block text-sm font-medium text-foreground mb-1.5">Ihre Nachricht <span className="text-accent">*</span></label>
        <textarea id="inv-nachricht" name="nachricht" rows={6} required placeholder="In welcher Form stellen Sie sich eine mögliche Zusammenarbeit vor?" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none" />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 border-border text-primary rounded focus:ring-accent" />
        <span className="text-sm text-muted-foreground leading-relaxed">
          Ich habe die <a href="/datenschutz" className="text-accent hover:underline">Datenschutzhinweise</a> gelesen und akzeptiere diese. <span className="text-accent">*</span>
        </span>
      </label>

      <p className="text-xs text-muted-foreground"><span className="text-accent">*</span> Pflichtfelder</p>

      <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide rounded hover:bg-[hsl(226,40%,30%)] transition-colors">
        Investorenanfrage senden
      </button>
    </form>
  );
};

const Investors = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  const handleDecline = () => {
    window.location.href = "/";
  };

  return (
    <Layout>
      {!disclaimerAccepted && (
        <InvestorDisclaimer onAccept={() => setDisclaimerAccepted(true)} onDecline={handleDecline} />
      )}

      {/* Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Investoren" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Für Investoren</h1>
          <p className="text-primary-foreground/80 text-lg mt-4 max-w-2xl">
            Partnerschaft mit Aurelia – gemeinsam Immobilien aus besonderen Situationen
            verantwortungsvoll entwickeln und langfristig Werte schaffen.
          </p>
        </div>
      </section>

      {/* Warum Aurelia */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title="Warum mit Aurelia zusammenarbeiten?" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Die Aurelia Grundbesitz GmbH ist auf den Ankauf und die Entwicklung von Immobilien
              aus Sondersituationen spezialisiert. Unser disziplinierter Investmentansatz, fundierte
              Marktanalysen und ein belastbares Netzwerk aus Banken, Maklern und Dienstleistern
              bilden die Grundlage für eine professionelle und transparente Zusammenarbeit.
            </p>
            <p>
              Wir setzen auf Qualität statt Quantität: Jedes Objekt wird sorgfältig geprüft,
              realistisch kalkuliert und mit klarer Strategie entwickelt. Unsere Investoren
              profitieren von regelmäßiger Kommunikation, nachvollziehbaren Entscheidungen
              und einem partnerschaftlichen Umgang auf Augenhöhe.
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-6 italic">
            Diese Informationen sind allgemeiner Natur und ersetzen keine individuelle Anlageberatung.
          </p>
        </div>
      </section>

      {/* Kooperationsmodelle */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading title="Mögliche Formen der Zusammenarbeit" align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {cooperationModels.map((model) => (
              <div key={model.title} className="bg-card p-8 border border-border">
                <model.icon className="text-accent mb-4" size={28} />
                <h3 className="text-lg font-bold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{model.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 italic max-w-2xl mx-auto">
            Ob und in welcher Form eine Zusammenarbeit möglich ist, wird stets individuell geprüft
            und vertraglich geregelt.
          </p>
        </div>
      </section>

      {/* Transparenz & Risiken */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="bg-secondary border border-border p-8 md:p-10 rounded">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-accent shrink-0" size={24} />
              <h2 className="text-xl font-bold text-foreground">Transparenz & Risiken</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Investitionen in unternehmerische Projekte und immobiliennahe Finanzierungen sind
              mit wirtschaftlichen Risiken verbunden, die im ungünstigsten Fall zu einem teilweisen
              oder vollständigen Verlust des eingesetzten Kapitals führen können. Allgemeine
              Informationen auf dieser Website berücksichtigen nicht die persönliche Situation
              einzelner Anleger und stellen weder eine Anlageberatung noch eine Empfehlung oder
              Aufforderung zum Abschluss bestimmter Geschäfte dar.
            </p>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-3xl">
          <SectionHeading title="Investorenanfrage" align="center" subtitle="Sie interessieren sich für eine Zusammenarbeit mit Aurelia Grundbesitz? Nehmen Sie unverbindlich Kontakt mit uns auf." />
          <InvestorForm />
          <div className="mt-8 p-6 bg-card border border-border rounded">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Rechtlicher Hinweis:</strong> Die hier abgefragten
              Informationen dienen ausschließlich der ersten, unverbindlichen Kontaktaufnahme. Die
              Inhalte dieser Website – insbesondere im Bereich „Für Investoren" – stellen keine
              Anlageberatung, keine Empfehlung und kein Angebot zum Erwerb bestimmter Anlagen dar.
              Investitionen in unternehmerische Projekte und immobiliennahe Finanzierungen sind mit
              Risiken bis hin zum vollständigen Verlust des eingesetzten Kapitals verbunden. Bitte
              lassen Sie sich vor einer Investitionsentscheidung von unabhängigen rechtlichen,
              steuerlichen und finanziellen Beratern individuell beraten.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
