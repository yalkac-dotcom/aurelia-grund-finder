import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  /** Optionales Eyebrow-Label (Kategorie, z. B. "Drei Wege"). */
  eyebrow?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Größenvariante: "default" (Editorial-Display) oder "compact" (kleinere Sektionsüberschrift). */
  size?: "default" | "compact";
}

const SectionHeader = ({
  title,
  intro,
  eyebrow,
  align = "center",
  tone = "light",
  size = "default",
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  const titleSize =
    size === "compact"
      ? "text-[1.4rem] md:text-[1.8rem]"
      : "text-[1.7rem] md:text-[2.45rem] lg:text-[2.7rem]";

  return (
    <Reveal>
      <div className={`mb-12 md:mb-14 ${isCenter ? "text-center" : "max-w-3xl"}`}>
        {eyebrow ? (
          <p
            className={`eyebrow ${isCenter ? "eyebrow--center justify-center" : ""} ${
              isDark ? "eyebrow--dark" : ""
            } mb-5`}
          >
            {eyebrow}
          </p>
        ) : (
          <div
            className={`mb-4 h-px w-10 ${isCenter ? "mx-auto" : ""}`}
            style={{ background: "hsl(var(--accent) / 0.7)" }}
          />
        )}

        <h2
          className={`font-heading font-medium leading-[1.12] tracking-[-0.01em] text-balance ${titleSize} ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>

        {intro && (
          <p
            className={`mt-5 md:mt-6 ${isCenter ? "mx-auto" : ""} max-w-2xl text-[0.95rem] md:text-[1rem] leading-[1.85] ${
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
