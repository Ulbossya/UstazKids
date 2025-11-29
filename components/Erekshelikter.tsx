import Image from "next/image";

export default function UstazKidsErekshelikteri() {
  const features = [
    { img: "/images/calendar.png", link: "/page1" },
    { img: "/images/calendar.png", link: "/page2" },
    { img: "/images/calendar.png", link: "/page3" },
    { img: "/images/calendar.png", link: "/page4" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#6B4EFF] mb-2">
          Ustaz Kids-тің Басты Ерекшеліктері
        </h1>
        <p className="text-[#4B4B4B] text-base md:text-lg max-w-3xl mx-auto">
          Біздің платформа тек құралдар жиынтығы емес, ол – бала тәрбиесіндегі
          сіздің сенімді серігіңіз. Әрбір элемент ойластырылған және сіздің
          жұмысыңызды жеңілдетуге бағытталған.
        </p>
      </div>

      {/* Мәтін мен басты сурет */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left space-y-6">
          <h3 className="text-lg font-semibold text-[#4B4B4B]">
            9 ай – 9 тақырып
          </h3>
          <p className="text-[#4B4B4B]">
            Құндылықтарға негізделген нақты құрылым.
          </p>
          <p className="text-[#4B4B4B]">Әр ай – жеке бағыт, жүйелі тәрбие.</p>
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/image.png"
            fill
            className="object-cover"
            priority
            alt={""}
          />
        </div>
      </div>

      {/* Иконки / ерекшеліктер */}
      <div className="grid grid-cols-4 mt-12 border-t border-gray-200">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-4 ${
              i !== features.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <a href={feature.link}>
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src={feature.img}
                  fill
                  className="object-contain"
                  alt={""}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
