import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

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
}

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
}: PageHeroProps) => (
  <section
    id="hero"
    className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px] bg-primary"
  >
    <div className="absolute inset-0 overflow-hidden bg-primary">
      <OptimizedImg
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={imageAlt}
        className="hero-media h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
        priority
      />
      {/* Lese-Schutz: links 85% Navy, rechts 30% — schützt Text, lässt Bild atmen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
        }}
      />
    </div>

    <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
      <div className="hero-copy-shell max-w-2xl">
        {/* Above-the-fold: render synchronously without Reveal so H1 contributes to LCP immediately. */}
        <p className="hero-kicker">{kicker}</p>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description max-w-xl">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            {primaryCta && (
              <Link to={primaryCta.to} className="btn-primary">
                {primaryCta.label}
                <ArrowRight size={13} className="ml-2 text-accent" />
              </Link>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary">
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
      <HeroScrollIndicator />
    </div>
  </section>
);

export default PageHero;
