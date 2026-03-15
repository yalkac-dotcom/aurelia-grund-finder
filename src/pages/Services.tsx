import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import renovationImg from "@/assets/renovation.jpg";
import heroImg from "@/assets/hero-services.jpg";
import { Building2, Hammer, CheckCircle } from "lucide-react";

const Services = () => (
  <Layout>
    {/* Page Hero */}
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={renovationImg} alt="Sanierung" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Leistungen & Strategien</h1>
      </div>
    </section>

    {/* Intro */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Investment-Strategien"
          subtitle="Wir konzentrieren uns auf Immobilien, die oft unter Zeitdruck oder in komplexen Konstellationen veräußert werden – etwa im Rahmen von Zwangsversteigerungen, Nachlassregelungen oder Insolvenzverfahren."
        />
        <p className="text-muted-foreground leading-relaxed">
          Mit einem klaren Blick für Potenziale entwickeln wir passende Konzepte: von der Stabilisierung der Mietsituation über technische und energetische Verbesserungen bis hin zur vollständigen Neupositionierung am Markt.
        </p>
      </div>
    </section>

    {/* Two strategies cards */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bestand */}
          <div className="bg-card p-8 md:p-10 border border-border">
            <Building2 className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground mb-4">Bestand halten & Vermieten</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Zeithorizont: Langfristig (Jahre bis Jahrzehnte)",
                "Ertrag: Stetige Mieteinnahmen",
                "Risiko: Eher gering",
                "Kapitalbindung: Langfristig im Objekt",
                "Geeignet für: Solide Lagen, stabile Mieterstrukturen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sanieren */}
          <div className="bg-card p-8 md:p-10 border border-border">
            <Hammer className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground mb-4">Sanieren & Verkaufen</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Zeithorizont: Kurz- bis mittelfristig (1–3 Jahre)",
                "Ertrag: Einmaliger, hoher Wertzuwachs",
                "Risiko: Mittel (Markt-, Bau- und Vermarktungsrisiken)",
                "Kapitalbindung: Kapitalfreisetzung nach Verkauf",
                "Geeignet für: Immobilien mit hohem Entwicklungspotenzial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Bestand halten vs. Sanieren & Verkaufen" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-accent">
                <th className="text-left py-3 pr-6 font-medium text-foreground">Kriterium</th>
                <th className="text-left py-3 pr-6 font-medium text-foreground">Bestand halten</th>
                <th className="text-left py-3 font-medium text-foreground">Sanieren & Verkaufen</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Zeithorizont", "Langfristig (Jahre bis Jahrzehnte)", "Kurz- bis mittelfristig (1–3 J.)"],
                ["Ertrag", "Stetige Mieteinnahmen", "Einmaliger, hoher Wertzuwachs"],
                ["Risiko", "Eher gering", "Mittel (Markt-, Bau- und Vermarktungsrisiken)"],
                ["Kapitalbindung", "Langfristig im Objekt", "Kapitalfreisetzung nach Verkauf"],
                ["Geeignet für", "Solide Lagen, stabile Mieterstrukturen", "Immobilien mit hohem Entwicklungspotenzial"],
              ].map(([kriterium, bestand, sanieren]) => (
                <tr key={kriterium} className="border-b border-border">
                  <td className="py-3 pr-6 font-medium text-foreground">{kriterium}</td>
                  <td className="py-3 pr-6 text-muted-foreground">{bestand}</td>
                  <td className="py-3 text-muted-foreground">{sanieren}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Image */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img src={heroImg} alt="Immobilie" className="w-full h-80 object-cover" />
          <div>
            <SectionHeading title="Erfahrung trifft Strategie" />
            <p className="text-muted-foreground leading-relaxed">
              Über 30 Jahre gebündelte Erfahrung in der Immobilien- und Kapitalanlagewelt bilden die Grundlage unserer Arbeit. Wir arbeiten mit einem belastbaren Netzwerk aus Banken, Investoren, Maklern und spezialisierten Dienstleistern.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
