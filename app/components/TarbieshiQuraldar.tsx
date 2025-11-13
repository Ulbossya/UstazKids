import Image from "next/image";

export default function TarbieshiQuraldar() {
  const tools = [
    {
      name: "Жылдық жұмыс жоспарлары",
      icon: "/images/third.png",
    },
    {
      name: "Әдістемелік нұсқаулар",
      icon: "/images/third.png",
    },
    {
      name: "Тақырыптық жоспарлар",
      icon: "/images/third.png",
    },
    {
      name: "Семинарлық жоспарлар",
      icon: "/images/third.png",
    },
    {
      name: "Мониторинг және талдау құжаттары",
      icon: "/images/third.png",
    },
    {
      name: "Педагогтардың кәсіби өсуін жоспарлау құжаттары",
      icon: "/images/third.png",
    },
    {
      name: "Ата-анамен жұмыс жоспарлары",
      icon: "/images/third.png",
    },
    {
      name: "Бақылау парақшалары",
      icon: "/images/third.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Тақырып бөлігі */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#6B4EFF] mb-2">
          Тәрбиешінің Құралдар Тақтасы
        </h1>
        <p className="text-[#4B4B4B] text-base md:text-lg">
          Күнделікті жұмысыңызды тиімді ұйымдастырып, балалардың дамуына бар
          назарыңызды аударуға көмектесетін негізгі құралдар.
        </p>
      </div>

      {/* Құралдар тізімі */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-center border border-gray-100 flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-4"> {/* Иконкаларды үлкенірек қылдым */}
              <Image
                src={tool.icon}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm md:text-base font-medium text-[#4B4B4B]">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
