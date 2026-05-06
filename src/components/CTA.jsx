import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import translations from "../translations";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = translations[lang].cta;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1F33] rounded-3xl px-10 py-16 md:py-20 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#C9A84C]/10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#C9A84C]/5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative z-10">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">{t.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">{t.title}</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">{t.subtitle}</p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Contact Us → goes to Contacts page */}
              <Link
                to="/contacts"
                className="bg-[#C9A84C] text-[#0B1F33] font-bold px-10 py-4 rounded-full text-base hover:brightness-110 transition-all"
              >
                {t.btn_contact}
              </Link>

              
              
                href="tel:+37491726217"
                className="border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-full text-base hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                {t.btn_call}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}