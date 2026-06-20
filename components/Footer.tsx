const nav = [
  ["#about", "О нас"], ["#menu", "Меню"], ["#events", "Мероприятия"],
  ["#gallery", "Галерея"], ["#reviews", "Отзывы"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-coal border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-full border border-gold/60 text-gold font-display text-2xl">Г</span>
            <span className="font-display text-2xl text-cream">ГрафинЪ</span>
          </div>
          <p className="text-cream/50 text-sm leading-relaxed">Современная рюмочная в Астрахани. Душевно, тепло, по-настоящему.</p>
        </div>
        <div>
          <p className="text-cream eyebrow uppercase text-xs mb-4">Навигация</p>
          <ul className="space-y-2 text-cream/55 text-sm">
            {nav.map(([h, l]) => (<li key={h}><a className="hover:text-gold transition" href={h}>{l}</a></li>))}
          </ul>
        </div>
        <div>
          <p className="text-cream eyebrow uppercase text-xs mb-4">Контакты</p>
          <ul className="space-y-2 text-cream/55 text-sm">
            <li>Астрахань</li>
            <li className="text-gold/70">Телефон — добавить позже</li>
            <li className="text-gold/70">Адрес — добавить позже</li>
            <li className="text-gold/70">Часы — добавить позже</li>
          </ul>
        </div>
        <div>
          <p className="text-cream eyebrow uppercase text-xs mb-4">Соцсети</p>
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <a key={i} href="#" title="добавить позже" className="w-10 h-10 grid place-items-center rounded-full border border-white/10 text-cream/60 hover:border-gold hover:text-gold transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="14" height="14" rx="5" /><circle cx="9" cy="9" r="3.5" /></svg>
              </a>
            ))}
          </div>
          <p className="text-cream/30 text-xs mt-3">Ссылки добавить позже</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-cream/40 text-xs">
        <p>© {year} Рюмочная «ГрафинЪ», Астрахань. Все права защищены.</p>
        <p>Дизайн и разработка сайта · концепт 2026</p>
      </div>
    </footer>
  );
}
