import { motion } from 'framer-motion';
import { RESORT } from '../utils/constants';
import { staggerContainer, fadeInUp } from '../animations/variants';
import IconMap from '../components/ui/IconMap';

const SUPPORT_ACTIONS = [
  {
    icon: 'Phone',
    label: 'Call Us',
    desc: 'Speak with our team',
    href: `tel:${RESORT.phone}`,
  },
  {
    icon: 'Mail',
    label: 'Email Us',
    desc: 'Get a response within hours',
    href: `mailto:${RESORT.email}`,
  },
  {
    icon: 'MessageSquare',
    label: 'Live Chat',
    desc: 'Chat via WhatsApp',
    href: RESORT.whatsappUrl,
    external: true,
  },
];

export default function Support() {
  return (
    <section id="support" className="section-padding bg-dark overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl sm2:rounded-3xl overflow-hidden min-w-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-soft to-secondary/10" />
          <div className="absolute inset-0 glass-card rounded-2xl sm2:rounded-3xl border-white/10" />
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(198,138,31,0.12) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(161,13,13,0.12) 0%, transparent 70%)' }} />

          <div className="relative p-5 sm2:p-8 md:p-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp} className="min-w-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs tracking-widest uppercase text-secondary mb-5">
                <IconMap name="Clock" size={14} />
                24/7 Support
              </div>
              <h2 className="heading-balance font-display text-2xl sm2:text-3xl md:text-4xl font-semibold text-cream">
                We&apos;re Here to <span className="text-gradient-gold italic">Help</span>
              </h2>
              <p className="mt-4 text-sm sm2:text-base text-cream/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                Our dedicated guest relations team at {RESORT.name} is available around the clock to ensure your
                experience is seamless from booking to checkout.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm3:grid-cols-3 gap-3 sm2:gap-4 min-w-0"
            >
              {SUPPORT_ACTIONS.map((action) => (
                <motion.a
                  key={action.label}
                  variants={fadeInUp}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl bg-dark/30 border border-white/10 hover:border-secondary/40 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_rgba(198,138,31,0.12)] hover:-translate-y-1.5 transition-all duration-300 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/25 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-300">
                    <IconMap name={action.icon} size={22} className="text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-cream">{action.label}</span>
                  <span className="text-xs text-muted mt-1.5 leading-snug">{action.desc}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
