import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FinalCtaProps {
  title: string;
  text: string;
  buttonLabel: string;
  buttonTo: string;
}

const FinalCta = ({ title, text, buttonLabel, buttonTo }: FinalCtaProps) => (
  <section className="relative section-premium text-white overflow-hidden section-navy">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(45_60%_55%_/_0.06)_0%,transparent_70%)] pointer-events-none" />
    <div className="container-premium relative text-center">
      <Reveal>
        <div className="mx-auto mb-6 h-px w-12 bg-[hsl(45_70%_60%_/_0.6)]" />
        <h2 className="mb-6 text-[1.6rem] md:text-[1.85rem] font-heading font-semibold text-white">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/75">{text}</p>
        <Link
          to={buttonTo}
          className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-lg ring-1 ring-[hsl(45_70%_55%_/_0.4)] transition-all duration-300 hover:bg-white/95 hover:ring-[hsl(45_80%_60%)]"
        >
          {buttonLabel}
          <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
