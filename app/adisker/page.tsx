"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "ата-ана" | "тәрбиеші" | "әдіскер" | "админ";

type CurrentUser = {
  fullName: string;
  email: string;
  role: Role;
};

// 🔹 Данные для карточек кабинета әдіскера
const CARD_DATA = [
  {
    icon: "📘",
    title: "Әдістемелік материалдар",
    desc: "Тәрбие процесіне қажетті нұсқаулықтар, тренингтер, сабақ сценарийлері.",
  },
  {
    icon: "🗂️",
    title: "Құжаттар үлгілері",
    desc: "Жоспар, есеп, акт, күнделік, рәсімдеу үлгілері және стандарттары.",
  },
  {
    icon: "🎓",
    title: "Оқу ресурстары",
    desc: "Интерактив платформалар, дамыту тапсырмалары, жұмыс дәптерлері.",
  },
];

export default function AdiskerPage() {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [initialized, setInitialized] = useState(false);

  // 👀 currentUser-ды localStorage-тан оқу
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

  if (!initialized) return null; // гидрацияда мигание болмас үшін

  // ✅ ЕГЕР ЮЗЕР – ӘДІСКЕР → КАБИНЕТ ӘДІСКЕР
  if (currentUser && currentUser.role === "әдіскер") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center py-20 px-6">
        {/* HERO SECTION */}
        <div className="max-w-5xl text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm mb-4">
            Әдіскер бөлімі
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Әдіскерлерге арналған әдістемелік материалдар, құжаттар, оқу
            ресурстар және балабақша жұмысын үйлестіруге қажетті барлық құралдар
            бір жерде.
          </p>

          <div className="mt-10 flex justify-center">
            <img
              src="/logo.png"
              alt="Ustaz Kids"
              className="w-80 drop-shadow-lg"
            />
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

  // ❌ ЕГЕР ӘДІСКЕР ЕМЕС → «УПС! сізге рұқсат жоқ» + РЕГИСТРАЦИЯҒА АУЫСУ
  return (
    <main className="bg-[#F8F8F8] min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <img src="/images/OBJECT.png" alt="error" className="w-80 mb-10" />
        <h1 className="text-4xl font-extrabold text-black mb-4">
          УПС! сізге рұқсат жоқ
        </h1>
        <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
          UstazKids.kz есептік жазбасын алу үшін өтінім (тіркелу) қалдырыңыз,
          содан кейін сізге платформа қол жетімді болады.
        </p>

        <button
          className="bg-yellow-300 hover:bg-yellow-400 py-3 px-10 rounded-xl font-semibold shadow mb-6"
          onClick={() => router.push("/register?role=әдіскер")}
        >
          ӨТІНІМ ҚАЛДЫРУ
        </button>
      </div>
    </main>
  );
}
