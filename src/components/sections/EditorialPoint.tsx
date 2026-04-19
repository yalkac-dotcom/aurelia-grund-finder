interface EditorialPointProps {
  index: number;
  title: string;
  text: string;
  tone?: "light" | "dark";
  /** Lange Serifen-Label (z. B. "01 / Diskret") statt einfacher Nummer. */
  label?: string;
}

/**
 * Typografischer Aussagepunkt — keine Karte, keine Box, nur Hairline + Serif-Label.
 * Für „Versprechen", „Prinzipien", „Argumente" auf Cream- oder Navy-Sektionen.
 */
const EditorialPoint = ({ index, title, text, tone = "light", label }: EditorialPointProps) => {
  const isDark = tone === "dark";
  const labelText = label ?? String(index + 1).padStart(2, "0");

  return (
    <div className="flex flex-col">
      <span className={isDark ? "index-item__label index-item__label--dark" : "index-item__label"}>
        {labelText}
      </span>
      <h3
        className={`text-[1.02rem] md:text-[1.08rem] font-heading font-medium leading-snug tracking-[-0.005em] ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-[0.88rem] leading-[1.8] ${
          isDark ? "text-white/72" : "text-muted-foreground"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default EditorialPoint;
