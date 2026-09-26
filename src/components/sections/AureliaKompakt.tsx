import { useRef, useState } from "react";
import { FileText, Play, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { aureliaCard } from "@/lib/cardStyle";
import videoAsset from "@/assets/immobilienverkauf-aus-der-ferne.mp4.asset.json";
import posterAsset from "@/assets/video-poster.jpg.asset.json";
import pdfAsset from "@/assets/Aurelia_Strategy_Dossier.pdf.asset.json";

const btn =
  "rounded-sm border border-accent/70 bg-primary px-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground hover:bg-primary/90";
const btnOutline =
  "rounded-sm border-primary/40 bg-transparent px-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary hover:bg-primary hover:text-primary-foreground";

// Video und altes Strategy-Dossier vorerst ausgeblendet (nicht gelöscht).
// Neue Präsentation wird eingesetzt, sobald sie vorliegt.
const SHOW_MEDIA = false;

const AureliaKompakt = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pdfOpen, setPdfOpen] = useState(false);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.scrollIntoView({ behavior: "smooth", block: "center" });
    void v.play();
  };

  return (
    <section className="section-premium bg-secondary/45" aria-labelledby="aurelia-kompakt">
      <div className="container-premium">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-px w-9 bg-accent" aria-hidden="true" />
          <h2 id="aurelia-kompakt" className="font-heading text-[1.7rem] font-semibold leading-tight text-primary md:text-[2.2rem]">
            Aurelia kompakt
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-foreground/80 md:text-[16px]">
            Die wichtigsten Informationen zu Aurelia auf einen Blick: wie wir arbeiten, welche Immobilien wir erwerben und wie wir unseren eigenen Bestand aufbauen und entwickeln.
          </p>
        </Reveal>

        {SHOW_MEDIA && <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="h-full">
            <article className={`flex h-full flex-col p-6 md:p-8 ${aureliaCard}`}>
              <div className="mb-4 h-px w-8 bg-accent" aria-hidden="true" />
              <h3 className="font-heading text-[1.3rem] font-semibold leading-snug text-primary">Immobilienverkauf aus der Ferne</h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-foreground/80 md:text-[15px]">
                Wie eine Immobilienanfrage mit Bezug zur Türkei von Deutschland aus vorbereitet und koordiniert werden kann, zeigen wir Ihnen kompakt in diesem Video.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg border border-primary/15 bg-primary">
                <video
                  ref={videoRef}
                  src={videoAsset.url}
                  poster={posterAsset.url}
                  controls
                  muted
                  playsInline
                  preload="none"
                  controlsList="nodownload"
                  className="mx-auto block max-h-[520px] w-full object-contain"
                  aria-label="Video: Wie der Immobilienverkauf aus der Ferne funktioniert"
                />
              </div>
              <div className="mt-auto pt-6">
                <Button type="button" size="lg" onClick={playVideo} className={btn}>
                  <Play size={14} className="text-accent" aria-hidden="true" />
                  Video ansehen
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal className="h-full" delay={0.06}>
            <article className={`flex h-full flex-col p-6 md:p-8 ${aureliaCard}`}>
              <div className="mb-4 h-px w-8 bg-accent" aria-hidden="true" />
              <h3 className="font-heading text-[1.3rem] font-semibold leading-snug text-primary">Unternehmenspräsentation</h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-foreground/80 md:text-[15px]">
                Unsere Unternehmenspräsentation gibt Ihnen einen kompakten Überblick über Aurelia Grundbesitz, unsere Geschäftsbereiche, unsere Arbeitsweise und ausgewählte Immobilienthemen.
              </p>
              <button
                type="button"
                onClick={() => setPdfOpen(true)}
                className="group mt-6 flex flex-1 flex-col items-center justify-center gap-4 rounded-lg border border-primary/15 bg-primary px-6 py-12 text-center"
                aria-label="Präsentation ansehen"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-accent/60 transition-transform group-hover:scale-105">
                  <FileText size={28} className="text-accent" aria-hidden="true" />
                </span>
                <span className="font-heading text-[1.15rem] text-primary-foreground">Aurelia Strategy Dossier</span>
                <span className="text-[12px] uppercase tracking-[0.14em] text-primary-foreground/70">PDF</span>
              </button>
              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                <Button type="button" size="lg" onClick={() => setPdfOpen(true)} className={btn}>
                  Präsentation ansehen
                </Button>
                <Button asChild size="lg" variant="outline" className={btnOutline}>
                  <a href={pdfAsset.url} target="_blank" rel="noopener noreferrer">
                    PDF öffnen
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>
        </div>}
      </div>

      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent className="flex h-[90vh] w-[95vw] max-w-5xl flex-col gap-3 p-4 sm:p-6">
          <DialogTitle className="font-heading text-primary">Unternehmenspräsentation</DialogTitle>
          <DialogDescription className="sr-only">Aurelia Strategy Dossier als PDF</DialogDescription>
          {pdfOpen && (
            <iframe src={pdfAsset.url} title="Aurelia Strategy Dossier" className="min-h-0 w-full flex-1 rounded-md border border-primary/15" />
          )}
          <a href={pdfAsset.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary underline underline-offset-4">
            PDF in neuem Tab öffnen
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AureliaKompakt;
