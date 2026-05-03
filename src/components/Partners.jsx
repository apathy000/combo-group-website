import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LangContext";
import translations from "../translations";

const brands = [
  { name: "Aquella", logo: "/logo_image3-removebg-preview.png" },
  { name: "CLEA Fantasy", logo: "/logo_image4-removebg-preview.png" },
  { name: "My Comfort Premium", logo: "/logo_image1-removebg-preview.png" },
  { name: "Cotton Baby", logo: "/Cotton-Baby-150x83.jpg" },
  { name: "Fresh World", logo: "/FreshWorld-150x94.png" },
  { name: "Kiss Baby", logo: "/KissBaby-150x94.png" },
  { name: "Kiss You", logo: "/Kissyou-150x94.png" },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = translations[lang].partners;

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] mb-4">{t.title}</h2>
          <p className="text-gray-500 mb-14 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-2 border-[#C9A84C]/30 rounded-2xl px-8 py-6 flex flex-col items-center gap-3 hover:shadow-lg hover:border-[#C9A84C] transition-all w-48"
            >
              <div className="h-14 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
              <p className="font-bold text-[#0B1F33] text-xs text-center whitespace-nowrap">{brand.name}</p>
              <span className="text-xs text-white bg-[#C9A84C] px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {t.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}