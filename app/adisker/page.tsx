export default function UpsPage() {
  return (
    <main className="bg-[#F8F8F8] min-h-screen flex flex-col">

      {/* CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

        {/* Illustration */}
        <img
          src="/images/OBJECT.png"
          alt="error"
          className="w-80 mb-10"
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-black mb-4">
          УПС! сізге рұқсат жоқ
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
          UstazKids.kz есептік жазбасын алу үшін өтінім қалдырыңыз,
          содан кейін сізге платформа қол жетімді болады.
        </p>

        {/* Button */}
        <button className="bg-yellow-300 hover:bg-yellow-400 py-3 px-10 rounded-xl font-semibold shadow">
          ӨТІНІМ ҚАЛДЫРУ
        </button>
      </div>

    </main>
  );
}