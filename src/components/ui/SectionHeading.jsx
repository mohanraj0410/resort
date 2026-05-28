import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false }) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {label && (
        <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-secondary mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight ${
          light ? 'text-cream' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-cream/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-0.5 w-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
