"use client";

import { AcademicCapIcon, LightBulbIcon, BookOpenIcon, HandRaisedIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/solid';

type Feature = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: AcademicCapIcon,
    title: "Уақытты үнемдейтін жоспарлар",
    text: "Дайын сабақ жоспарлары мен материалдар бір жерге жиналған.",
  },
  {
    icon: BookOpenIcon,
    title: "Артық іздеусіз контент",
    text: "Қажет материалға тез қол жеткізетін ыңғайлы құрылым.",
  },
  {
    icon: LightBulbIcon,
    title: "Шығармашылық идеялар",
    text: "Техникалық қиындықсыз іске асыратын бірден қолданылатын идеялар.",
  },
  {
    icon: HandRaisedIcon,
    title: "Кәсіби даму",
    text: "Мотивация мен шеберлікті арттыратын мастер-класстар.",
  },
  {
    icon: ChartBarIcon,
    title: "Еңбекті бағалау",
    text: "Жетістіктерді атап өтетін марапат пен қолдау жүйесі.",
  },
  {
    icon: UsersIcon,
    title: "Ата-анамен байланыс",
    text: "Тиімді кері байланыс пен бірлескен жұмыс арналары.",
  },
];

export default function WhyUstaz() {
  return (
    <section className="relative w-full -mt-px overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#6C4AB6]/92" />
      </div>

      {/* Контент */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Неліктен Ustaz Kids?
        </h2>
        <p className="mt-3 text-center text-white/90 max-w-2xl mx-auto">
          Өйткені біз тәрбиешінің жанынадағы көмекшіміз.
        </p>

        {/* Сетка артықшылықтар */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex flex-col items-center text-center hover:bg-white/15 transition"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-[#FFD700] rounded-full hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-2">{f.title}</h3>
                <p className="text-sm text-white/85">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
