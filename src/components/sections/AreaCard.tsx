import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AreaCardProps {
  icon?: LucideIcon;
  iconColor?: string;
  iconImage?: string;
  iconAlt?: string;
  headerImage?: string;
  headerImageAlt?: string;
  title: string;
  text: string;
  cta?: { label: string; to: string };
}

const AreaCard = ({
  icon: Icon,
  iconColor,
  iconImage,
  iconAlt,
  headerImage,
  headerImageAlt,
  title,
  text,
  cta,
}: AreaCardProps) => {
  const inner = (
    <>
      {headerImage ? (
        <div className="-mx-8 -mt-8 mb-6 overflow-hidden">
          <img
            src={headerImage}
            alt={headerImageAlt ?? ""}
            aria-hidden={headerImageAlt ? undefined : "true"}
            loading="lazy"
            width={1024}
            height={768}
            className="h-44 md:h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : Icon ? (
        <div
          className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
          style={{ backgroundColor: "hsl(var(--highlight))" }}
        >
          <Icon
            size={24}
            strokeWidth={1.75}
            aria-hidden="true"
            className="text-white"
          />
        </div>
      ) : iconImage ? (
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
      ) : null}
      <h3 className="mb-2.5 text-[1.05rem] font-heading font-semibold text-primary">{title}</h3>
      <p className={`text-[0.88rem] leading-[1.7] text-muted-foreground ${cta ? "mb-5" : ""}`}>{text}</p>
      {cta && (
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
          {cta.label} <ArrowRight size={13} className="text-accent" />
        </span>
      )}
    </>
  );

  if (cta) {
    return (
      <Link
        to={cta.to}
        className="group glass-card card-hover block p-8 text-left transition-all duration-300 h-full overflow-hidden"
      >
        {inner}
      </Link>
    );
  }
  return <div className="group glass-card p-8 text-left h-full overflow-hidden">{inner}</div>;
};

export default AreaCard;
