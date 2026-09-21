import type { Language } from "./types";

type PageExtras = {
  imageCredits: { first: string; second: string; contact: string };
  contact: { availabilityShort: string; personalPrompt: string; consultation: string; consultationSubject: string; phone: string; email: string };
  portfolio: {
    seoTitle: string; heroKicker: string; heroTitle: string; heroDescription: string; heroAlt: string;
    introTitle: string; introText: string; categoriesTitle: string; categoriesIntro: string;
    categories: { title: string; description: string; alt: string }[];
    regionTitle: string; regionText: string; ctaTitle: string; ctaText: string; ctaButton: string;
  };
  accessibility: { chooseLetters: string; homeHeroAlt: string; promisesAlt: string };
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
    },
    portfolio: {
      seoTitle: "Portfolio – Aurelia Grundbesitz GmbH", heroKicker: "Portfolio", heroTitle: "Aktuelle Immobilien", heroDescription: "Qualitätsgeprüfte Objekte in Düsseldorf und Umland.", heroAlt: "Aurelia Immobilien-Portfolio",
      introTitle: "Regelmäßig wechselnde Auswahl", introText: "Aurelia verfügt über ein regelmäßig wechselndes Portfolio von qualitätsgeprüften Immobilien in der Region Düsseldorf und Umland. Da unser Bestand vertraulich verwaltet wird und sich laufend verändert, stellen wir konkrete Objekte ausschließlich auf direkte Anfrage vor.",
      categoriesTitle: "Objektkategorien", categoriesIntro: "Unser Bestand umfasst diverse Assetklassen — Verfügbarkeit variiert.",
      categories: [
        { title: "Eigentumswohnungen", description: "Einzelobjekte und mehrgeschossige Wohnanlagen.", alt: "Modernes Wohngebäude mit Balkonen" },
        { title: "Einfamilienhäuser", description: "Verschiedene Sanierungszustände.", alt: "Freistehendes Einfamilienhaus" },
        { title: "Grundstücke", description: "Bauland und freie Flächen mit Entwicklungspotenzial.", alt: "Luftbild eines Baugrundstücks" },
        { title: "Gewerbeimmobilien", description: "Einzelhandel, Büro und gemischte Nutzung.", alt: "Außenansicht eines Bürogebäudes" },
      ],
      regionTitle: "Unsere Märkte", regionText: "Deutschland mit Schwerpunkt Nordrhein-Westfalen sowie Immobilien und Grundstücke in der Türkei. Wir prüfen attraktive Standorte, besondere Ausgangssituationen und Objekte mit Entwicklungs- oder Wertsteigerungspotenzial.",
      ctaTitle: "Konkrete Objekte anfragen", ctaText: "Beschreiben Sie uns kurz, wonach Sie suchen — wir prüfen, welche Objekte aus unserem aktuellen Bestand für Sie in Frage kommen.", ctaButton: "Portfolio anfragen",
    },
    accessibility: { chooseLetters: "Buchstaben wählen", homeHeroAlt: "Ruhige Wohnstraße mit gepflegtem Mehrfamilienhaus bei Tageslicht", promisesAlt: "Vier Marmorsäulen in einem lichtdurchfluteten Raum als Sinnbild für unsere vier Versprechen" },
  },
  tr: {
    imageCredits: {
      first: "Bu internet sitesinde kullanılan tüm görseller yapay zekâ ile oluşturulmuş ve lisans gerektirmeyen görsellerdir. Görseller Aurelia Grundbesitz GmbH için özel olarak hazırlanmış olup yalnızca görsel amaçlı kullanılmaktadır.",
      second: "Ücretli veya lisans durumu belirsiz üçüncü taraf görseller kullanılmamaktadır. Buna rağmen üçüncü kişilere ait hakların etkilenmiş olabileceğini düşünüyorsanız, lütfen derhal bizimle iletişime geçin.",
      contact: "Sorularınız için iletişim",
    },
    contact: { availabilityShort: "Pazartesi–Cuma; devam eden işlemlerde kısa sürede de ulaşabilirsiniz", personalPrompt: "Yüz yüze görüşmeyi mi tercih edersiniz? Gizli bir ilk görüşme planlayın.", consultation: "Ücretsiz ilk görüşme", consultationSubject: "Ücretsiz ilk görüşme talebi", phone: "Telefon", email: "E-posta" },
    portfolio: {
      seoTitle: "Portföy – Aurelia Grundbesitz GmbH", heroKicker: "Portföy", heroTitle: "Güncel gayrimenkuller", heroDescription: "Düsseldorf ve çevresinde özenle incelenmiş gayrimenkuller.", heroAlt: "Aurelia gayrimenkul portföyü",
      introTitle: "Düzenli olarak yenilenen seçenekler", introText: "Aurelia, Düsseldorf ve çevresinde özenle incelenmiş gayrimenkullerden oluşan ve düzenli olarak yenilenen bir portföye sahiptir. Portföyümüz gizlilik içinde yönetildiği ve sürekli değiştiği için somut gayrimenkulleri yalnızca doğrudan talep üzerine sunuyoruz.",
      categoriesTitle: "Gayrimenkul kategorileri", categoriesIntro: "Portföyümüz farklı gayrimenkul türlerini kapsar; güncel seçenekler değişebilir.",
      categories: [
        { title: "Kat mülkiyetli daireler", description: "Bağımsız daireler ve çok katlı konut yapıları.", alt: "Balkonlu modern konut binası" },
        { title: "Müstakil evler", description: "Farklı yenileme durumlarındaki evler.", alt: "Müstakil ev" },
        { title: "Arsalar", description: "Geliştirme potansiyeli bulunan imarlı arsalar ve boş alanlar.", alt: "Bir arsanın havadan görünümü" },
        { title: "Ticari gayrimenkuller", description: "Perakende, ofis ve karma kullanımlı gayrimenkuller.", alt: "Bir ofis binasının dış görünümü" },
      ],
      regionTitle: "Pazarlarımız", regionText: "Almanya, ağırlıklı olarak Kuzey Ren-Vestfalya ve ayrıca Türkiye'deki gayrimenkuller ve arsalar. Cazip konumları, özel durumları ve gelişim ya da değer artışı potansiyeli taşıyan mülkleri değerlendiriyoruz.",
      ctaTitle: "Belirli gayrimenkuller hakkında bilgi alın", ctaText: "Aradığınız gayrimenkulü kısaca açıklayın; güncel portföyümüzde size uygun seçenekleri inceleyelim.", ctaButton: "Portföy hakkında bilgi alın",
    },
    accessibility: { chooseLetters: "Harf seçin", homeHeroAlt: "Gün ışığında, sakin bir sokakta bakımlı apartman", promisesAlt: "Dört taahhüdümüzü simgeleyen, aydınlık bir mekândaki dört mermer sütun" },
  },
  en: {
    imageCredits: { first: "All images used on this website were generated using artificial intelligence and are royalty-free. They were created specifically for Aurelia Grundbesitz GmbH and are used solely for illustrative purposes.", second: "We do not use third-party images that require payment or have an unclear licensing status. If you nevertheless believe that third-party rights may be affected, please contact us immediately.", contact: "Contact for enquiries" },
    contact: { availabilityShort: "Monday–Friday, including at short notice during ongoing proceedings", personalPrompt: "Prefer to speak in person? Arrange a confidential initial consultation.", consultation: "Free initial consultation", consultationSubject: "Request a free initial consultation", phone: "Phone", email: "Email" },
    portfolio: {
      seoTitle: "Portfolio – Aurelia Grundbesitz GmbH", heroKicker: "Portfolio", heroTitle: "Current properties", heroDescription: "Quality-reviewed properties in Düsseldorf and the surrounding area.", heroAlt: "Aurelia property portfolio",
      introTitle: "A selection that changes regularly", introText: "Aurelia maintains a regularly changing portfolio of quality-reviewed properties in Düsseldorf and the surrounding area. As our portfolio is managed confidentially and changes continuously, we present specific properties only upon direct enquiry.", categoriesTitle: "Property categories", categoriesIntro: "Our portfolio covers various asset classes; availability varies.",
      categories: [{ title: "Condominiums", description: "Individual units and multi-storey residential buildings.", alt: "Modern residential building with balconies" }, { title: "Detached houses", description: "Properties in various states of renovation.", alt: "Detached family home" }, { title: "Land", description: "Building plots and vacant land with development potential.", alt: "Aerial view of a building plot" }, { title: "Commercial properties", description: "Retail, office and mixed-use properties.", alt: "Exterior view of an office building" }],
      regionTitle: "Our markets", regionText: "Germany with a focus on North Rhine-Westphalia, as well as properties and land in Turkey. We review attractive locations, special situations and properties with development or value-appreciation potential.", ctaTitle: "Enquire about specific properties", ctaText: "Briefly tell us what you are looking for, and we will review which properties in our current portfolio may be suitable for you.", ctaButton: "Enquire about our portfolio",
    },
    accessibility: { chooseLetters: "Choose a letter", homeHeroAlt: "Well-maintained apartment building on a quiet residential street in daylight", promisesAlt: "Four marble columns in a light-filled room symbolising our four commitments" },
  },
  nl: {
    imageCredits: { first: "Alle afbeeldingen op deze website zijn met kunstmatige intelligentie gegenereerd en rechtenvrij. Ze zijn speciaal voor Aurelia Grundbesitz GmbH gemaakt en dienen uitsluitend ter illustratie.", second: "Wij gebruiken geen afbeeldingen van derden waarvoor betaald moet worden of waarvan de licentiestatus onduidelijk is. Denkt u desondanks dat rechten van derden mogelijk zijn geraakt, neem dan onmiddellijk contact met ons op.", contact: "Contact bij vragen" },
    contact: { availabilityShort: "Maandag–vrijdag, ook op korte termijn bij lopende procedures", personalPrompt: "Liever persoonlijk contact? Plan een vertrouwelijk eerste gesprek.", consultation: "Gratis eerste gesprek", consultationSubject: "Gratis eerste gesprek aanvragen", phone: "Telefoon", email: "E-mail" },
    portfolio: {
      seoTitle: "Portefeuille – Aurelia Grundbesitz GmbH", heroKicker: "Portefeuille", heroTitle: "Actueel vastgoed", heroDescription: "Op kwaliteit beoordeeld vastgoed in Düsseldorf en omgeving.", heroAlt: "Vastgoedportefeuille van Aurelia",
      introTitle: "Regelmatig wisselend aanbod", introText: "Aurelia beschikt over een regelmatig wisselende portefeuille van op kwaliteit beoordeeld vastgoed in Düsseldorf en omgeving. Omdat ons aanbod vertrouwelijk wordt beheerd en voortdurend verandert, presenteren wij concrete objecten uitsluitend op directe aanvraag.", categoriesTitle: "Vastgoedcategorieën", categoriesIntro: "Onze portefeuille omvat diverse vastgoedklassen; de beschikbaarheid varieert.",
      categories: [{ title: "Appartementen", description: "Afzonderlijke woningen en meerlaagse woongebouwen.", alt: "Modern woongebouw met balkons" }, { title: "Eengezinswoningen", description: "Woningen in verschillende renovatiestaten.", alt: "Vrijstaande eengezinswoning" }, { title: "Percelen", description: "Bouwgrond en vrije terreinen met ontwikkelingspotentieel.", alt: "Luchtfoto van een bouwperceel" }, { title: "Commercieel vastgoed", description: "Winkels, kantoren en gemengd gebruik.", alt: "Buitenzijde van een kantoorgebouw" }],
      regionTitle: "Onze markten", regionText: "Duitsland met een zwaartepunt in Noordrijn-Westfalen, evenals vastgoed en grondpercelen in Turkije. Wij beoordelen aantrekkelijke locaties, bijzondere uitgangssituaties en objecten met ontwikkelings- of waardestijgingspotentieel.", ctaTitle: "Vraag naar concrete objecten", ctaText: "Vertel ons kort wat u zoekt; wij bekijken welke objecten uit onze actuele portefeuille bij u passen.", ctaButton: "Portefeuille aanvragen",
    },
    accessibility: { chooseLetters: "Kies een letter", homeHeroAlt: "Goed onderhouden appartementencomplex in een rustige woonstraat bij daglicht", promisesAlt: "Vier marmeren zuilen in een lichte ruimte als symbool voor onze vier beloften" },
  },
  it: {
    imageCredits: { first: "Tutte le immagini utilizzate su questo sito sono state generate con l'intelligenza artificiale e sono esenti da diritti di licenza. Sono state create appositamente per Aurelia Grundbesitz GmbH e sono utilizzate esclusivamente a scopo illustrativo.", second: "Non utilizziamo immagini di terzi a pagamento o con una situazione di licenza incerta. Qualora ritenesse comunque che possano essere stati lesi diritti di terzi, la preghiamo di contattarci immediatamente.", contact: "Contatti per informazioni" },
    contact: { availabilityShort: "Dal lunedì al venerdì, anche con breve preavviso per procedure in corso", personalPrompt: "Preferisce un contatto personale? Fissi un primo colloquio riservato.", consultation: "Primo colloquio gratuito", consultationSubject: "Richiesta di primo colloquio gratuito", phone: "Telefono", email: "E-mail" },
    portfolio: {
      seoTitle: "Portafoglio – Aurelia Grundbesitz GmbH", heroKicker: "Portafoglio", heroTitle: "Immobili attuali", heroDescription: "Immobili selezionati e verificati a Düsseldorf e dintorni.", heroAlt: "Portafoglio immobiliare Aurelia",
      introTitle: "Una selezione in costante aggiornamento", introText: "Aurelia dispone di un portafoglio in costante aggiornamento di immobili selezionati e verificati a Düsseldorf e dintorni. Poiché il nostro patrimonio viene gestito in modo riservato e cambia continuamente, presentiamo immobili specifici esclusivamente su richiesta diretta.", categoriesTitle: "Categorie di immobili", categoriesIntro: "Il nostro portafoglio comprende diverse classi di immobili; la disponibilità varia.",
      categories: [{ title: "Appartamenti di proprietà", description: "Singole unità e complessi residenziali multipiano.", alt: "Edificio residenziale moderno con balconi" }, { title: "Case unifamiliari", description: "Immobili in diversi stati di ristrutturazione.", alt: "Casa unifamiliare indipendente" }, { title: "Terreni", description: "Terreni edificabili e aree libere con potenziale di sviluppo.", alt: "Veduta aerea di un terreno edificabile" }, { title: "Immobili commerciali", description: "Negozi, uffici e immobili a uso misto.", alt: "Vista esterna di un edificio per uffici" }],
      regionTitle: "I nostri mercati", regionText: "Germania con focus sulla Renania Settentrionale-Vestfalia, nonché immobili e terreni in Turchia. Valutiamo località interessanti, situazioni particolari e immobili con potenziale di sviluppo o di rivalutazione.", ctaTitle: "Richieda informazioni su immobili specifici", ctaText: "Ci descriva brevemente ciò che cerca: verificheremo quali immobili del nostro portafoglio attuale possono essere adatti alle sue esigenze.", ctaButton: "Richiedi il portafoglio",
    },
    accessibility: { chooseLetters: "Scegli una lettera", homeHeroAlt: "Edificio residenziale ben tenuto in una tranquilla strada di giorno", promisesAlt: "Quattro colonne di marmo in un ambiente luminoso, simbolo dei nostri quattro impegni" },
  },
  es: {
    imageCredits: { first: "Todas las imágenes utilizadas en este sitio web han sido generadas mediante inteligencia artificial y están libres de derechos de licencia. Se crearon específicamente para Aurelia Grundbesitz GmbH y se utilizan únicamente con fines ilustrativos.", second: "No utilizamos imágenes de terceros de pago o cuya situación de licencia sea incierta. Si, pese a ello, considera que podrían verse afectados derechos de terceros, le rogamos que se ponga en contacto con nosotros de inmediato.", contact: "Contacto para consultas" },
    contact: { availabilityShort: "De lunes a viernes, también con poca antelación en procedimientos en curso", personalPrompt: "¿Prefiere hablar personalmente? Concierte una primera consulta confidencial.", consultation: "Primera consulta gratuita", consultationSubject: "Solicitar una primera consulta gratuita", phone: "Teléfono", email: "Correo electrónico" },
    portfolio: {
      seoTitle: "Cartera – Aurelia Grundbesitz GmbH", heroKicker: "Cartera", heroTitle: "Inmuebles actuales", heroDescription: "Inmuebles revisados en Düsseldorf y sus alrededores.", heroAlt: "Cartera inmobiliaria de Aurelia",
      introTitle: "Una selección que se actualiza regularmente", introText: "Aurelia cuenta con una cartera en constante actualización de inmuebles revisados en Düsseldorf y sus alrededores. Como gestionamos nuestra cartera de forma confidencial y cambia continuamente, presentamos inmuebles concretos únicamente previa consulta directa.", categoriesTitle: "Categorías de inmuebles", categoriesIntro: "Nuestra cartera abarca distintas clases de activos; la disponibilidad puede variar.",
      categories: [{ title: "Viviendas en propiedad", description: "Unidades individuales y edificios residenciales de varias plantas.", alt: "Edificio residencial moderno con balcones" }, { title: "Viviendas unifamiliares", description: "Inmuebles en distintos estados de renovación.", alt: "Vivienda unifamiliar independiente" }, { title: "Terrenos", description: "Solares y terrenos libres con potencial de desarrollo.", alt: "Vista aérea de un solar" }, { title: "Inmuebles comerciales", description: "Locales, oficinas e inmuebles de uso mixto.", alt: "Vista exterior de un edificio de oficinas" }],
      regionTitle: "Nuestros mercados", regionText: "Alemania con especial atención a Renania del Norte-Westfalia, así como inmuebles y terrenos en Turquía. Analizamos ubicaciones atractivas, situaciones especiales e inmuebles con potencial de desarrollo o de revalorización.", ctaTitle: "Consulte inmuebles concretos", ctaText: "Descríbanos brevemente qué busca y comprobaremos qué inmuebles de nuestra cartera actual pueden ajustarse a sus necesidades.", ctaButton: "Consultar la cartera",
    },
    accessibility: { chooseLetters: "Elegir una letra", homeHeroAlt: "Edificio residencial bien cuidado en una calle tranquila a la luz del día", promisesAlt: "Cuatro columnas de mármol en un espacio luminoso como símbolo de nuestros cuatro compromisos" },
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
    },
    portfolio: {
      seoTitle: "Portefeuille – Aurelia Grundbesitz GmbH", heroKicker: "Portefeuille", heroTitle: "Biens immobiliers actuels", heroDescription: "Des biens contrôlés en termes de qualité à Düsseldorf et ses environs.", heroAlt: "Portefeuille immobilier Aurelia",
      introTitle: "Une sélection qui évolue régulièrement", introText: "Aurelia dispose d'un portefeuille en constante évolution de biens contrôlés en termes de qualité à Düsseldorf et ses environs. Notre portefeuille étant géré de manière confidentielle et évoluant continuellement, nous ne présentons des biens concrets que sur demande directe.",
      categoriesTitle: "Catégories de biens", categoriesIntro: "Notre portefeuille couvre différentes classes d'actifs ; la disponibilité varie.",
      categories: [
        { title: "Appartements en copropriété", description: "Unités individuelles et immeubles résidentiels à plusieurs étages.", alt: "Immeuble résidentiel moderne avec balcons" },
        { title: "Maisons individuelles", description: "Biens à différents états de rénovation.", alt: "Maison individuelle indépendante" },
        { title: "Terrains", description: "Terrains constructibles et surfaces libres à fort potentiel de développement.", alt: "Vue aérienne d'un terrain constructible" },
        { title: "Immobilier commercial", description: "Commerces, bureaux et usages mixtes.", alt: "Vue extérieure d'un immeuble de bureaux" },
      ],
      regionTitle: "Nos marchés", regionText: "L'Allemagne, avec une priorité sur la Rhénanie-du-Nord-Westphalie, ainsi que des biens immobiliers et des terrains en Turquie. Nous étudions les emplacements attractifs, les situations particulières et les biens présentant un potentiel de développement ou de valorisation.",
      ctaTitle: "Demander des biens concrets", ctaText: "Décrivez-nous brièvement ce que vous recherchez — nous examinerons quels biens de notre portefeuille actuel pourraient vous convenir.", ctaButton: "Demander le portefeuille",
    },
    accessibility: { chooseLetters: "Choisir une lettre", homeHeroAlt: "Rue résidentielle calme avec un immeuble bien entretenu en plein jour", promisesAlt: "Quatre colonnes de marbre dans une pièce baignée de lumière, symbole de nos quatre engagements" },
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