import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AreaCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  cta?: { label: string; to: string };
}

const AreaCard = ({ icon: Icon, title, text, cta }: AreaCardProps) => {
  const inner = (
    <>
      <div className="icon-tile mb-6">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3 className="mb-2.5 text-[1.05rem] font-heading font-semibold text-foreground">{title}</h3>
      <p className={`text-[0.88rem] leading-[1.7] text-muted-foreground ${cta ? "mb-5" : ""}`}>{text}</p>
      {cta && (
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
          {cta.label} <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
        </span>
      )}
    </>
  );

  if (cta) {
    return (
      <Link
        to={cta.to}
        className="glass-card card-hover block p-8 text-left transition-all duration-300 h-full"
      >
        {inner}
      </Link>
    );
  }
  return <div className="glass-card p-8 text-left h-full">{inner}</div>;
};

export default AreaCard;
