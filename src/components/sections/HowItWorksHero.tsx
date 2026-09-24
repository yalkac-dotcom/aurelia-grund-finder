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
    {/* Soft, text-local navy focus: no full-photo darkening, fades to transparent at the edges */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 md:hidden"
      style={{ background: "radial-gradient(ellipse 88% 72% at 50% 50%, hsl(var(--primary) / 0.78) 0%, hsl(var(--primary) / 0.5) 58%, hsl(var(--primary) / 0) 100%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      style={{ background: "radial-gradient(ellipse 42% 78% at 50% 50%, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.52) 55%, hsl(var(--primary) / 0) 100%)" }}
    />

    <div className="page-frame-hero flex min-h-[inherit] items-center justify-center pb-12 pt-28 md:pb-16 md:pt-32">
      <div className="max-w-2xl text-center">
        <p className="hero-kicker" style={{ color: "hsl(var(--gold-light) / 0.95)", borderColor: "hsl(var(--gold) / 0.35)" }}>{kicker}</p>
        <h1
          className="hero-title"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 1px 2px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.5)",
          }}
        >
          {title}
        </h1>
        <p className="hero-description mx-auto whitespace-pre-line">{description}</p>
        <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
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
