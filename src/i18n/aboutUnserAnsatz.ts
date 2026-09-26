export type UnserAnsatzContent = {
  headline: string;
  body: string[];
  imageAlt: string;
  cards: { title: string; text: string }[];
};

export const aboutUnserAnsatz: Record<string, UnserAnsatzContent> = {
  de: {
    headline: "Unser Ansatz",
    body: [
      "Aurelia Grundbesitz verbindet den direkten Immobilienankauf mit persönlicher Zusammenarbeit und klaren Entscheidungswegen.",
      "Wir erwerben ausgewählte Immobilien auf eigene Rechnung und entwickeln unseren eigenen Bestand. Je nach Objekt arbeiten wir dabei mit erfahrenen Fachleuten und verlässlichen Partnern zusammen.",
      "So können wir Entscheidungen direkt treffen, Zuständigkeiten klar halten und für jede Immobilie einen passenden Weg von der Prüfung bis zur weiteren Entwicklung finden.",
    ],
    imageAlt: "Mehrere Hände liegen übereinander als Symbol für Zusammenarbeit und ein verlässliches Netzwerk",
    cards: [
      { title: "Eigener Bestand", text: "Wir investieren in ausgewählte Immobilien auf eigene Rechnung." },
      { title: "Verlässliches Netzwerk", text: "Je nach Projekt arbeiten wir mit erfahrenen Fachleuten und Partnern zusammen." },
      { title: "Direkte Entscheidungen", text: "Kurze Entscheidungswege ermöglichen eine klare und zügige Abstimmung." },
      { title: "Individuelles Vorgehen", text: "Jede Immobilie wird anhand ihrer konkreten Situation betrachtet." },
    ],
  },
  tr: {
    headline: "Yaklaşımımız",
    body: [
      "Aurelia Grundbesitz, doğrudan gayrimenkul alımını kişisel iş birliği ve net karar süreçleriyle birleştirir.",
      "Seçili gayrimenkulleri kendi hesabımıza satın alır ve kendi portföyümüzü geliştiririz. Mülke göre deneyimli uzmanlar ve güvenilir iş ortaklarıyla birlikte çalışırız.",
      "Böylece kararları doğrudan verebilir, sorumlulukları net tutabilir ve her gayrimenkul için incelemeden sonraki gelişime kadar uygun bir yol bulabiliriz.",
    ],
    imageAlt: "İş birliği ve güvenilir bir ağın sembolü olarak üst üste konmuş eller",
    cards: [
      { title: "Kendi portföyümüz", text: "Seçili gayrimenkullere kendi hesabımıza yatırım yaparız." },
      { title: "Güvenilir ağ", text: "Projeye göre deneyimli uzmanlar ve iş ortaklarıyla birlikte çalışırız." },
      { title: "Doğrudan kararlar", text: "Kısa karar yolları net ve hızlı bir koordinasyon sağlar." },
      { title: "Bireysel yaklaşım", text: "Her gayrimenkul kendi somut durumuna göre değerlendirilir." },
    ],
  },
  en: {
    headline: "Our approach",
    body: [
      "Aurelia Grundbesitz combines direct property acquisition with personal cooperation and clear decision-making.",
      "We acquire selected properties for our own account and develop our own portfolio. Depending on the property, we work with experienced specialists and reliable partners.",
      "This allows us to make decisions directly, keep responsibilities clear and find the right path for each property, from assessment to further development.",
    ],
    imageAlt: "Several hands stacked on top of each other as a symbol of cooperation and a reliable network",
    cards: [
      { title: "Own portfolio", text: "We invest in selected properties for our own account." },
      { title: "Reliable network", text: "Depending on the project, we work with experienced specialists and partners." },
      { title: "Direct decisions", text: "Short decision paths allow clear and swift coordination." },
      { title: "Individual approach", text: "Each property is considered on the basis of its specific situation." },
    ],
  },
  nl: {
    headline: "Onze aanpak",
    body: [
      "Aurelia Grundbesitz combineert de directe aankoop van vastgoed met persoonlijke samenwerking en heldere beslislijnen.",
      "Wij verwerven geselecteerd vastgoed voor eigen rekening en ontwikkelen onze eigen portefeuille. Afhankelijk van het object werken wij daarbij samen met ervaren vakmensen en betrouwbare partners.",
      "Zo kunnen wij direct beslissen, verantwoordelijkheden helder houden en voor elk object een passende weg vinden, van de beoordeling tot de verdere ontwikkeling.",
    ],
    imageAlt: "Meerdere handen op elkaar als symbool voor samenwerking en een betrouwbaar netwerk",
    cards: [
      { title: "Eigen portefeuille", text: "Wij investeren voor eigen rekening in geselecteerd vastgoed." },
      { title: "Betrouwbaar netwerk", text: "Afhankelijk van het project werken wij samen met ervaren vakmensen en partners." },
      { title: "Directe beslissingen", text: "Korte beslislijnen maken een heldere en vlotte afstemming mogelijk." },
      { title: "Individuele aanpak", text: "Elk object wordt bekeken op basis van de concrete situatie." },
    ],
  },
  it: {
    headline: "Il nostro approccio",
    body: [
      "Aurelia Grundbesitz unisce l'acquisto diretto di immobili a una collaborazione personale e a processi decisionali chiari.",
      "Acquistiamo immobili selezionati per conto proprio e sviluppiamo il nostro patrimonio. A seconda dell'immobile collaboriamo con professionisti esperti e partner affidabili.",
      "Così possiamo decidere direttamente, mantenere chiare le responsabilità e trovare per ogni immobile il percorso adatto, dalla valutazione allo sviluppo successivo.",
    ],
    imageAlt: "Più mani sovrapposte come simbolo di collaborazione e di una rete affidabile",
    cards: [
      { title: "Patrimonio proprio", text: "Investiamo in immobili selezionati per conto proprio." },
      { title: "Rete affidabile", text: "A seconda del progetto collaboriamo con professionisti e partner esperti." },
      { title: "Decisioni dirette", text: "Processi decisionali brevi consentono un coordinamento chiaro e rapido." },
      { title: "Approccio individuale", text: "Ogni immobile viene valutato in base alla sua situazione concreta." },
    ],
  },
  es: {
    headline: "Nuestro enfoque",
    body: [
      "Aurelia Grundbesitz combina la adquisición directa de inmuebles con una colaboración personal y procesos de decisión claros.",
      "Adquirimos inmuebles seleccionados por cuenta propia y desarrollamos nuestra propia cartera. Según el inmueble, trabajamos con profesionales experimentados y socios de confianza.",
      "Así podemos decidir de forma directa, mantener claras las responsabilidades y encontrar para cada inmueble el camino adecuado, desde el análisis hasta su desarrollo posterior.",
    ],
    imageAlt: "Varias manos superpuestas como símbolo de colaboración y de una red de confianza",
    cards: [
      { title: "Cartera propia", text: "Invertimos en inmuebles seleccionados por cuenta propia." },
      { title: "Red de confianza", text: "Según el proyecto, trabajamos con profesionales y socios experimentados." },
      { title: "Decisiones directas", text: "Los procesos de decisión cortos permiten una coordinación clara y ágil." },
      { title: "Enfoque individual", text: "Cada inmueble se analiza según su situación concreta." },
    ],
  },
  fr: {
    headline: "Notre approche",
    body: [
      "Aurelia Grundbesitz associe l'acquisition immobilière directe à une collaboration personnelle et à des circuits de décision clairs.",
      "Nous acquérons des biens sélectionnés pour notre propre compte et développons notre propre patrimoine. Selon le bien, nous travaillons avec des spécialistes expérimentés et des partenaires fiables.",
      "Nous pouvons ainsi décider directement, garder des responsabilités claires et trouver pour chaque bien la voie adaptée, de l'analyse jusqu'à son développement.",
    ],
    imageAlt: "Plusieurs mains superposées, symbole de collaboration et d'un réseau fiable",
    cards: [
      { title: "Patrimoine propre", text: "Nous investissons dans des biens sélectionnés pour notre propre compte." },
      { title: "Réseau fiable", text: "Selon le projet, nous travaillons avec des spécialistes et des partenaires expérimentés." },
      { title: "Décisions directes", text: "Des circuits de décision courts permettent une coordination claire et rapide." },
      { title: "Approche individuelle", text: "Chaque bien est examiné selon sa situation concrète." },
    ],
  },
};

export const getUnserAnsatz = (lang: string) => aboutUnserAnsatz[lang] ?? aboutUnserAnsatz.de;
