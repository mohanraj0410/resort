import { motion } from 'framer-motion';
import { RESORT } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import IconMap from '../components/ui/IconMap';
import { slideInLeft, slideInRight } from '../animations/variants';

export default function MapSection() {
  return (
    <section id="location" className="section-padding bg-dark">
      <div className="section-container">
        <SectionHeading
          label="Find Us"
          title="Map & Navigation"
          subtitle="Located in the heart of the hills, easily accessible yet wonderfully secluded."
        />

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <IconMap name="MapPin" size={24} className="text-primary-light" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-cream mb-4">Visit Us</h3>
              <p className="text-cream/70 leading-relaxed text-sm">{RESORT.address}</p>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${RESORT.phone}`}
                  className="flex items-center gap-3 text-sm text-cream/70 hover:text-secondary transition-colors"
                >
                  <IconMap name="Phone" size={16} className="text-secondary" />
                  {RESORT.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" href={RESORT.directionsUrl} className="flex-1 text-center">
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
            className="lg:col-span-3 rounded-3xl overflow-hidden glass-card h-[300px] sm:h-[400px] lg:h-auto min-h-[300px]"
          >
            <iframe
              title="Red Sort Resort Location"
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
