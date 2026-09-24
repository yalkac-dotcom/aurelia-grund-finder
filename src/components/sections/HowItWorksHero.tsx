import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import cooperation1280 from "@/assets/how-it-works/cooperations-1280w.webp";
import cooperation768 from "@/assets/how-it-works/cooperations-768w.webp";
import germany1280 from "@/assets/how-it-works/germany-1280w.webp";
import germany768 from "@/assets/how-it-works/germany-768w.webp";
import turkey1280 from "@/assets/how-it-works/turkey-1280w.webp";
import turkey768 from "@/assets/how-it-works/turkey-768w.webp";
import OptimizedImg from "@/components/OptimizedImg";
import { trackEvent } from "@/lib/analytics";

interface HowItWorksHeroProps {
  kicker: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  trustLine: string;
}

const photos = [
  { src: germany1280, srcSet: `${germany768} 768w, ${germany1280} 1280w` },
  { src: turkey1280, srcSet: `${turkey768} 768w, ${turkey1280} 1280w` },
  { src: cooperation1280, srcSet: `${cooperation768} 768w, ${cooperation1280} 1280w` },
];

const HowItWorksHero = ({
  kicker,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustLine,
}: HowItWorksHeroProps) => (
  <>
  <section id="hero" className="relative isolate overflow-hidden bg-primary min-h-[980px] md:min-h-[max(62svh,560px)]">
    <div aria-hidden="true" className="absolute inset-0 -z-10 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={index === 0 ? "relative overflow-hidden" : "relative overflow-hidden border-t-[3px] border-gold md:border-l-[3px] md:border-t-0"}
        >
          <OptimizedImg
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(max-width: 767px) 100vw, 33.333vw"
            alt=""
            className="absolute inset-0 block h-full w-full object-cover"
            tone="none"
            priority
          />
        </div>
      ))}
    </div>
    <div className="page-frame-hero flex min-h-[inherit] items-end justify-center pb-6 pt-32 md:pb-8 md:pt-40">
      <div
        className="w-full max-w-3xl rounded-sm border border-gold px-5 py-6 text-center md:px-10 md:py-8"
        style={{ background: "hsl(var(--background) / 0.78)", backdropFilter: "blur(1px)" }}
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</p>
        <h1 className="mt-3 font-heading text-[1.7rem] leading-tight text-primary md:text-[2.3rem]">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-[0.92rem] font-medium leading-[1.7] text-primary md:text-[0.98rem]">{description}</p>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/kontakt"
            className="btn-primary"
            onClick={() => trackEvent("cta_click", { cta_type: "primary", cta_location: "page_hero", cta_label: primaryCta, cta_target: "/kontakt" })}
          >
            {primaryCta}
            <ArrowRight size={13} className="ml-2 text-accent" />
          </Link>
          <a
            href="#ablauf"
            className="btn-primary"
            onClick={() => trackEvent("cta_click", { cta_type: "secondary", cta_location: "page_hero", cta_label: secondaryCta, cta_target: "#ablauf" })}
          >
            {secondaryCta}
          </a>
        </div>
      </div>
    </div>
  </section>
  <div className="bg-background px-4 py-4 text-center">
    <p className="text-[0.82rem] text-muted-foreground">{trustLine}</p>
  </div>
  </>
);

export default HowItWorksHero;
