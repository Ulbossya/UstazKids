// app/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Жоғарғы негізгі аймақ */}
      <div className="bg-[#6C4AB6] text-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* ЛОГО */}
            <div className="md:col-span-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Ukids"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* СЫЗЫҚ */}
            <div className="hidden md:block md:col-span-8">
              <hr className="border-white/40" />
            </div>

            {/* Байланыс жолы */}
            <div className="md:col-span-12 mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Телефон */}
              <div className="flex items-center gap-3 text-[18px] font-semibold">
                <PhoneIcon className="h-6 w-6 text-white" />
                <a href="tel:+77777777777" className="text-white hover:opacity-90">
                  +7 (777) 777-77-77
                </a>
              </div>

              {/* Адрес */}
              <div className="flex items-center gap-3 text-[18px] font-semibold">
                <PinIcon className="h-6 w-6 text-white" />
                <span className="text-white">г. Нұр-Сұлтан, ул. Қошқарбаева 11/2</span>
              </div>

              {/* Әлеуметтік желілер */}
              <div className="flex items-center gap-5">
                <Link
                  href="mailto:hello@ukids.kz"
                  aria-label="Email"
                  className="text-white hover:opacity-90"
                >
                  <MailIcon className="h-6 w-6 text-white" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-white hover:opacity-90"
                >
                  <InstagramIcon className="h-6 w-6 text-white" />
                </Link>
                <Link
                  href="https://wa.me/77777777777"
                  target="_blank"
                  aria-label="WhatsApp"
                  className="text-white hover:opacity-90"
                >
                  <WhatsappIcon className="h-6 w-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Төменгі қараңғы жолақ */}
        <div className="bg-[#513991]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-white text-[14px]">
            <p>© BIF IT ДЕПАРТАМЕНТімен әзірленген — Астана қаласында сайт жасау</p>

            <Link
              href="/privacy"
              className="text-white underline decoration-white/50 hover:decoration-white"
            >
              Құпиялық саясаты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------- Иконкалар (inline SVG) --------- */
function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.88.32 1.74.59 2.56a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.52-1.52a2 2 0 0 1 2.11-.45c.82.27 1.68.47 2.56.59A2 2 0 0 1 22 16.92z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 22s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function WhatsappIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 11.5a8.5 8.5 0 0 1-12.7 7.3L4 21l2.3-3.2A8.5 8.5 0 1 1 20 11.5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8.5 9.5c0 3 4 6 6 6 .7 0 1.8-.6 2-1.3l.2-.7c.1-.4-.1-.7-.5-.9l-1.1-.4c-.3-.1-.7 0-.9.2l-.4.5c-.2.2-.5.2-.8.1-1-.4-2.2-1.6-2.6-2.6-.1-.3 0-.6.1-.8l.5-.4c.2-.2.3-.6.2-.9l-.4-1.1c-.2-.4-.5-.6-.9-.5l-.7.2c-.8.2-1.3 1.3-1.3 2z"
        fill="currentColor"
      />
    </svg>
  );
}
