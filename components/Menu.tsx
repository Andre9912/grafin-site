"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

type Item = { n: string; d: string; p: string; ph: string };

const categories: { id: string; label: string; items: Item[] }[] = [
  { id: "nastoyki", label: "Настойки", items: Array.from({ length: 6 }, () => ({ n: "Название настойки", d: "Описание вкуса и состава — добавить позже", p: "— ₽", ph: "Фото напитка" })) },
  { id: "zakuski", label: "Закуски", items: Array.from({ length: 6 }, () => ({ n: "Название закуски", d: "Описание блюда — добавить позже", p: "— ₽", ph: "Фото блюда" })) },
  { id: "goryachee", label: "Горячее", items: Array.from({ length: 6 }, () => ({ n: "Название горячего", d: "Описание блюда — добавить позже", p: "— ₽", ph: "Фото блюда" })) },
  { id: "napitki", label: "Напитки", items: Array.from({ length: 6 }, () => ({ n: "Название напитка", d: "Описание — добавить позже", p: "— ₽", ph: "Фото напитка" })) },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-coal">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          eyebrow="Гастрономия"
          title="Меню"
          subtitle="Структура каталога готова. Реальные блюда, описания и цены — добавить информацию позже."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === c.id ? "btn-gold" : "btn-ghost"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <p className="text-center text-cream/30 text-xs mb-10">Категории — каркас под реальное меню</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="wait">
            {cat.items.map((item, i) => (
              <motion.article
                key={`${active}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-ink border border-white/5 rounded-2xl overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:border-gold/40"
              >
                <div className="ph aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto mb-2 text-gold/40" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="3" y="5" width="30" height="24" rx="3" />
                      <circle cx="12" cy="14" r="3" />
                      <path d="M3 25l9-7 6 5 5-4 10 6" />
                    </svg>
                    <p className="text-gold/55 text-sm font-display">{item.ph}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl text-cream leading-tight">{item.n}</h3>
                    <span className="text-gold font-semibold whitespace-nowrap">{item.p}</span>
                  </div>
                  <p className="text-cream/50 text-sm leading-relaxed">{item.d}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
