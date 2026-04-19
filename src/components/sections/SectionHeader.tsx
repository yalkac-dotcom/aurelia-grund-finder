import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Optional kicker label rendered above the title (e.g. "Unsere Wege"). */
  eyebrow?: string;
}

const SectionHeader = ({
  title,
  intro,
  align = "center",
  tone = "light",
  eyebrow,
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <Reveal>
      <div className={`mb-12 md:mb-14 ${isCenter ? "text-center" : ""}`}>
        {eyebrow ? (
          <p
            className={`mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] ${
              isDark ? "text-accent" : "text-accent"
            } ${isCenter ? "" : ""}`}
          >
            <span
              className={`inline-block h-px w-6 align-middle mr-2 ${
                isDark ? "bg-accent/70" : "bg-accent/70"
              }`}
            />
            {eyebrow}
          </p>
        ) : (
          <div
            className={`mb-4 h-px w-10 ${isCenter ? "mx-auto" : ""}`}
            style={{ background: "hsl(var(--accent) / 0.7)" }}
          />
        )}
        <h2
          className={`mb-5 font-heading font-semibold leading-[1.15] text-balance text-[1.7rem] md:text-[2.4rem] tracking-tight ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mx-auto max-w-2xl text-[0.95rem] leading-[1.85] ${
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
