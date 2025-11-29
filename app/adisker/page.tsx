"use client";
import { useState } from "react";

type Application = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: "ата-ана" | "тәрбиеші" | "әдіскер" | "админ";
};

export default function UpsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Application>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "ата-ана",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    const newApplications = [...applications, formData];
    localStorage.setItem("applications", JSON.stringify(newApplications));

    setFormData({ fullName: "", email: "", phone: "", password: "", role: "ата-ана" });
    alert("Өтінім қабылданды!");
    setShowForm(false);
  };

  return (
    <main className="bg-[#F8F8F8] min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <img src="/images/OBJECT.png" alt="error" className="w-80 mb-10" />
        <h1 className="text-4xl font-extrabold text-black mb-4">
          УПС! сізге рұқсат жоқ
        </h1>
        <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
          UstazKids.kz есептік жазбасын алу үшін өтінім қалдырыңыз, содан кейін
          сізге платформа қол жетімді болады.
        </p>

        <button
          className="bg-yellow-300 hover:bg-yellow-400 py-3 px-10 rounded-xl font-semibold shadow mb-6"
          onClick={() => setShowForm(true)}
        >
          ӨТІНІМ ҚАЛДЫРУ
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4">Өтінім формасы</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Толық аты-жөніңіз"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон нөмірі"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Құпия сөз"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="ата-ана">Ата-ана</option>
              <option value="тәрбиеші">Тәрбиеші</option>
              <option value="әдіскер">Әдіскер</option>
              <option value="админ">Админ</option>
            </select>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Жіберу
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
