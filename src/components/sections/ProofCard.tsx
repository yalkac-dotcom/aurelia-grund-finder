import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProofCardProps {
  icon?: LucideIcon;
  iconImage?: string;
  iconAlt?: string;
  index: number;
  title: string;
  text: string;
  cta?: { label: string; to: string };
}

const ProofCard = ({ icon: Icon, iconImage, iconAlt, index, title, text, cta }: ProofCardProps) => {
  const id = `proof-${index}-title`;

  const visual = (
    <div className="proof-card__visual">
      {Icon ? (
        <span className="proof-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.5} className="text-white" />
        </span>
      ) : iconImage ? (
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
  );

  const body = (
    <div className="proof-card__body">
      <h4 id={id} className="text-[0.95rem] font-heading font-semibold text-primary leading-snug">
        {title}
      </h4>
      <p className="mt-1.5 text-[0.82rem] leading-[1.7] text-muted-foreground">{text}</p>
      {cta && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary">
          {cta.label} <ArrowRight size={13} className="text-accent" />
        </span>
      )}
    </div>
  );

  if (cta) {
    return (
      <Link
        to={cta.to}
        className="proof-card group h-full block"
        aria-labelledby={id}
      >
        {visual}
        {body}
      </Link>
    );
  }

  return (
    <article className="proof-card group h-full" aria-labelledby={id}>
      {visual}
      {body}
    </article>
  );
};

export default ProofCard;
