import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import Reveal from "@/components/Reveal";

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
}: PageHeroProps) => (
  <section
    id="hero"
    className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]"
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
      <div className="hero-overlay-base absolute inset-0" />
      <div className="hero-overlay-protect absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>

    <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
      <div className="hero-copy-shell max-w-2xl">
        <Reveal>
          <p className="hero-kicker">{kicker}</p>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description max-w-xl">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-lg ring-1 ring-[hsl(45_70%_55%_/_0.4)] transition-all duration-300 hover:bg-white/95 hover:ring-[hsl(45_80%_60%)]"
                >
                  {primaryCta.label}
                  <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
                </Link>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-sm border border-white/35 bg-white/5 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/55 hover:bg-white/10"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
          {trustLine && <p className="mt-4 text-[0.78rem] text-white/75">{trustLine}</p>}
        </Reveal>
      </div>
      <HeroScrollIndicator />
    </div>
  </section>
);

export default PageHero;
