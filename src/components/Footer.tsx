import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="leading-tight mb-4">
            <span className="text-primary-foreground font-bold text-xl tracking-[0.15em] uppercase">Aurelia</span>
            <span className="block text-primary-foreground/50 text-[10px] tracking-[0.25em] uppercase font-light">Grundbesitz GmbH</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Werte schaffen aus besonderen Situationen – Ihr Partner für Immobilieninvestments in Deutschland.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-medium text-sm uppercase tracking-widest text-accent mb-4">Navigation</h4>
          <ul className="space-y-2">
            {[
              { label: "Startseite", path: "/" },
              { label: "Über Aurelia", path: "/ueber-uns" },
              { label: "Leistungen", path: "/leistungen" },
              { label: "Steuervorteile", path: "/steuervorteile" },
              { label: "Für Investoren", path: "/investoren" },
              { label: "Kontakt", path: "/kontakt" },
            ].map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium text-sm uppercase tracking-widest text-accent mb-4">Kontakt</h4>
          <address className="not-italic text-primary-foreground/70 text-sm leading-relaxed space-y-1">
            <p>Aurelia Grundbesitz GmbH</p>
            <p>Grevenbroicher Weg 2</p>
            <p>40547 Düsseldorf, Germany</p>
          </address>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/impressum" className="text-primary-foreground/50 text-xs hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-primary-foreground/50 text-xs hover:text-accent transition-colors">Datenschutz</Link>
          </div>
        </div>
        <p className="text-primary-foreground/40 text-[10px] mt-4 text-center leading-relaxed">
          Hinweis: Die Inhalte dieser Website dienen ausschließlich allgemeinen Informationszwecken
          und stellen keine rechtliche, steuerliche oder finanzielle Beratung dar.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
