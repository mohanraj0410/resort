import { motion } from 'framer-motion';
import { EVENT_TYPES, UPCOMING_EVENTS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function Events() {
  return (
    <section id="events" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(198,138,31,0.07) 0%, transparent 70%)' }} />
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
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[280px] xs:min-h-0 cursor-default min-w-0 transition-transform duration-300 hover:-translate-y-2"
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
      </div>
    </section>
  );
}
