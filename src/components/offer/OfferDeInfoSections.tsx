import Reveal from "@/components/Reveal";
import { aureliaCard } from "@/lib/cardStyle";
import { homeMaster } from "@/i18n/homeMaster";

/** Deutsche Informationsbereiche vor dem Angebots-Fragebogen (bestehende Texte aus homeMaster.de). */
const OfferDeInfoSections = () => {
  const m = homeMaster.de;
  return (
    <>
      <section className="section-premium bg-secondary/45">
        <div className="container-premium grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className={`h-full p-5 md:p-6 ${aureliaCard}`}>
              <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.specialTitle}</h2>
              <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
                {m.specialParagraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={`h-full p-5 md:p-6 ${aureliaCard}`}>
              <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.foreclosureTitle}</h2>
              <div className="mt-4 space-y-3 whitespace-pre-line text-[0.92rem] leading-[1.8] text-muted-foreground">
                {m.foreclosureParagraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-premium">
        <div className="container-premium">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-[0.94rem] leading-[1.8] text-muted-foreground">
              Auch wenn Sie nicht am Standort der Immobilie leben, können Sie uns das Objekt anbieten. Entscheidend ist, wo sich die Immobilie befindet. Ihren Wohnsitz fragen wir separat ab.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default OfferDeInfoSections;
