// app/components/Tariffs.tsx
"use client";

const privateItems = [
  "Тоғыз айға перспективалық жоспар",
  "Тоғыз айға циклограмма",
  "Үйә кестесі",
  "Күн тәртібі",
  "Жаздық сауықтыру жоспары",
];

const docItems = [
  "Перспективалық жоспар",
  "Циклограмма",
  "Баланың даму динамикасы",
  "Үйә кестесі Күн тәртібі",
  "Ата-аналармен байланыс құралдары",
  "Ертегілер (әр жас ерекшелігі бойынша)",
  "Құндылық іс-шаралары (Ата-аналармен, балалармен)",
  "Педагогтердің жеке дамуына арналған кітаптар тізімі",
];

const videoItems = [
  "Топтың жабдықталуы фотолар",
  "Еркін ойын қызғаны видеолар",
  "Ойындар видеолар",
  "Ерте даму жаттығулары (мэл) видеолар",
  "Логопедиялық жаттығу видеолар",
  "Заттық кеңістік ортаны құрудың негізгі қағидалары",
];

const methodItemsTop = [
  "Нұсқалық хаттар",
  "Еңбек әрекеті кезіндегі қауіпсіздік",
  "Қауіпсіздікті қамтамасыз ету",
  "Тәрбиешілердің нұсқалығы",
  "Балабақша аумағындағы қауіпсіздік",
  "Музыка ҮЙӘ кезіндегі қауіпсіздік",
  "Серуен кезіндегі қауіпсіздік",
  "Тамақтану кезіндегі қауіпсіздік",
  "Тәрбиешенің білім беру кезіндегі қауіпсіздік",
  "Шығармашылық кезеңдегі қауіпсіздік",
];

const methodItemsBottom = [
  "Педагогикалық әдістемелік кеңестің хаттамалары",
  "Ата-аналар жиналысының хаттамалары",
  "Жазғы сауықтыру жоспары",
  "Семинар / Кеңестер",
];

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm md:text-base text-[#3A2A72]">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#6A47C8] text-[10px] text-white">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function Tariffs() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#5E40A6] mb-10">
          Ustaz Kids платформасының тарифтері
        </h2>

        <div className="grid gap-6 md:grid-cols-[1.1fr,2fr]">
          {/* Жеке тәрбиеші */}
          <div className="bg-white rounded-3xl shadow-lg shadow-black/5 px-6 py-8 md:px-8 md:py-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#3A2A72] mb-1">
                Жеке тәрбиеші
              </h3>
              <p className="text-sm text-gray-500 mb-4">Жылдық тариф</p>

              <ul className="space-y-3">
                {privateItems.map((item) => (
                  <Bullet key={item} text={item} />
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-[#F5D74B] px-6 py-3 text-sm font-semibold text-[#4B4B4B] hover:bg-[#eccf3e] transition">
                Жоспарды таңдаңыз (30 000 ₸)
              </button>
            </div>
          </div>

          {/* Балабақша */}
          <div className="rounded-3xl bg-[#6A47C8] text-white px-6 py-8 md:px-10 md:py-10 shadow-xl shadow-black/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Балабақша</h3>
            <p className="text-sm text-white/80 mb-6">Жылдық тариф</p>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Тәрбиеші құжаттары */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Тәрбиеші құжаттары:
                </h4>
                <ul className="space-y-2">
                  {docItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-[15px]"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[10px] text-[#6A47C8]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Видео материалдар */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Видео материалдар:</h4>
                <ul className="space-y-2">
                  {videoItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-[15px]"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[10px] text-[#6A47C8]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Әдіскер құжаттары */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Әдіскердің құжаттары:
                </h4>
                <ul className="space-y-2 mb-4">
                  {methodItemsTop.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-[15px]"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[10px] text-[#6A47C8]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-md font-semibold mb-2">Құжаттар:</h5>
                <ul className="space-y-2">
                  {methodItemsBottom.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-[15px]"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[10px] text-[#6A47C8]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-white text-[#6A47C8] px-6 py-3 text-sm font-semibold hover:bg-[#F5F1FF] transition">
                Жоспарды таңдаңыз (300 000 ₸)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
