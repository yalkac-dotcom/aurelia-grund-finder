import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Über Aurelia", path: "/ueber-uns" },
  { label: "Leistungen", path: "/leistungen" },
  { label: "Steuervorteile", path: "/steuervorteile" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="leading-tight font-ubuntu">
            <span className="text-foreground font-bold text-lg tracking-wide uppercase">Aurelia</span>
            <span className="block text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-light">Grundbesitz GmbH</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                location.pathname === item.path
                  ? "text-foreground font-medium border-b-2 border-accent pb-0.5"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm border-b border-border transition-colors hover:bg-secondary ${
                location.pathname === item.path
                  ? "text-foreground font-medium bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
