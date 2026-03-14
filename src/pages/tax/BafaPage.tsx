import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-bafa.jpg";
import { Banknote, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Förderfähige Einzelmaßnahmen",
    text: "Gefördert werden u. a. Heizungsoptimierung und -austausch (z. B. Wärmepumpe, Biomasseheizung), Gebäudedämmung (Fassade, Dach, Kellerdecke), Fenster- und Türentausch sowie Lüftungsanlagen mit Wärmerückgewinnung.",
  },
  {
    heading: "Förderhöhe",
    text: "Die Zuschüsse betragen je nach Maßnahme 15–70 % der förderfähigen Kosten. Besonders attraktiv: Beim Austausch alter Öl- oder Gasheizungen gegen Wärmepumpen können Zuschüsse von bis zu 70 % erreicht werden (Grundförderung + Klimageschwindigkeitsbonus + Einkommensbonus).",
  },
  {
    heading: "iSFP-Bonus",
    text: "Wer einen individuellen Sanierungsfahrplan (iSFP) erstellen lässt, erhält einen zusätzlichen Bonus von 5 Prozentpunkten auf die Förderung der darin empfohlenen Maßnahmen.",
  },
  {
    heading: "Antragstellung",
    text: "Der Antrag wird online beim BAFA gestellt – ebenfalls vor Beginn der Maßnahme. Ein Energieberater muss eingebunden werden, dessen Kosten ebenfalls zu 50 % gefördert werden.",
  },
];

const links = [
  { label: "BAFA", url: "https://www.bafa.de" },
  { label: "BAFA – Förderübersicht", url: "https://www.bafa.de/DE/Energie/Energieeffizienz/energieeffizienz_node.html" },
];

const BafaPage = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BAFA Zuschüsse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <Banknote className="text-accent" size={32} />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Förderung</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">BAFA – Zuschüsse</h1>
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
        <SectionHeading title="Direkte Reduzierung der Investitionskosten" />
        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
          Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) fördert Einzelmaßnahmen zur energetischen Sanierung mit direkten Zuschüssen – ohne Kreditverpflichtung.
        </p>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading} className="border-l-2 border-accent pl-6">
              <h3 className="text-base font-bold text-foreground mb-2">{s.heading}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container max-w-4xl">
        <h3 className="text-sm font-bold text-foreground mb-4">Weiterführende Links</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors">
              <ExternalLink size={14} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground italic leading-relaxed">
          Haftungsausschluss: Die vorstehenden Links führen zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-4xl">
        <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded mt-16">
          Steuerliche Auswirkungen hängen stark vom Einzelfall ab. Die hier dargestellten Informationen ersetzen keine individuelle Beratung durch einen Steuerberater. Eine qualifizierte steuerliche Beratung ist vor jeder Investitionsentscheidung unerlässlich.
        </p>
      </div>
    </section>
  </Layout>
);

export default BafaPage;
