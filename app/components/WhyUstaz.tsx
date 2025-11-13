"use client";

import Image from "next/image";

type Feature = {
  icon: string; // /public ішіндегі сурет жолы
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/images/first.png",
    title: "Уақытты үнемдейтін жоспарлар",
    text: "Дайын сабақ жоспарлары мен материалдар бір жерге жиналған.",
  },
  {
    icon: "/images/first.png",
    title: "Артық іздеусіз контент",
    text: "Қажет материалға тез қол жеткізетін ыңғайлы құрылым.",
  },
  {
    icon: "/images/first.png",
    title: "Шығармашылық идеялар",
    text: "Техникалық қиындықсыз іске асыратын бірден қолданылатын идеялар.",
  },
  {

    icon: "/images/first.png",
    title: "Кәсіби даму",
    text: "Мотивация мен шеберлікті арттыратын мастер-класстар.",
  },
  {
    icon: "/images/first.png",
    title: "Еңбекті бағалау",
    text: "Жетістіктерді атап өтетін марапат пен қолдау жүйесі.",
  },
  {
    icon: "/images/first.png",
    title: "Ата-анамен байланыс",
    text: "Тиімді кері байланыс пен бірлескен жұмыс арналары.",
  },
];

export default function WhyUstaz() {
  return (
    <section className="relative w-full -mt-px overflow-hidden">
      {/* Фон */} 
      <div className="absolute inset-0 -z-10">
        <Image
          src="/why-bg.png"
          alt="Ustaz Kids background"
          fill
          priority
          className="object-cover"
        />
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
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex flex-col items-center text-center hover:bg-white/15 transition"
            >
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={f.icon}
                  alt={f.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2">{f.title}</h3>
              <p className="text-sm text-white/85">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
