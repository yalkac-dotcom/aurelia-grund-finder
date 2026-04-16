import { useState } from "react";
import { z } from "zod";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." })
  .max(255, { message: "E-Mail-Adresse ist zu lang." });

interface NewsletterSignupProps {
  source?: string;
  variant?: "light" | "dark";
}

const NewsletterSignup = ({ source = "homepage", variant = "light" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast({
        title: "Ungültige Eingabe",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "Einwilligung erforderlich",
        description: "Bitte bestätigen Sie die Datenschutzhinweise.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert({
          email: parsed.data.toLowerCase(),
          source,
          language: "de",
        });

      if (error) {
        if (error.code === "23505") {
          // Duplicate email — treat as success for privacy
          setSuccess(true);
          return;
        }
        throw error;
      }

      setSuccess(true);
      setEmail("");
      setConsent(false);
    } catch (err) {
      toast({
        title: "Fehler",
        description: "Anmeldung konnte nicht gespeichert werden. Bitte später erneut versuchen.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={`flex items-start gap-3 rounded-xl p-5 ${
          isDark ? "bg-white/[0.06] text-white" : "bg-teal-50 text-teal-900"
        }`}
      >
        <CheckCircle2 size={20} className={isDark ? "text-teal-300 mt-0.5 shrink-0" : "text-teal-600 mt-0.5 shrink-0"} />
        <div>
          <p className="text-[0.92rem] font-semibold">Vielen Dank für Ihr Interesse.</p>
          <p className={`text-[0.82rem] mt-1 leading-relaxed ${isDark ? "text-white/70" : "text-teal-800/80"}`}>
            Sie erhalten in Kürze eine Bestätigung per E-Mail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail
            size={16}
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              isDark ? "text-white/40" : "text-muted-foreground"
            }`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            required
            maxLength={255}
            className={`w-full h-11 pl-9 pr-3 rounded-md text-[0.88rem] outline-none transition-colors ${
              isDark
                ? "bg-white/[0.08] border border-white/[0.12] text-white placeholder:text-white/40 focus:border-teal-300/60"
                : "bg-white border border-input text-foreground focus:border-teal-600"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-teal-600 hover:bg-teal-700 text-white text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-colors disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : "Anmelden"}
        </button>
      </div>
      <label className={`flex items-start gap-2 text-[0.72rem] leading-relaxed cursor-pointer ${
        isDark ? "text-white/60" : "text-muted-foreground"
      }`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 accent-teal-600"
        />
        <span>
          Ich willige ein, dass meine E-Mail-Adresse zur Zusendung des Newsletters verarbeitet wird.
          Hinweise zum Widerruf finden Sie in der{" "}
          <a href="/datenschutz" className={isDark ? "underline hover:text-teal-300" : "underline hover:text-teal-700"}>
            Datenschutzerklärung
          </a>.
        </span>
      </label>
    </form>
  );
};

export default NewsletterSignup;
