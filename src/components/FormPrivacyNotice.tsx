import { Link } from "react-router-dom";

const copy: Record<string, [string, string, string]> = {
  de: ["Ich habe die ", "Datenschutzerklärung", " zur Kenntnis genommen. Meine Angaben werden zur Bearbeitung meiner Anfrage verarbeitet."],
  en: ["I have taken note of the ", "privacy policy", ". My details will be processed to handle my enquiry."],
  tr: ["", "Gizlilik politikası", " hakkında bilgi edindim. Bilgilerim talebimin işlenmesi amacıyla işlenir."],
  nl: ["Ik heb kennisgenomen van de ", "privacyverklaring", ". Mijn gegevens worden verwerkt om mijn aanvraag te behandelen."],
  it: ["Ho preso visione dell'", "informativa sulla privacy", ". I miei dati vengono trattati per gestire la mia richiesta."],
  es: ["He tomado conocimiento de la ", "política de privacidad", ". Mis datos se tratarán para gestionar mi consulta."],
  fr: ["J'ai pris connaissance de la ", "politique de confidentialité", ". Mes données sont traitées pour le traitement de ma demande."],
};

/** Pure information notice (no consent) shown directly at the submit button. */
const FormPrivacyNotice = ({ language, className = "" }: { language: string; className?: string }) => {
  const [before, link, after] = copy[language] ?? copy.en;
  return (
    <p className={`text-sm leading-6 text-muted-foreground ${className}`}>
      {before}
      <Link to={language === "tr" ? "/datenschutz#kvkk" : "/datenschutz#dsgvo"} className="font-semibold text-primary underline">{link}</Link>
      {after}
    </p>
  );
};

export default FormPrivacyNotice;
