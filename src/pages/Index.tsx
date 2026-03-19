import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const InlineCta = ({ label }: { label: string }) => (
  <div className="mt-16 text-center">
    <Link
      to="/kontakt"
      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline tracking-wide"
    >
      {label}
      <ArrowRight size={14} />
    </Link>
  </div>
);

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
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <div className="w-16 h-px bg-accent mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.15] mb-6 tracking-tight">
              {t.hero.slogan}
            </h1>
            <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {t.hero.subtitle}
            </p>
            <Link
              to="#cta"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="w-12 h-px bg-accent mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
            {l.problemTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            {l.problemText}
          </p>
          <ul className="space-y-4">
            {l.problemPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-accent mb-6 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {l.solutionTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {l.solutionSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {l.solutionItems.map((item, i) => (
              <div key={item.title}>
                <span className="text-accent text-sm font-medium tracking-widest uppercase mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <InlineCta label={l.inlineCta} />
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-accent mb-6 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {l.trustTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {l.trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center mx-auto mb-5">
                  <Check className="text-accent" size={18} />
                </div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offer / Models ── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-accent mb-6 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {l.offerTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {l.offerSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {l.offerModels.map((model) => (
              <div
                key={model.title}
                className="bg-card p-10 border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">{model.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{model.text}</p>
              </div>
            ))}
          </div>
          <InlineCta label={l.inlineCta} />
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section id="cta" className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <div className="w-12 h-px bg-accent mb-6 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {l.ctaTitle}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {l.ctaSubtitle}
          </p>

          {submitted ? (
            <div className="bg-secondary p-10 border border-border">
              <Check className="text-accent mx-auto mb-4" size={28} />
              <p className="text-foreground font-medium">{l.formSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{l.formName} *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{l.formEmail} *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{l.formPhone}</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                {l.ctaButton}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
