import { useState } from 'react';
import { motion } from 'framer-motion';
import { NEARBY_PLACES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';
import { staggerContainer, fadeInUp } from '../animations/variants';

export default function NearbyPlaces() {
  const [showAll, setShowAll] = useState(false);
  const visiblePlaces = showAll ? NEARBY_PLACES : NEARBY_PLACES.slice(0, 4);

  return (
    <section id="nearby" className="section-padding bg-dark-soft overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="Explore"
          title="Nearby Attractions"
          subtitle="Discover the natural wonders and cultural gems surrounding Red Fort Resort."
        />

        <motion.div
          key={showAll ? 'all' : 'some'}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-4 gap-3 sm2:gap-5 md:gap-6"
        >
          {visiblePlaces.map((place) => (
            <motion.div
              key={place.name}
              variants={fadeInUp}
              className="glass-card rounded-2xl overflow-hidden group min-w-0 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-36 xs:h-40 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 xs:p-5">
                <h3 className="font-display text-base xs:text-lg font-semibold text-cream">{place.name}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs xs:text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <IconMap name="MapPin" size={14} className="text-secondary shrink-0" />
                    {place.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconMap name="Clock" size={14} className="text-secondary shrink-0" />
                    {place.time}
                  </span>
                </div>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 xs:mt-4 inline-flex items-center gap-2 text-xs xs:text-sm text-secondary hover:text-secondary-light transition-colors"
                >
                  <IconMap name="Navigation" size={14} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-8 sm2:mt-12">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary px-6 py-2.5 rounded-full text-sm flex items-center gap-2 hover:scale-[1.02] transition-transform duration-200"
          >
            {showAll ? 'Show Less' : 'Show More Attractions'}
            <IconMap name={showAll ? 'ChevronUp' : 'ChevronDown'} size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
