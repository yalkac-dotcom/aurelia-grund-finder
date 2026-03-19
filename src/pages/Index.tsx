import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const l = t.landing;

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container py-32 md:py-40">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-primary-foreground leading-[1.35] tracking-tight">
              {t.hero.slogan}
            </h1>
            <p className="text-primary-foreground/45 text-sm md:text-base leading-relaxed mt-8 max-w-lg">
              {t.hero.subtitle}
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-3 border border-primary-foreground/20 text-primary-foreground/80 px-7 py-3.5 text-xs tracking-[0.2em] uppercase mt-14 hover:border-primary-foreground/40 transition-colors"
            >
              {t.hero.cta}
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-28 md:py-40">
        <div className="container max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Ausgangslage
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-8">
            {l.problemTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            {l.problemText}
          </p>
          <div className="space-y-5 border-l border-border pl-8">
            {l.problemPoints.map((point) => (
              <p key={point} className="text-sm text-muted-foreground leading-relaxed">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thin divider ── */}
      <div className="container max-w-2xl"><div className="h-px bg-border" /></div>

      {/* ── Solution ── */}
      <section className="py-28 md:py-40">
        <div className="container max-w-4xl">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Methodik
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-6">
            {l.solutionTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            {l.solutionSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-16">
            {l.solutionItems.map((item, i) => (
              <div key={item.title}>
                <span className="text-xs text-muted-foreground/50 tracking-[0.2em] block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thin divider ── */}
      <div className="container max-w-2xl"><div className="h-px bg-border" /></div>

      {/* ── Trust ── */}
      <section className="py-28 md:py-40">
        <div className="container max-w-3xl">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Qualitätsstandard
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-16">
            {l.trustTitle}
          </h2>
          <div className="space-y-12">
            {l.trustItems.map((item) => (
              <div key={item.label} className="grid md:grid-cols-[200px_1fr] gap-4">
                <h3 className="text-sm font-bold text-foreground tracking-wide">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thin divider ── */}
      <div className="container max-w-2xl"><div className="h-px bg-border" /></div>

      {/* ── Offer / Models ── */}
      <section className="py-28 md:py-40">
        <div className="container max-w-3xl">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Modelle
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-6">
            {l.offerTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-xl">
            {l.offerSubtitle}
          </p>
          <div className="space-y-10">
            {l.offerModels.map((model) => (
              <div key={model.title} className="border-l-2 border-accent pl-8">
                <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section id="cta" className="py-28 md:py-40 bg-primary">
        <div className="container max-w-md text-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary-foreground leading-snug mb-4">
            {l.ctaTitle}
          </h2>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-14">
            {l.ctaSubtitle}
          </p>

          {submitted ? (
            <p className="text-primary-foreground/80 text-sm">{l.formSuccess}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <input
                required
                placeholder={l.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground text-sm py-3 placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                required
                type="email"
                placeholder={l.formEmail}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground text-sm py-3 placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                placeholder={l.formPhone}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground text-sm py-3 placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
              />
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full border border-accent text-accent py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {l.ctaButton}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
