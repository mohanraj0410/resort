import { motion } from 'framer-motion';
import { AMENITIES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-dark relative overflow-hidden">

      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[30rem] h-[30rem] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(130,21,16,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,122,28,0.055) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeading
          label="Amenities"
          title="World-Class Experiences"
          subtitle="Every detail curated for your comfort — from sunrise yoga to starlit dinners."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {AMENITIES.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-350 hover:-translate-y-2 min-w-0"
              style={{
                background: '#fff',
                border: '1px solid rgba(184,122,28,0.12)',
                boxShadow: '0 2px 12px rgba(45,34,24,0.05), 0 8px 32px rgba(45,34,24,0.05)',
              }}
            >
              {/* Hover glow ring */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: '0 0 0 1.5px rgba(184,122,28,0.38), 0 20px 56px rgba(184,122,28,0.10)' }}
              />

              {/* ── Card header band ── */}
              {/* No overflow-hidden here — allows icon badge to overflow below */}
              <div
                className="relative h-20 sm:h-[84px]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(130,21,16,0.07) 0%, rgba(184,122,28,0.11) 100%)',
                }}
              >
                {/* Hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(130,21,16,0.10) 0%, rgba(184,122,28,0.16) 100%)',
                  }}
                />

                {/* Number — clearly visible */}
                <span
                  className="absolute top-1 right-4 font-display font-bold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                    color: 'rgba(184,122,28,0.28)',
                  }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Icon badge — overflows below header (no clipping) */}
                <div
                  className="absolute -bottom-5 left-5 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center z-10 transition-all duration-350 group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(184,122,28,0.22)]"
                  style={{
                    background: '#fff',
                    border: '1.5px solid rgba(184,122,28,0.24)',
                    boxShadow: '0 3px 14px rgba(45,34,24,0.10)',
                  }}
                >
                  <IconMap
                    name={item.icon}
                    size={20}
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="pt-8 pb-5 sm:pb-6 px-5 sm:px-6">
                {/* Gold rule */}
                <div
                  className="h-[1.5px] mb-3 rounded-full transition-all duration-400 group-hover:w-9"
                  style={{
                    width: '22px',
                    background: 'linear-gradient(to right, rgba(184,122,28,0.65), transparent)',
                  }}
                />

                <h3
                  className="font-display text-[1.1rem] sm:text-[1.2rem] font-semibold text-cream mb-2 leading-snug transition-colors duration-300 group-hover:text-primary"
                >
                  {item.title}
                </h3>

                <p className="text-[13px] sm:text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>

                {/* Discover link */}
                <div
                  className="mt-4 flex items-center gap-1.5 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    Discover
                  </span>
                  <IconMap name="ArrowRight" size={9} style={{ color: 'var(--color-secondary)' }} />
                </div>
              </div>

              {/* Bottom-left corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div
                  className="absolute bottom-0 left-0 w-full h-[1px]"
                  style={{ background: 'linear-gradient(to right, rgba(184,122,28,0.40), transparent)' }}
                />
                <div
                  className="absolute bottom-0 left-0 h-full w-[1px]"
                  style={{ background: 'linear-gradient(to top, rgba(184,122,28,0.40), transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom strip ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #fdf5e8 100%)',
            border: '1px solid rgba(184,122,28,0.16)',
            boxShadow: '0 4px 24px rgba(45,34,24,0.07)',
          }}
        >
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-[15px] font-semibold text-cream">
              All amenities are complimentary for every guest
            </p>
            <p className="text-xs mt-0.5 text-muted">
              Including valet parking, high-speed WiFi, and daily housekeeping
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #5c0f0b 0%, #821510 55%, #a6231c 100%)',
              boxShadow: '0 4px 20px rgba(130,21,16,0.28)',
            }}
          >
            Book Your Stay
            <IconMap name="ArrowRight" size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
