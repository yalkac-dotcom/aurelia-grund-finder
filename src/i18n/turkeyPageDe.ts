import type { Language, Translations } from "./types";

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

// Deutsche Fassung der Seite „Immobilienverkauf in der Türkei" – gilt ausschließlich für DE.
export const turkeyPageDe: Partial<Record<Language, DeepPartial<Translations>>> = {
  de: {
    turkeyProperties: {
      hero: {
        title: "Türkei-Immobilien bequem und persönlich von Deutschland aus verkaufen.",
        subtitle:
          "Sie besitzen eine Immobilie in der Türkei und leben in Deutschland oder einem anderen europäischen Land? Aurelia Grundbesitz ist Ihr Ansprechpartner in Deutschland und begleitet Sie bei der Vorbereitung und Koordination des Verkaufs – transparent, vertraulich und mit klaren Ansprechpartnern.",
        primaryCta: "Kostenfreie Ersteinschätzung anfragen",
        secondaryCta: "Ablauf & Vorteile kennenlernen",
      },
      servicesTitle: "Warum ein Immobilienverkauf aus der Ferne aufwendig sein kann – und wie wir Sie unterstützen.",
      servicesIntro: "",
      services: [
        {
          title: "Reisen und Termine vor Ort",
          text: "Besichtigungen, Behördentermine und Abstimmungen in der Türkei können aus Deutschland oder Europa mit erheblichem Zeit- und Reiseaufwand verbunden sein.\n\nViele Schritte lassen sich von Deutschland aus vorbereiten und koordinieren. Wir stimmen mit Ihnen ab, welche Termine tatsächlich persönlich erforderlich sind und welche Aufgaben über Bevollmächtigte oder Ansprechpartner vor Ort erledigt werden können.",
        },
        {
          title: "Sprache und unterschiedliche Abläufe",
          text: "Grundbuchverfahren, Vollmachten, steuerliche Themen und weitere Formalitäten können sich von den in Deutschland bekannten Abläufen unterscheiden.\n\nWir erläutern Ihnen die notwendigen Schritte verständlich und koordinieren die Abwicklung gemeinsam mit geeigneten Ansprechpartnern in der Türkei. Bei rechtlichen, steuerlichen oder notariellen Fragen werden die jeweils zuständigen Fachleute eingebunden.",
        },
        {
          title: "Bewertung und Verkaufsabwicklung",
          text: "Gerade aus der Ferne ist es nicht immer einfach, den örtlichen Markt, den Zustand einer Immobilie und die einzelnen Schritte einer Veräußerung einzuschätzen.\n\nWir betrachten Lage, Zustand und die vorhandenen Unterlagen und besprechen mit Ihnen eine realistische Vorgehensweise. Die einzelnen Schritte des Verkaufs und der Zahlungsabwicklung werden vorab transparent abgestimmt. Je nach Fall kann die Abwicklung auch so strukturiert werden, dass Zahlungen und Abstimmungen über Deutschland erfolgen.",
        },
      ],
      processTitle: "In vier Schritten zur möglichen Veräußerung.",
      process: [
        { title: "Erstkontakt und Objektdaten", text: "Teilen Sie uns zunächst die wichtigsten Eckdaten Ihrer Immobilie mit, zum Beispiel Ort, Immobilienart und aktuellen Zustand. Für das erste Gespräch benötigen Sie noch keine vollständigen Unterlagen." },
        { title: "Prüfung und erste Einschätzung", text: "Wir prüfen Ihre Angaben und vorhandenen Unterlagen und verschaffen uns einen Überblick über die Immobilie und die Ausgangssituation. Anschließend erhalten Sie eine nachvollziehbare Rückmeldung." },
        { title: "Abstimmung des weiteren Vorgehens", text: "Gemeinsam mit Ihnen klären wir, welche weiteren Unterlagen, Vollmachten oder Termine benötigt werden und wie die nächsten Schritte organisiert werden können." },
        { title: "Verkauf und Abwicklung", text: "Kommt es zu einer Veräußerung, werden die erforderlichen Schritte mit den beteiligten Ansprechpartnern in der Türkei abgestimmt. Sie werden über den Ablauf und die notwendigen Entscheidungen transparent informiert." },
      ],
      faq: {
        title: "Häufige Fragen zum Verkauf von Immobilien in der Türkei.",
        items: [
          { q: "Muss ich für den Grundbuchtermin persönlich in die Türkei reisen?", a: "Das hängt vom konkreten Fall und den erforderlichen Vollmachten ab. In vielen Fällen können bestimmte Schritte über eine ordnungsgemäß erteilte Vollmacht durchgeführt werden. Wir klären mit Ihnen vorab, welche Möglichkeiten für Ihre Situation bestehen." },
          { q: "Welche Unterlagen werden für die erste Prüfung benötigt?", a: "Für den Einstieg reichen in der Regel grundlegende Angaben zur Immobilie, zum Beispiel eine Tapu-Kopie, Fotos und der Standort. Welche weiteren Dokumente benötigt werden, klären wir anschließend gemeinsam mit Ihnen." },
          { q: "Kaufen Sie die Immobilie selbst oder vermitteln Sie den Verkauf?", a: "Je nach Objekt und Ausgangssituation prüfen wir, ob ein Ankauf, eine Veräußerung über geeignete Kooperationspartner oder eine andere Vorgehensweise infrage kommt. Aurelia Grundbesitz bleibt dabei Ihr Ansprechpartner in Deutschland." },
        ],
      },
      cta: {
        title: "Möchten Sie Ihre Immobilie in der Türkei unverbindlich besprechen?",
        text: "Senden Sie uns zunächst einige grundlegende Angaben zu Ihrer Immobilie. Unser Team in Düsseldorf bespricht anschließend mit Ihnen die Ausgangssituation und die möglichen nächsten Schritte.",
        primary: "Jetzt Anfrage für Türkei-Immobilie stellen",
      },
    },
  },
};
