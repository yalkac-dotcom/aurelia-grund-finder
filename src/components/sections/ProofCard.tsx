import { LucideIcon } from "lucide-react";

interface ProofCardProps {
  icon: LucideIcon;
  index: number;
  title: string;
  text: string;
}

const ProofCard = ({ icon: Icon, index, title, text }: ProofCardProps) => {
  const id = `proof-${index}-title`;
  return (
    <article className="proof-card group h-full" aria-labelledby={id}>
      <div className="proof-card__visual">
        <span className="proof-card__icon" aria-hidden="true">
          <Icon size={22} />
        </span>
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
