"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const linkStyle =
    "text-[15px] font-semibold text-[#5E40A6] hover:text-[#7B59D3] transition";
  const activeStyle = "text-purple-700";

  return (
    <header className="w-full bg-white py-4 px-10 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <nav className="flex items-center gap-10">
        <Link
          href="/"
          className={`${linkStyle} ${pathname === "/" ? activeStyle : ""}`}
        >
          БАСТЫ БЕТ
        </Link>
        <Link
          href="/tarbieshi"
          className={`${linkStyle} ${pathname.startsWith("/tarbieshi") ? activeStyle : ""}`}
        >
          ТӘРБИЕШІ БӨЛІМІ
        </Link>
        <Link
          href="/adisker"
          className={`${linkStyle} ${pathname.startsWith("/adisker") ? activeStyle : ""}`}
        >
          ӘДІСКЕР БӨЛІМІ
        </Link>
        <Link
          href="/login"
          className="bg-[#F5D74B] px-6 py-2 rounded-full font-bold text-[#4b4b4b] hover:bg-[#f0cf3f] transition"
        >
          КІРУ
        </Link>
      </nav>
    </header>
  );
}
