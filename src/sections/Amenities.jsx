import { motion } from 'framer-motion';
import { AMENITIES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-dark-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          label="Amenities"
          title="World-Class Experiences"
          subtitle="Every detail curated for your comfort, from sunrise yoga to starlit dinners."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-3 sm2:gap-5 md:gap-6"
        >
          {AMENITIES.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl p-5 xs:p-6 md:p-8 cursor-default transition-shadow hover:shadow-[0_20px_60px_rgba(161,13,13,0.15)] min-w-0"
            >
              <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center mb-4 xs:mb-5 group-hover:scale-110 transition-transform shrink-0">
                <IconMap name={item.icon} className="w-5 h-5 xs:w-6 xs:h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg xs:text-xl font-semibold text-cream mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
