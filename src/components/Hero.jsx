import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import translations from "../translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-[#0B1F33]/65" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.welcome}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {t.title1}
          <br />
          <span className="text-[#C9A84C]">{t.title2}</span>
          <br />
          {t.title3}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact" className="bg-[#C9A84C] text-[#0B1F33] font-semibold px-8 py-4 rounded-lg text-base hover:brightness-110 transition-all">
            {t.btn_partner}
          </a>
          <a href="#services" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white hover:text-[#0B1F33] transition-all">
            {t.btn_services}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}