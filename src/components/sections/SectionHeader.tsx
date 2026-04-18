import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

const SectionHeader = ({ title, intro, align = "center", tone = "light" }: SectionHeaderProps) => {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <Reveal>
      <div className={`mb-10 ${isCenter ? "text-center" : ""}`}>
        <div
          className={`mb-4 h-px w-12 ${isCenter ? "mx-auto" : ""}`}
          style={{ background: isDark ? "hsl(45 70% 60% / 0.6)" : "hsl(45 60% 50% / 0.55)" }}
        />
        <h2
          className={`mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-balance md:text-[1.9rem] ${
            isDark ? "text-white" : "text-foreground"
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
