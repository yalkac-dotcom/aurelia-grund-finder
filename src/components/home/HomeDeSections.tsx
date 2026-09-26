import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/sections/SectionHeader";
import { aureliaCard } from "@/lib/cardStyle";

/** Deutsche Startseiten-Bereiche nach Master-Konzept (nur DE). */
const HomeDeSections = () => (
  <>
    {/* UNTERNEHMENSGESCHICHTE */}
    <section className="section-premium bg-background">
      <div className="container-premium">
        <Reveal className="mx-auto max-w-3xl border-l-2 border-accent pl-6">
          <h2 className="font-heading text-[1.6rem] font-semibold leading-tight text-primary md:text-[2rem]">Wer wir sind</h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-foreground/80">
            <p>Aurelia Grundbesitz ist ein Inhabergeführtes Immobilienunternehmen aus Düsseldorf.</p>
            <p>Hinter Aurelia stehen rund 30 Jahre unternehmerische Erfahrung mit Immobilien – darunter Ankäufe aus Zwangsversteigerungen, freihändige Käufe vor einer Versteigerung sowie die Entwicklung und Verwaltung eigener Immobilienbestände.</p>
            <p>Ein großer Teil unserer Arbeit betraf Immobilien mit schwieriger Ausgangslage – zum Beispiel Zwangsversteigerungen oder freihändige Käufe, bevor es überhaupt zur Versteigerung kam.</p>
            <p>Heute kaufen wir ausgewählte Immobilien auf eigene Rechnung, entwickeln unseren eigenen Bestand weiter und entscheiden bei jedem Objekt individuell, ob wir es langfristig halten, renovieren oder später wieder aus unserem Bestand verkaufen.</p>
            <p>Unser Ziel ist nicht, möglichst viele Geschäfte abzuwickeln. Wir möchten Schritt für Schritt einen soliden eigenen Immobilienbestand aufbauen.</p>
            <p className="font-medium text-primary">Bei uns sprechen Sie nicht mit einem anonymen Portal, sondern mit Menschen, die sich mit Ihrer Immobilie beschäftigen und Entscheidungen selbst treffen.</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* BESONDERE SITUATIONEN + ZWANGSVERSTEIGERUNG */}
    <section className="section-premium bg-secondary/45">
      <div className="container-premium grid gap-8 md:grid-cols-2 md:gap-10">
        <Reveal>
          <div className={`h-full p-6 md:p-8 ${aureliaCard}`}>
            <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">Wenn es nicht ganz einfach ist, schauen wir genauer hin.</h2>
            <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
              <p>Nicht jede Immobilie wird unter normalen Bedingungen verkauft. Manchmal gibt es finanzielle Schwierigkeiten, offene Forderungen, mehrere Beteiligte oder eine drohende Zwangsversteigerung.</p>
              <p>Solche Situationen kennen wir seit vielen Jahren. Wir prüfen, ob ein direkter Ankauf auf eigene Rechnung möglich ist und welche Schritte dafür notwendig sind.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div id="zwangsversteigerung" className={`h-full scroll-mt-24 p-6 md:p-8 ${aureliaCard}`}>
            <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">Wenn eine Zwangsversteigerung droht</h2>
            <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
              <p>Auch kurz vor einer Zwangsversteigerung kann ein freihändiger Verkauf noch möglich sein.{"\n\n"}Solche Situationen kennen wir seit vielen Jahren. Wir prüfen, ob ein direkter Ankauf durch Aurelia auf eigene Rechnung infrage kommt.</p>
              <p>Wenn es grundsätzlich passt, stimmen wir die nächsten Schritte mit Ihnen ab. Soweit es für den Kauf notwendig ist, können dabei auch Gespräche mit beteiligten Banken oder anderen Stellen geführt werden.{"\n\n"}Ob und unter welchen Bedingungen ein Verkauf möglich ist, hängt immer vom jeweiligen Fall ab</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WOHNSITZ ≠ STANDORT */}
    <section className="section-premium bg-background">
      <div className="container-premium">
        <SectionHeader title="Wo Sie leben, ist nicht entscheidend." intro="Eine Immobilie kann sich in einem anderen Land befinden als ihr Eigentümer. Auch dann können Sie uns Ihr Objekt zum möglichen Ankauf anbieten." />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {[
            { t: "Sie leben in der Türkei – Ihre Immobilie ist in Deutschland?", d: "Sie können uns die Immobilie auch aus der Türkei zum möglichen Ankauf anbieten. Unterlagen und viele Abstimmungen können je nach Einzelfall aus der Ferne vorbereitet werden.", to: "/immobilie-anbieten?land=deutschland" },
            { t: "Sie leben in Deutschland oder Europa – Ihre Immobilie ist in der Türkei?", d: "Auch Immobilien in der Türkei können wir für einen möglichen Erwerb auf eigene Rechnung prüfen. Welche Schritte vor Ort notwendig sind, hängt vom jeweiligen Objekt und der Eigentumssituation ab.", to: "/immobilie-anbieten?land=tuerkei" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="h-full border-l-2 border-accent/60 pl-6">
                <h3 className="font-heading text-[1.08rem] font-semibold leading-snug text-primary">{c.t}</h3>
                <p className="mt-3 text-[0.9rem] leading-[1.8] text-muted-foreground">{c.d}</p>
                <Link to={c.to} className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-primary hover:text-primary/80">
                  Immobilie anbieten <ArrowRight size={13} className="text-accent" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-[0.82rem] italic leading-[1.7] text-muted-foreground">Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, wird im jeweiligen Fall geklärt.</p>
        </Reveal>
      </div>
    </section>
  </>
);

export default HomeDeSections;
