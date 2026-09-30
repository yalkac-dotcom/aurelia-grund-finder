import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { usePageSeo } from "@/hooks/usePageSeo";

const parseNumber = (value: string): number => {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const n = Number(normalized);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

const eur = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const eur2 = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-accent";

const FinancingCalculator = () => {
  usePageSeo(
    "Finanzierungsrechner – unverbindliche Orientierung | Aurelia Grundbesitz",
    "Unverbindliche Beispielrechnung für Kaufinteressenten: Kaufnebenkosten, Darlehensbedarf und monatliche Rate überschlägig berechnen."
  );

  const [price, setPrice] = useState("350.000");
  const [equity, setEquity] = useState("70.000");
  const [sideCostPct, setSideCostPct] = useState("10");
  const [interestPct, setInterestPct] = useState("3,5");
  const [repaymentPct, setRepaymentPct] = useState("2");
  const [fixedYears, setFixedYears] = useState("10");

  const r = useMemo(() => {
    const p = parseNumber(price);
    const ek = parseNumber(equity);
    const side = p * (parseNumber(sideCostPct) / 100);
    const total = p + side;
    const loan = Math.max(total - ek, 0);
    const monthly = (loan * (parseNumber(interestPct) + parseNumber(repaymentPct))) / 100 / 12;
    const years = parseNumber(fixedYears);
    const paidInFixed = monthly * 12 * years;
    return { p, side, total, loan, monthly, years, paidInFixed };
  }, [price, equity, sideCostPct, interestPct, repaymentPct, fixedYears]);

  return (
    <Layout>
      <main className="bg-gradient-warm pt-10 md:pt-12">
        <section className="container-premium pb-10 text-center md:pb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">Für Kaufinteressenten</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-primary [overflow-wrap:anywhere] md:text-5xl">
            Finanzierungsrechner
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.85] text-muted-foreground">
            Verschaffen Sie sich eine erste, unverbindliche Orientierung zu Kaufnebenkosten, Darlehensbedarf und
            monatlicher Rate. Die Berechnung erfolgt ausschließlich auf Grundlage Ihrer Eingaben.
          </p>
        </section>

        <section className="container-premium pb-10 md:pb-12">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="border-l-2 border-accent bg-card px-6 py-6 md:px-8 md:py-7">
              <h2 className="font-heading text-xl font-semibold text-primary">Ihre Angaben</h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Kaufpreis (€)
                  <input inputMode="decimal" className={inputClass} value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Eigenkapital (€)
                  <input inputMode="decimal" className={inputClass} value={equity} onChange={(e) => setEquity(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Kaufnebenkosten (%)
                  <input inputMode="decimal" className={inputClass} value={sideCostPct} onChange={(e) => setSideCostPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Sollzins pro Jahr (%)
                  <input inputMode="decimal" className={inputClass} value={interestPct} onChange={(e) => setInterestPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Anfängliche Tilgung (%)
                  <input inputMode="decimal" className={inputClass} value={repaymentPct} onChange={(e) => setRepaymentPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  Zinsbindung in Jahren (optional)
                  <input inputMode="numeric" className={inputClass} value={fixedYears} onChange={(e) => setFixedYears(e.target.value)} />
                </label>
              </div>
            </div>

            <div className="border-l-2 border-accent bg-primary px-6 py-6 md:px-8 md:py-7">
              <h2 className="font-heading text-xl font-semibold text-primary-foreground">Ihr Ergebnis</h2>
              <dl className="mt-5 grid gap-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">Kaufnebenkosten</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.side)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">Gesamtkosten des Kaufs</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.total)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">Darlehensbedarf</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.loan)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-primary-foreground/75">Voraussichtliche monatliche Rate</dt>
                  <dd className="font-heading text-2xl font-semibold text-accent">{eur2(r.monthly)}</dd>
                </div>
                {r.years > 0 && (
                  <p className="text-xs leading-5 text-primary-foreground/60">
                    In {r.years} Jahren Zinsbindung zahlen Sie bei gleichbleibender Rate insgesamt ca.{" "}
                    {eur(r.paidInFixed)} (Zins und Tilgung, ohne Sondertilgungen).
                  </p>
                )}
              </dl>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-5xl border border-accent/40 bg-card px-5 py-4 text-sm leading-6 text-muted-foreground">
            <span className="font-semibold text-primary">Hinweis:</span> Unverbindliche Beispielrechnung. Keine
            Finanzierungsberatung und kein Kreditangebot. Zinssätze, Kaufnebenkosten und tatsächliche
            Finanzierungskonditionen können abweichen.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default FinancingCalculator;
