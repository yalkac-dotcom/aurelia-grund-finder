import { PhoneCall, CalendarDays, ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "@/components/Reveal";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const PremiumContactModule = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container max-w-3xl">
        <Reveal>
          <div className={`${panelBase} ${panelPadding}`}>
            <div className="w-10 h-px bg-accent/50 mb-6" />

            <h2 className="text-[1.25rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.15] mb-3">
              {t.contact.moduleHeading}
            </h2>

            <div className="mb-5 rounded-lg border border-border/40 bg-secondary/40 px-4 py-3.5">
              <p className="text-[0.93rem] text-foreground leading-[1.7]">
                Telefon:{" "}
                <a href="tel:+4921169583033" className="font-medium text-highlight hover:text-accent transition-colors">
                  +49 211 69583033
                </a>
                <span className="block text-xs text-muted-foreground/80 mt-0.5">
                  (Montag–Freitag, auch kurzfristig bei laufenden Verfahren)
                </span>
              </p>
              <p className="text-[0.93rem] text-foreground leading-[1.7] mt-2">
                E-Mail:{" "}
                <a href="mailto:info@aureliaestates.de" className="font-medium text-highlight hover:text-accent transition-colors">
                  info@aureliaestates.de
                </a>
              </p>
            </div>

            <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-xl mb-1">
              {t.contact.moduleIntro}
            </p>
            <p className="text-muted-foreground/70 text-[0.93rem] leading-[1.85] max-w-xl mb-6">
              {t.contact.moduleIntro2}
            </p>

            <a
              href="#kontaktformular"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 rounded-sm"
            >
              {t.contact.moduleGoToForm}
              <ArrowDown size={12} />
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
              <a
                href={`mailto:info@aureliaestates.de?subject=${encodeURIComponent(t.contact.callbackSubject)}`}
                className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-accent transition-colors"
              >
                <PhoneCall size={12} strokeWidth={1.5} />
                {t.contact.moduleCta2}
              </a>
              <a
                href={`mailto:info@aureliaestates.de?subject=${encodeURIComponent(t.contact.appointmentSubject)}`}
                className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-accent transition-colors"
              >
                <CalendarDays size={12} strokeWidth={1.5} />
                {t.contact.moduleCta3}
              </a>
            </div>

            <p className="text-muted-foreground/60 text-xs leading-[1.75] mt-6 max-w-xl">
              {t.contact.moduleNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PremiumContactModule;
