import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";

const content = {
  EN: {
    label: "How We Deliver",
    title: "Logistics",
    subtitle: "End-to-end logistics solutions — from international freight to last-mile delivery in Armenia.",
    services: [
      { icon: "✈️", title: "International Freight", desc: "We organize cargo transportation from manufacturers worldwide directly to Armenia." },
      { icon: "📝", title: "Customs Clearance", desc: "Full customs documentation and clearance handled by our experienced team." },
      { icon: "🏭", title: "Warehousing", desc: "Modern warehouse facilities with full inventory management and control." },
      { icon: "📦", title: "Cargo Consolidation", desc: "We combine smaller shipments into one to reduce costs for our partners." },
      { icon: "🚛", title: "Delivery in Armenia", desc: "Nationwide delivery network covering all regions and cities of Armenia." },
      { icon: "📊", title: "Supply Chain Management", desc: "Full visibility and control over your supply chain from start to finish." },
    ],
    chain_title: "Our Supply Chain",
    chain: ["Manufacturer", "Import", "Customs", "Warehouse", "Distribution", "Retail"],
    cta: "Contact Us",
  },
  RU: {
    label: "Как мы доставляем",
    title: "Логистика",
    subtitle: "Комплексные логистические решения — от международных перевозок до доставки по всей Армении.",
    services: [
      { icon: "✈️", title: "Международные перевозки", desc: "Организуем доставку грузов от производителей со всего мира в Армению." },
      { icon: "📝", title: "Таможенное оформление", desc: "Полное таможенное оформление силами нашей опытной команды." },
      { icon: "🏭", title: "Складирование", desc: "Современные складские мощности с полным управлением запасами." },
      { icon: "📦", title: "Консолидация грузов", desc: "Объединяем небольшие партии для снижения затрат наших партнёров." },
      { icon: "🚛", title: "Доставка по Армении", desc: "Сеть доставки охватывает все регионы и города Армении." },
      { icon: "📊", title: "Управление цепочкой поставок", desc: "Полная прозрачность и контроль над цепочкой поставок от начала до конца." },
    ],
    chain_title: "Наша цепочка поставок",
    chain: ["Производитель", "Импорт", "Таможня", "Склад", "Дистрибуция", "Розница"],
    cta: "Связаться",
  },
  AM: {
    label: "Ինչպես ենք առաքում",
    title: "Լոգիստիկա",
    subtitle: "Համալիր լոգիստիկ լուծումներ՝ միջազգային բեռնափոխադրումից մինչև Հայաստանում առաքում։",
    services: [
      { icon: "✈️", title: "Միջազգային բեռնափոխադրում", desc: "Կազմակերպում ենք բեռների փոխադրում արտադրողներից ամբողջ աշխարհից Հայաստան։" },
      { icon: "📝", title: "Մաքսային ձևակերպում", desc: "Մաքսային ամբողջական ձևակերպում մեր փորձառու թիմի կողմից։" },
      { icon: "🏭", title: "Պահեստավորում", desc: "Ժամանակակից պահեստային հզորություններ՝ պաշարների կառավարմամբ։" },
      { icon: "📦", title: "Բեռների կոնսոլիդացիա", desc: "Փոքր բեռնաթափումները միավորում ենք՝ գործընկերների ծախսերը նվազեցնելու համար։" },
      { icon: "🚛", title: "Առաքում ՀՀ-ում", desc: "Առաքման ցանց՝ ՀՀ բոլոր մարզերն ու քաղաքները ընդգրկող։" },
      { icon: "📊", title: "Մատակարարման շղթայի կառավարում", desc: "Ամբողջական տեսանելիություն և վերահսկողություն մատակարարման շղթայի նկատմամբ։" },
    ],
    chain_title: "Մեր մատակարարման շղթան",
    chain: ["Արտադրող", "Ներմուծում", "Մաքսային", "Պահեստ", "Դիստրիբյուցիա", "Մանրածախ"],
    cta: "Կապ հաստատել",
  },
};

export default function LogisticsPage() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-md hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-[#0B1F33] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0B1F33] rounded-2xl p-10 mb-16"
        >
          <h2 className="text-white font-bold text-2xl mb-8 text-center">{t.chain_title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {t.chain.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-[#C9A84C] text-[#0B1F33] font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                  {step}
                </div>
                {i < t.chain.length - 1 && (
                  <span className="text-[#C9A84C] text-xl font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/contacts"
            className="inline-block bg-[#C9A84C] text-[#0B1F33] font-bold px-10 py-4 rounded-full hover:brightness-110 transition-all"
          >
            {t.cta}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}