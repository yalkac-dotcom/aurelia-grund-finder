const items = [
  "Amtsgericht Düsseldorf · HRB 107859",
  "Ankauf auf eigene Rechnung",
  "Diskret · Verbindlich",
];

const TrustBar = () => (
  <section
    aria-label="Vertrauenshinweise"
    className="w-full bg-highlight text-white"
  >
    <div className="container flex min-h-[64px] flex-wrap items-center justify-center gap-x-2 gap-y-2 py-3 text-center md:py-0">
      {items.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/40 hidden md:inline">·</span>}
          <span className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium tracking-[0.02em] text-white/95">
            <span className="text-[hsl(var(--accent))]">✓</span>
            {label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
