import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-afa.jpg";
import { BadgePercent, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Lineare AfA",
    text: "Vermieter können die Anschaffungs- und Herstellungskosten eines Gebäudes über die Nutzungsdauer linear abschreiben. Für Gebäude, die nach 2023 fertiggestellt werden, beträgt der AfA-Satz 3 % p. a. über ca. 33 Jahre. Für ältere Bestandsgebäude gilt in der Regel ein Satz von 2 % über 50 Jahre. Die AfA mindert das zu versteuernde Einkommen und führt so zu einer jährlichen Steuerentlastung – ohne tatsächlichen Liquiditätsabfluss.",
  },
  {
    heading: "Sonder-AfA nach § 7b EStG",
    text: "Für neu geschaffenen Mietwohnraum kann unter bestimmten Voraussetzungen eine zusätzliche Sonderabschreibung von 5 % p. a. in den ersten vier Jahren geltend gemacht werden. Voraussetzung: Die Baukosten dürfen 5.200 €/m² Wohnfläche nicht übersteigen, und die Wohnung muss mindestens 10 Jahre vermietet werden.",
  },
  {
    heading: "Erhaltungsaufwand",
    text: "Aufwendungen für Reparaturen, Instandhaltung und kleinere Modernisierungen (z. B. neuer Bodenbelag, Malerarbeiten, Heizungswartung) können als Erhaltungsaufwand sofort in voller Höhe als Werbungskosten abgezogen werden. Alternativ ist eine Verteilung auf bis zu fünf Jahre möglich (§ 82b EStDV), was bei größeren Maßnahmen steuerlich vorteilhaft sein kann.",
  },
  {
    heading: "Abgrenzung zum Herstellungsaufwand",
    text: "Wichtig: Werden durch Baumaßnahmen wesentliche Verbesserungen vorgenommen oder der Nutzungszweck geändert, handelt es sich um Herstellungsaufwand, der nur über die AfA abgeschrieben werden kann. Die Abgrenzung ist im Einzelfall komplex und sollte mit einem Steuerberater geklärt werden.",
  },
];

const links = [
  { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
  { label: "Finanzamt (Elster)", url: "https://www.elster.de" },
];

const AfaPage = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="AfA & Erhaltungsaufwand" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <BadgePercent className="text-accent" size={32} />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Steuern</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">AfA & Erhaltungsaufwand</h1>
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
        <SectionHeading title="Laufende Steuerersparnis bei Vermietung" />
        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
          Die Absetzung für Abnutzung (AfA) und der Erhaltungsaufwand sind zentrale steuerliche Instrumente für Immobilieneigentümer, die ihre Steuerlast nachhaltig senken möchten.
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
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
            >
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

export default AfaPage;
