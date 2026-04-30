import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/i18n/LanguageContext";
import AnalyticsTracker from "./components/AnalyticsTracker";
import ComingSoon from "./pages/ComingSoon";

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
      <Toaster />
      <LanguageProvider>
        <BrowserRouter>
          <AnalyticsTracker />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              {/* Coming-Soon: Impressum & Datenschutz bleiben erreichbar */}
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Privacy />} />
              {/* Alle anderen Routen → Coming-Soon */}
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
