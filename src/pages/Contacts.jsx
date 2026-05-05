import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_3t0dls7";
const TEMPLATE_ID = "template_4l990ls";
const PUBLIC_KEY = "0a0hDv9PvTzCrrzhf";

const content = {
  EN: {
    label: "Get In Touch",
    title: "Contacts",
    address_label: "Address",
    address: "Davtashen district, Yerevan, Armenia",
    phone_label: "Phone",
    phone: "+374 91 726217",
    email_label: "Email",
    email: "Combogroupimport@gmail.com",
    form_title: "Send a Message",
    name: "Your Name",
    company: "Company",
    phone_field: "Phone",
    email_field: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "✅ Message sent successfully!",
    error: "❌ Something went wrong. Please try again.",
    map_title: "Our Location",
    legal_title: "Legal Information",
    legal: {
      company: "«Combo Group» LLC",
      reg: "Registration number: 271.110.1480205",
      tax: "Tax number: 08307238",
      address: "Address: Davtashen district, Yerevan, Armenia",
      director: "Director: Hovhannes Hovhannisyan Yuriki",
      bank: "Bank: «ACBA BANK» JSC",
      branch: "Branch: «Avan»",
      account: "Account: 220663331530000 AMD",
    },
  },
  RU: {
    label: "Свяжитесь с нами",
    title: "Контакты",
    address_label: "Адрес",
    address: "р-н Давташен, Ереван, Армения",
    phone_label: "Телефон",
    phone: "+374 91 726217",
    email_label: "Email",
    email: "Combogroupimport@gmail.com",
    form_title: "Отправить сообщение",
    name: "Ваше имя",
    company: "Компания",
    phone_field: "Телефон",
    email_field: "Email",
    message: "Сообщение",
    send: "Отправить",
    sending: "Отправка...",
    success: "✅ Сообщение успешно отправлено!",
    error: "❌ Что-то пошло не так. Попробуйте снова.",
    map_title: "Наше местоположение",
    legal_title: "Реквизиты",
    legal: {
      company: "ООО «Комбо Груп»",
      reg: "Регистрационный номер: 271.110.1480205",
      tax: "Налоговый номер: 08307238",
      address: "Адрес: р-н Давташен, Ереван, Армения",
      director: "Директор: Hovhannes Hovhannisyan Yuriki",
      bank: "Банк: ЗАО «АКБА БАНК»",
      branch: "Филиал: «Аван»",
      account: "Счёт: 220663331530000 AMD",
    },
  },
  AM: {
    label: "Կապ հաստատեք",
    title: "Կոնտակտներ",
    address_label: "Հասցե",
    address: "Դավթաշեն, Երևան, Հայաստան",
    phone_label: "Հեռախոս",
    phone: "+374 91 726217",
    email_label: "Էլ. փոստ",
    email: "Combogroupimport@gmail.com",
    form_title: "Ուղարկել հաղորդագրություն",
    name: "Ձեր անունը",
    company: "Ընկերություն",
    phone_field: "Հեռախոս",
    email_field: "Էլ. փոստ",
    message: "Հաղորդագրություն",
    send: "Ուղարկել",
    sending: "Ուղարկվում է...",
    success: "✅ Հաղորդագրությունն հաջողությամբ ուղարկվեց!",
    error: "❌ Ինչ-որ բան սխալ գնաց։ Խնդրում ենք նորից փորձել։",
    map_title: "Մեր գտնվելու վայրը",
    legal_title: "Իրավաբանական տվյալներ",
    legal: {
      company: "«Կոմբո Գրուփ» ՍՊԸ",
      reg: "Գրանցման համար: 271.110.1480205",
      tax: "Հարկ վճարողի համար (ՀՎՀՀ): 08307238",
      address: "Հասցե: Դավթաշեն, Երևան, Հայաստան",
      director: "Գործադիր մարմնի դեկավար: Հովhаnnес Հovhаnnисян Юрики",
      bank: "Բանկ: «ԱԿԲԱ ԲԱՆԿ» ՓԲԸ",
      branch: "«Ավան» մասնաճյուղ",
      account: "220663331530000 AMD",
    },
  },
};

export default function ContactsPage() {
  const { lang } = useLang();
  const t = content[lang];
  const [legalOpen, setLegalOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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

        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0B1F33] rounded-2xl p-8 text-white h-fit">
              <div className="space-y-8">
                {[
                  { icon: "📍", label: t.address_label, value: t.address },
                  { icon: "📞", label: t.phone_label, value: t.phone, href: `tel:${t.phone}` },
                  { icon: "📧", label: t.email_label, value: t.email, href: `mailto:${t.email}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-[#C9A84C] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#0B1F33] mb-6">{t.form_title}</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.name}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder={t.company}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t.phone_field}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.email_field}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.message}
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
              />

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium">
                  {t.success}
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                  {t.error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className={`w-full font-bold py-4 rounded-xl transition-all ${
                  status === "sending"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#C9A84C] text-[#0B1F33] hover:brightness-110"
                }`}
              >
                {status === "sending" ? t.sending : t.send}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#0B1F33] mb-6">{t.map_title}</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23164.535161590065!2d44.46202160904168!3d40.224741924116664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a9819fc213331%3A0x592823c41827a8a6!2z0JTQsNCy0YLQsNGI0LXQvSwg0JXRgNC10LLQsNC9!5e1!3m2!1sru!2sam!4v1778024029632!5m2!1sru!2sam"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border border-gray-200 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setLegalOpen(!legalOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-[#0B1F33] text-sm uppercase tracking-widest">
              {t.legal_title}
            </span>
            <motion.span
              animate={{ rotate: legalOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#C9A84C] text-xl font-bold"
            >
              ↓
            </motion.span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: legalOpen ? "auto" : 0, opacity: legalOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-6 grid sm:grid-cols-2 gap-3">
              {Object.values(t.legal).map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">—</span>
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}