import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FinalCtaProps {
  title: string;
  text: string;
  buttonLabel: string;
  buttonTo: string;
  /** Variant: "navy" (Default, dunkle Vollfläche) oder "split" (editorialer Cream/Navy-Split). */
  variant?: "navy" | "split";
  eyebrow?: string;
}

const FinalCta = ({
  title,
  text,
  buttonLabel,
  buttonTo,
  variant = "navy",
  eyebrow,
}: FinalCtaProps) => {
  if (variant === "split") {
    return (
      <section className="relative section-y-lux surface-paper-deep overflow-hidden">
        <div className="container-premium">
          <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
            {/* Linke Spalte — typografisch, ruhig */}
            <Reveal>
              <div className="md:col-span-7">
                {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
                <h2 className="font-heading font-medium text-primary leading-[1.12] tracking-[-0.01em] text-balance text-[1.85rem] md:text-[2.55rem] lg:text-[2.85rem]">
                  {title}
                </h2>
                <p className="mt-6 max-w-xl text-[0.96rem] md:text-[1rem] leading-[1.85] text-muted-foreground">
                  {text}
                </p>
              </div>
            </Reveal>

            {/* Rechte Spalte — Navy-Insel mit CTA */}
            <Reveal delay={0.1}>
              <div className="md:col-span-5">
                <div className="surface-ink p-8 md:p-10 border-l-2 border-l-accent/60 hairline-on-dark-t hairline-on-dark-b shadow-[0_24px_60px_-30px_hsl(218_50%_8%_/_0.55)]">
                  <p className="numeral-display numeral-display--dark mb-5">01</p>
                  <p className="text-[0.92rem] leading-[1.8] text-white/80 mb-7">
                    Ein vertrauliches Gespräch ist der ruhigste Weg, eine
                    Situation einzuordnen — ohne Verpflichtung, ohne Eile.
                  </p>
                  <Link
                    to={buttonTo}
                    className="inline-flex items-center gap-2.5 border-b border-accent/70 pb-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {buttonLabel}
                    <ArrowRight size={14} className="text-accent" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  // Default: Navy
  return (
    <section className="relative section-y-base text-white overflow-hidden surface-ink">
      <div className="container-premium relative text-center">
        <Reveal>
          {eyebrow && (
            <p className="eyebrow eyebrow--dark eyebrow--center justify-center mb-5">
              {eyebrow}
            </p>
          )}
          <h2 className="mb-6 font-heading font-medium text-white leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem]">
            {title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.85] text-white/85">
            {text}
          </p>
          <Link
            to={buttonTo}
            className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:bg-white/95"
          >
            {buttonLabel}
            <ArrowRight size={13} className="text-accent" />
          </Link>
        </Reveal>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent/60"
        aria-hidden="true"
      />
    </section>
  );
};

export default FinalCta;
