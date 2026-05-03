import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LangContext";
import translations from "../translations";

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = translations[lang].whyus;

  return (
    <section className="py-24 bg-[#0B1F33]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 max-w-xl">{t.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}