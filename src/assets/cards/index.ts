// Editorial card images — stilkonsistent: ruhige Architektur, helles Tageslicht, neutrale warme Töne.
// CI-konform mit Hero-Bildsprache. Verwendet als Header (16:10) auf ProofCard / ProcessStep.

// Index — 3 Bereiche
import areaSupport from "./area-support.jpg";
import areaHeirs from "./area-heirs.jpg";
import areaAcquisition from "./area-acquisition.jpg";

// Geteilte Prozess-Schritte (verwendet auf allen Seiten)
import stepContact from "./step-contact.jpg";
import stepReview from "./step-review.jpg";
import stepOffer from "./step-offer.jpg";
import stepAgreement from "./step-agreement.jpg";
import stepHandover from "./step-handover.jpg";

// Owner in Trouble — 4 Situationen
import ownerForeclosure from "./owner-foreclosure.jpg";
import ownerFinancial from "./owner-financial.jpg";
import ownerHeirs from "./owner-heirs.jpg";
import ownerLegal from "./owner-legal.jpg";

// Buyers — 4 Features + 4 Proof Points
import buyerDirect from "./buyer-direct.jpg";
import buyerDocuments from "./buyer-documents.jpg";
import buyerPricing from "./buyer-pricing.jpg";
import buyerReliable from "./buyer-reliable.jpg";
import buyerVerified from "./buyer-verified.jpg";
import buyerFair from "./buyer-fair.jpg";
import buyerConfirmed from "./buyer-confirmed.jpg";

// Geschäftspartner — 4 Forms + 4 Principles
import partnerSingle from "./partner-single.jpg";
import partnerPortfolio from "./partner-portfolio.jpg";
import partnerOffmarket from "./partner-offmarket.jpg";
import partnerDialogueForm from "./partner-dialogue.jpg";
import partnerPrincipleDialogue from "./partner-principle-dialogue.jpg";
import partnerPrincipleHorizon from "./partner-principle-horizon.jpg";
import partnerPrincipleDiscretion from "./partner-principle-discretion.jpg";
import partnerPrinciplePartnership from "./partner-principle-partnership.jpg";

// HowItWorks — 3 Segmente + 5 Hold-Steps + 4 Principles
import segmentDiscreet from "./segment-discreet.jpg";
import segmentSale from "./segment-sale.jpg";
import segmentCooperation from "./segment-cooperation.jpg";
import holdAcquisition from "./hold-acquisition.jpg";
import holdStrategy from "./hold-strategy.jpg";
import holdInventory from "./hold-inventory.jpg";
import holdSecurity from "./hold-security.jpg";
import holdFoundation from "./hold-foundation.jpg";
import principleDialogue from "./principle-dialogue.jpg";
import principleFairness from "./principle-fairness.jpg";
import principleDocumentation from "./principle-documentation.jpg";
import principleOrientation from "./principle-orientation.jpg";

export const cardImages = {
  // Index
  areas: [areaSupport, areaHeirs, areaAcquisition],
  // Geteilte Schritte (Erstkontakt, Prüfung, Angebot, Vereinbarung, Übergabe)
  steps: [stepContact, stepReview, stepOffer, stepAgreement, stepHandover],
  // ForOwnerInTrouble — 4 Situationen
  ownerSituations: [ownerForeclosure, ownerFinancial, ownerHeirs, ownerLegal],
  // ForBuyers — 4 Features + 4 Proof Points
  buyerFeatures: [buyerDirect, buyerDocuments, buyerPricing, buyerReliable],
  buyerProof: [buyerVerified, buyerFair, buyerConfirmed, buyerDocuments],
  // ForGeschaftspartner — 4 Forms + 4 Principles
  partnerForms: [partnerSingle, partnerPortfolio, partnerOffmarket, partnerDialogueForm],
  partnerPrinciples: [
    partnerPrincipleDialogue,
    partnerPrincipleHorizon,
    partnerPrincipleDiscretion,
    partnerPrinciplePartnership,
  ],
  // HowItWorks — 3 Segmente + 5 Hold-Steps + 4 Principles
  segments: [segmentDiscreet, segmentSale, segmentCooperation],
  holdSteps: [holdAcquisition, holdStrategy, holdInventory, holdSecurity, holdFoundation],
  principles: [principleDialogue, principleFairness, principleDocumentation, principleOrientation],
};
