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

  // State: қай тариф таңдалған
  const [selectedPlan, setSelectedPlan] = useState<"private" | "doc" | null>(null);

  // State: таңдалған элементтер
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Toggle функциясы
  const toggleItem = (item: { name: string; price: number }) => {
    setSelectedItems((prev) =>
      prev.includes(item.name)
        ? prev.filter((i) => i !== item.name)
        : [...prev, item.name]
    );
  };

  // Жалпы баға
  const itemsList = selectedPlan === "private" ? privateItems : selectedPlan === "doc" ? docItems : [];
  const totalPrice = itemsList
    .filter((item) => selectedItems.includes(item.name))
    .reduce((sum, item) => sum + item.price, 0);

  // Checkout
  const handleSelectPlan = () => {
    const planItems = selectedItems.join(", ");
    router.push(`/checkout?plan=${encodeURIComponent(planItems)}&price=${totalPrice}`);
  };

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#5E40A6] mb-10">
          Ustaz Kids платформасының тарифтері
        </h2>

        {/* Батырмалар арқылы тариф таңдау */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedPlan === "private" ? "bg-[#F5D74B] text-[#4B4B4B]" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setSelectedPlan("private");
              setSelectedItems([]);
            }}
          >
            Жеке тәрбиеші
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedPlan === "doc" ? "bg-[#6A47C8] text-white" : "bg-gray-200 text-gray-700"
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
          <div className={`p-6 rounded-2xl shadow-lg ${selectedPlan === "doc" ? "bg-[#6A47C8] text-white" : "bg-white text-black"}`}>
            <h3 className="text-2xl font-bold mb-4">
              {selectedPlan === "private" ? "Жеке тәрбиеші" : "Балабақша"} тарифі
            </h3>

            {itemsList.map((item) => (
              <label
                key={item.name}
                className={`flex justify-between items-center p-3 border rounded-lg mb-2 cursor-pointer transition ${
                  selectedPlan === "doc" ? "border-white/30 hover:bg-white/10" : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.name)}
                    onChange={() => toggleItem(item)}
                    className={`w-5 h-5 ${selectedPlan === "doc" ? "accent-yellow-300" : "accent-[#6A47C8]"}`}
                  />
                  <span>{item.name}</span>
                </div>
                <span className={`font-semibold ${selectedPlan === "doc" ? "text-yellow-300" : "text-[#6B4EFF]"}`}>
                  {item.price} ₸
                </span>
              </label>
            ))}

            <div className="mt-4 flex justify-center flex-col items-center gap-3">
              <p className={`text-lg font-bold ${selectedPlan === "doc" ? "text-white" : "text-black"}`}>
                Жалпы баға: {totalPrice} ₸
              </p>
              <button
                className={`rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition ${
                  selectedPlan === "doc" ? "bg-white text-[#6A47C8] hover:bg-[#F5F1FF]" : "bg-[#F5D74B] text-[#4B4B4B] hover:bg-[#eccf3e]"
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
