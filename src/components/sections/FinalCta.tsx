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
  <section className="relative section-premium overflow-hidden text-white cta-section-dark">
    {/* Warme Vignette für Tiefe statt flacher Fläche */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 0%, hsl(43 60% 60% / 0.12) 0%, transparent 65%)",
      }}
    />
    <div className="container-premium relative">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="inline-block h-px w-6 align-middle mr-2 bg-accent/70" />
            Nächster Schritt
          </p>
          <h2 className="mb-6 font-heading font-semibold leading-[1.2] text-balance text-[1.75rem] md:text-[2.15rem] text-white">
            {title}
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-[0.95rem] leading-[1.85] text-white/80">
            {text}
          </p>
          <Link
            to={buttonTo}
            className="inline-flex items-center gap-2.5 rounded-sm bg-white px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-[0_18px_40px_-16px_hsl(218_50%_8%_/_0.6)] transition-all duration-300 hover:bg-cream hover:shadow-[0_22px_48px_-14px_hsl(218_50%_8%_/_0.7)] hover:-translate-y-[1px]"
          >
            {buttonLabel}
            <ArrowRight size={13} className="text-accent" />
          </Link>
        </div>
      </Reveal>
    </div>
    {/* Goldene Trennlinie zum Navy-Footer */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/70" aria-hidden="true" />
  </section>
);

export default FinalCta;
