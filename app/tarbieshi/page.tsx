export default function TardieshiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center py-20 px-6">

      {/* HERO SECTION */}
      <div className="max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm mb-4">
          Тәрбиеші бөлімі
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Тәрбиешілерге арналған әдістемелік материалдар, құжаттар, оқу ресурстар және 
          күнделікті жұмысқа қажетті барлық файлдар бір жерде.
        </p>

        {/* Illustration */}
        <div className="mt-10 flex justify-center">
          <img
            src="/logo.png"
            alt="teacher"
            className="w-80 drop-shadow-lg"
          />
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card */}
        {CARD_DATA.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-purple-100 
                     hover:scale-[1.03] hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-bold text-purple-700 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </main>
  );
}

// ✅ Card Data (өте әдемі UI)
const CARD_DATA = [
  {
    icon: "📘",
    title: "Әдістемелік материалдар",
    desc: "Тәрбие процесіне қажетті нұсқаулықтар, тренингтер, сабақ сценарийлері."
  },
  {
    icon: "🗂️",
    title: "Құжаттар үлгілері",
    desc: "Жоспар, есеп, акт, күнделік, рәсімдеу үлгілері және стандарттары."
  },
  {
    icon: "🎓",
    title: "Оқу ресурстары",
    desc: "Интерактив платформалар, дамыту тапсырмалары, жұмыс дәптерлері."
  },
  {
    icon: "💡",
    title: "Шығармашылық идеялар",
    desc: "Сыныппен және оқушылармен өткізетін тағылымдық шараларға шабыт."
  },
  {
    icon: "📅",
    title: "Іс-шара сценарийлері",
    desc: "Мектептегі тәрбиелік жұмыстарға арналған дайын сценарийлер."
  },
  {
    icon: "🌱",
    title: "Дамыту жаттығулары",
    desc: "Оқушылардың тұлғалық және эмоционалдық дамуына арналған тапсырмалар."
  }
];