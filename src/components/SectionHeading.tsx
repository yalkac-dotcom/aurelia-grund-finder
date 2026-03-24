interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  goldLine?: boolean;
}

const SectionHeading = ({ title, subtitle, align = "left", goldLine = true }: SectionHeadingProps) => (
  <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
    {goldLine && (
      <div className={`w-8 h-px bg-accent mb-5 ${align === "center" ? "mx-auto" : ""}`} />
    )}
    <h2 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.15]">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-[0.95rem] max-w-xl leading-[1.8]">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
