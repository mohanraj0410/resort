import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false }) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';

  return (
    <motion.div
      className={`w-full max-w-2xl mb-6 sm2:mb-10 sm:mb-12 md:mb-16 min-w-0 ${alignClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {label && (
        <span className="label-track inline-block text-[9px] sm2:text-xs md:text-sm font-semibold uppercase text-secondary mb-2 sm2:mb-3">
          {label}
        </span>
      )}
      <h2
        className={`heading-balance font-display text-[1.35rem] sm2:text-[1.75rem] sm3:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-[3.25rem] font-semibold ${
          light ? 'text-cream' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 sm2:mt-4 text-[13px] sm2:text-sm sm:text-base md:text-lg leading-relaxed break-words ${
            light ? 'text-cream/70' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-3 sm2:mt-6 h-0.5 w-10 sm2:w-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
