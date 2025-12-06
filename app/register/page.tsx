"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Role = "ата-ана" | "тәрбиеші" | "әдіскер" | "админ";

type Application = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
};

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const roleFromQuery = searchParams.get("role") as Role | null;

  const [formData, setFormData] = useState<Application>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: roleFromQuery || "ата-ана",
  });

  useEffect(() => {
    if (roleFromQuery) {
      setFormData((prev) => ({ ...prev, role: roleFromQuery }));
    }
  }, [roleFromQuery]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const applications = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );
    const newApplications = [...applications, formData];
    localStorage.setItem("applications", JSON.stringify(newApplications));

    alert("Тіркелу / өтінім сәтті қабылданды! Енді жүйеге кіре аласыз.");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-white flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-2 text-center">
          Тіркелу
        </h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          UstazKids.kz платформасына кіру үшін төмендегі форманы толтырыңыз.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Толық аты-жөніңіз
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Мысалы: Айжан Мерейқызы"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Телефон нөмірі
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="+7 700 000 00 00"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Құпия сөз
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="********"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Рөліңіз</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            >
              <option value="ата-ана">Ата-ана</option>
              <option value="тәрбиеші">Тәрбиеші</option>
              <option value="әдіскер">Әдіскер</option>
              <option value="админ">Админ</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
          >
            Тіркелу / Өтінім жіберу
          </button>
        </form>
      </div>
    </main>
  );
}
