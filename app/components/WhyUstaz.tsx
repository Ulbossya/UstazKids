// app/components/WhyUstaz.tsx
"use client";

import Image from "next/image";

type Feature = {
  icon?: string;   // путь к svg из /public (если есть)
  emoji?: string;  // запасной вариант (эмодзи)
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  { emoji: "⏱️", title: "Уақытты үнемдейтін жоспарлар",
    text: "Дайын сабақ жоспарлары мен материалдар бір жерге жиналған." },
  { emoji: "🔎", title: "Артық іздеусіз контент",
    text: "Қажет материалға тез қол жеткізетін ыңғайлы құрылым." },
  { emoji: "💡", title: "Шығармашылық идеялар",
    text: "Техникалық қиындықсыз іске асыратын бірден қолданылатын идеялар." },
  { emoji: "🚀", title: "Кәсіби даму",
    text: "Мотивация мен шеберлікті арттыратын мастер-класстар." },
  { emoji: "🏅", title: "Еңбекті бағалау",
    text: "Жетістіктерді атап өтетін марапат пен қолдау жүйесі." },
  { emoji: "👨‍👩‍👧", title: "Ата-анамен байланыс",
    text: "Тиімді кері байланыс пен бірлескен жұмыс арналары." },
];

export default function WhyUstaz() {
  return (
    // -mt-px стыкует блок вплотную к волне из Hero, убирая микрозазор
    <section className="relative w-full -mt-px overflow-hidden">
      {/* Фон: фото + фиолетовая подложка для стилистики макета */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/why-bg.png"           // твоя картинка из /public
          alt="Ustaz Kids background"
          fill
          priority
          className="object-cover"
        />
        {/* вместо чёрного — фирменный фиолетовый с прозрачностью */}
        <div className="absolute inset-0 bg-[#6C4AB6]/92" />
      </div>

      {/* Контент */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Here Ustaz Kids?
        </h2>
        <p className="mt-3 text-center text-white/90 max-w-2xl mx-auto">
          Өйткені біз тәрбиешінің жанынадағы көмекшіміз.
        </p>

        {/* Сетка преимуществ */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/15 transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  {f.icon ? (
                    <Image src={f.icon} alt="" width={28} height={28} className="opacity-90" />
                  ) : (
                    <span className="text-2xl">{f.emoji}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* нижнюю волну при желании можно добавить здесь */}
    </section>
  );
}
