import type { ReactNode } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import datenschutzHeader from "@/assets/datenschutz-header.jpg";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";
const panelPadding = "px-6 py-7 md:px-12 md:py-10";
const txt = "text-muted-foreground text-[0.93rem] leading-[1.85]";

const EURLEX = "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679";
const BDSG = "https://www.gesetze-im-internet.de/bdsg_2018/";

const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1 hover:underline">
    {children} <ExternalLink size={10} aria-hidden="true" />
  </a>
);

const Mail = () => (
  <a href="mailto:office@aureliaestates.de" className="text-accent hover:underline">office@aureliaestates.de</a>
);
const Tel = () => (
  <a href="tel:+4921169583033" className="text-accent hover:underline">+49 211 69583033</a>
);

const Block = ({ title, children, first = false }: { title: string; children: ReactNode; first?: boolean }) => (
  <div className={first ? "pb-6" : "py-6"}>
    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{title}</h3>
    <div className={`${txt} space-y-2`}>{children}</div>
  </div>
);

const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-1">
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);

const rights = [
  ["15", "Auskunft"],
  ["16", "Berichtigung"],
  ["17", "Löschung"],
  ["18", "Einschränkung der Verarbeitung"],
  ["20", "Datenübertragbarkeit"],
  ["21", "Widerspruch"],
];

const Privacy = () => {
  const { language } = useLanguage();
  usePageSeo(pageSeo[language].privacy.title, pageSeo[language].privacy.description);
  const isDe = language === "de";

  return (
    <Layout>
      <section className="relative w-full overflow-hidden h-[240px] md:h-[380px]" style={{ background: "rgb(10,32,58)" }}>
        <img
          src={datenschutzHeader}
          alt="Datenschutz – DSGVO & KVKK"
          width={1920}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
        />
        {isDe && (
          <span
            aria-hidden="true"
            style={{ color: "#F1DBA5" }}
            className="absolute font-heading font-semibold leading-none select-none text-[1.2rem] md:text-[1.9rem] [text-shadow:0_1px_6px_rgba(6,20,38,0.85),0_0_2px_rgba(6,20,38,0.9)] left-[8%] top-[62%] md:left-[19%] md:top-[68%]"
          >
            DSGVO
          </span>
        )}
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <header className="text-center mb-6 md:mb-8">
              <div className="mx-auto mb-3 h-[2px] w-10" style={{ background: "hsl(var(--accent))" }} />
              <h1 className="font-heading font-bold text-primary leading-[1.2] text-balance text-[1.6rem] md:text-[2.1rem]">
                Datenschutz &amp; Kişisel Verilerin Korunması
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-[0.93rem] leading-[1.7]">
                Datenschutzerklärung nach DSGVO und Informationen zum Schutz personenbezogener Daten nach dem türkischen KVKK
              </p>
              <p className="mt-2 text-xs text-muted-foreground/70">Stand / Güncelleme: September / Eylül 2026</p>
              <nav aria-label="Abschnitte" className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                <a href="#dsgvo" className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-accent/60 bg-primary px-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90">
                  DSGVO / Deutsch
                </a>
                <a href="#kvkk" className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-accent/60 bg-primary px-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90">
                  KVKK / Türkçe
                </a>
              </nav>
            </header>
          </Reveal>

          {/* ================= DSGVO ================= */}
          <div id="dsgvo" lang="de" className="scroll-mt-24 md:scroll-mt-28">
            <div className={`${panelBase} ${panelPadding}`}>
              <h2 className="font-heading font-bold text-primary text-[1.3rem] md:text-[1.55rem] mb-1">Datenschutzerklärung (DSGVO / BDSG)</h2>
              <div className="mb-4 h-[2px] w-10" style={{ background: "hsl(var(--accent))" }} />
              <div className="divide-y divide-border/30">
                <Block title="1. Verantwortlicher" first>
                  <p>
                    Aurelia Grundbesitz GmbH<br />Grevenbroicher Weg 2<br />40547 Düsseldorf<br />Deutschland
                  </p>
                  <p>
                    Geschäftsführer: Eyüp Yasar Alkac<br />Handelsregister: Amtsgericht Düsseldorf<br />HRB 107859
                  </p>
                  <p>Telefon: <Tel /><br />E-Mail: <Mail /></p>
                </Block>

                <Block title="2. Allgemeines zur Datenverarbeitung">
                  <p>
                    Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung Ihrer Anfragen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der{" "}
                    <Ext href={EURLEX}>Datenschutz-Grundverordnung (DSGVO)</Ext> und des{" "}
                    <Ext href={BDSG}>Bundesdatenschutzgesetzes (BDSG)</Ext>.
                  </p>
                  <p>Je nach Anfrage können insbesondere folgende Daten verarbeitet werden:</p>
                  <List items={[
                    "Vor- und Nachname", "Telefonnummer", "E-Mail-Adresse", "Nachrichten und sonstige Kontaktangaben",
                    "Adresse, Lage und Standort einer Immobilie", "Immobilienart", "Wohn-/Grundstücksfläche",
                    "Anzahl von Einheiten und Zimmern", "Baujahr und Zustand", "Vermietungsstatus", "Eigentümerstatus",
                    "Angaben zu besonderen Verkaufssituationen", "gewünschter Verkaufspreis", "Kaufinteressen",
                    "gewünschte Märkte, Regionen und Immobilienarten", "hochgeladene Fotos",
                    "hochgeladene PDF-, JPG-, JPEG- und PNG-Dokumente",
                    "technische Nutzungs- und Zugriffsdaten (siehe Server-Log-Dateien sowie – nur nach Einwilligung – Google Analytics 4 und Microsoft Clarity)",
                  ]} />
                </Block>

                <Block title="3. Rechtsgrundlagen der Verarbeitung">
                  <List items={[
                    <><Ext href={EURLEX}><strong>Art. 6 Abs. 1 lit. a DSGVO</strong></Ext> – Einwilligung der betroffenen Person</>,
                    <><Ext href={EURLEX}><strong>Art. 6 Abs. 1 lit. b DSGVO</strong></Ext> – Vertragserfüllung oder vorvertragliche Maßnahmen</>,
                    <><Ext href={EURLEX}><strong>Art. 6 Abs. 1 lit. c DSGVO</strong></Ext> – Erfüllung rechtlicher Verpflichtungen</>,
                    <><Ext href={EURLEX}><strong>Art. 6 Abs. 1 lit. f DSGVO</strong></Ext> – berechtigtes Interesse</>,
                  ]} />
                </Block>

                <Block title="4. Server-Log-Dateien">
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:</p>
                  <List items={["Browsertyp und Browserversion", "verwendetes Betriebssystem", "Referrer-URL", "Hostname des zugreifenden Rechners", "Uhrzeit der Serveranfrage", "IP-Adresse (anonymisiert)"]} />
                  <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                </Block>

                <Block title="5. Kontaktaufnahme und Kontaktformulare">
                  <p>Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Dies betrifft insbesondere Kontaktanfragen, Rückruf- und Terminwünsche, Geschäftspartneranfragen und sonstige Anfragen.</p>
                  <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).</p>
                </Block>

                <Block title="6. Immobilienanfragen und Kaufinteresse">
                  <p>Personenbezogene Daten können insbesondere verarbeitet werden bei Immobilienangeboten zum möglichen Ankauf durch Aurelia, bei Kaufinteressen an Immobilien aus dem eigenen Aurelia-Bestand sowie bei Anfragen zu Immobilien in der Türkei.</p>
                  <p>Aurelia vermittelt keine fremden Immobilien und übernimmt keine klassischen Suchaufträge. Kaufinteressenten hinterlegen lediglich ihr Interesse an möglicherweise passenden Immobilien aus dem eigenen Bestand.</p>
                  <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie – soweit erteilt – Art. 6 Abs. 1 lit. a DSGVO.</p>
                </Block>

                <Block title="7. Hochladen von Fotos und Dokumenten">
                  <p>Bei Immobilienanfragen können Nutzer Fotos und Dokumente (PDF, JPG, JPEG, PNG) übermitteln. Diese Unterlagen können personenbezogene Daten enthalten.</p>
                  <p>Bitte übermitteln Sie nur solche Unterlagen, die für die Bearbeitung Ihrer Anfrage erforderlich sind und zu deren Übermittlung Sie berechtigt sind. Soweit Dokumente personenbezogene Daten Dritter enthalten, sollen nur solche Informationen übermittelt werden, deren Weitergabe für die konkrete Anfrage erforderlich und rechtlich zulässig ist.</p>
                  <p>Die Daten werden zur Bearbeitung der Anfrage, zur Prüfung der Immobilie und – soweit erforderlich – zur Vorbereitung oder Durchführung eines möglichen Immobiliengeschäfts verarbeitet.</p>
                </Block>

                <Block title="8. Empfänger personenbezogener Daten">
                  <p>Abhängig vom konkreten Vorgang und nur soweit erforderlich können personenbezogene Daten insbesondere folgenden Empfängern zugänglich gemacht werden:</p>
                  <List items={[
                    "IT-/Hosting- und technische Dienstleister", "Rechtsanwälte", "Notare", "Steuerberater", "Gutachter",
                    "Architekten und technische Fachleute", "erforderliche Immobilien- oder Geschäftspartner",
                    "Behörden oder sonstige Stellen, soweit eine gesetzliche Verpflichtung besteht oder dies für eine konkrete Transaktion erforderlich ist",
                  ]} />
                </Block>

                <Block title="9. Deutschland und Türkei – grenzüberschreitende Datenverarbeitung">
                  <div className="rounded-sm border border-accent/50 bg-secondary/40 p-4 md:p-5 space-y-2">
                    <p>Aurelia Grundbesitz GmbH hat ihren Sitz in Deutschland und bearbeitet auch Anfragen zu Immobilien in der Türkei.</p>
                    <p>Im Rahmen einer konkreten Anfrage oder Immobilientransaktion kann es erforderlich sein, personenbezogene Daten zwischen Deutschland und der Türkei zu übermitteln oder dort zugänglich zu machen.</p>
                    <p>Eine solche Übermittlung erfolgt nur, soweit sie für den jeweiligen Vorgang erforderlich ist und die jeweils geltenden datenschutzrechtlichen Voraussetzungen erfüllt sind. Für internationale Übermittlungen werden die Anforderungen der <Ext href={EURLEX}>DSGVO (Art. 44 ff.)</Ext> und – soweit anwendbar – <Ext href="https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim">Art. 9 KVKK</Ext> berücksichtigt.</p>
                  </div>
                </Block>

                <Block title="10. Cookies, lokaler Speicher und Einwilligungsverwaltung">
                  <p>Beim ersten Aufruf unserer Website entscheiden Sie über den Einwilligungshinweis, ob Analyse-Dienste eingesetzt werden dürfen. Wir unterscheiden zwischen technisch notwendigen Speicherungen und einwilligungspflichtigen Analysefunktionen.</p>
                  <List items={[
                    "Notwendig: Speicherung Ihrer Einwilligungsentscheidung im lokalen Speicher Ihres Browsers.",
                    "Notwendig: Speicherung der von Ihnen gewählten Sprachversion im lokalen Speicher Ihres Browsers.",
                    "Einwilligungspflichtig: Google Analytics 4 und Microsoft Clarity werden ausschließlich nach Ihrer ausdrücklichen Zustimmung geladen und aktiviert.",
                  ]} />
                  <p>Eine Ablehnung hat keine Nachteile für die grundlegende Nutzung der Website. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Fußbereich der Website ändern oder widerrufen.</p>
                </Block>

                <Block title="11. Google Analytics 4">
                  <p>Wir setzen Google Analytics 4 zur statistischen Analyse und Reichweitenmessung der Nutzung unserer Website ein, einschließlich anonymer Ereignisse wie Klicks auf Telefon- und E-Mail-Links, Aufrufe wichtiger Formularseiten, erfolgreich abgesendete Formulare und Starts der Unternehmensvideos. Formularinhalte wie Namen, E-Mail-Adressen, Telefonnummern oder Nachrichten werden dabei nicht an Google übertragen. Eine Verarbeitung findet ausschließlich nach Ihrer ausdrücklichen Einwilligung statt. Werbe- oder Remarketing-Funktionen werden nicht eingesetzt.</p>
                  <p>Verarbeitet werden können:</p>
                  <List items={["IP-Adresse (gekürzt)", "Geräte- und Browserinformationen", "aufgerufene Seiten und Seitenpfad", "Seitentitel", "Verweisquelle (Referrer)", "Cookie- bzw. Online-Kennung"]} />
                  <p>Auf dieser Website ist die IP-Anonymisierung aktiviert; die IP-Adresse wird dadurch gekürzt verarbeitet.</p>
                  <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung ist jederzeit über „Cookie-Einstellungen“ mit Wirkung für die Zukunft widerrufbar.</p>
                  <p>Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
                  <p>Eine Verarbeitung von Daten außerhalb des Europäischen Wirtschaftsraums, insbesondere in den USA, kann dabei nicht ausgeschlossen werden. Einzelheiten enthalten die Datenschutzhinweise des Anbieters:</p>
                  <List items={[
                    <Ext href="https://policies.google.com/privacy?hl=de">Google Datenschutzerklärung</Ext>,
                    <Ext href="https://support.google.com/analytics/answer/6004245?hl=de">Google Analytics – Datenschutz</Ext>,
                    <Ext href="https://support.google.com/analytics/answer/14275483?hl=de">Google Analytics – Einwilligung (Consent)</Ext>,
                  ]} />
                </Block>

                <Block title="12. Microsoft Clarity">
                  <p>Wir setzen Microsoft Clarity zur Analyse der Nutzung unserer Website ein, insbesondere zur Sitzungsanalyse und zur Erstellung von Heatmaps. Eine Verarbeitung findet ausschließlich nach Ihrer ausdrücklichen Einwilligung statt.</p>
                  <List items={["IP-Adresse", "Geräte- und Browserinformationen", "Seitenaufrufe", "Maus-, Scroll- und Klickverhalten", "Cookie- bzw. Online-Kennungen"]} />
                  <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung ist jederzeit über „Cookie-Einstellungen“ mit Wirkung für die Zukunft widerrufbar; der Widerruf wird unmittelbar an Microsoft Clarity übermittelt.</p>
                  <p>Anbieter: Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland.</p>
                  <p>Eine Verarbeitung von Daten außerhalb des Europäischen Wirtschaftsraums, insbesondere in den USA, kann dabei nicht ausgeschlossen werden. <Ext href="https://privacy.microsoft.com/de-de/privacystatement">Microsoft Datenschutzerklärung</Ext></p>
                </Block>

                <Block title="13. Speicherdauer">
                  <p>Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt. Bei Anfragen ist dies der Fall, wenn der betreffende Sachverhalt abschließend geklärt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                </Block>

                <Block title="14. Datensicherheit">
                  <p>Die Übertragung von Daten über diese Website erfolgt verschlüsselt (HTTPS). Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Eine vollständig sichere Datenübertragung im Internet kann jedoch nicht garantiert werden.</p>
                </Block>

                <Block title="15. Rechte der betroffenen Personen">
                  <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                  <List items={rights.map(([art, label]) => (
                    <Ext href={EURLEX}>{`Art. ${art} DSGVO – ${label}`}</Ext>
                  ))} />
                </Block>

                <Block title="16. Widerruf von Einwilligungen">
                  <p>Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO) – für Analyse-Dienste über „Cookie-Einstellungen“ im Fußbereich, im Übrigen formlos per E-Mail an <Mail />. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</p>
                </Block>

                <Block title="17. Beschwerderecht">
                  <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für uns ist die <Ext href="https://www.ldi.nrw.de/">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</Ext>.</p>
                </Block>

                <Block title="18. Kontakt zum Datenschutz">
                  <p>Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />E-Mail: <Mail /><br />Telefon: <Tel /></p>
                </Block>

                <Block title="19. Änderungen dieser Datenschutzerklärung">
                  <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage oder unsere Website bzw. Datenverarbeitung ändert. Es gilt die jeweils hier veröffentlichte Fassung. Stand: September 2026.</p>
                </Block>
              </div>
            </div>
          </div>

          {/* ================= KVKK ================= */}
          <div id="kvkk" lang="tr" className="scroll-mt-24 md:scroll-mt-28 mt-8 md:mt-10">
            <div className={`${panelBase} ${panelPadding}`}>
              <h2 className="font-heading font-bold text-primary text-[1.3rem] md:text-[1.55rem] leading-[1.3]">
                KİŞİSEL VERİLERİN KORUNMASI<br />KVKK AYDINLATMA METNİ
              </h2>
              <div className="mt-2 mb-4 h-[2px] w-10" style={{ background: "hsl(var(--accent))" }} />
              <p className={`${txt} mb-4`}>
                <Ext href="https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law">6698 sayılı Kişisel Verilerin Korunması Kanunu</Ext> (“KVKK”) kapsamında, uygulanabilir olduğu ölçüde kişisel verileriniz aşağıda açıklanan esaslar doğrultusunda işlenebilir. Bu metin, KVKK’daki{" "}
                <Ext href="https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-">Aydınlatma Yükümlülüğü</Ext> çerçevesinde hazırlanmıştır.
              </p>
              <div className="divide-y divide-border/30">
                <Block title="1. Veri Sorumlusu">
                  <p>Aurelia Grundbesitz GmbH<br />Grevenbroicher Weg 2<br />40547 Düsseldorf<br />Almanya</p>
                  <p>Genel Müdür: Eyüp Yasar Alkac<br />Ticaret Sicili: Amtsgericht Düsseldorf<br />HRB 107859</p>
                  <p>E-posta: <Mail /><br />Telefon: <Tel /></p>
                </Block>
                <Block title="2. İşlenen Kişisel Veriler">
                  <p>Talebinize bağlı olarak ad ve soyad, telefon numarası, e-posta adresi, iletişim bilgileri, gayrimenkule ilişkin adres ve konum bilgileri, gayrimenkul türü ve özellikleri, mülkiyet bilgileri, satış talebi, talep edilen satış bedeli, satın alma ilgisi, mesaj ve açıklamalar ile tarafınızca yüklenen fotoğraf ve belgeler işlenebilir.</p>
                </Block>
                <Block title="3. Kişisel Verilerin İşlenme Amaçları">
                  <p>Kişisel verileriniz; gayrimenkul teklifinizin incelenmesi, Aurelia tarafından olası bir satın alımın değerlendirilmesi, satın alma ilginizin değerlendirilmesi, sizinle iletişim kurulması, taleplerinizin yanıtlanması, olası bir gayrimenkul işleminin hazırlanması ve yürütülmesi, yasal yükümlülüklerin yerine getirilmesi ve internet sitesinin güvenli şekilde işletilmesi amaçlarıyla işlenebilir.</p>
                </Block>
                <Block title="4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi">
                  <p>Kişisel verileriniz internet sitesi formları, e-posta, telefon, tarafınızca yüklenen belgeler ve diğer iletişim kanalları aracılığıyla elektronik veya fiziki yollarla toplanabilir.</p>
                  <p>Kişisel veriler, uygulanabilir mevzuat kapsamında sözleşmenin kurulması veya ifası, hukuki yükümlülüklerin yerine getirilmesi, meşru menfaatler veya gerekli olduğu durumlarda açık rıza gibi hukuki sebeplere dayanılarak işlenir.</p>
                </Block>
                <Block title="5. Kişisel Verilerin Aktarılması">
                  <p>Kişisel verileriniz, işlemin niteliğine göre ve yalnızca gerekli olduğu ölçüde, teknik hizmet sağlayıcılara ve olası bir gayrimenkul işleminin yürütülmesi için gerekli avukat, noter, mali müşavir, değerleme veya teknik uzmanlar, gayrimenkul alanındaki iş ortakları, yetkili kurum ve kuruluşlar veya diğer gerekli kişilere aktarılabilir.</p>
                </Block>
                <Block title="6. Kişisel Verilerin Yurt Dışına Aktarılması">
                  <p>Aurelia Grundbesitz GmbH Almanya'da yerleşik olduğundan, Türkiye'den internet sitesi veya diğer iletişim kanalları üzerinden Aurelia'ya gönderilen kişisel veriler Almanya'da işlenebilir.</p>
                  <p>Türkiye'deki bir gayrimenkule ilişkin işlemlerde gerekli olması halinde belirli veriler Türkiye'deki yetkili kişi veya kuruluşlarla paylaşılabilir.</p>
                  <p>Yurt dışına veri aktarımında uygulanabilir olduğu ölçüde KVKK'nın 9. maddesi ve ilgili diğer mevzuat dikkate alınır. Ayrıntılı bilgi: <Ext href="https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim">Yurt Dışına Veri Aktarımı</Ext></p>
                </Block>
                <Block title="7. KVKK Kapsamındaki Haklarınız">
                  <p>KVKK'nın uygulanabilir olduğu durumlarda ilgili kişiler, kanunda öngörülen şartlar çerçevesinde kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri öğrenme, şartları oluşmuşsa düzeltilmesini, silinmesini veya yok edilmesini talep etme ve kanunda düzenlenen diğer haklarını kullanabilir.</p>
                  <p>Ayrıca <Ext href="https://www.kvkk.gov.tr/">Kişisel Verileri Koruma Kurumu</Ext>’na başvurma hakkınız saklıdır.</p>
                </Block>
                <Block title="8. Açık Rıza ve Geri Alma">
                  <p>Açık rızaya dayanan işlemler için verdiğiniz rızayı dilediğiniz zaman geleceğe etkili olarak geri alabilirsiniz. Analiz hizmetleri (Google Analytics 4, Microsoft Clarity) için tercihinizi sitenin alt bölümündeki “Çerez Ayarları” üzerinden değiştirebilir, diğer durumlarda <Mail /> adresine yazabilirsiniz.</p>
                </Block>
                <Block title="9. Başvuru ve İletişim">
                  <p>Başvurular:<br />Aurelia Grundbesitz GmbH<br />Grevenbroicher Weg 2<br />40547 Düsseldorf<br />Almanya</p>
                  <p>E-posta: <Mail /></p>
                </Block>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60 italic leading-relaxed">
            Diese Seite enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist stets der jeweilige Anbieter. · Bu sayfa üçüncü taraf web sitelerine bağlantılar içerir; bu sitelerin içeriğinden ilgili sağlayıcı sorumludur.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
