import type { Language, Translations } from "./types";

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

// Deutsche Fassung der Seite „Immobilienverkauf in der Türkei" – gilt ausschließlich für DE.
export const turkeyPageDe: Partial<Record<Language, DeepPartial<Translations>>> = {
  de: {
    turkeyProperties: {
      hero: {
        title: "Immobilien in der Türkei – und Eigentümer, die in der Türkei leben.",
        subtitle:
          "Aurelia prüft ausgewählte Immobilien in der Türkei für einen möglichen Erwerb auf eigene Rechnung. Und wer in der Türkei lebt, kann uns auch eine Immobilie in Deutschland zum möglichen Ankauf anbieten.",
        primaryCta: "Immobilie zum Ankauf anbieten",
        secondaryCta: "Ablauf kennenlernen",
      },
      servicesTitle: "Was bei einer Immobilie in der Türkei wichtig ist.",
      servicesIntro: "",
      services: [
        { title: "Entfernung und Termine", text: "Wer nicht vor Ort lebt, kann nicht jeden Termin persönlich wahrnehmen. Viele Schritte lassen sich je nach Einzelfall aus der Ferne vorbereiten und abstimmen. Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, hängt vom jeweiligen Fall ab." },
        { title: "Unterschiedliche Abläufe", text: "Grundbuch, Vollmachten und weitere Formalitäten unterscheiden sich teilweise von den in Deutschland bekannten Abläufen. Wir erklären Ihnen verständlich, welche Angaben und Unterlagen wir für unsere Prüfung benötigen. Eine Rechts- oder Steuerberatung bieten wir nicht an." },
        { title: "Prüfung auf eigene Rechnung", text: "Wir prüfen Lage, Zustand und die vorhandenen Unterlagen der Immobilie. Anschließend teilen wir Ihnen offen mit, ob ein Erwerb durch Aurelia auf eigene Rechnung grundsätzlich infrage kommt." },
      ],
      processTitle: "So läuft ein möglicher Ankauf in der Türkei ab.",
      process: [
        { title: "Erstkontakt und Objektdaten", text: "Teilen Sie uns zunächst die wichtigsten Eckdaten Ihrer Immobilie mit, zum Beispiel Ort, Immobilienart und Zustand. Für den ersten Kontakt benötigen Sie noch keine vollständigen Unterlagen." },
        { title: "Prüfung und erste Einschätzung", text: "Wir prüfen Ihre Angaben und die bereits vorhandenen Unterlagen und verschaffen uns einen Überblick über die Immobilie. Anschließend erhalten Sie eine erste Einschätzung, ob ein Ankauf durch Aurelia grundsätzlich infrage kommt." },
        { title: "Abstimmung des weiteren Vorgehens", text: "Kommt ein Ankauf grundsätzlich infrage, klären wir mit Ihnen, welche weiteren Unterlagen, Vollmachten oder Termine erforderlich sind und wie die nächsten Schritte organisiert werden." },
        { title: "Mögliche Einigung und Erwerb", text: "Wenn wir uns über die Konditionen einigen, erwirbt Aurelia die Immobilie auf eigene Rechnung. Die erforderlichen Schritte werden anschließend mit den beteiligten Stellen in der Türkei abgestimmt." },
      ],
      faq: {
        title: "Häufige Fragen zum Verkauf von Immobilien in der Türkei",
        items: [
          { q: "Muss ich für den Grundbuchtermin persönlich in die Türkei reisen?", a: "Das hängt vom jeweiligen Fall ab. Viele Schritte können aus der Ferne vorbereitet werden. Ob Sie persönlich vor Ort sein müssen oder eine Vollmacht möglich ist, klären wir anhand der konkreten Situation." },
          { q: "Welche Unterlagen werden für die erste Prüfung benötigt?", a: "Für eine erste Prüfung reichen in der Regel grundlegende Angaben zur Immobilie, eine Tapu-Kopie, Fotos und der Standort. Welche weiteren Unterlagen erforderlich sind, klären wir anschließend mit Ihnen." },
          { q: "Kaufen Sie die Immobilie selbst oder vermitteln Sie den Verkauf?", a: "Aurelia prüft die Immobilie für einen möglichen Erwerb auf eigene Rechnung. Kommt ein Ankauf infrage und einigen wir uns über die Konditionen, erwirbt Aurelia die Immobilie selbst." },
        ],
      },
      cta: {
        title: "Möchten Sie uns eine Immobilie in der Türkei anbieten?",
        text: "Senden Sie uns zunächst einige grundlegende Angaben zur Immobilie. Unser Team in Düsseldorf prüft Ihre Anfrage und bespricht mit Ihnen die möglichen nächsten Schritte",
        primary: "Immobilie zum Ankauf anbieten",
      },
    },
  },
};
