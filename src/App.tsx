import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import TaxBenefits from "./pages/TaxBenefits";
import AfaPage from "./pages/tax/AfaPage";
import EnergetischPage from "./pages/tax/EnergetischPage";
import KfwPage from "./pages/tax/KfwPage";
import BafaPage from "./pages/tax/BafaPage";
import GlossarPage from "./pages/tax/GlossarPage";
import Contact from "./pages/Contact";
import Investors from "./pages/Investors";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/investoren" element={<Investors />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
