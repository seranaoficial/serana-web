import { motion } from 'motion/react';

/**
 * Editorial section divider — a hand-drawn ornament between major sections.
 *
 * Variants:
 *  - "rule": a hairline rule with a small leaf medallion in the centre.
 *  - "brush": a brushstroke arc that draws on enter.
 *
 * Both variants animate `pathLength` from 0 → 1 once the divider scrolls into
 * view, so the rule literally draws itself across the page.
 */
type Props = {
  variant?: 'rule' | 'brush';
  label?: string;
  className?: string;
};

export default function SectionDivider({ variant = 'rule', label, className = '' }: Props) {
  if (variant === 'brush') {
    return (
      <div className={`relative w-full flex items-center justify-center py-8 ${className}`}>
        <motion.svg
          viewBox="0 0 600 80"
          className="w-full max-w-3xl text-serana-olive/60"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
        >
          <motion.path
            d="M30 60 C 120 20, 240 70, 320 40 C 400 10, 520 60, 580 30"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            d="M40 50 C 130 30, 250 60, 330 35 C 410 18, 510 55, 570 38"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.6, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
          />
        </motion.svg>
      </div>
    );
  }

  // Default "rule" with optional centered label and a leaf ornament.
  return (
    <div className={`relative w-full flex items-center justify-center py-10 ${className}`}>
      <div className="flex w-full max-w-3xl items-center gap-4 px-4">
        <RuleSegment origin="right" />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex shrink-0 items-center gap-3"
        >
          <DividerOrnament />
          {label && (
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-serana-forest/55">
              {label}
            </span>
          )}
          <DividerOrnament flip />
        </motion.div>
        <RuleSegment origin="left" />
      </div>
    </div>
  );
}

function RuleSegment({ origin }: { origin: 'left' | 'right' }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      className={`h-px flex-1 bg-serana-forest/15 ${
        origin === 'left' ? 'origin-left' : 'origin-right'
      }`}
    />
  );
}

function DividerOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-serana-olive/70"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path d="M2 7 H 16" />
      <path d="M22 7 C 22 3, 26 1, 30 1 C 30 5, 28 7, 22 7" />
      <path d="M22 7 C 22 11, 26 13, 30 13 C 30 9, 28 7, 22 7" />
      <path d="M30 7 H 40" opacity="0.5" />
    </svg>
  );
}
