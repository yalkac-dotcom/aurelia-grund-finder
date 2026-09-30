import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";

// Deutsche Masterversion. Übersetzungen folgen erst nach Freigabe.
const points = [
  { title: "Persönliche Prüfung", text: "Wir sehen uns Lage, Zustand und die vorhandenen Unterlagen Ihrer Immobilie an und geben Ihnen eine offene erste Einschätzung." },
  { title: "Direkt und auf eigene Rechnung", text: "Kommt ein Ankauf infrage, erwirbt Aurelia die Immobilie selbst – ohne Makler und ohne öffentliche Vermarktung." },
  { title: "Auch besondere Ausgangssituationen", text: "Auch Immobilien mit Renovierungsbedarf, Entwicklungspotenzial oder einer besonderen Ausgangssituation können interessant sein." },
];

const ShortTermSale = () => {
  usePageSeo(
    "Kurzfristiger Immobilienverkauf | Aurelia Grundbesitz",
    "Kurzfristiger Verkauf oder besondere Situation? Aurelia prüft persönlich und vertraulich, ob ein beschleunigter Direktankauf auf eigene Rechnung möglich ist – in Deutschland und der Türkei.",
  );

  return (
    <Layout>
      <main className="bg-gradient-warm pt-10 md:pt-12">
        <section className="container-premium pb-10 text-center md:pb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">Wenn Zeit entscheidend ist</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-primary md:text-5xl">Kurzfristiger Immobilienverkauf</h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.85] text-muted-foreground">
            Manchmal soll ein Verkauf zügiger erfolgen als geplant – etwa bei einer beruflichen oder privaten Veränderung, einer Erbschaft oder einer besonderen Ausgangssituation. Aurelia prüft in diesen Fällen, ob ein beschleunigter Direktankauf auf eigene Rechnung möglich ist.
          </p>
        </section>

        <section className="container-premium pb-10 md:pb-12">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="border-l-2 border-accent bg-card px-6 py-6">
                <h2 className="font-heading text-xl font-semibold text-primary">{p.title}</h2>
                <p className="mt-2 text-[0.94rem] leading-[1.8] text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-6 text-muted-foreground">
            Wir prüfen Immobilien in Deutschland und in der Türkei. Ob ein Ankauf zustande kommt und wie lange die Abwicklung dauert, hängt immer vom Einzelfall ab – eine Zusage können wir vor der Prüfung nicht geben.
          </p>
        </section>

        <section className="container-premium pb-12 text-center md:pb-16">
          <h2 className="font-heading text-2xl font-semibold text-primary md:text-3xl">Ihre Immobilie prüfen lassen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[0.96rem] leading-[1.8] text-muted-foreground">
            Teilen Sie uns die wichtigsten Angaben zu Ihrer Immobilie mit. Wir melden uns persönlich und vertraulich bei Ihnen.
          </p>
          <Button asChild size="lg" className="mt-6 min-h-12 h-auto whitespace-normal rounded-sm px-8 py-3 uppercase tracking-[0.12em]">
            <Link to="/immobilie-anbieten">Immobilie anbieten</Link>
          </Button>
        </section>
      </main>
    </Layout>
  );
};

export default ShortTermSale;
