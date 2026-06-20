import Reveal from "./Reveal";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <PhotoPlaceholder label="Фото интерьера заведения" className="aspect-[4/5] rounded-3xl" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow uppercase text-gold text-xs mb-4">О заведении</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">Рюмочная, где тебе рады</h2>
          <p className="text-cream/70 leading-relaxed mb-5">
            «ГрафинЪ» — современная рюмочная в Астрахани. Мы переосмыслили классический русский формат:
            крепкие настойки, душевные закуски и тёплый, почти домашний приём гостей.
          </p>
          <p className="text-cream/55 leading-relaxed mb-8">
            Подробное описание истории и концепции заведения — <span className="text-gold/80">добавить информацию позже</span>.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[["—", "Лет с гостями"], ["—", "Позиций в меню"], ["—", "Настоек"]].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl text-gold">{n}</p>
                <p className="text-cream/50 text-xs mt-1 eyebrow uppercase">{l}</p>
              </div>
            ))}
          </div>
          <p className="text-cream/30 text-xs mt-3">Цифры — заглушка. Добавить реальные данные позже.</p>
        </Reveal>
      </div>
    </section>
  );
}
