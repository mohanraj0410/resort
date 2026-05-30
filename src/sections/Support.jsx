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
          className="glass-card rounded-2xl sm2:rounded-3xl p-3 sm2:p-5 sm:p-8 md:p-12 relative overflow-hidden min-w-0"
        >
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-8 xs:gap-10 items-center">
            <motion.div variants={fadeInUp} className="min-w-0 text-center lg:text-left">
              <div className="flex flex-col sm2:flex-row items-center gap-2 sm2:gap-3 mb-3 sm2:mb-4 justify-center lg:justify-start">
                <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <IconMap name="Headphones" size={24} className="text-secondary" />
                </div>
                <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-secondary">
                  <IconMap name="Clock" size={14} />
                  24/7 Support
                </span>
              </div>
              <h2 className="heading-balance font-display text-xl sm2:text-3xl md:text-4xl font-semibold text-cream">
                We&apos;re Here to Help
              </h2>
              <p className="mt-3 xs:mt-4 text-sm xs:text-base text-cream/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                Our dedicated guest relations team at {RESORT.name} is available around the clock to ensure your
                experience is seamless from booking to checkout.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm3:grid-cols-3 gap-3 xs:gap-4 min-w-0"
            >
              {SUPPORT_ACTIONS.map((action) => (
                <motion.a
                  key={action.label}
                  variants={fadeInUp}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-4 xs:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-secondary/30 transition-colors group min-w-0"
                >
                  <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors shrink-0">
                    <IconMap name={action.icon} size={20} className="text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-cream">{action.label}</span>
                  <span className="text-xs text-muted mt-1 leading-snug">{action.desc}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
