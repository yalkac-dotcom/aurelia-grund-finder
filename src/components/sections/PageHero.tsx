import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImg from "@/components/OptimizedImg";
import { trackEvent } from "@/lib/analytics";

interface PageHeroProps {
  image: { src: string; srcSet: string; sizes: string };
  imageAlt: string;
  kicker: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  imagePosition?: string;
  phoneLine?: { href: string; label: string };
  /**
   * "default" – größerer Hero (Startseite, Eigentümer)
   * "compact" – kompakterer Hero (Käufer, Geschäftspartner, Wie wir arbeiten) – Referenz: /ueber-uns
   */
  size?: "default" | "compact";
}

const SIZE_CLASSES: Record<NonNullable<PageHeroProps["size"]>, string> = {
  default: "h-[76svh] min-h-[500px] md:h-[80vh] md:min-h-[580px]",
  compact: "h-[76svh] min-h-[500px] md:h-[80vh] md:min-h-[580px]",
};

const PageHero = ({
  image,
  imageAlt,
  kicker,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustLine,
  imagePosition = "center",
  phoneLine,
  size = "default",
}: PageHeroProps) => (
  <section
    id="hero"
    className={`relative flex items-center bg-primary ${SIZE_CLASSES[size]}`}
  >
    <div className="absolute inset-0 overflow-hidden">
      <OptimizedImg
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={imageAlt}
        className="hero-media h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
        priority
      />
      {/* Single read-protection gradient (merged from previous double layer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
        }}
      />
    </div>

    <div className="page-frame-hero relative pt-16 pb-0 md:pt-20 md:pb-0">
      <div className="hero-copy-shell max-w-2xl">
        {/* Above-the-fold: render synchronously without Reveal so H1 contributes to LCP immediately. */}
        <p className="hero-kicker">{kicker}</p>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description max-w-xl">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex flex-row flex-wrap gap-3 items-center sm:gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="btn-primary"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_type: "primary",
                    cta_location: "page_hero",
                    cta_label: primaryCta.label,
                    cta_target: primaryCta.to,
                  })
                }
              >
                {primaryCta.label}
                <ArrowRight size={13} className="ml-2 text-accent" />
              </Link>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="btn-secondary"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_type: "secondary",
                    cta_location: "page_hero",
                    cta_label: secondaryCta.label,
                    cta_target: secondaryCta.href,
                  })
                }
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
        {phoneLine && (
          <a
            href={phoneLine.href}
            className="mt-3 inline-block text-[14px] text-white/80 hover:text-white transition-colors"
          >
            {phoneLine.label}
          </a>
        )}
        {trustLine && <p className="mt-4 text-[0.78rem] text-white/75">{trustLine}</p>}
      </div>
    </div>
  </section>
);

export default PageHero;
