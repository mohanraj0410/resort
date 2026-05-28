import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { NEARBY_PLACES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function NearbyPlaces() {
  return (
    <section id="nearby" className="section-padding bg-dark-soft">
      <div className="section-container">
        <SectionHeading
          label="Explore"
          title="Nearby Attractions"
          subtitle="Discover the natural wonders and cultural gems surrounding our resort."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {NEARBY_PLACES.map((place) => (
            <motion.div
              key={place.name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-cream">{place.name}</h3>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-secondary" />
                    {place.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-secondary" />
                    {place.time}
                  </span>
                </div>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary-light transition-colors"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
