"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Тариф элементтері
const privateItems = [
  { name: "Тоғыз айға перспективалық жоспар", price: 5000 },
  { name: "Тоғыз айға циклограмма", price: 4000 },
  { name: "Үйә кестесі", price: 3000 },
  { name: "Күн тәртібі", price: 2000 },
  { name: "Жаздық сауықтыру жоспары", price: 6000 },
];

const docItems = [
  { name: "Перспективалық жоспар", price: 3000 },
  { name: "Циклограмма", price: 2500 },
  { name: "Баланың даму динамикасы", price: 2000 },
  { name: "Үйә кестесі Күн тәртібі", price: 1500 },
  { name: "Ата-аналармен байланыс құралдары", price: 2000 },
  { name: "Ертегілер (әр жас ерекшелігі бойынша)", price: 1800 },
  { name: "Құндылық іс-шаралары (Ата-аналармен, балалармен)", price: 2200 },
  { name: "Педагогтердің жеке дамуына арналған кітаптар тізімі", price: 2500 },
];

export default function Tariffs() {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState<"private" | "doc" | null>(
    null
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (item: { name: string; price: number }) => {
    setSelectedItems((prev) =>
      prev.includes(item.name)
        ? prev.filter((i) => i !== item.name)
        : [...prev, item.name]
    );
  };

  const itemsList =
    selectedPlan === "private"
      ? privateItems
      : selectedPlan === "doc"
      ? docItems
      : [];

  const totalPrice = itemsList
    .filter((item) => selectedItems.includes(item.name))
    .reduce((sum, item) => sum + item.price, 0);

  const handleSelectPlan = () => {
    const planItems = selectedItems.join(", ");
    router.push(
      `/checkout?plan=${encodeURIComponent(planItems)}&price=${totalPrice}`
    );
  };

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#5E40A6] mb-10">
          Ustaz Kids платформасының тарифтері
        </h2>

        {/* Батырмалар арқылы тариф таңдау */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition shadow-sm ${
              selectedPlan === "private"
                ? "bg-[#F5D74B] text-[#4B4B4B]"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setSelectedPlan("private");
              setSelectedItems([]);
            }}
          >
            Жеке тәрбиеші
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold transition shadow-sm ${
              selectedPlan === "doc"
                ? "bg-[#6A47C8] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setSelectedPlan("doc");
              setSelectedItems([]);
            }}
          >
            Балабақша
          </button>
        </div>

        {/* Тариф элементтері */}
        {selectedPlan && (
          <div
            className={`rounded-[30px] p-6 md:p-8 shadow-xl ${
              selectedPlan === "doc"
                ? "bg-[#6A47C8] text-white"
                : "bg-white text-black"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">
              {selectedPlan === "private" ? "Жеке тәрбиеші" : "Балабақша"} тарифі
            </h3>
            <p
              className={`text-sm mb-6 ${
                selectedPlan === "doc" ? "text-white/80" : "text-gray-500"
              }`}
            >
              Қажетті модульдерді белгілеңіз. Таңдалған модульдер жалпы бағаға
              қосылады.
            </p>

            {/* СЕТКА КАРТОЧЕК */}
            <div className="grid gap-4 md:grid-cols-2">
              {itemsList.map((item) => {
                const checked = selectedItems.includes(item.name);
                return (
                  <label
                    key={item.name}
                    className={`flex h-full justify-between items-start gap-3 rounded-2xl border px-4 py-3 md:px-5 md:py-4 cursor-pointer transition
                    ${
                      selectedPlan === "doc"
                        ? `border-white/30 ${
                            checked
                              ? "bg-white/15"
                              : "bg-white/5 hover:bg-white/10"
                          }`
                        : `border-gray-200 ${
                            checked
                              ? "bg-purple-50"
                              : "bg-white hover:bg-gray-50"
                          }`
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleItem(item)}
                        className={`mt-1 w-5 h-5 rounded ${
                          selectedPlan === "doc"
                            ? "accent-yellow-300"
                            : "accent-[#6A47C8]"
                        }`}
                      />
                      <span className="text-sm md:text-base leading-snug">
                        {item.name}
                      </span>
                    </div>

                    <span
                      className={`text-sm md:text-base font-semibold whitespace-nowrap ${
                        selectedPlan === "doc"
                          ? "text-[#FFD941]"
                          : "text-[#6B4EFF]"
                      }`}
                    >
                      {item.price.toLocaleString("ru-RU")} ₸
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Итог + кнопка */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <p
                className={`text-lg font-bold ${
                  selectedPlan === "doc" ? "text-white" : "text-black"
                }`}
              >
                Жалпы баға:{" "}
                <span className="text-[#FFD941]">
                  {totalPrice.toLocaleString("ru-RU")} ₸
                </span>
              </p>

              <button
                className={`rounded-full px-8 py-3 text-sm md:text-base font-semibold transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed
                ${
                  selectedPlan === "doc"
                    ? "bg-white text-[#6A47C8] hover:bg-[#F5F1FF]"
                    : "bg-[#F5D74B] text-[#4B4B4B] hover:bg-[#eccf3e]"
                }`}
                onClick={handleSelectPlan}
                disabled={totalPrice === 0}
              >
                Таңдалған жоспарды растау
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
