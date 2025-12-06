"use client";

import { useEffect, useState } from "react";

type ActivityForm = {
  title: string;
  description: string;
  group: string;
  room: string;
  date: string;      // "2025-12-01"
  startTime: string; // "09:00"
  endTime: string;   // "10:30"
  teacher: string;
};

type CurrentUser = {
  fullName: string;
  email: string;
  role: string;
};

export default function CreateActivityPage() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [form, setForm] = useState<ActivityForm>({
    title: "",
    description: "",
    group: "",
    room: "",
    date: "",
    startTime: "",
    endTime: "",
    teacher: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("currentUser");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CurrentUser;
        setCurrentUser(parsed);
        setForm((prev) => ({
          ...prev,
          teacher: parsed.fullName || "",
        }));
      } catch {
        setCurrentUser(null);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.date || !form.startTime || !form.endTime || !form.title) {
      alert("Атауы, күні және уақыты міндетті.");
      return;
    }

    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("activities") || "[]";
    let activities: any[] = [];
    try {
      activities = JSON.parse(stored);
    } catch {
      activities = [];
    }

    const newActivity = {
      id: Date.now(),
      ...form,
    };

    activities.push(newActivity);
    window.localStorage.setItem("activities", JSON.stringify(activities));

    alert("Активити сәтті қосылды! Енді оны күнтізбеден көре аласыз.");
    setForm((prev) => ({
      ...prev,
      title: "",
      description: "",
      group: "",
      room: "",
      date: "",
      startTime: "",
      endTime: "",
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
          Шығармашылық активити қосу
        </h1>
        <p className="text-gray-600 mb-6">
          Бұл форма арқылы баламен өткізілетін шығармашылық іс-шараны
          жоспарлап, оны күнтізбеге қоса аласыз.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Активити атауы
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Мысалы: Қағаздан гүл жасау шеберханасы"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Сипаттамасы
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Не істейді, мақсаты, қандай материалдар керек..."
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none min-h-[90px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Топ / Жас ерекшелігі
              </label>
              <input
                type="text"
                name="group"
                value={form.group}
                onChange={handleChange}
                placeholder="Мысалы: Ересек топ, 5–6 жас"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Кабинет / Орын
              </label>
              <input
                type="text"
                name="room"
                value={form.room}
                onChange={handleChange}
                placeholder="Мысалы: Музыка кабинеті, Аула"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Күні</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Басталу уақыты
              </label>
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Аяқталу уақыты
              </label>
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Тәрбиеші / Жауапты тұлға
            </label>
            <input
              type="text"
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              placeholder="Атыңыз"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
          >
            Қосу
          </button>
        </form>
      </div>
    </main>
  );
}
