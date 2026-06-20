import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle eyebrow="Афиша" title="Мероприятия" />
        <Reveal>
          <div className="max-w-3xl mx-auto ph rounded-3xl px-8 py-16 text-center">
            <svg className="mx-auto mb-5 text-gold/50" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="5" y="9" width="40" height="36" rx="4" />
              <path d="M5 19h40M16 4v8M34 4v8" />
            </svg>
            <h3 className="font-display text-3xl text-cream mb-3">Информация будет добавлена позже</h3>
            <p className="text-cream/55 max-w-md mx-auto">
              Здесь появится афиша вечеров, тематических событий и музыкальных программ заведения.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
