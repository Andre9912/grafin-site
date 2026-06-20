type Props = { label: string; hint?: string; className?: string };

export default function PhotoPlaceholder({ label, hint, className = "" }: Props) {
  return (
    <div className={`ph flex items-center justify-center ${className}`}>
      <div className="text-center px-4">
        <svg
          className="mx-auto mb-2 text-gold/40"
          width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2"
        >
          <rect x="3" y="5" width="34" height="28" rx="3" />
          <circle cx="13" cy="15" r="3.5" />
          <path d="M3 28l10-8 6 5 6-4 12 7" />
        </svg>
        <p className="font-display text-lg text-gold/60">{label}</p>
        {hint && <p className="text-cream/30 text-[11px] mt-1 eyebrow uppercase">{hint}</p>}
      </div>
    </div>
  );
}
