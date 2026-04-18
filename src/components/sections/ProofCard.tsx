import { LucideIcon } from "lucide-react";

interface ProofCardProps {
  icon?: LucideIcon;
  iconImage?: string;
  iconAlt?: string;
  index: number;
  title: string;
  text: string;
}

const ProofCard = ({ icon: Icon, iconImage, iconAlt, index, title, text }: ProofCardProps) => {
  const id = `proof-${index}-title`;
  return (
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
        ) : Icon ? (
          <span className="proof-card__icon" aria-hidden="true">
            <Icon size={22} />
          </span>
        ) : null}
        <span className="proof-card__numeral" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="proof-card__body">
        <h4 id={id} className="text-[0.95rem] font-heading font-semibold text-primary leading-snug">
          {title}
        </h4>
        <p className="mt-1.5 text-[0.82rem] leading-[1.7] text-muted-foreground">{text}</p>
      </div>
    </article>
  );
};

export default ProofCard;
