interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  goldLine?: boolean;
}

const SectionHeading = ({ title, subtitle, align = "left", goldLine = true }: SectionHeadingProps) => (
  <div className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
    {goldLine && (
      <div className={`w-10 h-px bg-accent mb-6 ${align === "center" ? "mx-auto" : ""}`} />
    )}
    <h2 className="text-[2rem] md:text-[2.75rem] font-heading font-semibold text-foreground leading-[1.15]">{title}</h2>
    {subtitle && (
      <p className="mt-5 text-muted-foreground text-[1.1rem] max-w-2xl leading-[1.8]">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
