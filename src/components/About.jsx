import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LangContext";
import translations from "../translations";

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] mb-6 max-w-2xl">{t.title}</h2>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <FadeInWhenVisible delay={0.1}>
            <p className="text-gray-600 text-base leading-relaxed">{t.p1}</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="text-gray-600 text-base leading-relaxed">{t.p2}</p>
          </FadeInWhenVisible>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md hover:border-[#C9A84C]/30 transition-all h-full">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0B1F33] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}