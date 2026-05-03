import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import translations from "../translations";

const langKeys = ["EN", "RU", "AM"];

export default function Header() {
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t.about, path: "/about" },
    { label: t.distribution, path: "/distribution" },
    { label: t.logistics, path: "/logistics" },
    { label: t.partners, path: "/partners" },
    { label: t.contacts, path: "/contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1F33] text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/">
          <img src="/logo_image2-removebg-preview (1).png" alt="Combo Group" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-[#C9A84C] ${
                location.pathname === link.path
                  ? "text-[#C9A84C] font-bold"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-white/10 rounded-full px-1 py-1 gap-1">
            {langKeys.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === l
                    ? "bg-[#C9A84C] text-[#0B1F33]"
                    : "text-white hover:text-[#C9A84C]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/contacts"
            className="flex items-center gap-2 bg-[#C9A84C] text-[#0B1F33] font-semibold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all"
          >
            <span>📞</span> {t.contact_btn}
          </Link>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4 text-sm font-medium border-t border-white/10 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                location.pathname === link.path
                  ? "text-[#C9A84C] font-bold"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            {langKeys.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  lang === l
                    ? "bg-[#C9A84C] text-[#0B1F33] border-[#C9A84C]"
                    : "border-white/30 text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/contacts"
            onClick={() => setMenuOpen(false)}
            className="bg-[#C9A84C] text-[#0B1F33] font-semibold text-sm px-5 py-2 rounded-full text-center"
          >
            📞 {t.contact_btn}
          </Link>
        </div>
      )}
    </header>
  );
}