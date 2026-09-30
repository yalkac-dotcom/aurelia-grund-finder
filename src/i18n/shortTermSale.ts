import type { Language } from "./translations";

// Kurzfristiger Immobilienverkauf – Deutsch ist Master, übrige Sprachen sinngemäß.
export interface ShortTermSaleCopy {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  intro: string;
  points: { title: string; text: string }[];
  note: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  // Hinweisblock unter dem Formular „Immobilie anbieten“
  blockQuestion: string;
  blockText: string;
  blockButton: string;
  // Zusatzsatz in der Einleitung von „Immobilie anbieten“
  offerIntroStory: string;
}

export const shortTermSaleCopy: Record<Language, ShortTermSaleCopy> = {
  de: {
    seoTitle: "Kurzfristiger Immobilienverkauf | Aurelia Grundbesitz",
    seoDescription: "Kurzfristiger Verkauf oder besondere Situation? Aurelia prüft persönlich und vertraulich, ob ein beschleunigter Direktankauf auf eigene Rechnung möglich ist – in Deutschland und der Türkei.",
    kicker: "Wenn Zeit entscheidend ist",
    title: "Kurzfristiger Immobilienverkauf",
    intro: "Manchmal soll ein Verkauf zügiger erfolgen als geplant – etwa bei einer beruflichen oder privaten Veränderung, einer Erbschaft oder einer besonderen Ausgangssituation. Aurelia prüft in diesen Fällen, ob ein beschleunigter Direktankauf auf eigene Rechnung möglich ist.",
    points: [
      { title: "Persönliche Prüfung", text: "Wir sehen uns Lage, Zustand und die vorhandenen Unterlagen Ihrer Immobilie an und geben Ihnen eine erste persönliche Einschätzung." },
      { title: "Direkt und auf eigene Rechnung", text: "Kommt ein Ankauf infrage, erwirbt Aurelia die Immobilie selbst auf eigene Rechnung – eine öffentliche Vermarktung durch Aurelia ist dafür nicht erforderlich." },
      { title: "Auch besondere Ausgangssituationen", text: "Auch Immobilien mit Renovierungsbedarf, Entwicklungspotenzial oder einer besonderen Ausgangssituation können interessant sein." },
    ],
    note: "Wir prüfen Immobilien in Deutschland und in der Türkei. Ob ein Ankauf zustande kommt und wie lange die Abwicklung dauert, hängt immer vom Einzelfall ab – eine Zusage können wir vor der Prüfung nicht geben.",
    ctaTitle: "Ihre Immobilie prüfen lassen",
    ctaText: "Teilen Sie uns die wichtigsten Angaben zu Ihrer Immobilie mit. Wir melden uns persönlich und vertraulich bei Ihnen.",
    ctaButton: "Immobilie anbieten",
    blockQuestion: "Kurzfristiger Verkauf oder besondere Situation?",
    blockText: "Wir prüfen, ob ein beschleunigter Direktankauf durch Aurelia möglich ist.",
    blockButton: "Mehr zum kurzfristigen Immobilienverkauf",
    offerIntroStory: "Jede Immobilie hat ihre eigene Geschichte. Deshalb beginnt unser möglicher Ankauf mit einer persönlichen und vertraulichen Prüfung.",
  },
  tr: {
    seoTitle: "Kısa Sürede Gayrimenkul Satışı | Aurelia Grundbesitz",
    seoDescription: "Kısa sürede satış mı, yoksa özel bir durum mu? Aurelia, kendi hesabına hızlandırılmış doğrudan satın alımın mümkün olup olmadığını kişisel ve gizli olarak inceler – Almanya ve Türkiye'de.",
    kicker: "Zamanın önemli olduğu durumlarda",
    title: "Kısa sürede gayrimenkul satışı",
    intro: "Bazen bir satışın planlanandan daha hızlı gerçekleşmesi gerekir – örneğin mesleki veya özel bir değişiklik, bir miras ya da özel bir başlangıç durumu nedeniyle. Aurelia bu durumlarda kendi hesabına hızlandırılmış doğrudan satın alımın mümkün olup olmadığını inceler.",
    points: [
      { title: "Kişisel inceleme", text: "Gayrimenkulünüzün konumunu, durumunu ve mevcut belgelerini inceler ve size kişisel bir ilk değerlendirme sunarız." },
      { title: "Doğrudan ve kendi hesabına", text: "Satın alım söz konusu olursa, Aurelia gayrimenkulü kendi hesabına kendisi satın alır – bunun için Aurelia tarafından kamuya açık bir pazarlama gerekmez." },
      { title: "Özel başlangıç durumları da", text: "Tadilat ihtiyacı, gelişim potansiyeli veya özel bir başlangıç durumu olan gayrimenkuller de ilgi çekici olabilir." },
    ],
    note: "Almanya ve Türkiye'deki gayrimenkulleri inceliyoruz. Bir satın alımın gerçekleşip gerçekleşmeyeceği ve sürecin ne kadar süreceği her zaman somut duruma bağlıdır – inceleme öncesinde bir taahhütte bulunamayız.",
    ctaTitle: "Gayrimenkulünüzü inceletin",
    ctaText: "Gayrimenkulünüzle ilgili en önemli bilgileri bizimle paylaşın. Sizinle kişisel ve gizli olarak iletişime geçeriz.",
    ctaButton: "Gayrimenkul sunun",
    blockQuestion: "Kısa sürede satış mı, yoksa özel bir durum mu?",
    blockText: "Aurelia tarafından hızlandırılmış doğrudan satın alımın mümkün olup olmadığını inceleriz.",
    blockButton: "Kısa sürede gayrimenkul satışı hakkında daha fazla bilgi",
    offerIntroStory: "Her gayrimenkulün kendine ait bir hikâyesi vardır. Bu nedenle olası satın alımımız kişisel ve gizli bir incelemeyle başlar.",
  },
  en: {
    seoTitle: "Short-Term Property Sale | Aurelia Grundbesitz",
    seoDescription: "A short-term sale or a special situation? Aurelia assesses personally and confidentially whether an accelerated direct purchase for its own account is possible – in Germany and Turkey.",
    kicker: "When time matters",
    title: "Short-term property sale",
    intro: "Sometimes a sale needs to happen sooner than planned – for example due to a professional or personal change, an inheritance or a special initial situation. In such cases, Aurelia assesses whether an accelerated direct purchase for its own account is possible.",
    points: [
      { title: "Personal assessment", text: "We look at the location, condition and available documents of your property and give you an initial personal assessment." },
      { title: "Direct and for our own account", text: "If a purchase is an option, Aurelia acquires the property itself for its own account – public marketing by Aurelia is not required for this." },
      { title: "Special situations, too", text: "Properties in need of renovation, with development potential or in a special initial situation can also be of interest." },
    ],
    note: "We assess properties in Germany and Turkey. Whether a purchase takes place and how long the process takes always depends on the individual case – we cannot make any commitment before the assessment.",
    ctaTitle: "Have your property assessed",
    ctaText: "Share the key details of your property with us. We will get back to you personally and confidentially.",
    ctaButton: "Offer a property",
    blockQuestion: "A short-term sale or a special situation?",
    blockText: "We assess whether an accelerated direct purchase by Aurelia is possible.",
    blockButton: "More about short-term property sales",
    offerIntroStory: "Every property has its own story. That is why our potential purchase begins with a personal and confidential assessment.",
  },
  nl: {
    seoTitle: "Vastgoed op korte termijn verkopen | Aurelia Grundbesitz",
    seoDescription: "Verkoop op korte termijn of een bijzondere situatie? Aurelia beoordeelt persoonlijk en vertrouwelijk of een versnelde rechtstreekse aankoop voor eigen rekening mogelijk is – in Duitsland en Turkije.",
    kicker: "Wanneer tijd telt",
    title: "Vastgoed op korte termijn verkopen",
    intro: "Soms moet een verkoop sneller plaatsvinden dan gepland – bijvoorbeeld door een zakelijke of persoonlijke verandering, een erfenis of een bijzondere uitgangssituatie. Aurelia beoordeelt in zulke gevallen of een versnelde rechtstreekse aankoop voor eigen rekening mogelijk is.",
    points: [
      { title: "Persoonlijke beoordeling", text: "Wij bekijken de ligging, de staat en de beschikbare documenten van uw vastgoed en geven u een eerste persoonlijke inschatting." },
      { title: "Rechtstreeks en voor eigen rekening", text: "Komt een aankoop in aanmerking, dan verwerft Aurelia het vastgoed zelf voor eigen rekening – openbare verkoop via Aurelia is daarvoor niet nodig." },
      { title: "Ook bijzondere uitgangssituaties", text: "Ook vastgoed met renovatiebehoefte, ontwikkelpotentieel of een bijzondere uitgangssituatie kan interessant zijn." },
    ],
    note: "Wij beoordelen vastgoed in Duitsland en Turkije. Of een aankoop tot stand komt en hoe lang de afwikkeling duurt, hangt altijd af van het individuele geval – vóór de beoordeling kunnen wij geen toezegging doen.",
    ctaTitle: "Laat uw vastgoed beoordelen",
    ctaText: "Deel de belangrijkste gegevens over uw vastgoed met ons. Wij nemen persoonlijk en vertrouwelijk contact met u op.",
    ctaButton: "Vastgoed aanbieden",
    blockQuestion: "Verkoop op korte termijn of een bijzondere situatie?",
    blockText: "Wij beoordelen of een versnelde rechtstreekse aankoop door Aurelia mogelijk is.",
    blockButton: "Meer over vastgoed op korte termijn verkopen",
    offerIntroStory: "Elk vastgoed heeft zijn eigen verhaal. Daarom begint onze mogelijke aankoop met een persoonlijke en vertrouwelijke beoordeling.",
  },
  it: {
    seoTitle: "Vendita immobiliare a breve termine | Aurelia Grundbesitz",
    seoDescription: "Vendita a breve termine o una situazione particolare? Aurelia verifica in modo personale e riservato se è possibile un acquisto diretto accelerato per conto proprio – in Germania e in Turchia.",
    kicker: "Quando il tempo è decisivo",
    title: "Vendita immobiliare a breve termine",
    intro: "A volte una vendita deve avvenire più rapidamente del previsto – ad esempio a causa di un cambiamento professionale o personale, di un'eredità o di una situazione iniziale particolare. In questi casi Aurelia verifica se è possibile un acquisto diretto accelerato per conto proprio.",
    points: [
      { title: "Verifica personale", text: "Esaminiamo posizione, stato e documenti disponibili del Suo immobile e Le forniamo una prima valutazione personale." },
      { title: "Diretto e per conto proprio", text: "Se un acquisto è possibile, Aurelia acquista l'immobile direttamente per conto proprio – non è necessaria una commercializzazione pubblica da parte di Aurelia." },
      { title: "Anche situazioni particolari", text: "Anche immobili da ristrutturare, con potenziale di sviluppo o in una situazione iniziale particolare possono essere interessanti." },
    ],
    note: "Verifichiamo immobili in Germania e in Turchia. Se un acquisto si concretizza e quanto dura la procedura dipende sempre dal singolo caso – prima della verifica non possiamo fornire alcun impegno.",
    ctaTitle: "Faccia verificare il Suo immobile",
    ctaText: "Ci comunichi i dati principali del Suo immobile. La ricontatteremo in modo personale e riservato.",
    ctaButton: "Proporre un immobile",
    blockQuestion: "Vendita a breve termine o una situazione particolare?",
    blockText: "Verifichiamo se è possibile un acquisto diretto accelerato da parte di Aurelia.",
    blockButton: "Maggiori informazioni sulla vendita a breve termine",
    offerIntroStory: "Ogni immobile ha la sua storia. Per questo il nostro possibile acquisto inizia con una verifica personale e riservata.",
  },
  es: {
    seoTitle: "Venta de inmuebles a corto plazo | Aurelia Grundbesitz",
    seoDescription: "¿Venta a corto plazo o una situación particular? Aurelia analiza de forma personal y confidencial si es posible una compra directa acelerada por cuenta propia, en Alemania y Turquía.",
    kicker: "Cuando el tiempo es decisivo",
    title: "Venta de inmuebles a corto plazo",
    intro: "A veces una venta debe realizarse antes de lo previsto, por ejemplo por un cambio profesional o personal, una herencia o una situación inicial particular. En estos casos, Aurelia analiza si es posible una compra directa acelerada por cuenta propia.",
    points: [
      { title: "Análisis personal", text: "Examinamos la ubicación, el estado y la documentación disponible de su inmueble y le ofrecemos una primera valoración personal." },
      { title: "Directo y por cuenta propia", text: "Si la compra es viable, Aurelia adquiere el inmueble por cuenta propia; para ello no es necesaria una comercialización pública por parte de Aurelia." },
      { title: "También situaciones particulares", text: "También pueden ser interesantes los inmuebles que necesitan reformas, con potencial de desarrollo o en una situación inicial particular." },
    ],
    note: "Analizamos inmuebles en Alemania y Turquía. Que se realice una compra y cuánto dure el proceso depende siempre de cada caso; antes del análisis no podemos asumir ningún compromiso.",
    ctaTitle: "Solicite el análisis de su inmueble",
    ctaText: "Compártanos los datos más importantes de su inmueble. Nos pondremos en contacto con usted de forma personal y confidencial.",
    ctaButton: "Ofrecer un inmueble",
    blockQuestion: "¿Venta a corto plazo o una situación particular?",
    blockText: "Analizamos si es posible una compra directa acelerada por parte de Aurelia.",
    blockButton: "Más sobre la venta de inmuebles a corto plazo",
    offerIntroStory: "Cada inmueble tiene su propia historia. Por eso, nuestra posible compra comienza con un análisis personal y confidencial.",
  },
  fr: {
    seoTitle: "Vente immobilière à court terme | Aurelia Grundbesitz",
    seoDescription: "Vente à court terme ou situation particulière ? Aurelia examine de manière personnelle et confidentielle si un achat direct accéléré pour son propre compte est possible – en Allemagne et en Turquie.",
    kicker: "Quand le temps compte",
    title: "Vente immobilière à court terme",
    intro: "Parfois, une vente doit intervenir plus rapidement que prévu – par exemple en raison d'un changement professionnel ou personnel, d'une succession ou d'une situation initiale particulière. Dans ces cas, Aurelia examine si un achat direct accéléré pour son propre compte est possible.",
    points: [
      { title: "Examen personnel", text: "Nous examinons l'emplacement, l'état et les documents disponibles de votre bien et vous donnons une première appréciation personnelle." },
      { title: "Direct et pour notre propre compte", text: "Si un achat est envisageable, Aurelia acquiert elle-même le bien pour son propre compte – une commercialisation publique par Aurelia n'est pas nécessaire." },
      { title: "Y compris les situations particulières", text: "Les biens nécessitant une rénovation, présentant un potentiel de développement ou se trouvant dans une situation initiale particulière peuvent également être intéressants." },
    ],
    note: "Nous examinons des biens en Allemagne et en Turquie. La réalisation d'un achat et la durée de la procédure dépendent toujours du cas particulier – nous ne pouvons prendre aucun engagement avant l'examen.",
    ctaTitle: "Faites examiner votre bien",
    ctaText: "Communiquez-nous les principales informations sur votre bien. Nous revenons vers vous de manière personnelle et confidentielle.",
    ctaButton: "Proposer un bien",
    blockQuestion: "Vente à court terme ou situation particulière ?",
    blockText: "Nous examinons si un achat direct accéléré par Aurelia est possible.",
    blockButton: "En savoir plus sur la vente à court terme",
    offerIntroStory: "Chaque bien a sa propre histoire. C'est pourquoi notre éventuel achat commence par un examen personnel et confidentiel.",
  },
};
