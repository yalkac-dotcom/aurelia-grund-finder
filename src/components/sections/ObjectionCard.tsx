interface ObjectionCardProps {
  q: string;
  a: string;
}

const ObjectionCard = ({ q, a }: ObjectionCardProps) => (
  <div className="material-card relative h-full p-7 md:p-8">
    {/* Editoriales Anführungszeichen als leiser Akzent */}
    <span
      aria-hidden="true"
      className="absolute -top-2 left-6 select-none font-heading text-[3.2rem] leading-none text-accent/35"
      style={{ fontStyle: "italic" }}
    >
      „
    </span>
    <h3 className="relative mb-3 pl-1 text-[1rem] font-heading font-semibold text-foreground leading-snug">
      {q}
    </h3>
    <div className="mb-4 h-px w-8 bg-accent/50" aria-hidden="true" />
    <p className="text-[0.88rem] leading-[1.85] text-muted-foreground">{a}</p>
  </div>
);

export default ObjectionCard;
