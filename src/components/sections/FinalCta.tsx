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
  <section
    className="relative section-premium text-white overflow-hidden"
    style={{ backgroundColor: "hsl(var(--highlight))" }}
  >
    <div className="container-premium relative text-center">
      <Reveal>
        <div className="mx-auto mb-6 h-px w-12 bg-accent" />
        <h2 className="mb-6 text-[1.6rem] md:text-[1.85rem] font-heading font-semibold text-white">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/90">{text}</p>
        <Link
          to={buttonTo}
          className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:bg-white/95"
        >
          {buttonLabel}
          <ArrowRight size={13} className="text-accent" />
        </Link>
      </Reveal>
    </div>
    {/* Goldene Trennlinie zum Navy-Footer */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-accent" aria-hidden="true" />
  </section>
);

export default FinalCta;
