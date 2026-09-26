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
        { title: "Entfernung und Termine", text: "Wer nicht vor Ort lebt, kann nicht jeden Termin einfach wahrnehmen.\n\nViele Schritte können je nach Einzelfall aus der Ferne vorbereitet und abgestimmt werden. Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, hängt vom jeweiligen Fall ab." },
        { title: "Unterschiedliche Abläufe", text: "Grundbuch, Vollmachten und Formalitäten unterscheiden sich von den in Deutschland bekannten Abläufen.\n\nWir erklären verständlich, welche Angaben und Unterlagen wir für unsere Prüfung benötigen. Rechts- oder Steuerberatung bieten wir nicht an." },
        { title: "Prüfung auf eigene Rechnung", text: "Wir sehen uns Lage, Zustand und vorhandene Unterlagen an.\n\nDanach sagen wir Ihnen offen, ob ein Erwerb durch Aurelia auf eigene Rechnung grundsätzlich infrage kommt." },
      ],
      processTitle: "So läuft ein möglicher Ankauf in der Türkei ab.",
      process: [
        { title: "Erstkontakt und Objektdaten", text: "Teilen Sie uns zunächst die wichtigsten Eckdaten Ihrer Immobilie mit, zum Beispiel Ort, Immobilienart und aktuellen Zustand. Für das erste Gespräch benötigen Sie noch keine vollständigen Unterlagen." },
        { title: "Prüfung und erste Einschätzung", text: "Wir prüfen Ihre Angaben und vorhandenen Unterlagen und verschaffen uns einen Überblick über die Immobilie und die Ausgangssituation. Anschließend erhalten Sie eine nachvollziehbare Rückmeldung." },
        { title: "Abstimmung des weiteren Vorgehens", text: "Gemeinsam mit Ihnen klären wir, welche weiteren Unterlagen, Vollmachten oder Termine benötigt werden und wie die nächsten Schritte organisiert werden können." },
        { title: "Mögliche Einigung und Erwerb", text: "Wenn ein Erwerb grundsätzlich infrage kommt und wir uns einigen, kauft Aurelia die Immobilie auf eigene Rechnung. Die dafür erforderlichen Schritte werden mit den beteiligten Stellen in der Türkei abgestimmt." },
      ],
      faq: {
        title: "Häufige Fragen zum Verkauf von Immobilien in der Türkei.",
        items: [
          { q: "Muss ich für den Grundbuchtermin persönlich in die Türkei reisen?", a: "Das hängt vom jeweiligen Fall ab. Viele Schritte können je nach Einzelfall aus der Ferne vorbereitet und abgestimmt werden. Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, klären wir im konkreten Fall." },
          { q: "Welche Unterlagen werden für die erste Prüfung benötigt?", a: "Für den Einstieg reichen in der Regel grundlegende Angaben zur Immobilie, zum Beispiel eine Tapu-Kopie, Fotos und der Standort. Welche weiteren Dokumente benötigt werden, klären wir anschließend gemeinsam mit Ihnen." },
          { q: "Kaufen Sie die Immobilie selbst oder vermitteln Sie den Verkauf?", a: "Wir prüfen, ob ein Erwerb durch Aurelia auf eigene Rechnung grundsätzlich infrage kommt. Die konkrete Prüfung hängt von der Immobilie, den Unterlagen und den jeweiligen rechtlichen Voraussetzungen ab." },
        ],
      },
      cta: {
        title: "Möchten Sie uns eine Immobilie in der Türkei anbieten?",
        text: "Senden Sie uns zunächst einige grundlegende Angaben zu Ihrer Immobilie. Unser Team in Düsseldorf bespricht anschließend mit Ihnen die Ausgangssituation und die möglichen nächsten Schritte.",
        primary: "Immobilie zum Ankauf anbieten",
      },
    },
  },
};
