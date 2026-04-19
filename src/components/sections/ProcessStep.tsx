import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProcessStepProps {
  index: number;
  total: number;
  title: string;
  desc: string;
  iconImage?: string;
  iconAlt?: string;
  /** Optional thematic photo shown as full-width header (16:10). Replaces the icon visual. */
  image?: string;
  imageAlt?: string;
  /** Light tone for use on dark/navy sections. */
  tone?: "light" | "dark";
}

const ProcessStep = ({
  index,
  total,
  title,
  desc,
  iconImage,
  iconAlt,
  image,
  imageAlt,
  tone = "light",
}: ProcessStepProps) => {
  const id = `step-${index}-title`;
  const numeral = String(index + 1).padStart(2, "0");
  const isDark = tone === "dark";

  return (
    <Reveal delay={index * 0.06}>
      <div className="relative h-full">
        <article className="group relative h-full" aria-labelledby={id}>
          {image ? (
            <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16 / 10" }}>
              <img
                src={image}
                alt={imageAlt ?? iconAlt ?? ""}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          ) : (
            <div className="flex items-start justify-between gap-3 mb-4">
              <span
                className={`editorial-numeral ${isDark ? "editorial-numeral--dark" : ""}`}
                aria-hidden="true"
              >
                {numeral}
              </span>
              {iconImage && (
                <span
                  className="inline-flex h-12 w-12 items-center justify-center"
                  aria-hidden={iconAlt ? undefined : "true"}
                >
                  <img
                    src={iconImage}
                    alt={iconAlt ?? ""}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain opacity-90 transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
                  />
                </span>
              )}
            </div>
          )}
          <div
            className={`pt-4 ${
              isDark ? "border-t border-white/15" : "border-t border-accent/30"
            }`}
          >
            <h3
              id={id}
              className={`text-[1rem] md:text-[1.05rem] font-heading font-semibold leading-snug tracking-tight ${
                isDark ? "text-white" : "text-primary"
              }`}
            >
              {title}
            </h3>
            <p
              className={`mt-2.5 text-[0.86rem] leading-[1.8] ${
                isDark ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              {desc}
            </p>
          </div>
        </article>
        {index < total - 1 && (
          <div className="hidden lg:flex absolute top-7 -right-5 w-5 h-5 items-center justify-center">
            <ArrowRight className="text-accent/60" size={16} aria-hidden="true" />
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default ProcessStep;
