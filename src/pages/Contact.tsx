import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => (
  <Layout>
    {/* Page Hero */}
    <section className="bg-primary py-28">
      <div className="container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Kontakt</h1>
        <p className="text-primary-foreground/70 text-lg mt-4">Wir freuen uns auf Ihre Anfrage.</p>
      </div>
    </section>

    {/* Contact info */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <SectionHeading title="Aurelia Grundbesitz GmbH" />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div className="text-muted-foreground text-sm leading-relaxed">
                  <p>Grevenbroicher Weg 2</p>
                  <p>40547 Düsseldorf, Germany</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground text-sm">info@aurelia-grundbesitz.de</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground text-sm">+49 (0) 211 – XXX XXXX</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading title="Nachricht senden" goldLine={false} />
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">E-Mail</label>
                <input
                  type="email"
                  className="w-full border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nachricht</label>
                <textarea
                  rows={5}
                  className="w-full border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Ihre Nachricht"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
