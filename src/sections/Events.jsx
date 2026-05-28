import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { EVENT_TYPES, UPCOMING_EVENTS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function Events() {
  return (
    <section id="events" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16"
        >
          {EVENT_TYPES.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-default"
            >
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              <div className="absolute bottom-0 p-5 md:p-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <IconMap name={event.icon} className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream">{event.title}</h3>
                <p className="text-sm text-cream/60 mt-2 leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="glass-card rounded-3xl p-6 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-secondary" size={24} />
            <h3 className="font-display text-2xl font-semibold text-cream">Upcoming Events</h3>
          </div>
          <div className="space-y-0">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 border-b border-white/10 last:border-0"
              >
                <div className="flex items-center gap-4 sm:w-32 shrink-0">
                  <span className="text-2xl font-display text-gradient-gold font-semibold">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-sm text-muted uppercase">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-cream font-medium">{event.title}</h4>
                  <span className="text-xs text-secondary tracking-wide uppercase mt-1 inline-block">
                    {event.type}
                  </span>
                </div>
                <div className="hidden sm:block w-2 h-2 rounded-full bg-secondary shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
