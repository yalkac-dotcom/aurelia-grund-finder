import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FaqHintProps {
  /** Optionale Einleitung — überschreibt den Default-Text. */
  text?: string;
  linkLabel?: string;
}

/**
 * Ruhiger, websiteweit einheitlicher Hinweis auf die zentrale FAQ-Seite.
 * Bewusst typografisch statt sektion-haft — Übergangscharakter.
 */
const FaqHint = ({
  text = "Weitere Fragen beantworten wir ausführlich in unseren",
  linkLabel = "FAQ",
}: FaqHintProps) => (
  <section className="surface-cream">
    <div className="container-premium py-12 md:py-16">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <div className="h-px w-10 bg-accent/60 mb-5" aria-hidden="true" />
        <p className="text-[0.95rem] md:text-[1rem] leading-[1.8] text-muted-foreground">
          {text}{" "}
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 font-medium text-primary border-b border-accent/60 pb-0.5 transition-colors hover:text-accent hover:border-accent"
          >
            {linkLabel}
            <ArrowRight size={13} className="text-accent" />
          </Link>
          .
        </p>
      </div>
    </div>
  </section>
);

export default FaqHint;
