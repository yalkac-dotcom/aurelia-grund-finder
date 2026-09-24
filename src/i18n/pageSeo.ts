import type { Language } from "./types";

export type PageSeoKey =
  | "portfolio"
  | "owners"
  | "buyers"
  | "partners"
  | "howItWorks"
  | "services"
  | "taxBenefits"
  | "taxAfa"
  | "taxEnergetisch"
  | "taxKfw"
  | "taxBafa"
  | "taxGlossar"
  | "investorGlossar"
  | "faq"
  | "contact"
  | "impressum"
  | "privacy"
  | "bildnachweise"
  | "notFound";

export type PageSeoEntry = { title: string; description: string };

export const pageSeo: Record<Language, Record<PageSeoKey, PageSeoEntry>> = {
  de: {
    portfolio: { title: "Portfolio – Aurelia Grundbesitz", description: 'Aktuelle Immobilien und Objekte aus dem Bestand der Aurelia Grundbesitz GmbH im Überblick.' },
    owners: { title: "Immobilie direkt verkaufen in DE | Aurelia Grundbesitz", description: "Direktankauf auf eigene Rechnung ohne klassischen Vermittlungsprozess. Zügig und diskret verkaufen – auch bei besonderen Ausgangssituationen." },
    buyers: { title: "Immobilien aus Bestand & Kooperationen | Aurelia", description: "Ausgewählte Immobilien aus eigenem Bestand und projektbezogenen Kooperationen in Deutschland und der Türkei. Exposés und Objektunterlagen anfragen." },
    partners: { title: "B2B Immobilien-Kooperationen | Aurelia Grundbesitz", description: "Projektbezogene Zusammenarbeit mit Maklern, Entwicklern, Investoren und weiteren Partnern in Deutschland und der Türkei." },
    howItWorks: { title: "Ablauf – So gehen wir vor | Aurelia Grundbesitz", description: "Von der ersten Anfrage bis zur Abwicklung: der strukturierte Ablauf einer Immobilienanfrage bei Aurelia Grundbesitz." },
    services: { title: "Leistungen | Aurelia Grundbesitz", description: "Direkter Immobilienankauf in Deutschland, Immobilien in der Türkei und projektbezogene Kooperationen im Überblick." },
    taxBenefits: { title: "Steuerliche Themen bei Immobilien | Aurelia Grundbesitz", description: "Überblick zu AfA, energetischer Sanierung, KfW und BAFA mit Verweisen auf offizielle Quellen. Keine Steuerberatung." },
    taxAfa: { title: "AfA – Abschreibung bei Immobilien | Aurelia Grundbesitz", description: "Grundlagen zur Abschreibung (AfA) bei Immobilien mit Verweisen auf offizielle Quellen. Keine Steuerberatung." },
    taxEnergetisch: { title: "Energetische Sanierung | Aurelia Grundbesitz", description: "Überblick zu energetischen Sanierungsmaßnahmen bei Immobilien mit Verweisen auf offizielle Quellen." },
    taxKfw: { title: "KfW-Förderung bei Immobilien | Aurelia Grundbesitz", description: "Überblick zu KfW-Förderprogrammen rund um Immobilien mit Verweisen auf offizielle Quellen." },
    taxBafa: { title: "BAFA-Förderung bei Immobilien | Aurelia Grundbesitz", description: "Überblick zu BAFA-Förderungen rund um Immobilien mit Verweisen auf offizielle Quellen." },
    taxGlossar: { title: "Glossar steuerlicher Begriffe | Aurelia Grundbesitz", description: "Erläuterungen zu steuerlichen Begriffen rund um Immobilien, alphabetisch geordnet." },
    investorGlossar: { title: "Immobilien-Glossar | Aurelia Grundbesitz", description: "Begriffe aus der Immobilienpraxis verständlich erklärt – alphabetisch geordnetes Glossar." },
    faq: { title: "Häufige Fragen | Aurelia Grundbesitz", description: "Antworten auf häufige Fragen zu Verkauf, Ablauf und Zusammenarbeit mit Aurelia Grundbesitz." },
    contact: { title: "Kontakt | Aurelia Grundbesitz", description: "Nehmen Sie Kontakt zu Aurelia Grundbesitz in Düsseldorf auf – persönlich, diskret und unverbindlich." },
    impressum: { title: "Impressum | Aurelia Grundbesitz", description: "Impressum und Anbieterkennzeichnung der Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Datenschutzerklärung | Aurelia Grundbesitz", description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website der Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Bildnachweise | Aurelia Grundbesitz", description: "Übersicht der auf dieser Website verwendeten Bildquellen." },
    notFound: { title: "Seite nicht gefunden | Aurelia Grundbesitz", description: "Die aufgerufene Seite existiert nicht. Nutzen Sie die Navigation, um zurück zur Website zu gelangen." },
  },
  en: {
    portfolio: { title: "Portfolio – Aurelia Grundbesitz", description: 'An overview of current properties and objects held by Aurelia Grundbesitz GmbH.' },
    owners: { title: "For owners – property in Germany | Aurelia Grundbesitz", description: "Aurelia Grundbesitz reviews property in Germany personally and discreetly – from a standard sale to particular situations." },
    buyers: { title: "For buyers – properties from our holdings | Aurelia Grundbesitz", description: "Information for buyers: properties from our own holdings and project-related offers from Aurelia Grundbesitz." },
    partners: { title: "Partners and cooperations | Aurelia Grundbesitz", description: "Working with agents, managers and project partners – project-related, structured and reliable." },
    howItWorks: { title: "Process – how we work | Aurelia Grundbesitz", description: "From the first enquiry to completion: the structured process of a property enquiry at Aurelia Grundbesitz." },
    services: { title: "Services | Aurelia Grundbesitz", description: "Direct property purchase in Germany, property in Turkey and project-related cooperations at a glance." },
    taxBenefits: { title: "Tax topics for property | Aurelia Grundbesitz", description: "Overview of depreciation, energy-efficient refurbishment, KfW and BAFA with links to official sources. No tax advice." },
    taxAfa: { title: "Depreciation (AfA) for property | Aurelia Grundbesitz", description: "Basics of property depreciation (AfA) with links to official sources. No tax advice." },
    taxEnergetisch: { title: "Energy-efficient refurbishment | Aurelia Grundbesitz", description: "Overview of energy-efficient refurbishment measures for property with links to official sources." },
    taxKfw: { title: "KfW funding for property | Aurelia Grundbesitz", description: "Overview of KfW funding programmes related to property with links to official sources." },
    taxBafa: { title: "BAFA funding for property | Aurelia Grundbesitz", description: "Overview of BAFA funding related to property with links to official sources." },
    taxGlossar: { title: "Glossary of tax terms | Aurelia Grundbesitz", description: "Explanations of tax-related property terms, listed alphabetically." },
    investorGlossar: { title: "Property glossary | Aurelia Grundbesitz", description: "Terms from property practice explained clearly – an alphabetical glossary." },
    faq: { title: "Frequently asked questions | Aurelia Grundbesitz", description: "Answers to common questions about selling, the process and working with Aurelia Grundbesitz." },
    contact: { title: "Contact | Aurelia Grundbesitz", description: "Get in touch with Aurelia Grundbesitz in Düsseldorf – personal, discreet and without obligation." },
    impressum: { title: "Legal notice | Aurelia Grundbesitz", description: "Legal notice and provider identification of Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Privacy policy | Aurelia Grundbesitz", description: "Information on the processing of personal data on the website of Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Image credits | Aurelia Grundbesitz", description: "Overview of the image sources used on this website." },
    notFound: { title: "Page not found | Aurelia Grundbesitz", description: "The page you requested does not exist. Please use the navigation to return to the website." },
  },
  nl: {
    portfolio: { title: "Portefeuille – Aurelia Grundbesitz", description: 'Overzicht van actueel vastgoed en objecten uit het bezit van Aurelia Grundbesitz GmbH.' },
    owners: { title: "Voor eigenaren – vastgoed in Duitsland | Aurelia Grundbesitz", description: "Aurelia Grundbesitz beoordeelt vastgoed in Duitsland persoonlijk en discreet – van een normale verkoop tot bijzondere situaties." },
    buyers: { title: "Voor kopers – vastgoed uit eigen bezit | Aurelia Grundbesitz", description: "Informatie voor kopers: objecten uit eigen bezit en projectgebonden aanbiedingen van Aurelia Grundbesitz." },
    partners: { title: "Partners en samenwerkingen | Aurelia Grundbesitz", description: "Samenwerking met makelaars, beheerders en projectpartners – projectgebonden, gestructureerd en betrouwbaar." },
    howItWorks: { title: "Werkwijze – zo gaan wij te werk | Aurelia Grundbesitz", description: "Van de eerste aanvraag tot de afwikkeling: het gestructureerde verloop van een vastgoedaanvraag bij Aurelia Grundbesitz." },
    services: { title: "Diensten | Aurelia Grundbesitz", description: "Directe vastgoedaankoop in Duitsland, vastgoed in Turkije en projectgebonden samenwerkingen in één overzicht." },
    taxBenefits: { title: "Fiscale onderwerpen bij vastgoed | Aurelia Grundbesitz", description: "Overzicht van afschrijving, energetische renovatie, KfW en BAFA met verwijzingen naar officiële bronnen. Geen belastingadvies." },
    taxAfa: { title: "Afschrijving (AfA) bij vastgoed | Aurelia Grundbesitz", description: "Basisinformatie over afschrijving (AfA) bij vastgoed met verwijzingen naar officiële bronnen. Geen belastingadvies." },
    taxEnergetisch: { title: "Energetische renovatie | Aurelia Grundbesitz", description: "Overzicht van energetische renovatiemaatregelen bij vastgoed met verwijzingen naar officiële bronnen." },
    taxKfw: { title: "KfW-subsidies bij vastgoed | Aurelia Grundbesitz", description: "Overzicht van KfW-programma's rond vastgoed met verwijzingen naar officiële bronnen." },
    taxBafa: { title: "BAFA-subsidies bij vastgoed | Aurelia Grundbesitz", description: "Overzicht van BAFA-subsidies rond vastgoed met verwijzingen naar officiële bronnen." },
    taxGlossar: { title: "Verklarende lijst fiscale begrippen | Aurelia Grundbesitz", description: "Toelichting op fiscale begrippen rond vastgoed, alfabetisch geordend." },
    investorGlossar: { title: "Vastgoedglossarium | Aurelia Grundbesitz", description: "Begrippen uit de vastgoedpraktijk begrijpelijk uitgelegd – alfabetisch geordend." },
    faq: { title: "Veelgestelde vragen | Aurelia Grundbesitz", description: "Antwoorden op veelgestelde vragen over verkoop, het verloop en de samenwerking met Aurelia Grundbesitz." },
    contact: { title: "Contact | Aurelia Grundbesitz", description: "Neem contact op met Aurelia Grundbesitz in Düsseldorf – persoonlijk, discreet en vrijblijvend." },
    impressum: { title: "Colofon | Aurelia Grundbesitz", description: "Colofon en aanbiedergegevens van Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Privacyverklaring | Aurelia Grundbesitz", description: "Informatie over de verwerking van persoonsgegevens op de website van Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Beeldverantwoording | Aurelia Grundbesitz", description: "Overzicht van de op deze website gebruikte beeldbronnen." },
    notFound: { title: "Pagina niet gevonden | Aurelia Grundbesitz", description: "De opgevraagde pagina bestaat niet. Gebruik de navigatie om terug te keren naar de website." },
  },
  it: {
    portfolio: { title: "Portafoglio – Aurelia Grundbesitz", description: 'Panoramica degli immobili attuali e degli oggetti del portafoglio di Aurelia Grundbesitz GmbH.' },
    owners: { title: "Per proprietari – immobili in Germania | Aurelia Grundbesitz", description: "Aurelia Grundbesitz esamina immobili in Germania in modo personale e riservato – dalla vendita ordinaria alle situazioni particolari." },
    buyers: { title: "Per acquirenti – immobili del nostro portafoglio | Aurelia Grundbesitz", description: "Informazioni per gli acquirenti: immobili di proprietà e offerte legate a singoli progetti di Aurelia Grundbesitz." },
    partners: { title: "Partner e collaborazioni | Aurelia Grundbesitz", description: "Collaborazione con agenti, amministratori e partner di progetto – su base progettuale, strutturata e affidabile." },
    howItWorks: { title: "Procedura – come lavoriamo | Aurelia Grundbesitz", description: "Dalla prima richiesta alla conclusione: lo svolgimento strutturato di una richiesta immobiliare in Aurelia Grundbesitz." },
    services: { title: "Servizi | Aurelia Grundbesitz", description: "Acquisto diretto di immobili in Germania, immobili in Turchia e collaborazioni legate a progetti in sintesi." },
    taxBenefits: { title: "Temi fiscali legati agli immobili | Aurelia Grundbesitz", description: "Panoramica su ammortamento, risanamento energetico, KfW e BAFA con rimandi a fonti ufficiali. Nessuna consulenza fiscale." },
    taxAfa: { title: "Ammortamento (AfA) degli immobili | Aurelia Grundbesitz", description: "Nozioni di base sull'ammortamento (AfA) degli immobili con rimandi a fonti ufficiali. Nessuna consulenza fiscale." },
    taxEnergetisch: { title: "Risanamento energetico | Aurelia Grundbesitz", description: "Panoramica degli interventi di risanamento energetico degli immobili con rimandi a fonti ufficiali." },
    taxKfw: { title: "Incentivi KfW per immobili | Aurelia Grundbesitz", description: "Panoramica dei programmi di incentivi KfW legati agli immobili con rimandi a fonti ufficiali." },
    taxBafa: { title: "Incentivi BAFA per immobili | Aurelia Grundbesitz", description: "Panoramica degli incentivi BAFA legati agli immobili con rimandi a fonti ufficiali." },
    taxGlossar: { title: "Glossario dei termini fiscali | Aurelia Grundbesitz", description: "Spiegazioni dei termini fiscali legati agli immobili, in ordine alfabetico." },
    investorGlossar: { title: "Glossario immobiliare | Aurelia Grundbesitz", description: "Termini della pratica immobiliare spiegati in modo chiaro – glossario in ordine alfabetico." },
    faq: { title: "Domande frequenti | Aurelia Grundbesitz", description: "Risposte alle domande più frequenti su vendita, procedura e collaborazione con Aurelia Grundbesitz." },
    contact: { title: "Contatti | Aurelia Grundbesitz", description: "Contattate Aurelia Grundbesitz a Düsseldorf – in modo personale, riservato e senza impegno." },
    impressum: { title: "Note legali | Aurelia Grundbesitz", description: "Note legali e dati identificativi di Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Informativa sulla privacy | Aurelia Grundbesitz", description: "Informazioni sul trattamento dei dati personali sul sito di Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Crediti fotografici | Aurelia Grundbesitz", description: "Panoramica delle fonti delle immagini utilizzate su questo sito." },
    notFound: { title: "Pagina non trovata | Aurelia Grundbesitz", description: "La pagina richiesta non esiste. Utilizzate la navigazione per tornare al sito." },
  },
  es: {
    portfolio: { title: "Cartera – Aurelia Grundbesitz", description: 'Resumen de los inmuebles actuales y objetos de la cartera de Aurelia Grundbesitz GmbH.' },
    owners: { title: "Para propietarios – inmuebles en Alemania | Aurelia Grundbesitz", description: "Aurelia Grundbesitz revisa inmuebles en Alemania de forma personal y discreta, desde una venta normal hasta situaciones especiales." },
    buyers: { title: "Para compradores – inmuebles de nuestra cartera | Aurelia Grundbesitz", description: "Información para compradores: inmuebles de cartera propia y ofertas vinculadas a proyectos de Aurelia Grundbesitz." },
    partners: { title: "Socios y cooperaciones | Aurelia Grundbesitz", description: "Colaboración con agentes, administradores y socios de proyecto: vinculada a proyectos, estructurada y fiable." },
    howItWorks: { title: "Proceso – así trabajamos | Aurelia Grundbesitz", description: "Desde la primera consulta hasta la tramitación: el desarrollo estructurado de una consulta inmobiliaria en Aurelia Grundbesitz." },
    services: { title: "Servicios | Aurelia Grundbesitz", description: "Compra directa de inmuebles en Alemania, inmuebles en Turquía y cooperaciones vinculadas a proyectos." },
    taxBenefits: { title: "Temas fiscales en inmuebles | Aurelia Grundbesitz", description: "Resumen sobre amortización, rehabilitación energética, KfW y BAFA con enlaces a fuentes oficiales. Sin asesoramiento fiscal." },
    taxAfa: { title: "Amortización (AfA) de inmuebles | Aurelia Grundbesitz", description: "Fundamentos de la amortización (AfA) de inmuebles con enlaces a fuentes oficiales. Sin asesoramiento fiscal." },
    taxEnergetisch: { title: "Rehabilitación energética | Aurelia Grundbesitz", description: "Resumen de medidas de rehabilitación energética en inmuebles con enlaces a fuentes oficiales." },
    taxKfw: { title: "Ayudas KfW para inmuebles | Aurelia Grundbesitz", description: "Resumen de los programas de ayudas KfW relacionados con inmuebles y enlaces a fuentes oficiales." },
    taxBafa: { title: "Ayudas BAFA para inmuebles | Aurelia Grundbesitz", description: "Resumen de las ayudas BAFA relacionadas con inmuebles y enlaces a fuentes oficiales." },
    taxGlossar: { title: "Glosario de términos fiscales | Aurelia Grundbesitz", description: "Explicación de términos fiscales relacionados con inmuebles, ordenados alfabéticamente." },
    investorGlossar: { title: "Glosario inmobiliario | Aurelia Grundbesitz", description: "Términos de la práctica inmobiliaria explicados con claridad, en orden alfabético." },
    faq: { title: "Preguntas frecuentes | Aurelia Grundbesitz", description: "Respuestas a las preguntas más frecuentes sobre la venta, el proceso y la colaboración con Aurelia Grundbesitz." },
    contact: { title: "Contacto | Aurelia Grundbesitz", description: "Póngase en contacto con Aurelia Grundbesitz en Düsseldorf: de forma personal, discreta y sin compromiso." },
    impressum: { title: "Aviso legal | Aurelia Grundbesitz", description: "Aviso legal e identificación del prestador Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Política de privacidad | Aurelia Grundbesitz", description: "Información sobre el tratamiento de datos personales en el sitio web de Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Créditos de imágenes | Aurelia Grundbesitz", description: "Resumen de las fuentes de las imágenes utilizadas en este sitio web." },
    notFound: { title: "Página no encontrada | Aurelia Grundbesitz", description: "La página solicitada no existe. Utilice la navegación para volver al sitio web." },
  },
  tr: {
    portfolio: { title: "Portföy – Aurelia Grundbesitz", description: 'Aurelia Grundbesitz GmbH portföyündeki güncel gayrimenkullere genel bakış.' },
    owners: { title: "Mal sahipleri için – Almanya'da gayrimenkul | Aurelia Grundbesitz", description: "Aurelia Grundbesitz, Almanya'daki gayrimenkulleri kişisel ve gizli biçimde inceler; normal satıştan özel durumlara kadar." },
    buyers: { title: "Alıcılar için – kendi portföyümüzden gayrimenkuller | Aurelia Grundbesitz", description: "Alıcılar için bilgiler: kendi portföyümüzdeki gayrimenkuller ve projeye bağlı teklifler." },
    partners: { title: "Ortaklar ve iş birlikleri | Aurelia Grundbesitz", description: "Emlak danışmanları, yöneticiler ve proje ortaklarıyla projeye bağlı, yapılandırılmış ve güvenilir iş birliği." },
    howItWorks: { title: "Süreç – nasıl çalışıyoruz | Aurelia Grundbesitz", description: "İlk başvurudan işlemin tamamlanmasına kadar: Aurelia Grundbesitz'te gayrimenkul talebinin yapılandırılmış akışı." },
    services: { title: "Hizmetler | Aurelia Grundbesitz", description: "Almanya'da doğrudan gayrimenkul alımı, Türkiye'deki gayrimenkuller ve projeye bağlı iş birlikleri." },
    taxBenefits: { title: "Gayrimenkulde vergi konuları | Aurelia Grundbesitz", description: "Amortisman, enerji verimli yenileme, KfW ve BAFA hakkında resmî kaynaklara atıflı genel bakış. Vergi danışmanlığı değildir." },
    taxAfa: { title: "Gayrimenkulde amortisman (AfA) | Aurelia Grundbesitz", description: "Gayrimenkul amortismanının (AfA) temelleri, resmî kaynaklara atıflarla. Vergi danışmanlığı değildir." },
    taxEnergetisch: { title: "Enerji verimli yenileme | Aurelia Grundbesitz", description: "Gayrimenkullerde enerji verimli yenileme önlemlerine resmî kaynaklara atıflı genel bakış." },
    taxKfw: { title: "Gayrimenkulde KfW destekleri | Aurelia Grundbesitz", description: "Gayrimenkulle ilgili KfW destek programlarına resmî kaynaklara atıflı genel bakış." },
    taxBafa: { title: "Gayrimenkulde BAFA destekleri | Aurelia Grundbesitz", description: "Gayrimenkulle ilgili BAFA desteklerine resmî kaynaklara atıflı genel bakış." },
    taxGlossar: { title: "Vergi terimleri sözlüğü | Aurelia Grundbesitz", description: "Gayrimenkulle ilgili vergi terimlerinin alfabetik açıklamaları." },
    investorGlossar: { title: "Gayrimenkul sözlüğü | Aurelia Grundbesitz", description: "Gayrimenkul uygulamasındaki terimler anlaşılır biçimde açıklanır – alfabetik sözlük." },
    faq: { title: "Sık sorulan sorular | Aurelia Grundbesitz", description: "Satış, süreç ve Aurelia Grundbesitz ile iş birliği hakkında sık sorulan soruların yanıtları." },
    contact: { title: "İletişim | Aurelia Grundbesitz", description: "Düsseldorf'taki Aurelia Grundbesitz ile iletişime geçin – kişisel, gizli ve bağlayıcı olmadan." },
    impressum: { title: "Künye | Aurelia Grundbesitz", description: "Aurelia Grundbesitz GmbH, Düsseldorf künye ve sağlayıcı bilgileri." },
    privacy: { title: "Gizlilik politikası | Aurelia Grundbesitz", description: "Aurelia Grundbesitz GmbH web sitesinde kişisel verilerin işlenmesine ilişkin bilgiler." },
    bildnachweise: { title: "Görsel kaynakları | Aurelia Grundbesitz", description: "Bu web sitesinde kullanılan görsellerin kaynaklarına genel bakış." },
    notFound: { title: "Sayfa bulunamadı | Aurelia Grundbesitz", description: "İstenen sayfa mevcut değil. Siteye dönmek için menüyü kullanın." },
  },
  fr: {
    portfolio: { title: "Portefeuille – Aurelia Grundbesitz", description: "Aperçu des biens actuels et des objets du portefeuille d'Aurelia Grundbesitz GmbH." },
    owners: { title: "Pour les propriétaires – biens en Allemagne | Aurelia Grundbesitz", description: "Aurelia Grundbesitz examine les biens en Allemagne de manière personnelle et discrète, de la vente classique aux situations particulières." },
    buyers: { title: "Pour les acquéreurs – biens de notre portefeuille | Aurelia Grundbesitz", description: "Informations pour les acquéreurs : biens de notre propre portefeuille et offres liées à des projets." },
    partners: { title: "Partenaires et coopérations | Aurelia Grundbesitz", description: "Coopération avec des agents, gestionnaires et partenaires de projet : liée aux projets, structurée et fiable." },
    howItWorks: { title: "Déroulement – notre méthode | Aurelia Grundbesitz", description: "De la première demande à la finalisation : le déroulement structuré d'une demande immobilière chez Aurelia Grundbesitz." },
    services: { title: "Prestations | Aurelia Grundbesitz", description: "Achat direct de biens en Allemagne, biens en Turquie et coopérations liées à des projets." },
    taxBenefits: { title: "Thèmes fiscaux liés à l'immobilier | Aurelia Grundbesitz", description: "Aperçu de l'amortissement, de la rénovation énergétique, de KfW et BAFA avec renvois aux sources officielles. Pas de conseil fiscal." },
    taxAfa: { title: "Amortissement (AfA) immobilier | Aurelia Grundbesitz", description: "Bases de l'amortissement immobilier (AfA) avec renvois aux sources officielles. Pas de conseil fiscal." },
    taxEnergetisch: { title: "Rénovation énergétique | Aurelia Grundbesitz", description: "Aperçu des mesures de rénovation énergétique des biens immobiliers avec renvois aux sources officielles." },
    taxKfw: { title: "Aides KfW pour l'immobilier | Aurelia Grundbesitz", description: "Aperçu des programmes d'aides KfW liés à l'immobilier avec renvois aux sources officielles." },
    taxBafa: { title: "Aides BAFA pour l'immobilier | Aurelia Grundbesitz", description: "Aperçu des aides BAFA liées à l'immobilier avec renvois aux sources officielles." },
    taxGlossar: { title: "Glossaire des termes fiscaux | Aurelia Grundbesitz", description: "Explication des termes fiscaux liés à l'immobilier, par ordre alphabétique." },
    investorGlossar: { title: "Glossaire immobilier | Aurelia Grundbesitz", description: "Les termes de la pratique immobilière expliqués clairement – glossaire alphabétique." },
    faq: { title: "Questions fréquentes | Aurelia Grundbesitz", description: "Réponses aux questions fréquentes sur la vente, le déroulement et la collaboration avec Aurelia Grundbesitz." },
    contact: { title: "Contact | Aurelia Grundbesitz", description: "Contactez Aurelia Grundbesitz à Düsseldorf : de manière personnelle, discrète et sans engagement." },
    impressum: { title: "Mentions légales | Aurelia Grundbesitz", description: "Mentions légales et identification du prestataire Aurelia Grundbesitz GmbH, Düsseldorf." },
    privacy: { title: "Politique de confidentialité | Aurelia Grundbesitz", description: "Informations sur le traitement des données personnelles sur le site d'Aurelia Grundbesitz GmbH." },
    bildnachweise: { title: "Crédits photographiques | Aurelia Grundbesitz", description: "Aperçu des sources des images utilisées sur ce site." },
    notFound: { title: "Page introuvable | Aurelia Grundbesitz", description: "La page demandée n'existe pas. Utilisez la navigation pour revenir au site." },
  },
};
