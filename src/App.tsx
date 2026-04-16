import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
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
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              {/* Final main pages */}
              <Route path="/" element={<Index />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/arbeitsweise" element={<HowItWorks />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />

              {/* Legal */}
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/bildnachweise" element={<Bildnachweise />} />

              {/* Legacy redirects → consolidated structure */}
              <Route path="/wie-es-funktioniert" element={<Navigate to="/arbeitsweise" replace />} />
              <Route path="/fuer-eigentumer-in-not" element={<Navigate to="/leistungen" replace />} />
              <Route path="/fuer-kaeufer" element={<Navigate to="/leistungen" replace />} />
              <Route path="/fuer-geschaeftspartner" element={<Navigate to="/leistungen" replace />} />
              <Route path="/fuer-investoren" element={<Navigate to="/leistungen" replace />} />
              <Route path="/investoren" element={<Navigate to="/leistungen" replace />} />
              <Route path="/portfolio" element={<Navigate to="/leistungen" replace />} />
              <Route path="/faq" element={<Navigate to="/kontakt" replace />} />
              <Route path="/steuervorteile" element={<Navigate to="/leistungen" replace />} />
              <Route path="/steuervorteile/*" element={<Navigate to="/leistungen" replace />} />
              <Route path="/investoren-glossar" element={<Navigate to="/leistungen" replace />} />
              <Route path="/immobilien-glossar" element={<Navigate to="/leistungen" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
