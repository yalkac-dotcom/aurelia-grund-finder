interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  goldLine?: boolean;
}

const SectionHeading = ({ title, subtitle, align = "left", goldLine = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
    {goldLine && (
      <div className={`w-12 h-0.5 bg-accent mb-4 ${align === "center" ? "mx-auto" : ""}`} />
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
