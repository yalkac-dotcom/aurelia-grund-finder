import { useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Aurelia Estates – Unsere neue Website entsteht";

    const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const robots = ensureMeta("robots", "noindex, nofollow");
    const desc = ensureMeta(
      "description",
      "Aurelia Estates – unsere neue Website entsteht. Diskrete, strukturierte Begleitung in besonderen Immobiliensituationen.",
    );

    return () => {
      robots.setAttribute("content", "index, follow");
      desc.setAttribute(
        "content",
        "Aurelia Grundbesitz kauft Immobilien und immobilienbezogene Forderungen auf eigene Rechnung – bei drohender Zwangsversteigerung, Gläubigerdruck oder festgefahrenen Erbengemeinschaften. Diskret, verbindlich, keine Finanzdienstleistung.",
      );
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-between px-6 py-10 text-center"
      style={{ background: "hsl(218 46% 20%)", color: "#ffffff" }}
    >
      {/* Subtle gold radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(43 56% 54% / 0.10), transparent 60%)",
        }}
      />

      {/* Top: brand */}
      <header className="relative z-10 pt-6 md:pt-10">
        <div className="flex flex-col items-center gap-3">
          <span
            aria-hidden="true"
            className="block h-[2px] w-10"
            style={{ background: "hsl(43 56% 54%)" }}
          />
          <p
            className="text-[0.72rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: "hsl(43 56% 64%)" }}
          >
            Aurelia Estates
          </p>
        </div>
      </header>

      {/* Center: message */}
      <main className="relative z-10 mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center">
        <h1
          className="font-heading text-3xl font-light leading-[1.2] tracking-tight md:text-5xl"
          style={{ color: "#ffffff" }}
        >
          Unsere neue Website entsteht.
        </h1>

        <p
          className="mt-6 text-[0.98rem] leading-[1.85] md:text-[1.05rem]"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Wir überarbeiten unseren digitalen Auftritt, um Eigentümern, Gläubigern
          und Partnern künftig noch klarer zu zeigen, wie wir in besonderen
          Immobiliensituationen unterstützen.
        </p>

        <div
          className="mx-auto mt-10 h-px w-16"
          style={{ background: "hsl(43 56% 54% / 0.6)" }}
          aria-hidden="true"
        />

        <p
          className="mt-8 max-w-xl text-[0.9rem] leading-[1.8] italic"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Aurelia Estates begleitet Immobilienfälle mit besonderem Handlungsbedarf
          – diskret, strukturiert und lösungsorientiert.
        </p>

        <a
          href="mailto:office@aureliaestates.de"
          className="mt-10 inline-flex min-h-[44px] items-center justify-center rounded-sm px-7 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] transition-colors"
          style={{
            background: "hsl(43 56% 54%)",
            color: "hsl(218 46% 16%)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(43 56% 60%)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(43 56% 54%)")}
        >
          Kontakt aufnehmen
        </a>

        <a
          href="mailto:office@aureliaestates.de"
          className="mt-5 text-[0.85rem] tracking-wide underline-offset-4 hover:underline"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          office@aureliaestates.de
        </a>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-10 flex w-full flex-col items-center gap-3 pb-2">
        <div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.18em]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <Link to="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.25)" }}>•</span>
          <Link to="/datenschutz" className="hover:text-white transition-colors">
            Datenschutz
          </Link>
        </div>
        <p
          className="text-[0.72rem]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          © {new Date().getFullYear()} Aurelia Estates. Alle Rechte vorbehalten.
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
