import { motion } from 'framer-motion';
import { EVENT_TYPES, UPCOMING_EVENTS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function Events() {
  return (
    <section id="events" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          label="Celebrations"
          title="Events & Occasions"
          subtitle="From intimate gatherings to grand celebrations, we bring your vision to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-4 gap-3 sm2:gap-5 md:gap-6 mb-10 sm2:mb-16"
        >
          {EVENT_TYPES.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[280px] xs:min-h-0 cursor-default min-w-0"
            >
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              <div className="absolute bottom-0 p-4 xs:p-5 md:p-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <IconMap name={event.icon} size={20} className="text-secondary" />
                </div>
                <h3 className="font-display text-lg xs:text-xl font-semibold text-cream">{event.title}</h3>
                <p className="text-xs xs:text-sm text-cream/60 mt-2 leading-relaxed line-clamp-3 xs:line-clamp-none">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="glass-card rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-10 min-w-0">
          <div className="flex flex-wrap items-center gap-2 xs:gap-3 mb-6 xs:mb-8">
            <IconMap name="Calendar" size={22} className="text-secondary shrink-0" />
            <h3 className="font-display text-xl xs:text-2xl font-semibold text-cream">Upcoming Events</h3>
          </div>
          <div className="space-y-0">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm3:flex-row sm3:items-center gap-2 xs:gap-3 sm3:gap-6 py-4 xs:py-5 border-b border-white/10 last:border-0 min-w-0"
              >
                <div className="flex items-center gap-3 xs:gap-4 sm3:w-32 shrink-0">
                  <span className="text-xl xs:text-2xl font-display text-gradient-gold font-semibold">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-xs xs:text-sm text-muted uppercase">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm xs:text-base text-cream font-medium">{event.title}</h4>
                  <span className="text-xs text-secondary tracking-wide uppercase mt-1 inline-block">
                    {event.type}
                  </span>
                </div>
                <div className="hidden sm3:block w-2 h-2 rounded-full bg-secondary shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
