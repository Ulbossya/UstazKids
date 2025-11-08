export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center">
      <img
        src="/child-photo.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      <div className="relative z-10 text-white max-w-2xl px-10">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          USTAZ KIDS — ҮЙРЕТУ ОҢАЙ, ДАМЫТУ ҚУАНЫШТЫ!
        </h1>

        <p className="text-lg mb-4">
          Бұл – әр тәрбиеші мен әдіскердің сенімді серігі. Барлық қажетті құрал –
          бір жерде. Бала үшін мағыналы, тәрбиеші үшін тиімді!
        </p>

        <p className="text-base opacity-90">
          Ustaz Kids — балабақшаларға арналған кешенді цифрлық орта. Бұл –
          тәрбиешілер мен әдіскерлердің күнделікті жұмысын жеңілдетіп, сапалы
          тәрбие мен білім беруге бағытталған арнайы құралдар мен ресурстар
          жиынтығы.
        </p>
      </div>
    </section>
  );
}
