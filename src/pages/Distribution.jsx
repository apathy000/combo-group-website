import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const photos = [
  "photo_1_2026-04-27_12-35-59.jpg",
  "photo_2_2026-04-27_12-35-59.jpg",
  "photo_3_2026-04-27_12-35-59.jpg",
  "photo_4_2026-04-27_12-35-59.jpg",
  "photo_5_2026-04-27_12-35-59.jpg",
  "photo_6_2026-04-27_12-35-59.jpg",
  "photo_7_2026-04-27_12-35-59.jpg",
  "photo_8_2026-04-27_12-35-59.jpg",
  "photo_9_2026-04-27_12-35-59.jpg",
  "photo_10_2026-04-27_12-35-59.jpg",
  "photo_11_2026-04-27_12-35-59.jpg",
  "photo_12_2026-04-27_12-35-59.jpg",
  "photo_13_2026-04-27_12-35-59.jpg",
  "photo_14_2026-04-27_12-35-59.jpg",
  "photo_15_2026-04-27_12-35-59.jpg",
  "photo_16_2026-04-27_12-35-59.jpg",
  "photo_17_2026-04-27_12-35-59.jpg",
  "photo_18_2026-04-27_12-35-59.jpg",
  "photo_19_2026-04-27_12-35-59.jpg",
  "photo_20_2026-04-27_12-35-59.jpg",
  "photo_21_2026-04-27_12-35-59.jpg",
  "photo_22_2026-04-27_12-35-59.jpg",
  "photo_23_2026-04-27_12-35-59.jpg",
  "photo_24_2026-04-27_12-35-59.jpg",
  "photo_25_2026-04-27_12-35-59.jpg",
  "photo_26_2026-04-27_12-35-59.jpg",
  "photo_27_2026-04-27_12-35-59.jpg",
  "photo_28_2026-04-27_12-35-59.jpg",
  "photo_29_2026-04-27_12-35-59.jpg",
];

const content = {
  EN: {
    label: "What We Distribute",
    title: "Distribution",
    subtitle: "As the official distributor of Cottonclub TR, we deliver quality products across Armenia.",
    products_title: "Our Products",
    sections: [
      { icon: "🏪", title: "FMCG Products", desc: "Fast-moving consumer goods distributed to retail chains and wholesale buyers across all Armenian regions." },
      { icon: "🧴", title: "Hygiene Products", desc: "Full range of personal hygiene and household care products from trusted manufacturers." },
      { icon: "🚚", title: "Wholesale Network", desc: "Stable supply to wholesale partners with flexible terms and competitive pricing." },
      { icon: "📋", title: "Cooperation Terms", desc: "Transparent contracts, clear pricing, regular deliveries, dedicated account manager." },
    ],
    cta: "Become a Partner",
  },
  RU: {
    label: "Что мы дистрибутируем",
    title: "Дистрибуция",
    subtitle: "Как официальный дистрибьютор Cottonclub TR, мы поставляем качественные товары по всей Армении.",
    products_title: "Наши продукты",
    sections: [
      { icon: "🏪", title: "Товары FMCG", desc: "Товары повседневного спроса, распределяемые в розничные сети и оптовым покупателям по всей Армении." },
      { icon: "🧴", title: "Гигиеническая продукция", desc: "Полный ассортимент средств личной гигиены и бытовой химии от проверенных производителей." },
      { icon: "🚚", title: "Оптовая сеть", desc: "Стабильные поставки оптовым партнёрам на гибких условиях и по конкурентным ценам." },
      { icon: "📋", title: "Условия сотрудничества", desc: "Прозрачные договоры, чёткое ценообразование, регулярные поставки, персональный менеджер." },
    ],
    cta: "Стать партнёром",
  },
  AM: {
    label: "Ինչ ենք բաշխում",
    title: "Դիստրիբյուցիա",
    subtitle: "Որպես Cottonclub TR-ի պաշտոնական դիստրիբյուտոր՝ մենք որակյալ ապրանքներ ենք մատակարարում ամբողջ Հայաստանում։",
    products_title: "Մեր ապրանքները",
    sections: [
      { icon: "🏪", title: "FMCG ապրանքներ", desc: "Արագ շրջանառվող ապրանքներ՝ բաշխված մանրածախ ցանցերին և մեծածախ գնորդներին ՀՀ բոլոր մարզերում։" },
      { icon: "🧴", title: "Հիգիենիկ ապրանքներ", desc: "Անձնական հիգիենայի և տնային խնամքի ապրանքների ամբողջական տեսականի։" },
      { icon: "🚚", title: "Մեծածախ ցանց", desc: "Կայուն մատակարարում մեծածախ գործընկերներին՝ ճկուն պայմաններով և մրցունակ գներով։" },
      { icon: "📋", title: "Համագործակցության պայմաններ", desc: "Թափանցիկ պայմանագրեր, հստակ գնագոյացում, կանոնավոր առաքումներ, անձնական մենեջեր։" },
    ],
    cta: "Դառնալ գործընկեր",
  },
};

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const intervalRef = useRef(null);

  const visibleCount = 3;
  const total = photos.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const getVisible = () => {
    return Array.from({ length: visibleCount }, (_, i) =>
      photos[(current + i) % total]
    );
  };

  const onDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    dragDelta.current = 0;
    stopAutoPlay();
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    dragDelta.current = x - dragStartX.current;
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta.current < -50) next();
    else if (dragDelta.current > 50) prev();
    startAutoPlay();
  };

  return (
    <div
      className="relative select-none"
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <div className="grid grid-cols-3 gap-6 overflow-hidden">
        {getVisible().map((photo, i) => (
          <motion.div
            key={`${current}-${i}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100 cursor-grab active:cursor-grabbing"
          >
            <img
              src={`/${photo}`}
              alt={`Product ${i + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => { prev(); stopAutoPlay(); startAutoPlay(); }}
        className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0B1F33] text-white rounded-full flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0B1F33] transition-all shadow-lg text-lg"
      >
        ‹
      </button>
      <button
        onClick={() => { next(); stopAutoPlay(); startAutoPlay(); }}
        className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0B1F33] text-white rounded-full flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0B1F33] transition-all shadow-lg text-lg"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); stopAutoPlay(); startAutoPlay(); }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#C9A84C] w-6 h-2"
                : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function DistributionPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-4">{t.title}</h1>
          <div className="w-16 h-1 bg-[#C9A84C] rounded mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-24">
          {t.sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1F33] mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            {t.products_title}
          </p>
          <h2 className="text-3xl font-bold text-[#0B1F33] mb-12">
            {lang === "EN" ? "Browse Our Product Range" : lang === "RU" ? "Наш ассортимент" : "Մեր ապրանքատեսականին"}
          </h2>
          <Carousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/contacts"
            className="inline-block bg-[#C9A84C] text-[#0B1F33] font-bold px-10 py-4 rounded-full hover:brightness-110 transition-all text-base"
          >
            {t.cta}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}