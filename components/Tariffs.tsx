"use client";

import { useRouter } from "next/navigation";

export default function Tariffs() {
  const router = useRouter();

  // Жеке тәрбиеші тарифтері
  const privatePlanPrice = 30000;
  const privatePlanMonths = 9;

  // Балабақша тарифтері
  const kindergartenPlanPrice = 300000;

  const handleSelectPrivatePlan = () => {
    const totalPrice = privatePlanPrice; // 30 000 ₸
    router.push(`/checkout?plan=Жеке%20тәрбиеші&price=${totalPrice}`);
  };

  const handleSelectKindergartenPlan = () => {
    const totalPrice = kindergartenPlanPrice; // 300 000 ₸
    router.push(`/checkout?plan=Балабақша&price=${totalPrice}`);
  };

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#5E40A6] mb-10">
          Ustaz Kids платформасының тарифтері
        </h2>

        <div className="grid gap-6 md:grid-cols-[1.1fr,2fr]">
          {/* Жеке тәрбиеші */}
          <div className="bg-white rounded-3xl shadow-lg shadow-black/5 px-6 py-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#3A2A72] mb-1">
                Жеке тәрбиеші
              </h3>
              <p className="text-sm text-gray-500 mb-4">Жылдық тариф</p>

              <ul className="space-y-3">
                <li>✓ Тоғыз айға перспективалық жоспар</li>
                <li>✓ Тоғыз айға циклограмма</li>
                <li>✓ Үйә кестесі</li>
                <li>✓ Күн тәртібі</li>
                <li>✓ Жаздық сауықтыру жоспары</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="rounded-full bg-[#F5D74B] px-6 py-3 text-sm font-semibold text-[#4B4B4B] hover:bg-[#eccf3e] transition"
                onClick={handleSelectPrivatePlan}
              >
                Жоспарды таңдаңыз (30 000 ₸)
              </button>
            </div>
          </div>

          {/* Балабақша */}
          <div className="rounded-3xl bg-[#6A47C8] text-white px-6 py-8 md:px-10 md:py-10 shadow-xl shadow-black/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Балабақша</h3>
            <p className="text-sm text-white/80 mb-6">Жылдық тариф</p>

            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Тәрбиеші құжаттары:
                </h4>
                <ul className="space-y-2">
                  <li>✓ Перспективалық жоспар</li>
                  <li>✓ Циклограмма</li>
                  <li>✓ Баланың даму динамикасы</li>
                  <li>✓ Үйә кестесі Күн тәртібі</li>
                  <li>✓ Ата-аналармен байланыс құралдары</li>
                  <li>✓ Ертегілер (әр жас ерекшегі бойынша)</li>
                  <li>✓ Құндылық іс-шаралары</li>
                  <li>✓ Педагогтердің жеке дамуына арналған кітаптар</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Видео материалдар:</h4>
                <ul className="space-y-2">
                  <li>✓ Топтың жабдықталуы фотолар</li>
                  <li>✓ Еркін ойын видеолар</li>
                  <li>✓ Ойындар видеолар</li>
                  <li>✓ Ерте даму жаттығулары видеолар</li>
                  <li>✓ Логопедиялық жаттығу видеолар</li>
                  <li>✓ Заттық кеңістік ортаны құру</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Әдіскердің құжаттары:</h4>
                <ul className="space-y-2 mb-4">
                  <li>✓ Нұсқалық хаттар</li>
                  <li>✓ Еңбек әрекеті кезіндегі қауіпсіздік</li>
                  <li>✓ Қауіпсіздікті қамтамасыз ету</li>
                  <li>✓ Тәрбиешілердің нұсқалығы</li>
                  <li>✓ Балабақша аумағындағы қауіпсіздік</li>
                  <li>✓ Музыка ҮЙӘ кезіндегі қауіпсіздік</li>
                  <li>✓ Серуен кезіндегі қауіпсіздік</li>
                  <li>✓ Тамақтану кезіндегі қауіпсіздік</li>
                  <li>✓ Тәрбиешенің білім беру кезіндегі қауіпсіздік</li>
                  <li>✓ Шығармашылық кезеңдегі қауіпсіздік</li>
                </ul>

                <h5 className="text-md font-semibold mb-2">Құжаттар:</h5>
                <ul className="space-y-2">
                  <li>✓ Педагогикалық әдістемелік кеңестің хаттамалары</li>
                  <li>✓ Ата-аналар жиналысының хаттамалары</li>
                  <li>✓ Жазғы сауықтыру жоспары</li>
                  <li>✓ Семинар / Кеңестер</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="rounded-full bg-white text-[#6A47C8] px-6 py-3 text-sm font-semibold hover:bg-[#F5F1FF] transition"
                onClick={handleSelectKindergartenPlan}
              >
                Жоспарды таңдаңыз (300 000 ₸)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
