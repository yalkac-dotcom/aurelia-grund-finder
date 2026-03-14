import { useState } from "react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { MapPin, Mail, Phone } from "lucide-react";

const betreffOptions = [
  "Allgemeine Anfrage",
  "Ankaufangebot",
  "Kooperationsanfrage",
  "Rueckrufwunsch",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kontakt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Kontaktieren Sie uns
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sie haben Fragen zu unseren Leistungen, ein konkretes Ankaufangebot oder
            wünschen einen persönlichen Rückruf? Wir freuen uns auf Ihre Nachricht und
            melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Form – 2 cols wide */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Nachricht senden</h2>

              {submitted ? (
                <div className="bg-secondary border border-border p-10 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kuerze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anrede */}
                  <div>
                    <label htmlFor="anrede" className="block text-sm font-medium text-foreground mb-1.5">
                      Anrede
                    </label>
                    <select
                      id="anrede"
                      name="anrede"
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Bitte waehlen</option>
                      <option value="Herr">Herr</option>
                      <option value="Frau">Frau</option>
                      <option value="Divers">Divers</option>
                      <option value="Keine Angabe">Keine Angabe</option>
                    </select>
                  </div>

                  {/* Vorname + Nachname */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vorname" className="block text-sm font-medium text-foreground mb-1.5">
                        Vorname <span className="text-accent">*</span>
                      </label>
                      <input
                        id="vorname"
                        name="vorname"
                        type="text"
                        required
                        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    <div>
                      <label htmlFor="nachname" className="block text-sm font-medium text-foreground mb-1.5">
                        Nachname <span className="text-accent">*</span>
                      </label>
                      <input
                        id="nachname"
                        name="nachname"
                        type="text"
                        required
                        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>

                  {/* E-Mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-Mail-Adresse <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-foreground mb-1.5">
                      Telefonnummer
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="+49 (0) 211 ..."
                    />
                  </div>

                  {/* Betreff */}
                  <div>
                    <label htmlFor="betreff" className="block text-sm font-medium text-foreground mb-1.5">
                      Betreff
                    </label>
                    <select
                      id="betreff"
                      name="betreff"
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Bitte waehlen</option>
                      {betreffOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-foreground mb-1.5">
                      Ihre Nachricht <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={6}
                      required
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                      placeholder="Wie koennen wir Ihnen helfen?"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="datenschutz"
                        required
                        className="mt-1 h-4 w-4 border-border text-primary rounded focus:ring-accent"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Ich habe die Datenschutzhinweise gelesen und akzeptiere sie. <span className="text-accent">*</span>
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rueckruf"
                        className="mt-1 h-4 w-4 border-border text-primary rounded focus:ring-accent"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Ich wuensche einen telefonischen Rueckruf.
                      </span>
                    </label>
                  </div>

                  {/* Pflichtfeld-Hinweis */}
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">*</span> Pflichtfelder
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide rounded hover:bg-navy-light transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <aside className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Kontaktdaten</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent shrink-0 mt-1" size={20} />
                  <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                    <p className="font-medium text-foreground">Aurelia Grundbesitz GmbH</p>
                    <p>Grevenbroicher Weg 2</p>
                    <p>40547 Duesseldorf, Germany</p>
                  </address>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">E-Mail</p>
                    <a href="mailto:info@aurelia-grundbesitz.de" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      info@aurelia-grundbesitz.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Telefon</p>
                    <p className="text-sm text-muted-foreground">+49 (0) 211 – XXX XXXX</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-8" />

              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground mb-2">Geschaeftsfuehrer</p>
                <p>Yasar Alkac</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-0">
        <div className="container max-w-6xl mx-auto pb-24">
          <div className="rounded overflow-hidden border border-border">
            <iframe
              title="Standort Aurelia Grundbesitz GmbH"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7367!3d51.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0b7e1b0d%3A0x0!2sGrevenbroicher+Weg+2%2C+40547+D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
              width="100%"
              height="400"
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
