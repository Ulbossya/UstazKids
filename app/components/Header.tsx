"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <nav className="flex items-center gap-8 font-medium text-sm">
        <Link href="/">БАСТЫ БЕТ</Link>
        <Link href="/tarbieshi">ТӘРБИЕШІ БӨЛІМІ</Link>
        <Link href="/adisker">ӘДІСКЕР БӨЛІМІ</Link>

        <button className="bg-yellow-400 px-5 py-2 rounded-full font-bold shadow">
          КІРУ
        </button>
      </nav>
    </header>
  );
}
