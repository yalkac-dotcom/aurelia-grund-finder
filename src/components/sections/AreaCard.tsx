import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AreaCardProps {
  icon?: LucideIcon;
  iconImage?: string;
  iconAlt?: string;
  title: string;
  text: string;
  cta?: { label: string; to: string };
}

const AreaCard = ({ icon: Icon, iconImage, iconAlt, title, text, cta }: AreaCardProps) => {
  const inner = (
    <>
      {iconImage ? (
        <div className="mb-6 flex h-20 w-20 items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          <img
            src={iconImage}
            alt={iconAlt ?? ""}
            aria-hidden={iconAlt ? undefined : "true"}
            loading="lazy"
            width={160}
            height={160}
            className="h-full w-full object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
          />
        </div>
      ) : Icon ? (
        <div className="icon-tile mb-6">
          <Icon size={20} aria-hidden="true" />
        </div>
      ) : null}
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
        className="group glass-card card-hover block p-8 text-left transition-all duration-300 h-full"
      >
        {inner}
      </Link>
    );
  }
  return <div className="group glass-card p-8 text-left h-full">{inner}</div>;
};

export default AreaCard;
