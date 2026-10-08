import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useLanguage } from "@/i18n/LanguageContext";

type CalcCopy = { seoTitle: string; seoDescription: string; kicker: string; title: string; intro: string; inputs: string; price: string; equity: string; sideCost: string; interest: string; repayment: string; fixedYears: string; result: string; side: string; total: string; loan: string; monthly: string; fixed: (years: number, amount: string) => string; noteLabel: string; note: string };

const calcCopy: Record<string, CalcCopy> = {
  de: { seoTitle: "Finanzierungsrechner – unverbindliche Orientierung | Aurelia Grundbesitz", seoDescription: "Unverbindliche Beispielrechnung für Kaufinteressenten: Kaufnebenkosten, Darlehensbedarf und monatliche Rate überschlägig berechnen.", kicker: "Für Kaufinteressenten", title: "Finanzierungsrechner", intro: "Verschaffen Sie sich eine erste, unverbindliche Orientierung zu Kaufnebenkosten, Darlehensbedarf und monatlicher Rate. Die Berechnung erfolgt ausschließlich auf Grundlage Ihrer Eingaben.", inputs: "Ihre Angaben", price: "Kaufpreis (€)", equity: "Eigenkapital (€)", sideCost: "Kaufnebenkosten (%)", interest: "Sollzins pro Jahr (%)", repayment: "Anfängliche Tilgung (%)", fixedYears: "Zinsbindung in Jahren (optional)", result: "Ihr Ergebnis", side: "Kaufnebenkosten", total: "Gesamtkosten des Kaufs", loan: "Darlehensbedarf", monthly: "Voraussichtliche monatliche Rate", fixed: (y, a) => `In ${y} Jahren Zinsbindung zahlen Sie bei gleichbleibender Rate insgesamt ca. ${a} (Zins und Tilgung, ohne Sondertilgungen).`, noteLabel: "Hinweis:", note: "Unverbindliche Beispielrechnung. Keine Finanzierungsberatung und kein Kreditangebot. Zinssätze, Kaufnebenkosten und tatsächliche Finanzierungskonditionen können abweichen." },
  tr: { seoTitle: "Finansman hesaplayıcı – bağlayıcı olmayan ön bilgi | Aurelia Grundbesitz", seoDescription: "Alıcı adayları için bağlayıcı olmayan örnek hesaplama: ek satın alma masrafları, kredi ihtiyacı ve aylık taksit.", kicker: "Alıcı adayları için", title: "Finansman hesaplayıcı", intro: "Ek satın alma masrafları, kredi ihtiyacı ve aylık taksit hakkında ilk, bağlayıcı olmayan bir fikir edinin. Hesaplama yalnızca girdiğiniz bilgilere dayanır.", inputs: "Bilgileriniz", price: "Satın alma fiyatı (€)", equity: "Öz sermaye (€)", sideCost: "Ek satın alma masrafları (%)", interest: "Yıllık borç faizi (%)", repayment: "Başlangıç anapara ödemesi (%)", fixedYears: "Faiz sabitleme süresi, yıl (isteğe bağlı)", result: "Sonucunuz", side: "Ek satın alma masrafları", total: "Toplam satın alma maliyeti", loan: "Kredi ihtiyacı", monthly: "Tahmini aylık taksit", fixed: (y, a) => `${y} yıllık faiz sabitleme süresinde sabit taksitle toplam yaklaşık ${a} ödersiniz (faiz ve anapara, ara ödemeler hariç).`, noteLabel: "Not:", note: "Bağlayıcı olmayan örnek hesaplamadır. Finansman danışmanlığı veya kredi teklifi değildir. Faiz oranları, ek masraflar ve gerçek finansman koşulları farklılık gösterebilir." },
  en: { seoTitle: "Financing calculator – non-binding guidance | Aurelia Grundbesitz", seoDescription: "Non-binding sample calculation for prospective buyers: estimate purchase costs, loan requirement and monthly instalment.", kicker: "For prospective buyers", title: "Financing calculator", intro: "Get an initial, non-binding idea of purchase costs, loan requirement and monthly instalment. The calculation is based solely on your entries.", inputs: "Your details", price: "Purchase price (€)", equity: "Equity (€)", sideCost: "Additional purchase costs (%)", interest: "Interest rate per year (%)", repayment: "Initial repayment (%)", fixedYears: "Fixed-rate period in years (optional)", result: "Your result", side: "Additional purchase costs", total: "Total cost of purchase", loan: "Loan requirement", monthly: "Estimated monthly instalment", fixed: (y, a) => `Over a ${y}-year fixed-rate period with a constant instalment, you pay a total of approx. ${a} (interest and repayment, excluding special repayments).`, noteLabel: "Note:", note: "Non-binding sample calculation. No financing advice and no loan offer. Interest rates, additional purchase costs and actual financing terms may differ." },
  nl: { seoTitle: "Financieringscalculator – vrijblijvende oriëntatie | Aurelia Grundbesitz", seoDescription: "Vrijblijvende voorbeeldberekening voor kopers: bijkomende kosten, leenbehoefte en maandlast globaal berekenen.", kicker: "Voor kopers", title: "Financieringscalculator", intro: "Krijg een eerste, vrijblijvende indruk van bijkomende kosten, leenbehoefte en maandlast. De berekening is uitsluitend gebaseerd op uw invoer.", inputs: "Uw gegevens", price: "Koopprijs (€)", equity: "Eigen vermogen (€)", sideCost: "Bijkomende aankoopkosten (%)", interest: "Rente per jaar (%)", repayment: "Aanvankelijke aflossing (%)", fixedYears: "Rentevaste periode in jaren (optioneel)", result: "Uw resultaat", side: "Bijkomende aankoopkosten", total: "Totale aankoopkosten", loan: "Leenbehoefte", monthly: "Verwachte maandlast", fixed: (y, a) => `Bij een rentevaste periode van ${y} jaar en een gelijkblijvende maandlast betaalt u in totaal ca. ${a} (rente en aflossing, zonder extra aflossingen).`, noteLabel: "Opmerking:", note: "Vrijblijvende voorbeeldberekening. Geen financieringsadvies en geen kredietaanbod. Rentetarieven, bijkomende kosten en werkelijke financieringsvoorwaarden kunnen afwijken." },
  it: { seoTitle: "Calcolatore di finanziamento – orientamento non vincolante | Aurelia Grundbesitz", seoDescription: "Calcolo esemplificativo non vincolante per acquirenti: costi accessori, fabbisogno di mutuo e rata mensile.", kicker: "Per gli acquirenti", title: "Calcolatore di finanziamento", intro: "Ottenete un primo orientamento non vincolante su costi accessori, fabbisogno di mutuo e rata mensile. Il calcolo si basa esclusivamente sui vostri dati.", inputs: "I vostri dati", price: "Prezzo di acquisto (€)", equity: "Capitale proprio (€)", sideCost: "Costi accessori di acquisto (%)", interest: "Tasso di interesse annuo (%)", repayment: "Rimborso iniziale (%)", fixedYears: "Durata del tasso fisso in anni (facoltativo)", result: "Il vostro risultato", side: "Costi accessori di acquisto", total: "Costo totale dell'acquisto", loan: "Fabbisogno di mutuo", monthly: "Rata mensile prevista", fixed: (y, a) => `In ${y} anni di tasso fisso, con rata costante, pagate complessivamente circa ${a} (interessi e rimborso, senza rimborsi straordinari).`, noteLabel: "Nota:", note: "Calcolo esemplificativo non vincolante. Nessuna consulenza finanziaria e nessuna offerta di credito. Tassi di interesse, costi accessori e condizioni effettive di finanziamento possono variare." },
  es: { seoTitle: "Calculadora de financiación – orientación sin compromiso | Aurelia Grundbesitz", seoDescription: "Cálculo de ejemplo sin compromiso para compradores: gastos de compra, necesidad de préstamo y cuota mensual.", kicker: "Para compradores", title: "Calculadora de financiación", intro: "Obtenga una primera orientación sin compromiso sobre gastos de compra, necesidad de préstamo y cuota mensual. El cálculo se basa exclusivamente en sus datos.", inputs: "Sus datos", price: "Precio de compra (€)", equity: "Capital propio (€)", sideCost: "Gastos adicionales de compra (%)", interest: "Tipo de interés anual (%)", repayment: "Amortización inicial (%)", fixedYears: "Periodo de interés fijo en años (opcional)", result: "Su resultado", side: "Gastos adicionales de compra", total: "Coste total de la compra", loan: "Necesidad de préstamo", monthly: "Cuota mensual estimada", fixed: (y, a) => `En ${y} años de interés fijo, con cuota constante, pagará en total aprox. ${a} (intereses y amortización, sin amortizaciones extraordinarias).`, noteLabel: "Nota:", note: "Cálculo de ejemplo sin compromiso. No constituye asesoramiento financiero ni una oferta de crédito. Los tipos de interés, los gastos de compra y las condiciones reales de financiación pueden variar." },
  fr: { seoTitle: "Simulateur de financement – orientation sans engagement | Aurelia Grundbesitz", seoDescription: "Calcul indicatif sans engagement pour acquéreurs : frais d'acquisition, besoin de prêt et mensualité.", kicker: "Pour les acquéreurs", title: "Simulateur de financement", intro: "Obtenez une première orientation, sans engagement, sur les frais d'acquisition, le besoin de prêt et la mensualité. Le calcul repose uniquement sur vos saisies.", inputs: "Vos données", price: "Prix d'achat (€)", equity: "Apport personnel (€)", sideCost: "Frais d'acquisition (%)", interest: "Taux d'intérêt annuel (%)", repayment: "Amortissement initial (%)", fixedYears: "Durée du taux fixe en années (facultatif)", result: "Votre résultat", side: "Frais d'acquisition", total: "Coût total de l'achat", loan: "Besoin de prêt", monthly: "Mensualité estimée", fixed: (y, a) => `Sur une période de taux fixe de ${y} ans, avec une mensualité constante, vous payez au total env. ${a} (intérêts et amortissement, hors remboursements anticipés).`, noteLabel: "Remarque :", note: "Calcul indicatif sans engagement. Ni conseil en financement ni offre de crédit. Les taux d'intérêt, les frais d'acquisition et les conditions réelles de financement peuvent différer." },
};

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
  const { language } = useLanguage();
  const c = calcCopy[language] ?? calcCopy.de;
  usePageSeo(c.seoTitle, c.seoDescription);

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
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">{c.kicker}</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-primary [overflow-wrap:anywhere] md:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.85] text-muted-foreground">
            {c.intro}
          </p>
        </section>

        <section className="container-premium pb-10 md:pb-12">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="border-l-2 border-accent bg-card px-6 py-6 md:px-8 md:py-7">
              <h2 className="font-heading text-xl font-semibold text-primary">{c.inputs}</h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.price}
                  <input inputMode="decimal" className={inputClass} value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.equity}
                  <input inputMode="decimal" className={inputClass} value={equity} onChange={(e) => setEquity(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.sideCost}
                  <input inputMode="decimal" className={inputClass} value={sideCostPct} onChange={(e) => setSideCostPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.interest}
                  <input inputMode="decimal" className={inputClass} value={interestPct} onChange={(e) => setInterestPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.repayment}
                  <input inputMode="decimal" className={inputClass} value={repaymentPct} onChange={(e) => setRepaymentPct(e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-primary">
                  {c.fixedYears}
                  <input inputMode="numeric" className={inputClass} value={fixedYears} onChange={(e) => setFixedYears(e.target.value)} />
                </label>
              </div>
            </div>

            <div className="border-l-2 border-accent bg-primary px-6 py-6 md:px-8 md:py-7">
              <h2 className="font-heading text-xl font-semibold text-primary-foreground">{c.result}</h2>
              <dl className="mt-5 grid gap-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">{c.side}</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.side)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">{c.total}</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.total)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt className="text-sm text-primary-foreground/75">{c.loan}</dt>
                  <dd className="font-heading text-lg font-semibold text-primary-foreground">{eur(r.loan)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-primary-foreground/75">{c.monthly}</dt>
                  <dd className="font-heading text-2xl font-semibold text-accent">{eur2(r.monthly)}</dd>
                </div>
                {r.years > 0 && (
                  <p className="text-xs leading-5 text-primary-foreground/60">
                    {c.fixed(r.years, eur(r.paidInFixed))}
                  </p>
                )}
              </dl>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-5xl border border-accent/40 bg-card px-5 py-4 text-sm leading-6 text-muted-foreground">
            <span className="font-semibold text-primary">{c.noteLabel}</span> {c.note}
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default FinancingCalculator;
