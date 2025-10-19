import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { PageTransition } from "./components/PageTransition";
// import { LoadingBar } from "./components/LoadingBar";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment";
import CustomSoftware from "./pages/services/CustomSoftware";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <SmoothScroll>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-foreground">
          
              <Header />
                <main>
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/services/website-development" element={<WebsiteDevelopment />} />
                      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
                      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
                      <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
                      <Route path="/services/custom-software" element={<CustomSoftware />} />
                      <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </PageTransition>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </SmoothScroll>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
