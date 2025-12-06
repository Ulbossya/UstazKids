"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "ата-ана" | "тәрбиеші" | "әдіскер" | "админ";

type CurrentUser = {
  fullName: string;
  email: string;
  role: Role;
};

// ✅ Card Data (өте әдемі UI)
const CARD_DATA = [
  {
    icon: "💡",
    title: "Шығармашылық идеялар",
    desc: "Сыныппен және оқушылармен өткізетін тағылымдық шараларға шабыт.",
  },
  {
    icon: "📅",
    title: "Іс-шара сценарийлері",
    desc: "Мектептегі тәрбиелік жұмыстарға арналған дайын сценарийлер.",
  },
  {
    icon: "🌱",
    title: "Дамыту жаттығулары",
    desc: "Оқушылардың тұлғалық және эмоционалдық дамуына арналған тапсырмалар.",
  },
];

export default function TarbieshiPage() {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [initialized, setInitialized] = useState(false);

  // currentUser-ды localStorage-тан оқу
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("currentUser");
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  // 🔹 ЕГЕР УЖЕ ТӘРБИЕШІ → КАБИНЕТ ТӘРБИЕШІ
  if (currentUser && currentUser.role === "тәрбиеші") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center py-20 px-6">
        {/* HERO SECTION */}
        <div className="max-w-5xl text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm mb-4">
            Тәрбиеші бөлімі
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Тәрбиешілерге арналған әдістемелік материалдар, құжаттар, оқу
            ресурстар және күнделікті жұмысқа қажетті барлық файлдар бір жерде.
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
          {CARD_DATA.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                // только первая карточка кликабельная → страница создания активити
                if (idx === 0) {
                  router.push("/tarbieshi/activity");
                }
              }}
              className={`bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-purple-100
                         hover:scale-[1.03] hover:shadow-2xl hover:border-purple-300 transition-all duration-300
                         ${idx === 0 ? "cursor-pointer" : ""}`}
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

  // 🔹 ЕГЕР ТӘРБИЕШІ ЕМЕС → ЭКРАН "УПС! сізге рұқсат жоқ" + РЕГИСТРАЦИЯҒА АУЫСУ
  return (
    <main className="bg-[#F8F8F8] min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <img src="/images/OBJECT.png" alt="error" className="w-80 mb-10" />
        <h1 className="text-4л font-extrabold text-black mb-4">
          УПС! сізге рұқсат жоқ
        </h1>
        <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
          UstazKids.kz есептік жазбасын алу үшін тіркеліңіз, содан кейін сізге
          платформа қолжетімді болады.
        </p>

        <button
          className="bg-yellow-300 hover:bg-yellow-400 py-3 px-10 rounded-xl font-semibold shadow mb-6"
          onClick={() => router.push("/register?role=тәрбиеші")}
        >
          ӨТІНІМ ҚАЛДЫРУ
        </button>
      </div>
    </main>
  );
}
