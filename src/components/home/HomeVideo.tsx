import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import videoDe from "@/assets/aurelia-video-de.mp4.asset.json";
import videoTr from "@/assets/aurelia-video-tr.mp4.asset.json";
import posterDe from "@/assets/aurelia-video-de-poster.jpg.asset.json";
import posterTr from "@/assets/aurelia-video-tr-poster.jpg.asset.json";

// Nur DE und TR erhalten ein Video; alle anderen Sprachen: kein Video.
const VIDEOS = {
  de: {
    src: videoDe.url,
    poster: posterDe.url,
    title: "Aurelia kennenlernen",
    text: "Lernen Sie Aurelia, unsere Arbeitsweise und unsere Immobilienbereiche in wenigen Minuten kennen.",
    play: "Video abspielen",
    note: "Hinweis: Dieses Unternehmensvideo wurde mit Unterstützung künstlicher Intelligenz erstellt.",
  },
  tr: {
    src: videoTr.url,
    poster: posterTr.url,
    title: "Aurelia'yı yakından tanıyın",
    text: "Aurelia'yı, çalışma şeklimizi ve gayrimenkul faaliyet alanlarımızı birkaç dakika içinde yakından tanıyın.",
    play: "Videoyu oynat",
    note: "Bilgilendirme: Bu kurumsal tanıtım videosu yapay zekâ desteğiyle oluşturulmuştur.",
  },
} as const;

const HomeVideo = ({ language }: { language: string }) => {
  const v = VIDEOS[language as keyof typeof VIDEOS];
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  if (!v) return null;

  const start = () => {
    setStarted(true);
    const el = ref.current;
    if (el) { el.muted = false; void el.play(); }
  };

  return (
    <section className="section-premium bg-gradient-warm" aria-labelledby="home-video-title" data-home-video={language}>
      <div className="container-premium">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-9 bg-accent" aria-hidden="true" />
          <h2 id="home-video-title" className="font-heading text-[1.6rem] font-semibold leading-tight text-primary md:text-[2rem]">
            {v.title}
          </h2>
          <p className="mx-auto mt-3 text-[15px] leading-[1.7] text-foreground/80">{v.text}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-sm border border-accent/50 bg-primary p-1.5 md:mt-8 md:p-2">
            <div className="relative aspect-video w-full overflow-hidden bg-primary">
              <video
                ref={ref}
                src={v.src}
                poster={v.poster}
                controls={started}
                playsInline
                preload="none"
                controlsList="nodownload"
                className="block h-full w-full object-contain"
                aria-label={v.title}
              />
              {!started && (
                <button
                  type="button"
                  onClick={start}
                  aria-label={v.play}
                  className="group absolute inset-0 flex items-center justify-center bg-primary/15 transition-colors hover:bg-primary/25"
                >
                  <span className="flex size-16 items-center justify-center rounded-full border border-accent bg-primary/90 shadow-lg transition-transform group-hover:scale-105 md:size-20">
                    <Play className="ml-1 size-7 fill-accent text-accent md:size-8" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>
          </div>
          <p className="mx-auto mt-2.5 text-center text-[12px] leading-[1.5] text-foreground/55 md:mt-3 md:text-[13px]">
            {v.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeVideo;
