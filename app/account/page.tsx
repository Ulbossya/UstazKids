"use client";

import { useEffect, useState } from "react";

type CurrentUser = {
  fullName: string;
  email: string;
  phone?: string;
  role: string;
};

export default function AccountPage() {
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center text-xl">
        Жүктелуде...
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-5 bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#F5D74B] flex items-center justify-center text-3xl font-bold text-[#4B4B4B]">
            {user.fullName[0].toUpperCase()}
          </div>
          <h1 className="text-3xl font-bold mt-4">{user.fullName}</h1>
          <p className="text-gray-500">{user.role.toUpperCase()}</p>
        </div>

        <div className="space-y-4 text-lg">
          <p><strong>Аты-жөні:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone || "—"}</p>
          <p><strong>Рөлі:</strong> {user.role}</p>
        </div>
      </div>
    </main>
  );
}
