import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProcessStepProps {
  index: number;
  total: number;
  title: string;
  desc: string;
  iconImage?: string;
  iconAlt?: string;
}

const ProcessStep = ({ index, total, title, desc, iconImage, iconAlt }: ProcessStepProps) => {
  const id = `step-${index}-title`;
  return (
    <Reveal delay={index * 0.06}>
      <div className="relative h-full">
        <article className="proof-card group h-full" aria-labelledby={id}>
          <div className="proof-card__visual">
            {iconImage ? (
              <span
                className="proof-card__icon proof-card__icon--image"
                aria-hidden={iconAlt ? undefined : "true"}
              >
                <img
                  src={iconImage}
                  alt={iconAlt ?? ""}
                  loading="lazy"
                  width={128}
                  height={128}
                  className="h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
                />
              </span>
            ) : null}
            <span className="proof-card__numeral" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="proof-card__body">
            <h3 id={id} className="text-[0.95rem] font-heading font-semibold text-primary leading-snug">
              {title}
            </h3>
            <p className="mt-1.5 text-[0.82rem] leading-[1.7] text-muted-foreground">{desc}</p>
          </div>
        </article>
        {index < total - 1 && (
          <div className="hidden lg:flex absolute top-1/2 -right-5 w-5 h-5 -translate-y-1/2 items-center justify-center">
            <ArrowRight className="text-accent" size={18} aria-hidden="true" />
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default ProcessStep;
