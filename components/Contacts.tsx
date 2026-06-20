import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import PhotoPlaceholder from "./PhotoPlaceholder";

const rows = [
  { t: "Адрес", v: "Астрахань · точный адрес добавить позже", p: "M13 2C8 2 4 6 4 11c0 7 9 13 9 13s9-6 9-13c0-5-4-9-9-9z" },
  { t: "Телефон", v: "Добавить информацию позже", p: "M5 4h5l2 6-3 2a13 13 0 006 6l2-3 6 2v5a2 2 0 01-2 2A18 18 0 013 6a2 2 0 012-2z" },
  { t: "Часы работы", v: "Добавить информацию позже", p: "M13 7v6l4 2" },
  { t: "Социальные сети", v: "Добавить ссылки позже", p: "" },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle eyebrow="Как нас найти" title="Контакты" />
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal className="space-y-6">
            {rows.map((r) => (
              <div key={r.t} className="flex gap-4 items-start bg-coal border border-white/5 rounded-2xl p-6">
                <div className="text-gold shrink-0">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4">
                    {r.t === "Часы работы" && <circle cx="13" cy="13" r="10" />}
                    {r.t === "Социальные сети" ? (
                      <>
                        <rect x="3" y="3" width="20" height="20" rx="6" />
                        <circle cx="13" cy="13" r="5" />
                      </>
                    ) : (
                      <path d={r.p} />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-cream/50 text-xs eyebrow uppercase mb-1">{r.t}</p>
                  <p className="text-cream"><span className="text-gold/80">{r.v}</span></p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoPlaceholder label="Карта / схема проезда" hint="встроить карту позже" className="rounded-3xl min-h-[360px] h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
