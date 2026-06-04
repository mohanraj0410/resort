import { motion } from 'framer-motion';
import { RESORT } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import IconMap from '../components/ui/IconMap';
import { slideInLeft, slideInRight } from '../animations/variants';

export default function MapSection() {
  return (
    <section id="location" className="section-padding bg-dark-soft overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="Find Us"
          title="Map & Navigation"
          subtitle="Located in the heart of the hills, easily accessible yet wonderfully secluded."
        />

        <div className="grid lg:grid-cols-5 gap-5 xs:gap-6 lg:gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-between min-w-0"
          >
            <div>
              <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 xs:mb-6">
                <IconMap name="MapPin" size={24} className="text-primary-light" />
              </div>
              <h3 className="font-display text-xl xs:text-2xl font-semibold text-cream mb-3 xs:mb-4">Visit Us</h3>
              <p className="text-cream/70 leading-relaxed text-sm break-words">{RESORT.address}</p>

              <div className="mt-5 xs:mt-6">
                <a
                  href={`tel:${RESORT.phone}`}
                  className="flex items-center gap-3 text-sm text-cream/70 hover:text-secondary transition-colors break-all"
                >
                  <IconMap name="Phone" size={16} className="text-secondary shrink-0" />
                  {RESORT.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 xs:mt-8">
              <Button variant="secondary" target="_blank" href={RESORT.directionsUrl} className="w-full sm3:w-auto">
                <IconMap name="Navigation" size={16} />
                Get Directions
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl xs:rounded-3xl overflow-hidden glass-card h-[240px] xs:h-[280px] sm:h-[360px] md:h-[400px] lg:h-[min(28rem,100%)] lg:min-h-[320px] min-w-0"
          >
            <iframe
              title="Red Fort Resort Location"
              src={RESORT.mapEmbed}
              className="w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
