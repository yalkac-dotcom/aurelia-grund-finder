import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Aurelia Grundbesitz | Unsere neue Website ist demnächst für Sie da";

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const robots = ensureMeta("robots", "noindex, nofollow");
    const desc = ensureMeta("description", "Aurelia Grundbesitz: Derzeit überarbeiten wir unseren Internetauftritt. Persönlich erreichen Sie uns weiterhin telefonisch, per E-Mail oder WhatsApp.");

    return () => {
      robots.setAttribute("content", "index, follow");
      desc.setAttribute("content", "");
    };
  }, []);

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-background px-6 py-12 text-center text-foreground sm:px-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <div className="relative h-[155px] w-[250px] overflow-hidden sm:h-[190px] sm:w-[320px]" aria-label="Aurelia Grundbesitz">
          <img
            src="/aurelia-logo.png"
            alt="Aurelia Grundbesitz"
            className="absolute left-1/2 top-1/2 w-[425px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[540px]"
          />
        </div>

        <div className="mt-10 h-[3px] w-10 bg-accent sm:mt-12" aria-hidden="true" />

        <h1 className="mt-9 max-w-2xl text-[2rem] font-semibold leading-[1.25] text-primary sm:mt-10 sm:text-[2.75rem] md:text-[3rem]">
          Unsere neue Website ist demnächst für Sie da.
        </h1>

        <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">
          Derzeit überarbeiten wir unseren Internetauftritt.<br />
          Persönlich erreichen Sie uns weiterhin wie gewohnt.
        </p>

        <div className="mt-12 grid w-full max-w-3xl gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-5" aria-label="Kontaktmöglichkeiten">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Telefon</span>
            <a className="text-base font-medium text-primary underline-offset-4 transition-colors hover:text-highlight focus-visible:underline" href="tel:+4921169583033">+49 211 69583033</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase text-muted-foreground">E-Mail</span>
            <a className="break-all text-base font-medium text-primary underline-offset-4 transition-colors hover:text-highlight focus-visible:underline" href="mailto:office@aureliaestates.de">office@aureliaestates.de</a>
          </div>
        </div>

        <p className="mt-14 text-xs font-medium text-muted-foreground sm:mt-20 sm:text-sm">Persönlich · Vertraulich · Direkt</p>
      </div>
    </main>
  );
};

export default ComingSoon;
