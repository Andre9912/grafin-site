import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  { t: "Авторские настойки", d: "Самобытная карта домашних настоек и крепких напитков в духе классической рюмочной.", p: "M9 3v10a8 8 0 0016 0V3M17 21v8M11 31h12" },
  { t: "Честная кухня", d: "Понятные, душевные закуски и горячее по мотивам русской гастрономии.", p: "M4 28h28M8 28V14a9 9 0 0118 0v14M17 5v3" },
  { t: "Тёплая атмосфера", d: "Уютный винтажный интерьер, мягкий свет и атмосфера, в которую хочется возвращаться.", p: "M18 4l4 9 10 1-7.5 6.5L27 31l-9-5-9 5 2.5-10.5L4 14l10-1z" },
  { t: "В центре Астрахани", d: "Удобное расположение в городе. Точный адрес — добавить информацию позже.", p: "M18 3l3.6 7.3 8 1.2-5.8 5.6 1.4 8L18 28.4 10.8 32.1l1.4-8L6.4 18.5l8-1.2z" },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-coal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle eyebrow="Почему «ГрафинЪ»" title="Наши преимущества" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="h-full bg-ink border border-white/5 rounded-2xl p-8 transition duration-500 hover:-translate-y-1.5 hover:border-gold/40">
                <div className="text-gold mb-5">
                  <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.3"><path d={it.p} /></svg>
                </div>
                <h3 className="font-display text-2xl text-cream mb-2">{it.t}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
