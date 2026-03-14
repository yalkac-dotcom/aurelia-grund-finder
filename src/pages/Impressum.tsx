import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";

const Impressum = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Impressum" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Impressum</h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
      </div>
    </section>

    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Aurelia Grundbesitz GmbH<br />
              Grevenbroicher Weg 2<br />
              40547 Düsseldorf, Germany
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Vertreten durch</h3>
            <p>Geschäftsführer: Yasar Alkac</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Kontakt</h3>
            <p>
              E-Mail: info@aurelia-grundbesitz.de<br />
              Telefon: +49 (0) 211 – XXX XXXX
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Registereintrag</h3>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Düsseldorf<br />
              Registernummer: HRB XXXXX
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Haftungsausschluss</h3>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
              übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Impressum;
