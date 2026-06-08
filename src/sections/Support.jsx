import { motion } from 'framer-motion';
import { RESORT } from '../utils/constants';
import { staggerContainer, fadeInUp } from '../animations/variants';
import IconMap from '../components/ui/IconMap';

const SUPPORT_ACTIONS = [
  {
    icon: 'Phone',
    label: 'Call Us',
    desc: 'Speak directly with our team',
    href: `tel:${RESORT.phone}`,
    value: RESORT.phone,
  },
  {
    icon: 'Mail',
    label: 'Email Us',
    desc: 'Response within a few hours',
    href: `mailto:${RESORT.email}`,
    value: RESORT.email,
  },
  {
    icon: 'MessageSquare',
    label: 'WhatsApp',
    desc: 'Fastest way to reach us',
    href: RESORT.whatsappUrl,
    value: 'Chat Now',
    external: true,
  },
];

export default function Support() {
  return (
    <section id="support" className="section-padding bg-dark-soft overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-w-0"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream/95 via-cream/98 to-cream" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(198,138,31,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 15% 40%, rgba(130,21,16,0.09) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
            aria-hidden="true"
          />

          <div className="relative p-6 sm:p-10 md:p-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left copy */}
            <motion.div variants={fadeInUp} className="min-w-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/12 border border-secondary/25 text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                24 / 7 Support
              </div>

              <h2
                className="heading-balance font-display font-semibold text-white leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)' }}
              >
                We&rsquo;re Always{' '}
                <span className="text-gradient-gold italic">Here for You</span>
              </h2>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Our dedicated guest relations team at {RESORT.name} is available
                around the clock — from first inquiry through checkout and beyond.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-xs text-white/50 font-medium">
                {['Instant Response', 'Dedicated Concierge', 'Multilingual Support'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <IconMap name="Check" size={12} className="text-secondary" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right action cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 min-w-0"
            >
              {SUPPORT_ACTIONS.map((action) => (
                <motion.a
                  key={action.label}
                  variants={fadeInUp}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:border-secondary/30 hover:-translate-y-1.5 transition-all duration-300 min-w-0 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/25 to-secondary/10 flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:from-secondary/40 group-hover:shadow-[0_4px_20px_rgba(184,122,28,0.25)]">
                    <IconMap name={action.icon} size={22} className="text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-white mb-1">{action.label}</span>
                  <span className="text-xs text-white/50 leading-snug">{action.desc}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
