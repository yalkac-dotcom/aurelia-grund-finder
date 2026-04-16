import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import ForOwnerInTrouble from "./pages/ForOwnerInTrouble";
import ForBuyers from "./pages/ForBuyers";
import ForGeschaftspartner from "./pages/ForGeschaftspartner";
import HowItWorks from "./pages/HowItWorks";

const About = lazy(() => import("./pages/About"));
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

const Privacy = lazy(() => import("./pages/Privacy"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Bildnachweise = lazy(() => import("./pages/Bildnachweise"));
const NotFound = lazy(() => import("./pages/NotFound"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/steuervorteile" element={<TaxBenefits />} />
              <Route path="/steuervorteile/afa" element={<AfaPage />} />
              <Route path="/steuervorteile/energetisch" element={<EnergetischPage />} />
              <Route path="/steuervorteile/kfw" element={<KfwPage />} />
              <Route path="/steuervorteile/bafa" element={<BafaPage />} />
              <Route path="/steuervorteile/glossar" element={<GlossarPage />} />
              <Route path="/immobilien-glossar" element={<InvestorGlossar />} />
              <Route path="/investoren-glossar" element={<InvestorGlossar />} />
              <Route path="/investoren" element={<ForGeschaftspartner />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/wie-es-funktioniert" element={<HowItWorks />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/fuer-eigentumer-in-not" element={<ForOwnerInTrouble />} />
              <Route path="/fuer-kaeufer" element={<ForBuyers />} />
              <Route path="/fuer-geschaeftspartner" element={<ForGeschaftspartner />} />
              <Route path="/fuer-investoren" element={<ForGeschaftspartner />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/impressum" element={<Impressum />} />
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
