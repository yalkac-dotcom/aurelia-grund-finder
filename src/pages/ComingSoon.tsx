import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Aurelia Grundbesitz";

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const robots = ensureMeta("robots", "noindex, nofollow");
    const desc = ensureMeta("description", "");

    return () => {
      robots.setAttribute("content", "index, follow");
      desc.setAttribute("content", "");
    };
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6 py-16"
      style={{ background: "hsl(218 46% 20%)" }}
    >
      <div className="mx-auto max-w-xl text-center">
        <p
          className="text-[0.72rem] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "hsl(43 56% 64%)" }}
        >
          Aurelia Grundbesitz
        </p>

        <span
          aria-hidden="true"
          className="mx-auto my-8 block h-px w-12"
          style={{ background: "hsl(43 56% 54%)" }}
        />

        <h1
          className="font-light tracking-tight"
          style={{
            color: "#ffffff",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.6rem, 4.2vw, 2.4rem)",
            lineHeight: 1.3,
            letterSpacing: "0.01em",
          }}
        >
          Unsere Website geht in Kürze online.
        </h1>

        <p
          className="mt-6 text-[0.95rem] leading-[1.8]"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          Bis dahin sind wir vertraulich erreichbar.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
