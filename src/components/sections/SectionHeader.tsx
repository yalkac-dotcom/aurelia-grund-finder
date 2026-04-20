import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  disableOffset?: boolean;
}

const SectionHeader = ({ title, intro, align = "center", tone = "light", disableOffset = false }: SectionHeaderProps) => {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <Reveal disableOffset={disableOffset}>
      <div className={`mb-10 ${isCenter ? "text-center" : ""}`}>
        <div
          className={`mb-3 h-[2px] w-10 ${isCenter ? "mx-auto" : ""}`}
          style={{ background: "hsl(var(--accent))" }}
        />
        <h2
          className={`mb-4 font-heading font-bold leading-[1.2] text-balance text-[1.625rem] md:text-[2.25rem] ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mx-auto max-w-2xl text-[0.93rem] leading-[1.85] ${
              isDark ? "text-white/75" : "text-muted-foreground"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeader;
