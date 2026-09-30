import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";
import deKurz from "@/assets/aurelia-film-de-kurz.mp4.asset.json";
import deLang from "@/assets/aurelia-film-de-lang.mp4.asset.json";
import trKurz from "@/assets/aurelia-film-tr-kurz.mp4.asset.json";
import trLang from "@/assets/aurelia-video-tr.mp4.asset.json";
import deKurzPoster from "@/assets/aurelia-film-de-kurz-poster.jpg.asset.json";
import deLangPoster from "@/assets/aurelia-film-de-lang-poster.jpg.asset.json";
import trKurzPoster from "@/assets/aurelia-film-tr-kurz-poster.jpg.asset.json";
import trLangPoster from "@/assets/aurelia-video-tr-poster.jpg.asset.json";

type Clip = { id: string; src: string; poster: string; title: string; text: string; duration: string };

const SETS: Record<"de" | "tr", { title: string; intro: string; play: string; note: string; clips: Clip[] }> = {
  de: {
    title: "Aurelia kennenlernen",
    intro: "Zwei Einblicke in Aurelia Grundbesitz – kompakt oder ausführlich.",
    play: "Video abspielen",
    note: "Hinweis: Die Unternehmensvideos wurden mit Unterstützung künstlicher Intelligenz erstellt.",
    clips: [
      { id: "de_kurz", src: deKurz.url, poster: deKurzPoster.url, title: "Aurelia in 1 Minute", text: "Unser Unternehmen, unsere Erfahrung und unsere Arbeitsweise kompakt vorgestellt.", duration: "ca. 1 Minute" },
      { id: "de_lang", src: deLang.url, poster: deLangPoster.url, title: "Aurelia ausführlich kennenlernen", text: "Ein ausführlicher Einblick in Aurelia Grundbesitz, unsere Erfahrung und unseren Umgang mit komplexen Immobiliensituationen.", duration: "ca. 7:30 Minuten" },
    ],
  },
  tr: {
    title: "Aurelia'yı Tanıyın",
    intro: "Aurelia Grundbesitz'i ister kısa, ister ayrıntılı olarak tanıyın.",
    play: "Videoyu oynat",
    note: "Not: Kurumsal tanıtım videoları yapay zekâ desteğiyle hazırlanmıştır.",
    clips: [
      { id: "tr_kurz", src: trKurz.url, poster: trKurzPoster.url, title: "Aurelia – 1 Dakikada", text: "Aurelia Grundbesitz'i, deneyimimizi ve çalışma şeklimizi kısaca tanıyın.", duration: "yaklaşık 1 dakika" },
      { id: "tr_lang", src: trLang.url, poster: trLangPoster.url, title: "Aurelia'yı Yakından Tanıyın", text: "Aurelia Grundbesitz, deneyimimiz ve karmaşık gayrimenkul süreçlerine yaklaşımımız hakkında ayrıntılı bilgi edinin.", duration: "yaklaşık 6 dakika" },
    ],
  },
};

const VideoCard = ({ clip, playLabel }: { clip: Clip; playLabel: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const start = () => {
    trackEvent(clip.id.startsWith("tr") ? "video_start_tr" : "video_start_de", { video: `company_video_${clip.id}` });
    setStarted(true);
    requestAnimationFrame(() => { const el = ref.current; if (el) { el.muted = false; void el.play(); } });
  };
  return (
    <article className="flex h-full flex-col">
      <div className="overflow-hidden rounded-sm border border-primary/70 bg-primary p-1 shadow-[0_6px_24px_-12px_hsl(var(--primary)/0.35)]">
        <div className="relative aspect-video w-full overflow-hidden bg-primary">
          {started ? (
            <video ref={ref} src={clip.src} poster={clip.poster} controls playsInline preload="metadata" controlsList="nodownload" className="block h-full w-full object-cover" aria-label={clip.title} />
          ) : (
            <button type="button" onClick={start} aria-label={`${playLabel}: ${clip.title}`} className="group absolute inset-0 block">
              <img src={clip.poster} alt="" decoding="async" className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-primary/15 transition-colors group-hover:bg-primary/25">
                <span className="flex size-14 items-center justify-center rounded-full border border-accent bg-primary/90 shadow-lg transition-transform group-hover:scale-105 md:size-16">
                  <Play className="ml-1 size-6 fill-accent text-accent md:size-7" aria-hidden="true" />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
      <h3 className="mt-4 font-heading text-[1.15rem] font-semibold leading-snug text-primary md:text-[1.25rem]">{clip.title}</h3>
      <p className="mt-2 text-[14.5px] leading-[1.65] text-foreground/80">{clip.text}</p>
      <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-highlight">{clip.duration}</p>
    </article>
  );
};

type CopyLang = "de" | "tr" | "en" | "nl" | "it" | "es" | "fr";
type Copy = { title: string; intro: string; play: string; note: string; c: [string, string, string][] };

// Begleittexte für die türkischen Videos auf der Türkei-Seite (Videos bleiben immer türkisch)
const TR_VIDEO_COPY: Record<CopyLang, Copy> = {
  de: { title: "Aurelia auf Türkisch kennenlernen", intro: "Zwei Einblicke in Aurelia Grundbesitz – auf Türkisch, kompakt oder ausführlich.", play: "Video abspielen", note: "Hinweis: Die Unternehmensvideos wurden mit Unterstützung künstlicher Intelligenz erstellt.", c: [
    ["Aurelia in 1 Minute", "Unser Unternehmen, unsere Erfahrung und unsere Arbeitsweise kompakt auf Türkisch vorgestellt.", "ca. 1 Minute"],
    ["Aurelia ausführlich kennenlernen", "Ein ausführlicher Einblick in Aurelia Grundbesitz, unsere Erfahrung und unsere Arbeitsweise – auf Türkisch.", "ca. 6 Minuten"]] },
  tr: { title: SETS.tr.title, intro: SETS.tr.intro, play: SETS.tr.play, note: SETS.tr.note, c: SETS.tr.clips.map((x) => [x.title, x.text, x.duration] as [string, string, string]) },
  en: { title: "Discover Aurelia in Turkish", intro: "Two ways to discover Aurelia Grundbesitz in Turkish – concise or in detail.", play: "Play video", note: "Note: The corporate videos were created with the support of artificial intelligence.", c: [
    ["Aurelia in 1 Minute", "A concise introduction to our company, our experience and how we work – in Turkish.", "approx. 1 minute"],
    ["Discover Aurelia in Detail", "A detailed introduction to Aurelia Grundbesitz, our experience and how we work – in Turkish.", "approx. 6 minutes"]] },
  nl: { title: "Maak kennis met Aurelia in het Turks", intro: "Twee manieren om Aurelia Grundbesitz in het Turks te leren kennen – kort of uitgebreid.", play: "Video afspelen", note: "Opmerking: De bedrijfsvideo's zijn gemaakt met ondersteuning van kunstmatige intelligentie.", c: [
    ["Aurelia in 1 minuut", "Een korte introductie van ons bedrijf, onze ervaring en onze werkwijze – in het Turks.", "ca. 1 minuut"],
    ["Uitgebreid kennismaken met Aurelia", "Een uitgebreid inzicht in Aurelia Grundbesitz, onze ervaring en onze werkwijze – in het Turks.", "ca. 6 minuten"]] },
  it: { title: "Scopri Aurelia in turco", intro: "Due modi per conoscere Aurelia Grundbesitz in turco – in breve o in modo approfondito.", play: "Riproduci video", note: "Nota: I video aziendali sono stati realizzati con il supporto dell'intelligenza artificiale.", c: [
    ["Aurelia in 1 minuto", "Una breve presentazione della nostra azienda, della nostra esperienza e del nostro modo di lavorare – in turco.", "circa 1 minuto"],
    ["Scopri Aurelia nel dettaglio", "Una presentazione approfondita di Aurelia Grundbesitz, della nostra esperienza e del nostro modo di lavorare – in turco.", "circa 6 minuti"]] },
  es: { title: "Conozca Aurelia en turco", intro: "Dos formas de conocer Aurelia Grundbesitz en turco – de manera breve o detallada.", play: "Reproducir vídeo", note: "Nota: Los vídeos corporativos se han creado con el apoyo de inteligencia artificial.", c: [
    ["Aurelia en 1 minuto", "Una breve presentación de nuestra empresa, nuestra experiencia y nuestra forma de trabajar – en turco.", "aprox. 1 minuto"],
    ["Conozca Aurelia en detalle", "Una presentación detallada de Aurelia Grundbesitz, nuestra experiencia y nuestra forma de trabajar – en turco.", "aprox. 6 minutos"]] },
  fr: { title: "Découvrez Aurelia en turc", intro: "Deux façons de découvrir Aurelia Grundbesitz en turc – en version courte ou détaillée.", play: "Lire la vidéo", note: "Remarque : Les vidéos d'entreprise ont été réalisées avec le soutien de l'intelligence artificielle.", c: [
    ["Aurelia en 1 minute", "Une présentation concise de notre entreprise, de notre expérience et de notre façon de travailler – en turc.", "env. 1 minute"],
    ["Découvrez Aurelia en détail", "Une présentation détaillée d'Aurelia Grundbesitz, de notre expérience et de notre façon de travailler – en turc.", "env. 6 minutes"]] },
};

const DualVideoSection = ({ language, copyLanguage, className = "bg-gradient-warm" }: { language: "de" | "tr"; copyLanguage?: CopyLang; className?: string }) => {
  const base = SETS[language];
  const cp = language === "tr" && copyLanguage ? TR_VIDEO_COPY[copyLanguage] : null;
  const s = cp
    ? { ...base, title: cp.title, intro: cp.intro, play: cp.play, note: cp.note, clips: base.clips.map((clip, i) => ({ ...clip, title: cp.c[i][0], text: cp.c[i][1], duration: cp.c[i][2] })) }
    : base;
  return (
    <section className={`section-premium ${className}`} aria-labelledby={`dual-video-title-${language}`} data-home-video={language}>
      <div className="container-premium">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-9 bg-accent" aria-hidden="true" />
          <h2 id={`dual-video-title-${language}`} className="font-heading text-[1.6rem] font-semibold leading-tight text-primary md:text-[2rem]">{s.title}</h2>
          <p className="mx-auto mt-3 text-[15px] leading-[1.7] text-foreground/80">{s.intro}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mx-auto mt-6 grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:gap-8">
            {s.clips.map((c) => <VideoCard key={c.id} clip={c} playLabel={s.play} />)}
          </div>
          <p className="mx-auto mt-6 text-center text-[12px] leading-[1.5] text-foreground/55 md:text-[13px]">{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default DualVideoSection;
