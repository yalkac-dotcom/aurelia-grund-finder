import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-glossar.jpg";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const glossary = [
  { term: "AfA", definition: "Absetzung für Abnutzung – die steuerliche Abschreibung von Anschaffungs- und Herstellungskosten eines Gebäudes über dessen Nutzungsdauer." },
  { term: "BAFA", definition: "Bundesamt für Wirtschaft und Ausfuhrkontrolle – zuständig für direkte Zuschüsse bei energetischen Einzelmaßnahmen." },
  { term: "BEG", definition: "Bundesförderung für effiziente Gebäude – das übergreifende Förderprogramm für energieeffizientes Bauen und Sanieren in Deutschland." },
  { term: "Effizienzhaus", definition: "Ein energetischer Standard der KfW, der angibt, wie viel Energie ein Gebäude im Vergleich zu einem Referenzgebäude verbraucht (z. B. Effizienzhaus 55 = 55 % des Referenzwerts)." },
  { term: "Erhaltungsaufwand", definition: "Ausgaben für Reparaturen und Instandhaltung, die das Gebäude in einem ordnungsgemäßen Zustand erhalten. Steuerlich sofort als Werbungskosten abziehbar." },
  { term: "Herstellungsaufwand", definition: "Ausgaben, die zu einer wesentlichen Verbesserung oder Erweiterung des Gebäudes führen. Müssen über die AfA abgeschrieben werden." },
  { term: "iSFP", definition: "Individueller Sanierungsfahrplan – ein Dokument, das den energetischen Ist-Zustand eines Gebäudes analysiert und eine schrittweise Sanierungsstrategie empfiehlt." },
  { term: "KfW", definition: "Kreditanstalt für Wiederaufbau – staatliche Förderbank, die zinsgünstige Kredite und Tilgungszuschüsse für Bau- und Sanierungsvorhaben vergibt." },
  { term: "Sonder-AfA", definition: "Zusätzliche Abschreibungsmöglichkeit nach § 7b EStG für neu geschaffenen Mietwohnraum unter bestimmten Voraussetzungen." },
  { term: "Tilgungszuschuss", definition: "Ein Teil des KfW-Kredits, der nicht zurückgezahlt werden muss – abhängig vom erreichten Effizienzhaus-Standard." },
  { term: "Werbungskosten", definition: "Ausgaben, die im Zusammenhang mit der Erzielung von Einkünften stehen (z. B. Vermietung). Sie mindern das zu versteuernde Einkommen." },
];

const GlossarPage = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Glossar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-accent" size={32} />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Wissen</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Glossar</h1>
      </div>
    </section>

    <section className="py-6">
      <div className="container max-w-4xl">
        <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
          <ArrowLeft size={16} />
          Zurück zur Übersicht
        </Link>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl">
        <SectionHeading title="Wichtige Begriffe" subtitle="Wichtige Begriffe rund um Steuervorteile und Förderungen im Immobilienbereich." />
        <div className="space-y-0 mt-12">
          {glossary.map((g, i) => (
            <div
              key={g.term}
              className={`grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 py-4 ${
                i < glossary.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <dt className="font-bold text-foreground text-sm">{g.term}</dt>
              <dd className="text-muted-foreground text-sm leading-relaxed">{g.definition}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default GlossarPage;
