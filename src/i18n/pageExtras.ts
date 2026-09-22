import type { Language } from "./types";

type PageExtras = {
  imageCredits: { first: string; second: string; contact: string };
  contact: { availabilityShort: string; personalPrompt: string; consultation: string; consultationSubject: string; phone: string; email: string; confirmationWarning: string };
  portfolio: {
    seoTitle: string; heroKicker: string; heroTitle: string; heroDescription: string; heroAlt: string;
    introTitle: string; introText: string; categoriesTitle: string; categoriesIntro: string;
    categories: { title: string; description: string; alt: string }[];
    regionTitle: string; regionText: string; ctaTitle: string; ctaText: string; ctaButton: string;
  };
  accessibility: { chooseLetters: string; homeHeroAlt: string; promisesAlt: string };
  shared: { faqPrompt: string; call: string; enquire: string; faqHeroAlt: string };
};

export const pageExtras: Record<Language, PageExtras> = {
  de: {
    imageCredits: {
      first: "Sämtliche auf dieser Website verwendeten Bilder sind KI-generiert und lizenzfrei. Sie wurden eigens für die Aurelia Grundbesitz GmbH erstellt und dienen ausschließlich der Illustration.",
      second: "Es werden keine Bilder von Drittanbietern mit kostenpflichtiger oder unklarer Lizenzlage verwendet. Sollten dennoch Rechte Dritter betroffen sein, bitten wir um umgehende Kontaktaufnahme.",
      contact: "Kontakt bei Rückfragen",
    },
    contact: {
      availabilityShort: "Mo–Fr, auch kurzfristig bei laufenden Verfahren",
      personalPrompt: "Lieber persönlich? Vereinbaren Sie ein vertrauliches Erstgespräch.",
      consultation: "Kostenloses Erstgespräch",
      consultationSubject: "Kostenloses Erstgespräch anfordern",
      phone: "Telefon",
      email: "E-Mail",
      confirmationWarning: "Ihre Anfrage ist eingegangen. Die automatische E-Mail-Bestätigung konnte derzeit nicht zugestellt werden.",
    },
    portfolio: {
      seoTitle: "Portfolio – Aurelia Grundbesitz GmbH", heroKicker: "Portfolio", heroTitle: "Aktuelle Immobilien", heroDescription: "Ausgewählte Immobilien aus dem eigenen Bestand.", heroAlt: "Aurelia Immobilien-Portfolio",
      introTitle: "Regelmäßig wechselnde Auswahl", introText: "Aurelia verfügt über ein regelmäßig wechselndes Portfolio ausgewählter Immobilien aus dem eigenen Bestand. Da der Bestand vertraulich verwaltet wird und sich laufend verändert, stellen wir konkrete Objekte ausschließlich auf direkte Anfrage vor.",
      categoriesTitle: "Objektkategorien", categoriesIntro: "Unser Bestand umfasst diverse Assetklassen — Verfügbarkeit variiert.",
      categories: [
        { title: "Eigentumswohnungen", description: "Einzelobjekte und mehrgeschossige Wohnanlagen.", alt: "Modernes Wohngebäude mit Balkonen" },
        { title: "Einfamilienhäuser", description: "Verschiedene Sanierungszustände.", alt: "Freistehendes Einfamilienhaus" },
        { title: "Grundstücke", description: "Bauland und freie Flächen mit Entwicklungspotenzial.", alt: "Luftbild eines Baugrundstücks" },
        { title: "Gewerbeimmobilien", description: "Einzelhandel, Büro und gemischte Nutzung.", alt: "Außenansicht eines Bürogebäudes" },
      ],
      regionTitle: "Unsere Märkte", regionText: "Deutschland sowie Immobilien und Grundstücke in der Türkei. Hinzu kommen Verkäufe aus dem eigenen Bestand und projektbezogene Kooperationen.",
      ctaTitle: "Konkrete Objekte anfragen", ctaText: "Beschreiben Sie uns kurz, wonach Sie suchen — wir prüfen, welche Objekte aus unserem aktuellen Bestand für Sie in Frage kommen.", ctaButton: "Portfolio anfragen",
    },
    accessibility: { chooseLetters: "Buchstaben wählen", homeHeroAlt: "Ruhige Wohnstraße mit gepflegtem Mehrfamilienhaus bei Tageslicht", promisesAlt: "Vier Marmorsäulen in einem lichtdurchfluteten Raum als Sinnbild für unsere vier Versprechen" },
    shared: { faqPrompt: "Weitere Fragen beantworten wir in unseren FAQ.", call: "Anrufen", enquire: "Anfragen", faqHeroAlt: "Ruhiger Besprechungsraum mit Immobilienunterlagen" },
  },
  tr: {
    imageCredits: {
      first: "Bu internet sitesinde kullanılan tüm görseller yapay zekâ ile oluşturulmuş ve lisans gerektirmeyen görsellerdir. Görseller Aurelia Grundbesitz GmbH için özel olarak hazırlanmış olup yalnızca görsel amaçlı kullanılmaktadır.",
      second: "Ücretli veya lisans durumu belirsiz üçüncü taraf görseller kullanılmamaktadır. Buna rağmen üçüncü kişilere ait hakların etkilenmiş olabileceğini düşünüyorsanız, lütfen derhal bizimle iletişime geçin.",
      contact: "Sorularınız için iletişim",
    },
    contact: { availabilityShort: "Pazartesi–Cuma; devam eden işlemlerde kısa sürede de ulaşabilirsiniz", personalPrompt: "Yüz yüze görüşmeyi mi tercih edersiniz? Gizli bir ilk görüşme planlayın.", consultation: "Ücretsiz ilk görüşme", consultationSubject: "Ücretsiz ilk görüşme talebi", phone: "Telefon", email: "E-posta", confirmationWarning: "Talebiniz bize ulaştı. Otomatik e-posta onayı şu anda teslim edilemedi." },
    portfolio: {
      seoTitle: "Portföy – Aurelia Grundbesitz GmbH", heroKicker: "Portföy", heroTitle: "Güncel gayrimenkuller", heroDescription: "Kendi portföyümüzden seçilmiş gayrimenkuller.", heroAlt: "Aurelia gayrimenkul portföyü",
      introTitle: "Düzenli olarak yenilenen seçenekler", introText: "Aurelia, kendi portföyünden düzenli olarak yenilenen seçilmiş gayrimenkuller sunar. Portföy gizlilik içinde yönetildiği ve sürekli değiştiği için somut gayrimenkulleri yalnızca doğrudan talep üzerine sunuyoruz.",
      categoriesTitle: "Gayrimenkul kategorileri", categoriesIntro: "Portföyümüz farklı gayrimenkul türlerini kapsar; güncel seçenekler değişebilir.",
      categories: [
        { title: "Kat mülkiyetli daireler", description: "Bağımsız daireler ve çok katlı konut yapıları.", alt: "Balkonlu modern konut binası" },
        { title: "Müstakil evler", description: "Farklı yenileme durumlarındaki evler.", alt: "Müstakil ev" },
        { title: "Arsalar", description: "Geliştirme potansiyeli bulunan imarlı arsalar ve boş alanlar.", alt: "Bir arsanın havadan görünümü" },
        { title: "Ticari gayrimenkuller", description: "Perakende, ofis ve karma kullanımlı gayrimenkuller.", alt: "Bir ofis binasının dış görünümü" },
      ],
      regionTitle: "Pazarlarımız", regionText: "Almanya ile Türkiye'deki gayrimenkul ve arsalar. Ayrıca kendi portföyümüzden satışlar ve proje bazlı iş birlikleri yürütüyoruz.",
      ctaTitle: "Belirli gayrimenkuller hakkında bilgi alın", ctaText: "Aradığınız gayrimenkulü kısaca açıklayın; güncel portföyümüzde size uygun seçenekleri inceleyelim.", ctaButton: "Portföy hakkında bilgi alın",
    },
    accessibility: { chooseLetters: "Harf seçin", homeHeroAlt: "Gün ışığında, sakin bir sokakta bakımlı apartman", promisesAlt: "Dört taahhüdümüzü simgeleyen, aydınlık bir mekândaki dört mermer sütun" },
    shared: { faqPrompt: "Diğer sorularınızı SSS bölümümüzde yanıtlıyoruz.", call: "Arayın", enquire: "Talep gönderin", faqHeroAlt: "Gayrimenkul belgelerinin bulunduğu sakin bir toplantı odası" },
  },
  en: {
    imageCredits: { first: "All images used on this website were generated using artificial intelligence and are royalty-free. They were created specifically for Aurelia Grundbesitz GmbH and are used solely for illustrative purposes.", second: "We do not use third-party images that require payment or have an unclear licensing status. If you nevertheless believe that third-party rights may be affected, please contact us immediately.", contact: "Contact for enquiries" },
    contact: { availabilityShort: "Monday–Friday, including at short notice during ongoing proceedings", personalPrompt: "Prefer to speak in person? Arrange a confidential initial consultation.", consultation: "Free initial consultation", consultationSubject: "Request a free initial consultation", phone: "Phone", email: "Email", confirmationWarning: "Your enquiry has been received. The automatic email confirmation could not be delivered at this time." },
    portfolio: {
      seoTitle: "Portfolio – Aurelia Grundbesitz GmbH", heroKicker: "Portfolio", heroTitle: "Current properties", heroDescription: "Selected properties from our own portfolio.", heroAlt: "Aurelia property portfolio",
      introTitle: "A selection that changes regularly", introText: "Aurelia maintains a regularly changing selection of properties from its own portfolio. As the portfolio is managed confidentially and changes continuously, we present specific properties only upon direct enquiry.", categoriesTitle: "Property categories", categoriesIntro: "Our portfolio covers various asset classes; availability varies.",
      categories: [{ title: "Condominiums", description: "Individual units and multi-storey residential buildings.", alt: "Modern residential building with balconies" }, { title: "Detached houses", description: "Properties in various states of renovation.", alt: "Detached family home" }, { title: "Land", description: "Building plots and vacant land with development potential.", alt: "Aerial view of a building plot" }, { title: "Commercial properties", description: "Retail, office and mixed-use properties.", alt: "Exterior view of an office building" }],
      regionTitle: "Our markets", regionText: "Germany as well as property and land in Turkey, complemented by sales from our own portfolio and project-based cooperation.", ctaTitle: "Enquire about specific properties", ctaText: "Briefly tell us what you are looking for, and we will review which properties in our current portfolio may be suitable for you.", ctaButton: "Enquire about our portfolio",
    },
    accessibility: { chooseLetters: "Choose a letter", homeHeroAlt: "Well-maintained apartment building on a quiet residential street in daylight", promisesAlt: "Four marble columns in a light-filled room symbolising our four commitments" },
    shared: { faqPrompt: "We answer further questions in our FAQ.", call: "Call", enquire: "Enquire", faqHeroAlt: "Calm meeting room with property documents" },
  },
  nl: {
    imageCredits: { first: "Alle afbeeldingen op deze website zijn met kunstmatige intelligentie gegenereerd en rechtenvrij. Ze zijn speciaal voor Aurelia Grundbesitz GmbH gemaakt en dienen uitsluitend ter illustratie.", second: "Wij gebruiken geen afbeeldingen van derden waarvoor betaald moet worden of waarvan de licentiestatus onduidelijk is. Denkt u desondanks dat rechten van derden mogelijk zijn geraakt, neem dan onmiddellijk contact met ons op.", contact: "Contact bij vragen" },
    contact: { availabilityShort: "Maandag–vrijdag, ook op korte termijn bij lopende procedures", personalPrompt: "Liever persoonlijk contact? Plan een vertrouwelijk eerste gesprek.", consultation: "Gratis eerste gesprek", consultationSubject: "Gratis eerste gesprek aanvragen", phone: "Telefoon", email: "E-mail", confirmationWarning: "Uw aanvraag is ontvangen. De automatische e-mailbevestiging kon momenteel niet worden bezorgd." },
    portfolio: {
      seoTitle: "Portefeuille – Aurelia Grundbesitz GmbH", heroKicker: "Portefeuille", heroTitle: "Actueel vastgoed", heroDescription: "Geselecteerd vastgoed uit onze eigen portefeuille.", heroAlt: "Vastgoedportefeuille van Aurelia",
      introTitle: "Regelmatig wisselend aanbod", introText: "Aurelia biedt een regelmatig wisselende selectie uit de eigen vastgoedportefeuille. Omdat deze vertrouwelijk wordt beheerd en voortdurend verandert, presenteren wij concrete objecten uitsluitend op directe aanvraag.", categoriesTitle: "Vastgoedcategorieën", categoriesIntro: "Onze portefeuille omvat diverse vastgoedklassen; de beschikbaarheid varieert.",
      categories: [{ title: "Appartementen", description: "Afzonderlijke woningen en meerlaagse woongebouwen.", alt: "Modern woongebouw met balkons" }, { title: "Eengezinswoningen", description: "Woningen in verschillende renovatiestaten.", alt: "Vrijstaande eengezinswoning" }, { title: "Percelen", description: "Bouwgrond en vrije terreinen met ontwikkelingspotentieel.", alt: "Luchtfoto van een bouwperceel" }, { title: "Commercieel vastgoed", description: "Winkels, kantoren en gemengd gebruik.", alt: "Buitenzijde van een kantoorgebouw" }],
      regionTitle: "Onze markten", regionText: "Duitsland en vastgoed en grond in Turkije, aangevuld met verkoop uit eigen portefeuille en projectgebonden samenwerking.", ctaTitle: "Vraag naar concrete objecten", ctaText: "Vertel ons kort wat u zoekt; wij bekijken welke objecten uit onze actuele portefeuille bij u passen.", ctaButton: "Portefeuille aanvragen",
    },
    accessibility: { chooseLetters: "Kies een letter", homeHeroAlt: "Goed onderhouden appartementencomplex in een rustige woonstraat bij daglicht", promisesAlt: "Vier marmeren zuilen in een lichte ruimte als symbool voor onze vier beloften" },
    shared: { faqPrompt: "Meer vragen beantwoorden wij in onze FAQ.", call: "Bellen", enquire: "Aanvragen", faqHeroAlt: "Rustige vergaderruimte met vastgoeddocumenten" },
  },
  it: {
    imageCredits: { first: "Tutte le immagini utilizzate su questo sito sono state generate con l'intelligenza artificiale e sono esenti da diritti di licenza. Sono state create appositamente per Aurelia Grundbesitz GmbH e sono utilizzate esclusivamente a scopo illustrativo.", second: "Non utilizziamo immagini di terzi a pagamento o con una situazione di licenza incerta. Qualora ritenesse comunque che possano essere stati lesi diritti di terzi, la preghiamo di contattarci immediatamente.", contact: "Contatti per informazioni" },
    contact: { availabilityShort: "Dal lunedì al venerdì, anche con breve preavviso per procedure in corso", personalPrompt: "Preferisce un contatto personale? Fissi un primo colloquio riservato.", consultation: "Primo colloquio gratuito", consultationSubject: "Richiesta di primo colloquio gratuito", phone: "Telefono", email: "E-mail", confirmationWarning: "La sua richiesta è stata ricevuta. Al momento non è stato possibile recapitare la conferma automatica via e-mail." },
    portfolio: {
      seoTitle: "Portafoglio – Aurelia Grundbesitz GmbH", heroKicker: "Portafoglio", heroTitle: "Immobili attuali", heroDescription: "Immobili selezionati dal nostro patrimonio.", heroAlt: "Portafoglio immobiliare Aurelia",
      introTitle: "Una selezione in costante aggiornamento", introText: "Aurelia propone una selezione in costante aggiornamento di immobili del proprio patrimonio. Poiché il portafoglio è gestito in modo riservato e cambia continuamente, presentiamo immobili specifici esclusivamente su richiesta diretta.", categoriesTitle: "Categorie di immobili", categoriesIntro: "Il nostro portafoglio comprende diverse classi di immobili; la disponibilità varia.",
      categories: [{ title: "Appartamenti di proprietà", description: "Singole unità e complessi residenziali multipiano.", alt: "Edificio residenziale moderno con balconi" }, { title: "Case unifamiliari", description: "Immobili in diversi stati di ristrutturazione.", alt: "Casa unifamiliare indipendente" }, { title: "Terreni", description: "Terreni edificabili e aree libere con potenziale di sviluppo.", alt: "Veduta aerea di un terreno edificabile" }, { title: "Immobili commerciali", description: "Negozi, uffici e immobili a uso misto.", alt: "Vista esterna di un edificio per uffici" }],
      regionTitle: "I nostri mercati", regionText: "Germania e immobili e terreni in Turchia, oltre alla vendita dal patrimonio e alle collaborazioni progettuali.", ctaTitle: "Richieda informazioni su immobili specifici", ctaText: "Ci descriva brevemente ciò che cerca: verificheremo quali immobili del nostro portafoglio attuale possono essere adatti alle sue esigenze.", ctaButton: "Richiedi il portafoglio",
    },
    accessibility: { chooseLetters: "Scegli una lettera", homeHeroAlt: "Edificio residenziale ben tenuto in una tranquilla strada di giorno", promisesAlt: "Quattro colonne di marmo in un ambiente luminoso, simbolo dei nostri quattro impegni" },
    shared: { faqPrompt: "Rispondiamo ad altre domande nelle nostre FAQ.", call: "Chiama", enquire: "Invia richiesta", faqHeroAlt: "Sala riunioni tranquilla con documenti immobiliari" },
  },
  es: {
    imageCredits: { first: "Todas las imágenes utilizadas en este sitio web han sido generadas mediante inteligencia artificial y están libres de derechos de licencia. Se crearon específicamente para Aurelia Grundbesitz GmbH y se utilizan únicamente con fines ilustrativos.", second: "No utilizamos imágenes de terceros de pago o cuya situación de licencia sea incierta. Si, pese a ello, considera que podrían verse afectados derechos de terceros, le rogamos que se ponga en contacto con nosotros de inmediato.", contact: "Contacto para consultas" },
    contact: { availabilityShort: "De lunes a viernes, también con poca antelación en procedimientos en curso", personalPrompt: "¿Prefiere hablar personalmente? Concierte una primera consulta confidencial.", consultation: "Primera consulta gratuita", consultationSubject: "Solicitar una primera consulta gratuita", phone: "Teléfono", email: "Correo electrónico", confirmationWarning: "Hemos recibido su consulta. En este momento no ha sido posible entregar la confirmación automática por correo electrónico." },
    portfolio: {
      seoTitle: "Cartera – Aurelia Grundbesitz GmbH", heroKicker: "Cartera", heroTitle: "Inmuebles actuales", heroDescription: "Inmuebles seleccionados de nuestra cartera propia.", heroAlt: "Cartera inmobiliaria de Aurelia",
      introTitle: "Una selección que se actualiza regularmente", introText: "Aurelia ofrece una selección en constante actualización de inmuebles de su propia cartera. Como se gestiona de forma confidencial y cambia continuamente, presentamos inmuebles concretos únicamente previa consulta directa.", categoriesTitle: "Categorías de inmuebles", categoriesIntro: "Nuestra cartera abarca distintas clases de activos; la disponibilidad puede variar.",
      categories: [{ title: "Viviendas en propiedad", description: "Unidades individuales y edificios residenciales de varias plantas.", alt: "Edificio residencial moderno con balcones" }, { title: "Viviendas unifamiliares", description: "Inmuebles en distintos estados de renovación.", alt: "Vivienda unifamiliar independiente" }, { title: "Terrenos", description: "Solares y terrenos libres con potencial de desarrollo.", alt: "Vista aérea de un solar" }, { title: "Inmuebles comerciales", description: "Locales, oficinas e inmuebles de uso mixto.", alt: "Vista exterior de un edificio de oficinas" }],
      regionTitle: "Nuestros mercados", regionText: "Alemania e inmuebles y terrenos en Turquía, junto con ventas de cartera propia y cooperaciones por proyecto.", ctaTitle: "Consulte inmuebles concretos", ctaText: "Descríbanos brevemente qué busca y comprobaremos qué inmuebles de nuestra cartera actual pueden ajustarse a sus necesidades.", ctaButton: "Consultar la cartera",
    },
    accessibility: { chooseLetters: "Elegir una letra", homeHeroAlt: "Edificio residencial bien cuidado en una calle tranquila a la luz del día", promisesAlt: "Cuatro columnas de mármol en un espacio luminoso como símbolo de nuestros cuatro compromisos" },
    shared: { faqPrompt: "Respondemos a otras preguntas en nuestras FAQ.", call: "Llamar", enquire: "Consultar", faqHeroAlt: "Sala de reuniones tranquila con documentación inmobiliaria" },
  },
  fr: {
    imageCredits: {
      first: "Toutes les images utilisées sur ce site ont été générées par intelligence artificielle et sont libres de droits. Elles ont été créées spécifiquement pour Aurelia Grundbesitz GmbH et servent uniquement à des fins d'illustration.",
      second: "Nous n'utilisons aucune image de tiers payante ou dont le statut de licence serait incertain. Si vous estimez néanmoins que des droits de tiers pourraient être concernés, nous vous prions de bien vouloir nous contacter immédiatement.",
      contact: "Contact pour toute question",
    },
    contact: {
      availabilityShort: "Du lundi au vendredi, y compris à court terme en cas de procédure en cours",
      personalPrompt: "Vous préférez un échange personnel ? Convenez d'un premier entretien confidentiel.",
      consultation: "Premier entretien gratuit",
      consultationSubject: "Demander un premier entretien gratuit",
      phone: "Téléphone",
      email: "E-mail",
      confirmationWarning: "Votre demande a bien été reçue. La confirmation automatique par e-mail n'a pas pu être délivrée pour le moment.",
    },
    portfolio: {
      seoTitle: "Portefeuille – Aurelia Grundbesitz GmbH", heroKicker: "Portefeuille", heroTitle: "Biens immobiliers actuels", heroDescription: "Des biens sélectionnés issus de notre propre portefeuille.", heroAlt: "Portefeuille immobilier Aurelia",
      introTitle: "Une sélection qui évolue régulièrement", introText: "Aurelia propose une sélection régulièrement renouvelée de biens issus de son propre portefeuille. Celui-ci étant géré de manière confidentielle et évoluant continuellement, nous ne présentons des biens concrets que sur demande directe.",
      categoriesTitle: "Catégories de biens", categoriesIntro: "Notre portefeuille couvre différentes classes d'actifs ; la disponibilité varie.",
      categories: [
        { title: "Appartements en copropriété", description: "Unités individuelles et immeubles résidentiels à plusieurs étages.", alt: "Immeuble résidentiel moderne avec balcons" },
        { title: "Maisons individuelles", description: "Biens à différents états de rénovation.", alt: "Maison individuelle indépendante" },
        { title: "Terrains", description: "Terrains constructibles et surfaces libres à fort potentiel de développement.", alt: "Vue aérienne d'un terrain constructible" },
        { title: "Immobilier commercial", description: "Commerces, bureaux et usages mixtes.", alt: "Vue extérieure d'un immeuble de bureaux" },
      ],
      regionTitle: "Nos marchés", regionText: "L’Allemagne ainsi que les biens et terrains en Turquie, complétés par la vente de notre portefeuille propre et des coopérations par projet.",
      ctaTitle: "Demander des biens concrets", ctaText: "Décrivez-nous brièvement ce que vous recherchez — nous examinerons quels biens de notre portefeuille actuel pourraient vous convenir.", ctaButton: "Demander le portefeuille",
    },
    accessibility: { chooseLetters: "Choisir une lettre", homeHeroAlt: "Rue résidentielle calme avec un immeuble bien entretenu en plein jour", promisesAlt: "Quatre colonnes de marbre dans une pièce baignée de lumière, symbole de nos quatre engagements" },
    shared: { faqPrompt: "Nous répondons à vos autres questions dans notre FAQ.", call: "Appeler", enquire: "Faire une demande", faqHeroAlt: "Salle de réunion calme avec des documents immobiliers" },
  },
};

export const taxExternalLinkLabels: Record<Language, {
  afa: [string, string];
  energy: [string, string];
  kfw: [string, string];
  bafa: [string, string];
}> = {
  de: { afa: ["Bundesfinanzministerium", "Finanzamt (ELSTER)"], energy: ["Bundesfinanzministerium", "Bundesministerium – Energieeffizienz"], kfw: ["KfW Förderbank", "KfW Produktfinder"], bafa: ["BAFA", "BAFA Förderübersicht"] },
  en: { afa: ["Federal Ministry of Finance", "Tax authority (ELSTER)"], energy: ["Federal Ministry of Finance", "Federal Ministry – Energy efficiency"], kfw: ["KfW development bank", "KfW product finder"], bafa: ["BAFA", "BAFA funding overview"] },
  nl: { afa: ["Federaal ministerie van Financiën", "Belastingdienst (ELSTER)"], energy: ["Federaal ministerie van Financiën", "Federaal ministerie – Energie-efficiëntie"], kfw: ["KfW-ontwikkelingsbank", "KfW-productzoeker"], bafa: ["BAFA", "BAFA-subsidieoverzicht"] },
  it: { afa: ["Ministero federale delle Finanze", "Ufficio delle imposte (ELSTER)"], energy: ["Ministero federale delle Finanze", "Ministero federale – Efficienza energetica"], kfw: ["Banca di sviluppo KfW", "Ricerca prodotti KfW"], bafa: ["BAFA", "Panoramica degli incentivi BAFA"] },
  es: { afa: ["Ministerio Federal de Finanzas", "Agencia tributaria (ELSTER)"], energy: ["Ministerio Federal de Finanzas", "Ministerio Federal – Eficiencia energética"], kfw: ["Banco de desarrollo KfW", "Buscador de productos KfW"], bafa: ["BAFA", "Resumen de ayudas BAFA"] },
  tr: { afa: ["Federal Maliye Bakanlığı", "Vergi dairesi (ELSTER)"], energy: ["Federal Maliye Bakanlığı", "Federal Bakanlık – Enerji verimliliği"], kfw: ["KfW kalkınma bankası", "KfW ürün arama"], bafa: ["BAFA", "BAFA teşvik programları"] },
  fr: { afa: ["Ministère fédéral des Finances", "Administration fiscale (ELSTER)"], energy: ["Ministère fédéral des Finances", "Ministère fédéral – Efficacité énergétique"], kfw: ["Banque de développement KfW", "Recherche de produits KfW"], bafa: ["BAFA", "Aperçu des aides BAFA"] },
};