"use client";

import { useEffect } from "react";
import { CalendarIcon, BookOpenIcon, HandRaisedIcon, UsersIcon } from '@heroicons/react/24/solid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UstazKidsErekshelikteri() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const features = [
    { icon: CalendarIcon,},
    { icon: BookOpenIcon,},
    { icon: HandRaisedIcon,},
    { icon: UsersIcon, },
  ];

  const carouselImages = [
   "/images/image4.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",

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

        {/* Bootstrap Carousel */}
        <div id="ustazCarousel" className="carousel slide rounded-xl shadow-md" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselImages.map((src, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img
                  src={src}
                  className="d-block w-100 rounded-xl"
                  alt={`Carousel ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#ustazCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#ustazCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Иконки / ерекшеліктер */}
     <div className="flex justify-around mt-12 border-t border-gray-200 pt-6">
  {features.map((feature, i) => {
    const Icon = feature.icon;
    return (
      <div key={i} className="flex items-center">
        {/* Иконка */}
        <div className="w-16 h-16 mb-2 flex items-center justify-center bg-[#674DA2] rounded-full">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Divider - соңғы элементке қоспау */}
        {i !== features.length - 1 && (
          <div className="w-px h-12 bg-gray-300 mx-6"></div>
        )}
      </div>
    );
  })}
</div>

    </section>
  );
}
