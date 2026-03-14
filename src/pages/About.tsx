import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ceoImg from "@/assets/about-ceo.jpg";
import heroImg from "@/assets/hero-building.jpg";

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
            Aurelia Grundbesitz verfolgt einen klaren, langfristigen Ansatz: Wertschöpfung durch intelligente Ankaufsstrategien, solide Strukturierung und hochwertige Entwicklung. Je nach Objekt werden Immobilien entweder im Bestand gehalten und nachhaltig vermietet oder umfassend renoviert beziehungsweise restauriert und anschließend werthaltig veräußert.
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

    {/* Team & Erfahrung */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <img src={ceoImg} alt="Geschäftsführung" className="w-full h-96 object-cover" />
          </div>
          <div>
            <SectionHeading title="Erfahrung trifft Strategie" />
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Über 30 Jahre gebündelte Erfahrung in der Immobilien- und Kapitalanlagewelt bilden die Grundlage unserer Arbeit. Wir arbeiten mit einem belastbaren Netzwerk aus Banken, Investoren, Maklern und spezialisierten Dienstleistern.
              </p>
              <p>
                Unser Geschäftsführer bringt mehr als zwei Jahrzehnte operative Erfahrung mit – von klassischen Wohnimmobilien über renditeorientierte Kapitalanlagen bis hin zu komplexen Transaktionen aus Zwangsversteigerungen und Sondersituationen. Er steht für Marktkenntnis, Verhandlungssicherheit und ein ausgeprägtes Gespür für werthaltige Chancen.
              </p>
              <p>
                Gemeinsam mit einem eingespielten Team aus Analysten, Projektentwicklern und Branchenexperten entstehen fundierte Strategien, die sowohl wirtschaftlich überzeugen als auch langfristig Bestand haben. Jedes Projekt wird ganzheitlich gedacht – von der Akquise über die Strukturierung bis zur Umsetzung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
