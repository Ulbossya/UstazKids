"use client";

import { AcademicCapIcon, BookOpenIcon, ClipboardDocumentListIcon, UsersIcon, ChartBarIcon, LightBulbIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

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
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Тақырып бөлігі */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#6B4EFF] mb-2">
          Тәрбиешінің Құралдар Тақтасы
        </h1>
        <p className="text-[#4B4B4B] text-base md:text-lg">
          Күнделікті жұмысыңызды тиімді ұйымдастырып, балалардың дамуына бар
          назарыңызды аударуға көмектесетін негізгі құралдар.
        </p>
      </div>

      {/* Құралдар тізімі */}
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
    </section>
  );
}
