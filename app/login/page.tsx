"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const applications = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );

    const user = applications.find(
      (app: any) => app.email === email && app.password === password
    );

    if (user) {
      alert(`Қош келдіңіз, ${user.fullName}! Рөліңіз: ${user.role}`);

      // ✅ currentUser-ды сақтаймыз
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Role-based redirect
      switch (user.role) {
        case "ата-ана":
          router.push("/parent");
          break;
        case "тәрбиеші":
          router.push("/tarbieshi");
          break;
        case "әдіскер":
          router.push("/adisker");
          break;
        case "админ":
          router.push("/admin");
          break;
        default:
          router.push("/");
      }
    } else {
      alert("Email немесе құпия сөз дұрыс емес!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Қош келдіңіз!
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="user@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Құпия сөз</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
          >
            Кіру
          </button>
        </form>

        {/* 🔹 Блок "аккаунт жоқ па?" */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Аккаунтыңыз жоқ па?{" "}
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="text-purple-600 font-semibold hover:underline"
          >
            Тіркелу
          </button>
        </div>
      </div>
    </div>
  );
}
