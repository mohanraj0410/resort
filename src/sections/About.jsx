import { motion } from 'framer-motion';
import { STATS } from '../utils/constants';
import { useCounter } from '../hooks/useCounter';
import SectionHeading from '../components/ui/SectionHeading';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '../animations/variants';

function StatCard({ label, value, suffix }) {
  const { count, ref } = useCounter(value, 2200);

  return (
    <div ref={ref} className="text-center glass-card rounded-2xl p-6 md:p-8">
      <p className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient-gold">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted tracking-wide">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="section-container relative">
        <SectionHeading
          label="Our Story"
          title="A Legacy of Luxury Hospitality"
          subtitle="Nestled among misty hills and lush tea gardens, Crimson Vale has been redefining luxury retreats since 2008."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80"
                alt="Resort exterior"
                className="rounded-2xl w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1540541338287-4170027deebe?w=600&q=80"
                alt="Luxury interior"
                className="rounded-2xl w-full h-48 sm:h-56 object-cover mt-8"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 hidden sm:block">
              <p className="font-display text-2xl text-gradient-gold">18+</p>
              <p className="text-xs text-muted">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-cream/80 leading-relaxed mb-4">
              Born from a vision to create an oasis where modern luxury harmonizes with untouched natural beauty,
              Crimson Vale Resort offers an experience that transcends ordinary hospitality.
            </p>
            <p className="text-cream/60 leading-relaxed mb-6">
              Every corner of our property tells a story — from hand-crafted interiors inspired by local heritage
              to world-class amenities designed for the discerning traveler. Whether you seek tranquility,
              adventure, or celebration, we curate moments that linger long after you depart.
            </p>
            <ul className="space-y-3">
              {['Award-winning spa & wellness', 'Michelin-inspired dining', 'Private event venues', 'Eco-conscious luxury'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-cream/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
