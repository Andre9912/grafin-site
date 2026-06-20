import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="text-center mb-16">
      <p className="eyebrow uppercase text-gold text-xs mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl text-cream">{title}</h2>
      {subtitle && <p className="text-cream/50 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </Reveal>
  );
}
