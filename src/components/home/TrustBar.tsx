const items = [
  "Amtsgericht Düsseldorf · HRB 107859",
  "Ankauf auf eigene Rechnung",
  "Diskret · Verbindlich",
];

const TrustBar = () => (
  <section
    aria-label="Vertrauenshinweise"
    className="w-full border-y border-border/30"
    style={{ backgroundColor: "#f5f4f1" }}
  >
    <div className="container flex min-h-[64px] flex-wrap items-center justify-center gap-x-2 gap-y-2 py-3 text-center md:py-0">
      {items.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-muted-foreground/40 hidden md:inline">·</span>}
          <span className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium tracking-[0.02em] text-foreground/80">
            <span className="text-[hsl(45_70%_45%)]">✓</span>
            {label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
