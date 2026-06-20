"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import PhotoPlaceholder from "./PhotoPlaceholder";

const field = "w-full bg-coal border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:border-gold outline-none transition";
const label = "block text-cream/60 text-xs mb-2 eyebrow uppercase";

export default function Reservation() {
  const [sent, setSent] = useState(false);

  return (
    <section id="booking" className="py-24 bg-coal">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow uppercase text-gold text-xs mb-4">Бронирование</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">Забронировать столик</h2>
          <p className="text-cream/65 leading-relaxed mb-8">
            Оставьте заявку, и мы свяжемся с вами для подтверждения брони. Будем рады видеть вас в «ГрафинЪ».
          </p>
          <PhotoPlaceholder label="Фото зала / атмосферы" className="rounded-3xl aspect-video" />
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="bg-ink border border-white/5 rounded-3xl p-8 space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSent(true); (e.target as HTMLFormElement).reset(); }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className={label}>Имя</label><input required type="text" placeholder="Ваше имя" className={field} /></div>
              <div><label className={label}>Телефон</label><input required type="tel" placeholder="+7 (___) ___-__-__" className={field} /></div>
              <div><label className={label}>Дата</label><input required type="date" className={field} /></div>
              <div><label className={label}>Время</label><input required type="time" className={field} /></div>
              <div><label className={label}>Гостей</label><input required type="number" min={1} defaultValue={2} className={field} /></div>
              <div><label className={label}>Повод</label><input type="text" placeholder="Напр. день рождения" className={field} /></div>
            </div>
            <div><label className={label}>Комментарий</label><textarea rows={3} placeholder="Пожелания к брони" className={`${field} resize-none`} /></div>
            <button type="submit" className="btn-gold w-full font-semibold py-4 rounded-xl">Отправить заявку</button>
            {sent && (
              <p className="text-gold text-sm text-center">
                Спасибо! Заявка отправлена (демо). Подключение к CRM/Telegram — на этапе внедрения.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
