import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import ForBuyers from "./pages/ForBuyers";
import ForGeschaftspartner from "./pages/ForGeschaftspartner";
import HowItWorks from "./pages/HowItWorks";
import ComingSoon from "./pages/ComingSoon";

const About = lazy(() => import("./pages/About"));
const AdminArea = lazy(() => import("./pages/admin/AdminArea"));
const AdminPassword = lazy(() => import("./pages/admin/AdminPassword"));
const Services = lazy(() => import("./pages/Services"));
const TaxBenefits = lazy(() => import("./pages/TaxBenefits"));
const AfaPage = lazy(() => import("./pages/tax/AfaPage"));
const EnergetischPage = lazy(() => import("./pages/tax/EnergetischPage"));
const KfwPage = lazy(() => import("./pages/tax/KfwPage"));
const BafaPage = lazy(() => import("./pages/tax/BafaPage"));
const GlossarPage = lazy(() => import("./pages/tax/GlossarPage"));
const InvestorGlossar = lazy(() => import("./pages/InvestorGlossar"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const TurkeyProperties = lazy(() => import("./pages/TurkeyProperties"));
const PropertyOffer = lazy(() => import("./pages/PropertyOffer"));
const ShortTermSale = lazy(() => import("./pages/ShortTermSale"));
const FinancingCalculator = lazy(() => import("./pages/FinancingCalculator"));

const Privacy = lazy(() => import("./pages/Privacy"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Bildnachweise = lazy(() => import("./pages/Bildnachweise"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Temporary preview switch: restore the existing site by setting this to false.
// All original pages and routes remain below, untouched.
const SHOW_COMING_SOON = true;

// Alte Eigentümer-URLs → „Immobilie anbieten“ in allen Sprachen (Sprachwahl, Query und Hash bleiben erhalten)
const LegacyOwnerRedirect = () => {
  const { search, hash } = useLocation();
  return <Navigate to={`/immobilie-anbieten${search}${hash}`} replace />;
};

const App = () => SHOW_COMING_SOON ? <ComingSoon /> : (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/verwaltung" element={<AdminArea />} />
              <Route path="/verwaltung/passwort" element={<AdminPassword />} />
              <Route path="/fuer-eigentuemer" element={<LegacyOwnerRedirect />} />
              <Route path="/fuer-eigentumer-in-not" element={<LegacyOwnerRedirect />} />
              <Route path="/fuer-kaeufer" element={<ForBuyers />} />
              <Route path="/fuer-geschaeftspartner" element={<ForGeschaftspartner />} />
              <Route path="/wie-es-funktioniert" element={<HowItWorks />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/steuervorteile" element={<TaxBenefits />} />
              <Route path="/steuervorteile/afa" element={<AfaPage />} />
              <Route path="/steuervorteile/energetisch" element={<EnergetischPage />} />
              <Route path="/steuervorteile/kfw" element={<KfwPage />} />
              <Route path="/steuervorteile/bafa" element={<BafaPage />} />
              <Route path="/steuervorteile/glossar" element={<GlossarPage />} />
              <Route path="/immobilien-glossar" element={<InvestorGlossar />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/immobilien-tuerkei" element={<TurkeyProperties />} />
              <Route path="/immobilie-anbieten" element={<PropertyOffer />} />
              <Route path="/kurzfristiger-immobilienverkauf" element={<ShortTermSale />} />
              <Route path="/kurzfristiger-immobilienverkauf" element={<ShortTermSale />} />
              <Route path="/finanzierungsrechner" element={<FinancingCalculator />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/bildnachweise" element={<Bildnachweise />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
