"use client";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // жаңа қолданушы объектісі
    const newUser: User = { name, email, password };

    // массивке қосу
    setUsers((prev) => [...prev, newUser]);

    // форманы тазалау
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Тіркелу
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Атыңыз"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Құпия сөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
          >
            Тіркелу
          </button>
        </form>

        {/* Тіркелген қолданушыларды көрсету */}
        {users.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Тіркелген қолданушылар:
            </h2>
            <ul className="space-y-2">
              {users.map((u, i) => (
                <li
                  key={i}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700"
                >
                  {u.name} — {u.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
