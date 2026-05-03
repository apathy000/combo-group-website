import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "Aquella",
    logo: "/logo_image3-removebg-preview.png",
    desc: {
      EN: "Premium wet wipes and hygiene products. Available in multiple variants — lavender, chamomile, and cherry blossom.",
      RU: "Влажные салфетки и гигиенические продукты премиум-класса. Доступны в нескольких вариантах — лаванда, ромашка и цветок вишни.",
      AM: "Պրեմիում թաց անձեռոցիկներ և հիգիենիկ ապրանքներ։ Հասանելի է մի քանի տարբերակներով՝ լավանդա, երիցուկ և բալենու ծաղիկ։",
    },
  },
  {
    name: "CLEA Fantasy",
    logo: "/logo_image4-removebg-preview.png",
    desc: {
      EN: "High-quality cotton pads and wet toilet paper. Soft, absorbent, and made with 100% natural cotton.",
      RU: "Высококачественные ватные диски и влажная туалетная бумага. Мягкие, впитывающие, из 100% натурального хлопка.",
      AM: "Բարձրորակ բամբակյա սկավառակներ և թաց զուգարանի թուղթ։ Փափուկ, ներծծող, 100% բնական բամբակից պատրաստված։",
    },
  },
  {
    name: "My Comfort Premium",
    logo: "/logo_image1-removebg-preview.png",
    desc: {
      EN: "Premium comfort and hygiene products for everyday use. Trusted by households across Armenia.",
      RU: "Премиальные товары для комфорта и гигиены на каждый день. Пользуются доверием домохозяйств по всей Армении.",
      AM: "Ամենօրյա օգտագործման համար նախատեսված պրեմիում հիգիենիկ ապրանքներ։ Վստահված ամբողջ Հայաստանի տնային տնտեսություններում։",
    },
  },
  {
    name: "Cotton Baby",
    logo: "/Cotton-Baby-150x83.jpg",
    desc: {
      EN: "Baby hygiene and care products made with soft, gentle materials safe for newborns.",
      RU: "Товары для гигиены и ухода за детьми из мягких материалов, безопасных для новорождённых.",
      AM: "Նորածինների համար անվտանգ փափուկ նյութերից պատրաստված մանկական հիգիենայի ապրանքներ։",
    },
  },
  {
    name: "Fresh World",
    logo: "/FreshWorld-150x94.png",
    desc: {
      EN: "Refreshing wet wipes and personal care products for active, on-the-go lifestyles.",
      RU: "Освежающие влажные салфетки и средства личной гигиены для активного образа жизни.",
      AM: "Թարմացնող թաց անձեռոցիկներ և անձնական խնամքի ապրանքներ ակտիվ ապրելակերպի համար։",
    },
  },
  {
    name: "Kiss Baby",
    logo: "/KissBaby-150x94.png",
    desc: {
      EN: "Gentle baby care products designed with love for the most sensitive skin.",
      RU: "Нежные товары для ухода за малышами, созданные с любовью для самой чувствительной кожи.",
      AM: "Նուրբ մանկական խնամքի ապրանքներ՝ ստեղծված սիրով ամենազգայուն մաշկի համար։",
    },
  },
  {
    name: "Kiss You",
    logo: "/Kissyou-150x94.png",
    desc: {
      EN: "Personal care and hygiene products combining quality and affordability for every family.",
      RU: "Средства личной гигиены, сочетающие качество и доступность для каждой семьи.",
      AM: "Անձնական հիգիենայի ապրանքներ՝ որակի և մատչելիության համադրություն յուրաքանչյուր ընտանիքի համար։",
    },
  },
];

const content = {
  EN: {
    label: "Work With Us",
    title: "Partners",
    brands_title: "Brands We Represent",
    for_manufacturers: "For Manufacturers",
    manufacturers: [
      { icon: "🌍", title: "Armenian Market Entry", desc: "We open doors to the Armenian market with our established distribution network." },
      { icon: "🤝", title: "Full Business Support", desc: "From import logistics to retail placement — we handle everything." },
      { icon: "📈", title: "Brand Development", desc: "We help grow your brand recognition across Armenia." },
    ],
    for_wholesale: "For Wholesale Buyers",
    wholesale: [
      { icon: "📦", title: "Stable Supply", desc: "Consistent, reliable deliveries on your schedule." },
      { icon: "💼", title: "Flexible Terms", desc: "Customized cooperation terms to fit your business needs." },
      { icon: "💰", title: "Competitive Prices", desc: "Best pricing thanks to direct manufacturer relationships." },
    ],
    badge: "Official Distributor",
    cta: "Become a Partner",
  },
  RU: {
    label: "Работайте с нами",
    title: "Партнёрам",
    brands_title: "Бренды, которые мы представляем",
    for_manufacturers: "Для производителей",
    manufacturers: [
      { icon: "🌍", title: "Выход на армянский рынок", desc: "Открываем доступ к армянскому рынку через нашу дистрибьюторскую сеть." },
      { icon: "🤝", title: "Полное бизнес-сопровождение", desc: "От логистики импорта до размещения на полках — берём на себя всё." },
      { icon: "📈", title: "Развитие бренда", desc: "Помогаем развить узнаваемость вашего бренда по всей Армении." },
    ],
    for_wholesale: "Для оптовых покупателей",
    wholesale: [
      { icon: "📦", title: "Стабильные поставки", desc: "Регулярные и надёжные поставки по вашему графику." },
      { icon: "💼", title: "Гибкие условия", desc: "Индивидуальные условия сотрудничества под ваш бизнес." },
      { icon: "💰", title: "Конкурентные цены", desc: "Лучшие цены благодаря прямым отношениям с производителями." },
    ],
    badge: "Официальный дистрибьютор",
    cta: "Стать партнёром",
  },
  AM: {
    label: "Աշխատեք մեզ հետ",
    title: "Գործընկերներին",
    brands_title: "Ապրանքանիշեր, որոնք մենք ներկայացնում ենք",
    for_manufacturers: "Արտադրողների համար",
    manufacturers: [
      { icon: "🌍", title: "Մուտք հայկական շուկա", desc: "Բացում ենք հայկական շուկայի դռները մեր բաշխման ցանցի միջոցով։" },
      { icon: "🤝", title: "Ամբողջական բիզնես ուղեկցում", desc: "Ներմուծման լոգիստիկայից մինչև դարակ տեղադրում — ամեն ինչ կատարում ենք մենք։" },
      { icon: "📈", title: "Բրենդի զարգացում", desc: "Օգնում ենք զարգացնել ձեր բրենդի ճանաչելիությունը ամբողջ Հայաստանում։" },
    ],
    for_wholesale: "Մեծածախ գնորդների համար",
    wholesale: [
      { icon: "📦", title: "Կայուն մատակարարումներ", desc: "Կանոնավոր և հուսալի առաքումներ ըստ ձեր ժամանակացույցի։" },
      { icon: "💼", title: "Ճկուն պայմաններ", desc: "Անհատականացված համագործակցության պայմաններ ձեր բիզնեսի համար։" },
      { icon: "💰", title: "Մրցունակ գներ", desc: "Լավագույն գներ՝ արտադրողների հետ ուղղակի հարաբերությունների շնորհիվ։" },
    ],
    badge: "Պաշտոնական դիստրիբյուտոր",
    cta: "Դառնալ գործընկեր",
  },
};

export default function PartnersPage() {
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
          <div className="w-16 h-1 bg-[#C9A84C] rounded" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-[#0B1F33] mb-8"
        >
          {t.brands_title}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-2 border-[#C9A84C]/20 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-lg hover:border-[#C9A84C] transition-all w-64"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <h3 className="font-bold text-[#0B1F33] text-base text-center whitespace-nowrap">{brand.name}</h3>
              <p className="text-gray-500 text-xs text-center leading-relaxed">{brand.desc[lang]}</p>
              <span className="text-xs text-white bg-[#C9A84C] px-3 py-1 rounded-full font-semibold mt-auto whitespace-nowrap">
                {t.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-[#0B1F33] mb-6"
        >
          {t.for_manufacturers}
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {t.manufacturers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#0B1F33] text-white rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2 text-[#C9A84C]">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-[#0B1F33] mb-6"
        >
          {t.for_wholesale}
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {t.wholesale.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#0B1F33] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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