import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { ExternalLink } from "lucide-react";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const rechteLinks = [
  { label: "Recht auf Auskunft", art: "15", desc: "Art. 15 DSGVO" },
  { label: "Recht auf Berichtigung", art: "16", desc: "Art. 16 DSGVO" },
  { label: "Recht auf Löschung", art: "17", desc: "Art. 17 DSGVO" },
  { label: "Recht auf Einschränkung der Verarbeitung", art: "18", desc: "Art. 18 DSGVO" },
  { label: "Recht auf Datenübertragbarkeit", art: "20", desc: "Art. 20 DSGVO" },
  { label: "Recht auf Widerspruch", art: "21", desc: "Art. 21 DSGVO" },
];

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

          {/* 1 */}
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

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der{" "}
              <a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Datenschutz-Grundverordnung (DSGVO) <ExternalLink size={12} />
              </a>{" "}
              sowie des{" "}
              <a href="https://www.gesetze-im-internet.de/bdsg_2018/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Bundesdatenschutzgesetzes (BDSG) <ExternalLink size={12} />
              </a>.
            </p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">
              ↗ dsgvo-gesetz.de · gesetze-im-internet.de/bdsg_2018
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Rechtsgrundlagen der Verarbeitung</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                  <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> <ExternalLink size={12} />
                </a>{" "}– Einwilligung des Betroffenen
              </li>
              <li>
                <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                  <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> <ExternalLink size={12} />
                </a>{" "}– Vertragserfüllung oder vorvertragliche Maßnahmen
              </li>
              <li>
                <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                  <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> <ExternalLink size={12} />
                </a>{" "}– Berechtigtes Interesse
              </li>
            </ul>
            <p className="text-[11px] text-muted-foreground/60 mt-1">↗ dsgvo-gesetz.de/art-6-dsgvo</p>
          </div>

          {/* 4 */}
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
              Rechtsgrundlage ist{" "}
              <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Art. 6 Abs. 1 lit. f DSGVO <ExternalLink size={12} />
              </a>.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist{" "}
              <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Art. 6 Abs. 1 lit. b DSGVO <ExternalLink size={12} />
              </a>{" "}(vorvertragliche Maßnahmen) bzw.{" "}
              <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Art. 6 Abs. 1 lit. a DSGVO <ExternalLink size={12} />
              </a>{" "}(Einwilligung).
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Google Maps</h2>
            <p>
              Diese Seite nutzt über eine Einbettung den Kartendienst{" "}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Google Maps <ExternalLink size={12} />
              </a>. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-2">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote. Rechtsgrundlage ist{" "}
              <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Art. 6 Abs. 1 lit. f DSGVO <ExternalLink size={12} />
              </a>.
            </p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">↗ policies.google.com/privacy</p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt.
              Bei Kontaktanfragen ist dies der Fall, wenn sich aus den Umständen entnehmen lässt,
              dass der betreffende Sachverhalt abschließend geklärt ist und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              {rechteLinks.map((r) => (
                <li key={r.art}>
                  <a
                    href={`${dsgvoBaseUrl}${r.art}-dsgvo/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline inline-flex items-center gap-1"
                  >
                    {r.label} ({r.desc}) <ExternalLink size={12} />
                  </a>
                  <span className="block text-[11px] text-muted-foreground/60">↗ dsgvo-gesetz.de/art-{r.art}-dsgvo</span>
                </li>
              ))}
            </ul>
            <p className="mt-2">
              Sie haben zudem das Recht, sich bei einer{" "}
              <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                Datenschutz-Aufsichtsbehörde <ExternalLink size={12} />
              </a>{" "}
              über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">↗ bfdi.bund.de</p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Kontakt zum Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />
              E-Mail: info@aurelia-grundbesitz.de
            </p>
          </div>

          {/* Haftungsausschluss für externe Links */}
          <div className="bg-secondary p-6 border border-border rounded mt-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Haftungsausschluss für externe Links</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Diese Seite enthält Links zu externen Websites Dritter (u.&nbsp;a. dsgvo-gesetz.de,
              gesetze-im-internet.de, bfdi.bund.de, policies.google.com). Auf deren Inhalte haben
              wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
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
