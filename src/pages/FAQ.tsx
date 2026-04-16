import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ChevronDown, CheckCircle, AlertTriangle, TrendingUp, Shield, Clock } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const basicFaqs = [
    {
      question: "Was genau ist eine Zwangsversteigerung und wie funktioniert das?",
      answer: "Eine Zwangsversteigerung ist ein gerichtliches Verfahren, bei dem eine Immobilie versteigert wird – meist, weil der Eigentümer seine Schulden nicht mehr bezahlen kann. Das Amtsgericht setzt einen Termin fest, zu dem die Immobilie meistbietend verkauft wird. Der Vorteil für Käufer: Die Preise liegen oft deutlich unter dem Marktwert. Wir begleiten Sie von Anfang an – von der Recherche der Immobilie über die Besichtigung bis zum Kaufabschluss. Sie sind nicht alleine in diesem Prozess."
    },
    {
      question: "Wie viel kostet es wirklich, eine Zwangsversteigerungsimmobilie zu kaufen?",
      answer: "Der Kaufpreis ist das, was Sie bei der Auktion zahlen. Zusätzlich kommen Gerichtsgebühren hinzu – diese liegen bei etwa 5-6% des Kaufpreises. Dann gibt es noch Notarkosten für die Beurkundung (meist 1-2%). Das Gute: Es fallen keine Maklergebühren an, das sparen Sie sich. Insgesamt sollten Sie mit 7-8% Nebenkosten rechnen – deutlich weniger als beim normalen Immobilienkauf mit Maklerprovision. Wir helfen Ihnen, alle Kosten transparent zu kalkulieren, damit es keine bösen Überraschungen gibt."
    },
    {
      question: "Wie lange dauert es vom Termin bis zum Kaufabschluss?",
      answer: "Das hängt von mehreren Faktoren ab. Zwischen Auktionstermin und Kaufabschluss vergehen normalerweise 6-12 Wochen – Zeit, um Finanzierung zu regeln und Unterlagen zu besorgen. Der gesamte Prozess vom ersten Interesse bis zur Besitzergreifung dauert typischerweise 4-6 Monate. Das ist eigentlich schneller als beim normalen Hauskauf. Wir halten Sie bei jedem Schritt auf dem Laufenden und sorgen dafür, dass alles reibungslos läuft."
    },
    {
      question: "Kann ich die Immobilie vorher ansehen oder ist das zu riskant?",
      answer: "Sie können und sollten! Der Besichtigungstermin wird vom Amtsgericht bekannt gemacht – meist gibt es einen offiziellen Termin. Wir empfehlen immer eine gründliche Besichtigung vor der Auktion. Das ist wichtig, um die echte Bausubstanz zu beurteilen, versteckte Mängel zu entdecken und Ihre Entscheidung auf soliden Füßen zu treffen. Wir können Sie gerne bei der Besichtigung begleiten und Ihnen mit unserem erfahrenen Blick helfen. Das reduziert das Risiko erheblich – es ist nicht riskant, es ist verantwortungsvoll."
    },
    {
      question: "Wie kriege ich das Geld zusammen und welche Bank hilft mir?",
      answer: "Für Zwangsversteigerungen gibt es spezielle Finanzierungen von vielen Banken. Der Vorteil: Sie können oft schneller und mit besseren Konditionen finanzieren als beim normalen Kauf. Viele Banken mögen diese Immobilien, weil die Preise unter dem Verkehrswert liegen – das ist auch für sie sicherer. Wir können Sie mit Spezialisten verbinden, die sich mit Zwangsversteigerungsfinanzierung auskennen und Ihnen helfen, den besten Deal zu machen. Auch Eigenkapital-arme Lösungen sind oft möglich."
    }
  ];

  const advancedFaqs = [
    {
      question: "Was sind die größten Vorteile steuerlich – lohnt sich das wirklich?",
      answer: "Ja, und wie! Je nachdem, wie Sie die Immobilie nutzen, gibt es verschiedene Steuersparmodelle. Vermieten Sie eine Wohnung, können Sie Instandhaltungskosten, Werbungskosten und Schuldzinsen abziehen. Bei Renovierungen gibt es unter bestimmten Bedingungen sogar Abschreibungen (AfA). Wenn es eine Kapitalanlage ist, gibt es spezielle Förderungen und Förderprogramme. Das Beste: Sie verdienen nicht nur durch Wertsteigerung, sondern auch durch Steuerersparnisse – das ist echter Mehrwert. Lesen Sie mehr in unserem Steuervorteile-Bereich oder sprechen Sie mit uns."
    },
    {
      question: "Was könnte schiefgehen und wie schütze ich mich vor Überraschungen?",
      answer: "Das ist die wichtigste Frage! Deshalb empfehlen wir immer: Machen Sie Ihre Hausaufgaben. Holen Sie sich die Grundbuchausgabe, schauen Sie in die Grundschuldregister, lesen Sie die Versteigerungsbedingungen genau. Besuchen Sie die Besichtigung – auch mehrfach. Lassen Sie ein Gutachten erstellen oder sprechen Sie mit uns für eine professionelle Einschätzung. Mit diesen Schritten minimieren Sie Risiken erheblich. Es gibt kaum böse Überraschungen, wenn man aufmerksam ist. Und: Wir sind da, um Sie zu begleiten – das ist unser Job."
    },
    {
      question: "Ich bin unerfahren – kann ich das wirklich schaffen?",
      answer: "Kurz gesagt: Ja, aber nicht alleine. Das ist auch gar nicht nötig! Genau dafür sind wir da. Wir kennen die Fallstricke, wissen, worauf zu achten ist. Jede Immobilie ist unterschiedlich, jede Situation einzigartig. Mit uns an Ihrer Seite haben Sie einen erfahrenen Partner, der Ihnen sagt, was realistisch ist, wo die Chancen liegen und wo die Risiken schlummern. Die erste Beratung ist kostenlos – sprechen Sie einfach mit uns."
    },
    {
      question: "Kann ich die Immobilie direkt weiterverkaufen und damit Geld verdienen?",
      answer: "Theoretisch ja, praktisch ist es nicht immer sinnvoll. Bei Zwangsversteigerungen kaufen Sie oft mit einem Rabatt von 20-40% unter Marktpreis ein – das ist ein großer Vorteil. Wenn Sie dann schnell weiterkaufen, zahlt der Käufer mehr und Sie sind die Zwischenperson. Das funktioniert manchmal, aber: Die echten Gewinne kommen meistens durch langfristige Vermietung und Wertsteigerung. Oder durch geschicktes Renovieren und Aufwertung. Wir helfen Ihnen, die beste Strategie für Ihre Situation zu finden."
    },
    {
      question: "Wie erkenne ich eine gute Immobilie von einer schlechten?",
      answer: "Das ist erlernbar! Wichtig ist: Lage, Lage, Lage. Auch wenn der Preis verlockend ist – eine Immobilie in schlechter Lage wird sich nicht gut entwickeln. Dann schauen Sie auf die Bausubstanz: Wie alt ist das Haus? Dach, Fenster, Heizung – in welchem Zustand? Was kostet eine Renovierung? Danach: Wie sieht der Markt in dieser Region aus? Wächst die Stadt, gibt es Arbeitsplätze? Sprechen Sie mit Nachbarn. Und ganz wichtig: Vertrauen Sie Ihrem Bauchgefühl. Wir können Ihnen bei dieser Analyse helfen – das ist unsere Expertise."
    },
    {
      question: "Kann ich mehrere Immobilien kaufen oder muss ich mit einer beginnen?",
      answer: "Sie können durchaus mehrere kaufen! Viele unserer Kunden bauen sich ein Portfolio auf – das ist sogar sinnvoll für Diversifikation und Risikominimierung. Aber: Beginnen Sie mit einer oder zwei, lernen Sie den Prozess kennen, verstehen Sie Ihre Fehler, refinanzieren Sie. Mit jeder Immobilie werden Sie sicherer, schneller, klüger. Wir helfen Ihnen gerne bei dieser Strategie."
    }
  ];

  const legalFaqs = [
    {
      question: "Welche rechtlichen Besonderheiten muss ich bei Zwangsversteigerungen beachten?",
      answer: "Es gibt tatsächlich einige rechtliche Besonderheiten. Zum Beispiel: Bei Zwangsversteigerungen kaufen Sie ‚as-is' – der Verkäufer (Gläubiger) gibt keine Gewährleistung ab. Das klingt schlecht, ist aber mit der richtigen Vorbereitung zu handhaben. Außerdem: Das Amtsgericht versteigert, nicht ein Makler. Das Verfahren ist streng geregelt. Versteigerungsbedingungen sind wichtig – lesen Sie diese genau durch! Es gibt Ausschlussgründe, auf die Sie achten müssen. Wir helfen Ihnen bei diesen Details."
    },
    {
      question: "Gibt es versteckte Lasten oder Schulden, die ich übernehme?",
      answer: "Das ist eine sehr gute Frage! Hier gibt es gute und schlechte Nachrichten. Die gute: Im deutschen Zwangsversteigerungsprozess werden Schulden und Lasten ordentlich gelöscht – die höherrangigen Gläubiger werden befriedigt, dann kommt Ihr Kaufpreis. Die schlechte: Es gibt Ausnahmen – nicht gelöschte Schulden oder spezielle Rechte (Wegerechte, Wohnrechte). Das ist aber einsehbar: Im Grundbuchauszug und in den Versteigerungsbedingungen. Darum: Lesen Sie diese Unterlagen sorgfältig oder lassen Sie uns das tun."
    },
    {
      question: "Was passiert, wenn ich bei der Auktion nicht den Zuschlag bekomme?",
      answer: "Das ist gar nicht so tragisch! Erstens: Es gibt viele weitere Termine und Auktionen – es ist nicht die einzige Chance. Zweitens: Wenn Sie nicht bieten möchten oder nicht den Zuschlag bekommen, können Sie oft mit dem Gläubiger oder dem neuen Eigentümer direkt verhandeln. Drittens: Mit jedem Termin, bei dem Sie mitbieten, lernen Sie mehr über den Prozess. Keine Angst – es wird sich eine Gelegenheit für Sie ergeben."
    },
    {
      question: "Wie lange bin ich nach dem Zuschlag an den Kauf gebunden?",
      answer: "Das ist wichtig zu verstehen! Nach dem Zuschlag sind Sie rechtlich gebunden – das ist kein ‚Ich denke nochmal drüber'-Moment. Sie müssen zahlen. Die Zahlungsfrist liegt meistens bei wenigen Wochen (oft 4-6 Wochen nach Zuschlag). Deshalb ist es wichtig: Nur bieten, wenn Sie auch kaufen wollen! Finanzierung sollte vorher geklärt sein. Wer seriös arbeitet, wer vorher alles klärt, hat kein Problem. Wir helfen Ihnen, diese Entscheidung sicher zu treffen."
    }
  ];

  const strategyFaqs = [
    {
      question: "Ist es besser zu vermieten oder selbst zu nutzen?",
      answer: "Beide Modelle können funktionieren, haben aber unterschiedliche Vorteile. Vermietung bedeutet: Regelmäßige Einnahmen, Steuerabzüge, langfristiger Vermögensaufbau. Aber auch: Mietausfallrisiko, Reparaturen, Verwaltung. Selbstnutzung bedeutet: Keine Mieteinnahmen, aber auch keine Miete zahlen, emotionale Bindung, weniger Steuervorteil. Viele Profis kombinieren: Erste Immobilie selbst nutzen, später mehr kaufen und vermieten. Wir beraten Sie gerne, welche Strategie für Sie passt."
    },
    {
      question: "Wie kann ich die Immobilie aufwerten und mehr Gewinn machen?",
      answer: "Das ist eine der besten Strategien! Bei Zwangsversteigerungen kaufen Sie oft unter Preis – mit geschickten Renovierungen können Sie deutlich mehr verdienen. Kosmetische Reparaturen (Farbe, Bodenbelag, Fenster) sind oft am effektivsten. Größere Renovierungen (Bad, Küche) kosten mehr, bringen aber auch mehr Wertzuwachs. Und dann gibt es clevere Ansätze: Teilungsoptionen, Nutzungsänderungen, oder strategische Vermietung. Lassen Sie uns Ihre Ideen besprechen."
    },
    {
      question: "Sollte ich alleine investieren oder mit Partnern?",
      answer: "Beide Modelle funktionieren. Solo: Sie haben volle Kontrolle, verdienen alles selbst, aber tragen auch alle Risiken alleine. Mit Partnern: Sie teilen Risiken und Lasten, lernen voneinander, können größer investieren. Der Nachteil: Konflikte, unterschiedliche Ziele, rechtliche Komplexität. Unser Tipp: Wenn Sie Solo gut schlafen können und genug Kapital haben – go solo. Wenn Sie von anderen lernen wollen – suchen Sie einen guten Partner. Und wichtig: Alles schriftlich regeln, notariell absichern."
    },
    {
      question: "Wie viel Eigenkapital brauche ich wirklich zum Anfang?",
      answer: "Theoretisch: Wenig bis gar nichts – es gibt Finanzierungen ohne EK. Praktisch: Mindestens 10-20% ist sicherer und gibt Ihnen mehr Verhandlungsspielraum. Warum? Weil unerwartet Kosten kommen können, und ein Puffer ist beruhigend. Und: Das EK muss nicht nur in die Immobilie – einen Teil brauchen Sie auch für Nebenkosten, Reparaturen. Sprechen Sie mit uns – wir finden auch Lösungen mit weniger EK, wenn Ihre Strategie passt."
    }
  ];

  const FAQSection = ({ title, subtitle, icon: Icon, faqs: faqItems }: { title: string; subtitle: string; icon: React.ElementType; faqs: { question: string; answer: string }[] }) => (
    <section className="section-premium">
      <div className="container-premium">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="icon-badge">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-teal-600 font-medium tracking-wide uppercase">{subtitle}</p>
              <h2 className="text-2xl md:text-3xl font-light">{title}</h2>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === `${title}-${index}` ? null : `${title}-${index}`)}
                className="w-full glass-card rounded-2xl p-6 md:p-8 card-hover text-left transition-all duration-300 border border-teal-100/50 hover:border-teal-300/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base md:text-lg font-medium">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform duration-300 shrink-0 mt-1 ${openIndex === `${title}-${index}` ? "rotate-180" : ""}`} />
                </div>

                {openIndex === `${title}-${index}` && (
                  <div className="mt-4 pt-4 border-t border-teal-100/50">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[62svh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.premium?.src} alt="FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <Reveal>
            <p className="text-sm tracking-widest uppercase mb-4 text-white/80">Ihre Fragen beantwortet</p>
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Das müssen Sie wissen
            </h1>
          </Reveal>
          <HeroScrollIndicator />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-premium bg-gradient-warm">
        <div className="container-premium">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <CheckCircle className="w-10 h-10 text-teal-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Ihre wichtigsten Fragen – unsere ehrlichen Antworten
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Zwangsversteigerungen sind kein Hexenwerk. Mit etwas Wissen und der richtigen Unterstützung kann jeder davon profitieren. Hier sind die Fragen, die wir am häufigsten hören – und unsere Antworten.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Sections */}
      <FAQSection title="Grundlagen" subtitle="Einstieg & Basics" icon={CheckCircle} faqs={basicFaqs} />
      <FAQSection title="Fortgeschrittene Fragen" subtitle="Für erfahrene Interessenten" icon={TrendingUp} faqs={advancedFaqs} />
      <FAQSection title="Rechtliches & Sicherheit" subtitle="Wichtige rechtliche Aspekte" icon={Shield} faqs={legalFaqs} />
      <FAQSection title="Strategie & Planung" subtitle="Langfristig denken" icon={Clock} faqs={strategyFaqs} />

      {/* CTA Section */}
      <section className="section-premium bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="container-premium">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Noch offene Fragen?
              </h2>
              <p className="text-lg text-white/85 mb-8 leading-relaxed">
                Das Gute daran, mit uns zu arbeiten: Jede Situation ist unterschiedlich. Jede Immobilie ist einzigartig. Lassen Sie uns Ihre Fragen besprechen – ganz persönlich, ohne Verpflichtung. Die erste Beratung ist kostenlos.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Jetzt Termin vereinbaren
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-premium">
        <div className="container-premium">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <TrendingUp className="w-10 h-10 text-teal-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Weitere Ressourcen
              </h2>
              <p className="text-foreground/70">
                Möchten Sie tiefer einsteigen? Wir haben noch mehr Informationen für Sie.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Steuervorteile", desc: "Wie Sie durch clevere Steuerplanung echte Gewinne machen", link: "/steuervorteile" },
              { title: "Investor Glossar", desc: "Alle wichtigen Begriffe erklärt – von A wie AfA bis Z wie Zwangsversteigerung", link: "/investoren-glossar" },
              { title: "Leistungen", desc: "Was wir für Sie tun können und wie wir Sie unterstützen", link: "/leistungen" },
              { title: "Kontakt", desc: "Sprechen Sie mit uns! Kostenlose erste Beratung ohne Verpflichtung", link: "/kontakt" },
            ].map((resource, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to={resource.link} className="block glass-card rounded-2xl p-6 card-hover border border-teal-100/50 hover:border-teal-300/70 transition-all duration-300 h-full">
                  <h3 className="text-lg font-medium mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {resource.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
