"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#events", label: "Мероприятия" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-white/5 shadow-2xl" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-full border border-gold/60 text-gold font-display text-2xl leading-none group-hover:bg-gold/10 transition">
            Г
          </span>
          <span className="font-display text-2xl tracking-wide text-cream">ГрафинЪ</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-cream/80">
          {links.map((l) => (
            <li key={l.href}>
              <a className="nav-link" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden sm:inline-flex btn-gold text-sm font-semibold px-5 py-2.5 rounded-full">
            Забронировать столик
          </a>
          <button className="lg:hidden text-cream p-2" aria-label="Меню" onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h20M3 13h20M3 19h20" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-coal/95 backdrop-blur border-t border-white/5">
          <ul className="px-6 py-5 space-y-4 text-cream/85">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#booking" onClick={() => setOpen(false)} className="inline-block btn-gold px-5 py-2.5 rounded-full text-ink font-semibold">
                Забронировать столик
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
