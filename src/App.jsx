import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import Header from "./components/Header";
import Footer from "./components/Footer";   // ← ADD THIS
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import DistributionPage from "./pages/Distribution";
import LogisticsPage from "./pages/Logistics";
import PartnersPage from "./pages/Partners";
import ContactsPage from "./pages/Contacts";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/distribution" element={<DistributionPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
        <Footer />   {/* ← ADD THIS */}
      </BrowserRouter>
    </LangProvider>
  );
}