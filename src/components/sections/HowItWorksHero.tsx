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
  <section id="hero" className="relative isolate overflow-hidden bg-primary text-primary-foreground min-h-[640px] md:min-h-[max(62svh,560px)]">
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
    {/* Local scrim only behind the text: mobile full-width soft, desktop left-limited */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/30 md:hidden" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[58%] bg-gradient-to-r from-primary/85 via-primary/60 to-transparent md:block" />

    <div className="page-frame-hero flex min-h-[inherit] items-center pb-12 pt-28 md:pb-16 md:pt-32">
      <div className="max-w-2xl">
        <p className="hero-kicker">{kicker}</p>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description max-w-xl whitespace-pre-line">{description}</p>
        <div className="mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
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
            className="btn-secondary"
            onClick={() => trackEvent("cta_click", { cta_type: "secondary", cta_location: "page_hero", cta_label: secondaryCta, cta_target: "#ablauf" })}
          >
            {secondaryCta}
          </a>
        </div>
        <p className="mt-3 text-[0.78rem] text-primary-foreground/85">{trustLine}</p>
      </div>
    </div>
  </section>
);

export default HowItWorksHero;