import type { Language } from "./types";

// Verkürzte Kaufinteresse-Variante auf „Unser Bestand“ – Abgleich ausschließlich
// mit dem eigenen aktuellen oder künftigen Aurelia-Bestand.

export type StockRequestCopy = {
  title: string;
  text: string;
  types: string;
  typeLabels: string[]; // 6 Arten, Reihenfolge wie buyerInterestCopy.de.typeOptions[0..5]
  region: string;
  wishes: string;
  submit: string;
};

export const stockRequestCopy: Record<Language, StockRequestCopy> = {
  de: {
    title: "Passende Immobilie aus unserem Bestand anfragen",
    text: "Nicht alle Immobilien aus unserem Bestand werden öffentlich auf unserer Website dargestellt. Teilen Sie uns mit, welche Art von Immobilie Sie suchen und welche Region für Sie interessant ist. Wenn wir ein passendes Objekt im Bestand haben, können wir Ihnen weitere Informationen dazu zukommen lassen.",
    types: "Immobilienart",
    typeLabels: ["Eigentumswohnung", "Einfamilienhaus", "Mehrfamilienhaus", "Grundstück", "Gewerbeimmobilie", "Lager & Logistik"],
    region: "Region / Ort",
    wishes: "Nachricht / besondere Wünsche",
    submit: "Passendes Angebot anfragen",
  },
  tr: {
    title: "Portföyümüzden uygun bir gayrimenkul talep edin",
    text: "Portföyümüzdeki tüm gayrimenkuller web sitemizde herkese açık olarak gösterilmez. Hangi tür gayrimenkul aradığınızı ve hangi bölgenin sizin için ilgi çekici olduğunu bize bildirin. Portföyümüzde uygun bir gayrimenkul varsa, size bu konuda daha fazla bilgi iletebiliriz.",
    types: "Gayrimenkul türü",
    typeLabels: ["Daire", "Müstakil ev", "Apartman / çok daireli bina", "Arsa", "Ticari gayrimenkul", "Depo ve lojistik"],
    region: "Bölge / Yer",
    wishes: "Mesaj / özel istekler",
    submit: "Uygun teklif talep edin",
  },
  en: {
    title: "Request a suitable property from our portfolio",
    text: "Not all properties in our portfolio are shown publicly on our website. Let us know what type of property you are looking for and which region interests you. If we have a suitable property in our portfolio, we can send you further information about it.",
    types: "Property type",
    typeLabels: ["Apartment", "Single-family house", "Multi-family house", "Plot of land", "Commercial property", "Warehouse & logistics"],
    region: "Region / location",
    wishes: "Message / special requirements",
    submit: "Request a suitable offer",
  },
  nl: {
    title: "Passend vastgoed uit onze portefeuille aanvragen",
    text: "Niet al het vastgoed uit onze portefeuille wordt openbaar op onze website getoond. Laat ons weten welk type vastgoed u zoekt en welke regio u interesseert. Hebben wij een passend object in portefeuille, dan kunnen wij u daarover meer informatie toesturen.",
    types: "Type vastgoed",
    typeLabels: ["Appartement", "Eengezinswoning", "Meergezinswoning", "Grond / perceel", "Bedrijfsvastgoed", "Opslag & logistiek"],
    region: "Regio / plaats",
    wishes: "Bericht / bijzondere wensen",
    submit: "Passend aanbod aanvragen",
  },
  it: {
    title: "Richiedere un immobile adatto dal nostro patrimonio",
    text: "Non tutti gli immobili del nostro patrimonio vengono presentati pubblicamente sul nostro sito. Ci indichi quale tipo di immobile cerca e quale regione le interessa. Se disponiamo di un immobile adatto nel nostro patrimonio, possiamo inviarle ulteriori informazioni.",
    types: "Tipologia di immobile",
    typeLabels: ["Appartamento", "Casa unifamiliare", "Edificio plurifamiliare", "Terreno", "Immobile commerciale", "Magazzino e logistica"],
    region: "Regione / località",
    wishes: "Messaggio / esigenze particolari",
    submit: "Richiedere un'offerta adatta",
  },
  es: {
    title: "Solicitar un inmueble adecuado de nuestra cartera",
    text: "No todos los inmuebles de nuestra cartera se muestran públicamente en nuestra web. Indíquenos qué tipo de inmueble busca y qué región le interesa. Si tenemos un inmueble adecuado en cartera, podemos enviarle más información al respecto.",
    types: "Tipo de inmueble",
    typeLabels: ["Piso", "Vivienda unifamiliar", "Edificio plurifamiliar", "Terreno / solar", "Inmueble comercial", "Almacén y logística"],
    region: "Región / localidad",
    wishes: "Mensaje / deseos especiales",
    submit: "Solicitar oferta adecuada",
  },
  fr: {
    title: "Demander un bien adapté de notre portefeuille",
    text: "Tous les biens de notre portefeuille ne sont pas présentés publiquement sur notre site. Indiquez-nous quel type de bien vous recherchez et quelle région vous intéresse. Si nous disposons d'un bien adapté dans notre portefeuille, nous pourrons vous transmettre de plus amples informations.",
    types: "Type de bien",
    typeLabels: ["Appartement", "Maison individuelle", "Immeuble collectif", "Terrain", "Bien commercial", "Entrepôt & logistique"],
    region: "Région / lieu",
    wishes: "Message / souhaits particuliers",
    submit: "Demander une offre adaptée",
  },
};
