"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 ph flex items-center justify-center">
        <div className="text-center px-6">
          <svg className="mx-auto mb-4 text-gold/40" width="58" height="58" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="6" width="52" height="42" rx="4" />
            <circle cx="20" cy="20" r="5" />
            <path d="M3 40l16-13 12 9 9-7 14 11" />
          </svg>
          <p className="font-display text-2xl text-gold/60">Главное атмосферное фото заведения</p>
          <p className="text-cream/30 text-xs mt-2 eyebrow uppercase">заменить на реальное фото</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-24">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            <p key="e" className="eyebrow uppercase text-gold text-xs mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gold inline-block" /> Астрахань · Рюмочная
            </p>,
            <h1 key="h" className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-cream">
              Графин<span className="text-gold">Ъ</span>
            </h1>,
            <p key="s" className="font-display italic text-2xl sm:text-3xl text-gold mt-5">
              Душевно. По-русски. По-настоящему.
            </p>,
            <p key="d" className="text-cream/70 text-lg mt-6 max-w-xl leading-relaxed">
              Уютная рюмочная с тёплой атмосферой, авторскими настойками и честной кухней. Место, куда хочется возвращаться.
            </p>,
            <div key="c" className="flex flex-wrap gap-4 mt-10">
              <a href="#booking" className="btn-gold font-semibold px-8 py-4 rounded-full">Забронировать столик</a>
              <a href="#menu" className="btn-ghost font-semibold px-8 py-4 rounded-full">Смотреть меню</a>
            </div>,
          ].map((el, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              {el}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
