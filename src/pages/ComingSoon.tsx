import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Aurelia Estates";

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
      className="flex min-h-screen items-center justify-center px-6"
      style={{ background: "hsl(218 46% 20%)" }}
    >
      <h1
        className="text-center font-light tracking-tight"
        style={{
          color: "#ffffff",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.6rem, 4.2vw, 2.6rem)",
          lineHeight: 1.3,
          letterSpacing: "0.01em",
        }}
      >
        Unsere neue Website
        <span
          aria-hidden="true"
          className="mx-auto my-6 block h-px w-12"
          style={{ background: "hsl(43 56% 54%)" }}
        />
        <span style={{ color: "rgba(255,255,255,0.92)" }}>entsteht.</span>
      </h1>
    </div>
  );
};

export default ComingSoon;
