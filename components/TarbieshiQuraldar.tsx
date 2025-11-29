"use client";

import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserGroupIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

export default function TarbieshiQuraldar() {
  const tools = [
    { icon: AcademicCapIcon, name: "Жылдық жұмыс жоспарлары" },
    { icon: BookOpenIcon, name: "Әдістемелік нұсқаулар" },
    { icon: ClipboardDocumentListIcon, name: "Тақырыптық жоспарлар" },
    { icon: UsersIcon, name: "Семинарлық жоспарлар" },
    { icon: ChartBarIcon, name: "Мониторинг және талдау құжаттары" },
    { icon: LightBulbIcon, name: "Педагогтардың кәсіби өсуін жоспарлау құжаттары" },
    { icon: UserGroupIcon, name: "Ата-анамен жұмыс жоспарлары" },
    { icon: CheckCircleIcon, name: "Бақылау парақшалары" },
  ];

  return (
    <section className="relative bg-white">
      
      {/* 🔹 ҮСТІНДЕГІ ТОЛҚЫН — Hero-дағыдай */}
<svg
  className="w-full h-[120px] block rotate-180"
  viewBox="0 0 1440 110"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    fill="#6C4AB6"
    d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,48C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,110L1392,110C1344,110,1248,110,1152,110C1056,110,960,110,864,110C768,110,672,110,576,110C480,110,384,110,288,110C192,110,96,110,48,110L0,110Z"
  />
</svg>

      {/* 🔹 Контент */}
      <div className="max-w-6xl mx-auto px-6 pb-16 pt-6 -mt-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#6B4EFF] mb-2">
            Тәрбиешінің Құралдар Тақтасы
          </h1>
          <p className="text-[#4B4B4B] text-base md:text-lg">
            Күнделікті жұмысыңызды тиімді ұйымдастырып, балалардың дамуына бар
            назарыңызды аударуға көмектесетін негізгі құралдар.
          </p>
        </div>

        {/* 🔹 Құралдар */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-center border border-gray-100 flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-[#674DA2] rounded-full">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm md:text-base font-medium text-[#4B4B4B]">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}