import { useState } from "react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { MapPin, Mail, Phone, Send, Clock, CheckCircle } from "lucide-react";

const betreffOptions = [
  "Allgemeine Anfrage",
  "Ankaufangebot",
  "Kooperationsanfrage",
  "Rückrufwunsch",
];

const inputClasses =
  "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent placeholder:text-muted-foreground/50";

const labelClasses = "block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kontakt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Kontaktieren Sie uns
          </h1>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-8" />
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-xl mx-auto">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sie haben Fragen zu unseren Leistungen, ein konkretes Ankaufangebot oder
            wünschen einen persönlichen Rückruf? Wir freuen uns auf Ihre Nachricht und
            melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-secondary/50 border border-border rounded-sm p-8 text-center group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="text-accent" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Adresse</h3>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                <p>Aurelia Grundbesitz GmbH</p>
                <p>Grevenbroicher Weg 2</p>
                <p>40547 Düsseldorf</p>
              </address>
            </div>

            {/* Email */}
            <div className="bg-secondary/50 border border-border rounded-sm p-8 text-center group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="text-accent" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">E-Mail</h3>
              <a
                href="mailto:info@aurelia-grundbesitz.de"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                info@aurelia-grundbesitz.de
              </a>
            </div>

            {/* Phone */}
            <div className="bg-secondary/50 border border-border rounded-sm p-8 text-center group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Phone className="text-accent" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Telefon</h3>
              <p className="text-sm text-muted-foreground">+49 (0) 211 – XXX XXXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-6xl mx-auto">
        <div className="h-px bg-border" />
      </div>

      {/* Form + Sidebar */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form – 3/5 */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Send className="text-primary-foreground" size={16} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Nachricht senden</h2>
              </div>

              {submitted ? (
                <div className="bg-secondary/50 border border-accent/20 rounded-sm p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Vielen Dank!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Anrede */}
                  <div>
                    <label htmlFor="anrede" className={labelClasses}>Anrede</label>
                    <select id="anrede" name="anrede" className={inputClasses}>
                      <option value="">Bitte wählen</option>
                      <option value="Herr">Herr</option>
                      <option value="Frau">Frau</option>
                      <option value="Divers">Divers</option>
                      <option value="Keine Angabe">Keine Angabe</option>
                    </select>
                  </div>

                  {/* Vorname + Nachname */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vorname" className={labelClasses}>
                        Vorname <span className="text-accent">*</span>
                      </label>
                      <input
                        id="vorname" name="vorname" type="text" required
                        className={inputClasses} placeholder="Ihr Vorname"
                      />
                    </div>
                    <div>
                      <label htmlFor="nachname" className={labelClasses}>
                        Nachname <span className="text-accent">*</span>
                      </label>
                      <input
                        id="nachname" name="nachname" type="text" required
                        className={inputClasses} placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>

                  {/* E-Mail + Telefon */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        E-Mail-Adresse <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        className={inputClasses} placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className={labelClasses}>Telefonnummer</label>
                      <input
                        id="telefon" name="telefon" type="tel"
                        className={inputClasses} placeholder="+49 (0) 211 ..."
                      />
                    </div>
                  </div>

                  {/* Betreff */}
                  <div>
                    <label htmlFor="betreff" className={labelClasses}>Betreff</label>
                    <select id="betreff" name="betreff" className={inputClasses}>
                      <option value="">Bitte wählen</option>
                      {betreffOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="nachricht" className={labelClasses}>
                      Ihre Nachricht <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="nachricht" name="nachricht" rows={5} required
                      className={`${inputClasses} resize-none`}
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox" name="datenschutz" required
                        className="mt-0.5 h-4 w-4 rounded-sm border-border text-primary focus:ring-accent accent-primary"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        Ich habe die{" "}
                        <a href="/datenschutz" className="text-accent underline underline-offset-2 hover:text-accent/80">
                          Datenschutzhinweise
                        </a>{" "}
                        gelesen und akzeptiere sie. <span className="text-accent">*</span>
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox" name="rueckruf"
                        className="mt-0.5 h-4 w-4 rounded-sm border-border text-primary focus:ring-accent accent-primary"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        Ich wünsche einen telefonischen Rückruf.
                      </span>
                    </label>
                  </div>

                  {/* Pflichtfeld + Submit */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">*</span> Pflichtfelder
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
                    >
                      <Send size={14} />
                      Nachricht senden
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar – 2/5 */}
            <aside className="lg:col-span-2">
              {/* Geschäftsführer */}
              <div className="bg-primary text-primary-foreground rounded-sm p-8 mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ihr Ansprechpartner
                </h3>
                <p className="text-xl font-bold mb-1">Yasar Alkac</p>
                <p className="text-primary-foreground/60 text-sm">Geschäftsführer</p>
                <div className="w-10 h-px bg-accent/40 my-5" />
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Über 30 Jahre gebündelte Erfahrung in Immobilien und Kapitalanlagen.
                  Persönliche Beratung und individuelle Lösungen.
                </p>
              </div>

              {/* Erreichbarkeit */}
              <div className="border border-border rounded-sm p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="text-accent" size={18} />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                    Erreichbarkeit
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Montag – Freitag</span>
                    <span className="text-foreground font-medium">09:00 – 18:00</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samstag</span>
                    <span className="text-foreground font-medium">nach Vereinbarung</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sonntag</span>
                    <span className="text-foreground font-medium">geschlossen</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-accent/5 rounded-sm">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Anfragen per E-Mail werden auch außerhalb der Geschäftszeiten entgegengenommen und zeitnah bearbeitet.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Google Maps – Full Width */}
      <section>
        <div className="container max-w-6xl mx-auto pb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <MapPin className="text-primary-foreground" size={16} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Unser Standort</h2>
          </div>
          <div className="rounded-sm overflow-hidden border border-border">
            <iframe
              title="Standort Aurelia Grundbesitz GmbH"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
