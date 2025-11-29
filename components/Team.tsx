"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  photo: string; 
};

const TEAM: Member[] = [
  { name: "Амангүл Матан", role: "Бас директор",           photo: "/images/team/teacher1.png" },
  { name: "Фариза Кузенбаева", role: "Академиялық директор", photo: "/images/team/teacher2.png" },
  { name: "Гүлнұр Дайрабаева", role: "Методист тренер",       photo: "/images/team/teacher3.png" },
  { name: "Гүлімжан Мырзабекова", role: "Методист тренер",   photo: "/images/team/teacher4.png" },
];

export default function Team() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#5E40A6]">
          Команда
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <article
              key={i}
              className="rounded-2xl bg-[#5E40A6] text-white p-8 shadow-xl shadow-black/10"
            >
              {/* аватар */}
              <div className="mx-auto h-40 w-40 rounded-full p-2 bg-white/90">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                    priority={i < 2}
                  />
                </div>
              </div>

              {/* аты-жөні, рөлі */}
              <h3 className="mt-6 text-2xl font-extrabold text-center leading-tight">
                {m.name}
              </h3>
              <p className="mt-2 text-center text-white/90 text-lg">
                {m.role}
              </p>

              {/* батырма */}
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  className="rounded-xl bg-[#F5D74B] px-6 py-3 font-bold text-[#4B4B4B] hover:bg-[#eccf3e] transition"
                >
                  Толығырақ
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
