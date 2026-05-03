import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import translations from "../translations";

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            {t.about.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-6">
            {t.about.title}
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] rounded" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1F33] rounded-2xl p-8 text-white"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4 text-[#C9A84C]">
              {lang === "EN" ? "Our Mission" : lang === "RU" ? "Наша миссия" : "Մեր առաքելությունը"}
            </h2>
            <p className="text-white/80 leading-relaxed">{t.about.p1}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold mb-4 text-[#0B1F33]">
              {lang === "EN" ? "Our Vision" : lang === "RU" ? "Наше видение" : "Մեր տեսլականը"}
            </h2>
            <p className="text-gray-600 leading-relaxed">{t.about.p2}</p>
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-[#0B1F33] mb-8"
        >
          {lang === "EN" ? "Our Values" : lang === "RU" ? "Наши ценности" : "Մեր արժեքները"}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-md hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#0B1F33] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}