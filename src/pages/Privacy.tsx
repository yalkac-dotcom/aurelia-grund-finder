import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";

const Privacy = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Datenschutz" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Datenschutzerklärung</h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
      </div>
    </section>

    <section className="py-24">
      <div className="container max-w-3xl prose-sm">
        <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">

          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Verantwortlicher</h2>
            <p>
              Aurelia Grundbesitz GmbH<br />
              Grevenbroicher Weg 2<br />
              40547 Düsseldorf, Germany<br />
              E-Mail: info@aurelia-grundbesitz.de
            </p>
            <p className="mt-2">Geschäftsführer: Yasar Alkac</p>
          </div>

          {/* 2. Allgemeines */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung
              (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG).
            </p>
          </div>

          {/* 3. Rechtsgrundlagen */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Rechtsgrundlagen der Verarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung des Betroffenen</li>
              <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
              <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Berechtigtes Interesse (z.&nbsp;B. Betrieb und Sicherheit der Website)</li>
            </ul>
          </div>

          {/* 4. Server-Logs */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Server-Log-Dateien</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 5. Kontaktformular */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </div>

          {/* 6. Google Maps */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Google Maps</h2>
            <p>
              Diese Seite nutzt über eine Einbettung den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung
              der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
              Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert.
            </p>
            <p className="mt-2">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 7. Speicherdauer */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt.
              Bei Kontaktanfragen ist dies der Fall, wenn sich aus den Umständen entnehmen lässt,
              dass der betreffende Sachverhalt abschließend geklärt ist und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          {/* 8. Rechte der Betroffenen */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </div>

          {/* 9. Kontakt Datenschutz */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Kontakt zum Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />
              E-Mail: info@aurelia-grundbesitz.de
            </p>
          </div>

          <p className="text-xs text-muted-foreground pt-4 border-t border-border">
            Stand: März 2026
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
