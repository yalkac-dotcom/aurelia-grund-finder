import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const TaxBenefits = lazy(() => import("./pages/TaxBenefits"));
const AfaPage = lazy(() => import("./pages/tax/AfaPage"));
const EnergetischPage = lazy(() => import("./pages/tax/EnergetischPage"));
const KfwPage = lazy(() => import("./pages/tax/KfwPage"));
const BafaPage = lazy(() => import("./pages/tax/BafaPage"));
const GlossarPage = lazy(() => import("./pages/tax/GlossarPage"));
const Investors = lazy(() => import("./pages/Investors"));
const InvestorGlossar = lazy(() => import("./pages/InvestorGlossar"));
const Contact = lazy(() => import("./pages/Contact"));
const Arbeitsweise = lazy(() => import("./pages/Arbeitsweise"));

const Privacy = lazy(() => import("./pages/Privacy"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Bildnachweise = lazy(() => import("./pages/Bildnachweise"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
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
              <Route path="/investoren" element={<Investors />} />
              <Route path="/investoren-glossar" element={<InvestorGlossar />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/arbeitsweise" element={<Arbeitsweise />} />
              
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
