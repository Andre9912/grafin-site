import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle eyebrow="Гости о нас" title="Отзывы" />
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full bg-coal border border-white/5 rounded-2xl p-8">
                <div className="text-gold text-2xl mb-4">★★★★★</div>
                <p className="text-cream/45 italic font-display text-xl">«Отзывы будут добавлены позже».</p>
                <p className="text-cream/30 text-xs mt-6 eyebrow uppercase">Имя гостя · добавить позже</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
