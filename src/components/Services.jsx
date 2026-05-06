import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LangContext";
import translations from "../translations";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = translations[lang].services;

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] mb-14 max-w-xl">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className={`${s.color} text-white rounded-2xl p-8 flex flex-col justify-between min-h-[320px] cursor-pointer`}
            >
              <div>
                <div className="text-5xl mb-6">{s.icon}</div>
                <span className="text-xs font-bold opacity-50 uppercase tracking-widest">{s.number}</span>
                <h3 className="text-2xl font-bold mt-1 mb-6">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm opacity-85">
                      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}