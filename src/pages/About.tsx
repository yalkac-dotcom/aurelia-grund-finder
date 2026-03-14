import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ceoImg from "@/assets/about-ceo.jpg";
import heroImg from "@/assets/hero-building.jpg";
import { Gem, Shield, Building } from "lucide-react";

const logoKonzepte = [
  {
    icon: Gem,
    name: "Konzept 1 – „A-Dach"",
    beschreibung:
      "Ein großes, stilisiertes „A" bildet das Kernzeichen. Die beiden Schenkel des A laufen nach oben spitz zu und formen ein abstraktes Hausdach – eine Doppeldeutung aus Buchstabe und Architektur. Die Spitze wird durch eine feine Gold-Linie (#C8A75A) akzentuiert, der Körper des Buchstabens ist in Marineblau (#101E4A) gehalten. Der Querbalken des A ist bewusst tiefer gesetzt und leicht verlängert, sodass er wie ein Türsturz wirkt.",
    schriftzug:
      "Rechts neben dem Icon steht der Name zweizeilig: „Aurelia" in Zeile 1 (Ubuntu Medium, Versalien, Marineblau, weit gesperrt), „Grundbesitz GmbH" in Zeile 2 (Ubuntu Light, kleiner, Marineblau). Auf kleinen Bildschirmen wird das Icon zentriert über dem Schriftzug platziert.",
  },
  {
    icon: Shield,
    name: "Konzept 2 – „Schutzrahmen"",
    beschreibung:
      "Ein schlanker, rechteckiger Rahmen in Marineblau (#101E4A) mit abgerundeten Ecken (Radius ca. 4 px) umschließt den Schriftzug „A" oder das Wort „Aurelia". Der Rahmen symbolisiert Werterhalt, Sicherheit und Seriosität – wie ein Wappen oder Siegel. Die obere und untere Rahmenkante werden durch eine hauchdünne Gold-Linie (#C8A75A) verstärkt, die dem Zeichen eine edle Note verleiht.",
    schriftzug:
      "Innerhalb des Rahmens: „AURELIA" in Ubuntu Medium, Versalien, Marineblau, eng gesetzt. Unterhalb des Rahmens: „Grundbesitz GmbH" in Ubuntu Light, reguläre Groß-/Kleinschreibung, etwas kleiner, gleiche Farbe. Auf dunklem Hintergrund invertiert: Rahmen und Schrift in Weiß, Gold-Linie bleibt.",
  },
  {
    icon: Building,
    name: "Konzept 3 – „Geometrische Skyline"",
    beschreibung:
      "Drei bis vier sehr reduzierte, unterschiedlich hohe Rechtecke (Gebäudesilhouetten) in Marineblau (#101E4A) stehen nebeneinander. In eines der Gebäude ist ein dezentes „A" negativ eingestanzt oder als feine Gold-Kontur (#C8A75A) integriert. Die Formen sind streng geometrisch, ohne Rundungen – vermitteln Urbanität, Modernität und Struktur.",
    schriftzug:
      "Rechts neben der Skyline: „Aurelia" in Ubuntu Medium, Marineblau, normale Schreibweise. Darunter: „Grundbesitz GmbH" in Ubuntu Light, kleiner. Alternativ kann die Skyline auch über dem Schriftzug stehen (gestapeltes Logo für Social Media, Favicon etc.).",
  },
];

const About = () => (
  <Layout>
    {/* Page Hero */}
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Gebäude" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Über Aurelia</h1>
      </div>
    </section>

    {/* Company */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Unser Unternehmen" />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Die Aurelia Grundbesitz GmbH mit Sitz am Grevenbroicher Weg 2 in 40547 Düsseldorf ist auf die professionelle Entwicklung und Bewirtschaftung von Immobilien aus besonderen Situationen spezialisiert. Im Fokus stehen Objekte aus Zwangsversteigerungen, Nachlässen und Insolvenzen, die mit viel Erfahrung, Sorgfalt und Weitblick ausgewählt werden.
          </p>
          <p>
            Seit 2023 verfolgt Aurelia Grundbesitz einen klaren, langfristigen Ansatz: Wertschöpfung durch intelligente Ankaufsstrategien, solide Strukturierung und hochwertige Entwicklung. Je nach Objekt werden Immobilien entweder im Bestand gehalten und nachhaltig vermietet oder umfassend renoviert beziehungsweise restauriert und anschließend werthaltig veräußert.
          </p>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-20 bg-secondary">
      <div className="container max-w-4xl">
        <SectionHeading title="Philosophie & Werte" />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Aurelia Grundbesitz verbindet unternehmerisches Denken mit einem verantwortungsvollen Umgang gegenüber Immobilien, Mietern, Nachlassbeteiligten und Investoren. Jede Immobilie wird nicht nur als Zahl im Portfolio betrachtet, sondern als individuelles Projekt mit eigener Geschichte und eigenem Entwicklungspotenzial.
          </p>
          <p>
            Wir analysieren Objekte gründlich, arbeiten mit erfahrenen Partnern zusammen und treffen Entscheidungen auf Basis fundierter Marktkenntnisse und realistischer Szenarien. So entsteht ein Portfolio, das auf Stabilität, Qualität und langfristige Werthaltigkeit ausgelegt ist – fernab kurzfristiger Spekulation.
          </p>
        </div>
      </div>
    </section>

    {/* CEO */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <img src={ceoImg} alt="Geschäftsführung" className="w-full h-96 object-cover" />
          </div>
          <div>
            <SectionHeading title="Geschäftsführung" subtitle="Yasar Alkac" />
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Er ist seit über 20 Jahren in der Immobilien- und Kapitalanlagewelt tätig und hat in dieser Zeit zahlreiche mittelgroße und größere Projekte erfolgreich begleitet. Seine Erfahrung reicht von klassischen Wohnimmobilien über renditeorientierte Kapitalanlagen bis hin zu komplexen Transaktionen aus Zwangsversteigerungen und Sondersituationen.
              </p>
              <p>
                Yasar Alkac steht für eine Kombination aus Marktkenntnis, Verhandlungssicherheit und einem ausgeprägten Gespür für werthaltige Chancen. Sein Ansatz ist klar: solide kalkulieren, strukturiert umsetzen und Projekte so entwickeln, dass sie sowohl wirtschaftlich überzeugen als auch langfristig Bestand haben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Logo-Konzepte */}
    <section className="py-20 bg-secondary">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Logo-Konzepte"
          subtitle="Drei Entwurfsrichtungen für die visuelle Identität von Aurelia Grundbesitz – Farbwelt: Marineblau #101E4A, Gold #C8A75A, Weiß."
        />
        <div className="space-y-10">
          {logoKonzepte.map((k) => (
            <article key={k.name} className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <k.icon className="text-accent shrink-0" size={24} />
                <h3 className="text-lg font-bold text-foreground">{k.name}</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Icon-Beschreibung</h4>
                  <p>{k.beschreibung}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Schriftzug-Setzung</h4>
                  <p>{k.schriftzug}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
