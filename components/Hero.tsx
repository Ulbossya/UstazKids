// app/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden -mb-px">
      {/* фон-фото */}
      <img
        src="/images/bala.png"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        alt=""
      />

      {/* контент */}
      <div className="relative z-10 text-white max-w-2xl px-10">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          USTAZ KIDS — ҮЙРЕТУ ОҢАЙ, ДАМЫТУ ҚУАНЫШТЫ!
        </h1>
        <p className="text-lg mb-4">
          Бұл – әр тәрбиеші мен әдіскердің сенімді серігі. Барлық қажетті құрал –
          бір жерде. Бала үшін мағыналы, тәрбиеші үшін тиімді!
        </p>
        <p className="text-base opacity-90">
          Ustaz Kids — балабақшаларға арналған кешенді цифрлық орта…
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-[110px]"
        viewBox="0 0 1440 110"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#6C4AB6"  
          d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,48C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,110L1392,110C1344,110,1248,110,1152,110C1056,110,960,110,864,110C768,110,672,110,576,110C480,110,384,110,288,110C192,110,96,110,48,110L0,110Z"
        />
      </svg>
    </section>
  );
}
