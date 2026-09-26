import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImg from "@/components/OptimizedImg";
import AiImageDisclosure, { AiDisclosureType } from "@/components/AiImageDisclosure";
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
  /** Optionaler individueller Overlay-Verlauf (z. B. Startseite: rechts deutlich schwächer). */
  overlayGradient?: string;
  phoneLine?: { href: string; label: string };
  /**
   * "default" – größerer Hero (Startseite, Eigentümer)
   * "compact" – kompakterer Hero (Käufer, Geschäftspartner, Wie wir arbeiten) – Referenz: /ueber-uns
   */
  size?: "default" | "compact";
  /** Keeps the mobile home hero entirely content-driven with extra space below its CTAs. */
  mobileHomeFlow?: boolean;
  /** Optionale Zusatzklassen nur für den Beschreibungstext (z. B. Startseite: kräftiger Lesetext). */
  descriptionClassName?: string;
  aiDisclosure?: AiDisclosureType;
  /**
   * Optionale Inline-Styles nur für den Text-/CTA-Block-Frame
   * (z. B. Geschäftspartner: Block weiter nach links verschoben).
   */
  copyFrameStyle?: React.CSSProperties;
  /**
   * "fullImage" – Hero-Höhe folgt exakt dem Seitenverhältnis des Bildes
   * (kein Cropping, keine Seitenbalken; Geschäftspartner-Puzzlebild 3:2).
   */
  fullImage?: boolean;
}

const SIZE_CLASSES: Record<NonNullable<PageHeroProps["size"]>, string> = {
  default: "min-h-[535px] md:h-[87vh] md:min-h-[615px]",
  compact: "min-h-[535px] md:h-[87vh] md:min-h-[615px]",
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
  imagePosition,
  overlayGradient,
  phoneLine,
  size = "default",
  mobileHomeFlow = false,
  descriptionClassName,
  aiDisclosure,
  copyFrameStyle,
  fullImage = false,
}: PageHeroProps) => (
  <section
    id="hero"
    className={`relative flex bg-primary ${
      fullImage
        ? "min-h-[535px] items-center md:min-h-0 md:aspect-[3/2]"
        : mobileHomeFlow
          ? "min-h-0 items-start md:h-[87vh] md:min-h-[615px] md:items-center"
          : `items-center ${SIZE_CLASSES[size]}`
    }`}
  >
    <div className="absolute inset-0 overflow-hidden">
      <OptimizedImg
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={imageAlt}
        className="hero-media h-full w-full object-cover"
        // Inline-objectPosition nur setzen, wenn die Seite explizit einen
        // Fokuspunkt vorgibt. Sonst greifen die zentral in index.css
        // gepflegten Breakpoint-Defaults von .hero-media.
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
        priority
      />
      {/* Single read-protection gradient (merged from previous double layer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            overlayGradient ??
            "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
        }}
      />
      {aiDisclosure && <AiImageDisclosure type={aiDisclosure} />}
    </div>

    <div className={`page-frame-hero relative pt-20 md:pb-0 md:pt-20 ${mobileHomeFlow ? "pb-32" : "pb-24"}`} style={copyFrameStyle}>
      <div className="hero-copy-shell max-w-2xl">
        {/* Above-the-fold: render synchronously without Reveal so H1 contributes to LCP immediately. */}
        <p className="hero-kicker">{kicker}</p>
        <h1 className="hero-title">{title}</h1>
        <p className={`hero-description max-w-xl whitespace-pre-line ${descriptionClassName ?? ""}`}>{description}</p>
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
