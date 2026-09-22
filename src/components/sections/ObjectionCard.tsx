interface ObjectionCardProps {
  q: string;
  a: string;
  quoteMarks?: readonly [string, string];
}

const ObjectionCard = ({ q, a, quoteMarks = ["„", '"'] }: ObjectionCardProps) => {
  const [openingQuote, closingQuote] = quoteMarks;

  return (
    <div className="glass-card p-7 h-full border-l-2 border-l-[hsl(45_60%_50%_/_0.4)]">
      <h3 className="mb-3 text-[0.98rem] font-heading font-semibold text-foreground leading-snug">
        {openingQuote}{q}{closingQuote}
      </h3>
      <p className="text-[0.86rem] leading-[1.8] text-muted-foreground">{a}</p>
    </div>
  );
};

export default ObjectionCard;
