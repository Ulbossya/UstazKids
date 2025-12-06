"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Role = "ата-ана" | "тәрбиеші" | "әдіскер" | "админ";

type CurrentUser = {
  fullName: string;
  email: string;
  role: Role;
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<CurrentUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // читаем currentUser при смене страницы
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("currentUser");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }

    // при смене страницы меню закрываем
    setMenuOpen(false);
  }, [pathname]);

  // клик вне меню → закрыть
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const linkStyle =
    "text-[15px] font-semibold text-[#674DA2] hover:text-[#7B59D3] transition";
  const activeStyle = "text-purple-700";

  const getRoleHomeHref = (role: Role): string => {
    switch (role) {
      case "ата-ана":
        return "/parent";
      case "тәрбиеші":
        return "/tarbieshi";
      case "әдіскер":
        return "/adisker";
      case "админ":
        return "/admin";
      default:
        return "/";
    }
  };

  const handleMenuClick = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentUser");
    }
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  };

  const avatarLetter = user?.fullName?.trim()?.[0]?.toUpperCase() || "U";

  return (
    <header className="w-full bg-white py-4 px-10 flex justify-between items-center shadow-sm">
      {/* Логотип → басты бет */}
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </Link>

      <nav className="flex items-center gap-10">
        <Link
          href="/tarbieshi"
          className={`${linkStyle} ${
            pathname.startsWith("/tarbieshi") ? activeStyle : ""
          }`}
        >
          ТӘРБИЕШІ БӨЛІМІ
        </Link>

        <Link
          href="/adisker"
          className={`${linkStyle} ${
            pathname.startsWith("/adisker") ? activeStyle : ""
          }`}
        >
          ӘДІСКЕР БӨЛІМІ
        </Link>

        {/* Егер қолданушы жоқ болса — КІРУ */}
        {!user && (
          <Link
            href="/login"
            className="bg-[#F5D74B] px-6 py-2 rounded-full font-bold text-[#4b4b4b] hover:bg-[#f0cf3f] transition"
          >
            КІРУ
          </Link>
        )}

        {/* Егер қолданушы кірген болса → Аватар + dropdown */}
        {user && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-10 h-10 bg-[#F5D74B] rounded-full flex items-center justify-center font-bold text-[#4b4b4b] shadow-sm hover:shadow-md transition"
            >
              {avatarLetter}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50">
                {/* Шапка меню */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Рөлі: {user.role}
                  </p>
                </div>

                {/* Профиль */}
                <button
                  type="button"
                  onClick={() => handleMenuClick("/account")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center"
                >
                  <span>Профиль</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>

                {/* Күнтізбе */}
                <button
                  type="button"
                  onClick={() => handleMenuClick("/calendar")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center"
                >
                  <span>Күнтізбе</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>

                {/* Менің бөлімім – по роли */}
                <button
                  type="button"
                  onClick={() => handleMenuClick(getRoleHomeHref(user.role))}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center"
                >
                  <span>Менің бөлімім</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>

                {/* Жүйелік баптаулар */}
                <button
                  type="button"
                  onClick={() => handleMenuClick("/settings")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center"
                >
                  <span>Жүйелік баптаулар</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>

                {/* ШЫҒУ */}
                <button
                  type="button"
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between items-center border-t border-gray-100 mt-1"
                >
                  <span className="text-red-500 font-semibold">ШЫҒУ</span>
                  <span className="text-xs text-red-400">→</span>
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
