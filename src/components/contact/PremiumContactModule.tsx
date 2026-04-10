import { Mail, PhoneCall, CalendarDays, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "@/components/Reveal";

const PremiumContactModule = () => {
  const { t } = useLanguage();

  const ctaItems = [
    {
      icon: Mail,
      label: t.contact.moduleCta1,
      href: "#kontaktformular",
    },
    {
      icon: PhoneCall,
      label: t.contact.moduleCta2,
      href: "mailto:info@aurelia-grundbesitz.de?subject=Rückrufwunsch",
    },
    {
      icon: CalendarDays,
      label: t.contact.moduleCta3,
      href: "mailto:info@aurelia-grundbesitz.de?subject=Terminanfrage",
    },
  ];

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container max-w-3xl">
        <Reveal>
          {/* Fine accent line */}
          <div className="w-10 h-px bg-accent/50 mb-8" />

          <h2 className="text-[1.35rem] md:text-[1.75rem] font-heading font-semibold text-foreground leading-[1.15] mb-4">
            {t.contact.moduleHeading}
          </h2>

          <p className="text-muted-foreground text-sm leading-[1.8] max-w-xl mb-1">
            {t.contact.moduleIntro}
          </p>
          <p className="text-muted-foreground/70 text-sm leading-[1.8] max-w-xl mb-10">
            {t.contact.moduleIntro2}
          </p>
        </Reveal>

        {/* CTA cards */}
        <div className="space-y-3">
          {ctaItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <a
                href={item.href}
                className="group flex items-center gap-5 border border-border bg-background px-6 py-5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-accent/30 text-accent transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent">
                  <item.icon size={17} strokeWidth={1.5} />
                </div>
                <span className="flex-1 text-foreground/85 text-sm font-sans font-medium tracking-wide group-hover:text-foreground transition-colors duration-300">
                  {item.label}
                </span>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground/30 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal delay={0.2}>
          <p className="text-muted-foreground/60 text-xs leading-[1.75] mt-8 max-w-xl">
            {t.contact.moduleNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PremiumContactModule;
