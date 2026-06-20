import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const tiles = [
  { t: "Интерьер", s: "Фото интерьера" },
  { t: "Кухня", s: "Фото кухни" },
  { t: "Бар", s: "Фото бара" },
  { t: "Атмосфера", s: "Фото атмосферы" },
  { t: "Гости", s: "Фото гостей" },
  { t: "Интерьер", s: "Фото интерьера" },
  { t: "Бар", s: "Фото бара" },
  { t: "Атмосфера", s: "Фото атмосферы" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-coal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle eyebrow="Атмосфера в деталях" title="Галерея" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06}>
              <div className={`ph rounded-2xl flex items-center justify-center transition duration-500 hover:border-gold/40 ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                <div className="text-center px-3">
                  <svg className="mx-auto mb-2 text-gold/40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="5" width="26" height="22" rx="3" />
                    <circle cx="11" cy="13" r="3" />
                    <path d="M3 23l8-6 5 4 4-3 9 5" />
                  </svg>
                  <p className="text-cream text-sm font-display">{g.t}</p>
                  <p className="text-gold/50 text-xs mt-0.5">{g.s}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
