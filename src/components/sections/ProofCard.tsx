import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProofCardProps {
  icon?: LucideIcon;
  iconImage?: string;
  iconAlt?: string;
  /** Optional thematic photo shown as full-width header (16:10 default, 21:9 when compact). */
  image?: string;
  imageAlt?: string;
  index: number;
  title: string;
  text: string;
  cta?: { label: string; to: string };
  /** Editorial / filigree variant: smaller image, lighter shadow, semibold heading, tighter padding. */
  compact?: boolean;
}

const ProofCard = ({
  icon: Icon,
  iconImage,
  iconAlt,
  image,
  imageAlt,
  index,
  title,
  text,
  cta,
  compact = false,
}: ProofCardProps) => {
  const id = `proof-${index}-title`;
  const numeral = String(index + 1).padStart(2, "0");

  const visual = image ? (
    <div
      className="relative w-full overflow-hidden bg-primary/5"
      style={{ aspectRatio: compact ? "21 / 9" : "16 / 10" }}
    >
      <img
        src={image}
        alt={imageAlt ?? iconAlt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  ) : (
    <div className="proof-card__visual">
      {Icon ? (
        <span className="proof-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.5} className="text-white" />
        </span>
      ) : iconImage ? (
        <span
          className="proof-card__icon proof-card__icon--image"
          aria-hidden={iconAlt ? undefined : "true"}
          style={{ ["--icon-float-delay" as string]: `${(index % 6) * 0.45}s` }}
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
        {numeral}
      </span>
    </div>
  );

  const body = (
    <div className={compact ? "px-5 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6" : "proof-card__body"}>
      <h4
        id={id}
        className={
          compact
            ? "text-[0.95rem] md:text-[1rem] font-heading font-semibold text-primary leading-snug tracking-tight"
            : "text-[0.95rem] font-heading font-semibold text-primary leading-snug"
        }
      >
        {title}
      </h4>
      <p
        className={
          compact
            ? "mt-2 text-[0.82rem] md:text-[0.85rem] leading-[1.75] text-muted-foreground"
            : "mt-1.5 text-[0.82rem] leading-[1.7] text-muted-foreground"
        }
      >
        {text}
      </p>
      {cta && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary">
          {cta.label} <ArrowRight size={13} className="text-accent" />
        </span>
      )}
    </div>
  );

  const cardClass = compact
    ? "group h-full overflow-hidden bg-card border border-border/50 rounded-md transition-colors duration-300 hover:border-accent/40"
    : "proof-card group h-full overflow-hidden";

  if (cta) {
    return (
      <Link to={cta.to} className={`${cardClass} block`} aria-labelledby={id}>
        {visual}
        {body}
      </Link>
    );
  }

  return (
    <article className={cardClass} aria-labelledby={id}>
      {visual}
      {body}
    </article>
  );
};

export default ProofCard;
