import { PhoneCall, CalendarDays, ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "@/components/Reveal";

const PremiumContactModule = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary/50 py-12 md:py-16">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="w-10 h-px bg-accent/50 mb-6" />

          <h2 className="text-[1.25rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.15] mb-3">
            {t.contact.moduleHeading}
          </h2>

          <p className="text-muted-foreground text-sm leading-[1.8] max-w-xl mb-1">
            {t.contact.moduleIntro}
          </p>
          <p className="text-muted-foreground/70 text-sm leading-[1.8] max-w-xl mb-6">
            {t.contact.moduleIntro2}
          </p>

          {/* Primary CTA */}
          <a
            href="#kontaktformular"
            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300"
          >
            {t.contact.moduleGoToForm}
            <ArrowDown size={12} />
          </a>

          {/* Secondary actions */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
            <a
              href={`mailto:info@aurelia-grundbesitz.de?subject=${encodeURIComponent(t.contact.callbackSubject)}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-accent transition-colors"
            >
              <PhoneCall size={12} strokeWidth={1.5} />
              {t.contact.moduleCta2}
            </a>
            <a
              href={`mailto:info@aurelia-grundbesitz.de?subject=${encodeURIComponent(t.contact.appointmentSubject)}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-accent transition-colors"
            >
              <CalendarDays size={12} strokeWidth={1.5} />
              {t.contact.moduleCta3}
            </a>
          </div>

          {/* Note */}
          <p className="text-muted-foreground/60 text-xs leading-[1.75] mt-6 max-w-xl">
            {t.contact.moduleNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PremiumContactModule;
