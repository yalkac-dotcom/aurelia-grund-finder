// Editorial card images — stilkonsistent: ruhige Architektur, helles Tageslicht, neutrale warme Töne.
// CI-konform mit Hero-Bildsprache. Keine Personen (Ausnahme: buyer-no-commission, dezent).

import situationForeclosure from "./situation-foreclosure.jpg";
import situationFinancial from "./situation-financial.jpg";
import situationHeirs from "./situation-heirs.jpg";
import situationLegal from "./situation-legal.jpg";

import buyerPricing from "./buyer-pricing.jpg";
import buyerNoCommission from "./buyer-no-commission.jpg";
import buyerPortfolio from "./buyer-portfolio.jpg";
import buyerProcess from "./buyer-process.jpg";

import partnerProperty from "./partner-property.jpg";
import partnerPortfolio from "./partner-portfolio.jpg";
import partnerAgreement from "./partner-agreement.jpg";
import partnerDialogue from "./partner-dialogue.jpg";

import segmentDiscreet from "./segment-discreet.jpg";
import segmentSale from "./segment-sale.jpg";
import segmentCooperation from "./segment-cooperation.jpg";

export const cardImages = {
  // /fuer-eigentumer-in-not — 4 Situationen
  situations: [situationForeclosure, situationFinancial, situationHeirs, situationLegal],
  // /fuer-kaeufer — 4 Features
  buyerFeatures: [buyerPricing, buyerNoCommission, buyerPortfolio, buyerProcess],
  // /fuer-geschaeftspartner — 4 Kooperationsformen
  partnerForms: [partnerProperty, partnerPortfolio, partnerAgreement, partnerDialogue],
  // /wie-es-funktioniert — 3 Segmente
  segments: [segmentDiscreet, segmentSale, segmentCooperation],
};
