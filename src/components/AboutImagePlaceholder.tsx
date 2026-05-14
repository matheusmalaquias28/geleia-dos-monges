import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface AboutImagePlaceholderProps {
  label: string;
  caption?: string;
  aspect?: string;
  className?: string;
}

export default function AboutImagePlaceholder({
  label,
  caption,
  aspect = 'aspect-[4/5]',
  className = '',
}: AboutImagePlaceholderProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease }}
      className={`group relative overflow-hidden rounded-3xl border border-espresso/10 bg-gradient-to-br from-cream-dark via-cream to-cream-dark shadow-[0_24px_80px_-32px_rgba(26,12,8,0.16)] ${aspect} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(26,12,8,0.55) 12px, rgba(26,12,8,0.55) 13px)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(114,28,55,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-espresso/35">
          Imagem
        </span>
        <p className="font-display text-2xl font-semibold leading-tight text-espresso/60 sm:text-3xl">{label}</p>
        {caption ? <p className="font-body max-w-xs text-sm leading-relaxed text-espresso/45">{caption}</p> : null}
      </div>
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/12 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
    </motion.div>
  );
}
