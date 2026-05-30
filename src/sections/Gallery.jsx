import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconMap from '../components/ui/IconMap';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import Skeleton from '../components/ui/Skeleton';

function LazyImage({ src, alt, className, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={onClick}>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const imageHeights = ['h-44 xs:h-52 sm:h-56', 'h-40 xs:h-48 sm:h-52', 'h-48 xs:h-56 sm:h-64'];

  return (
    <section id="gallery" className="section-padding bg-dark overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="Gallery"
          title="Moments Captured in Time"
          subtitle="Explore the beauty and elegance of Red Fort Resort through our lens."
        />

        <div className="flex flex-wrap justify-center gap-1 sm2:gap-2 mb-6 sm2:mb-10 -mx-0.5">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-2.5 py-1 sm2:px-4 sm2:py-2 rounded-full text-[10px] sm2:text-sm transition-all duration-300 whitespace-nowrap ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                  : 'glass text-cream/70 hover:text-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm2:columns-2 lg:columns-3 gap-3 sm2:gap-4 space-y-3 sm2:space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${filter}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid group relative rounded-xl xs:rounded-2xl overflow-hidden cursor-pointer mb-3 xs:mb-4"
                onClick={() => setLightbox(img)}
              >
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  className={imageHeights[i % 3]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 xs:p-4">
                  <span className="text-xs xs:text-sm text-cream">{img.category}</span>
                  <IconMap name="ZoomIn" size={18} className="text-secondary shrink-0" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-3 xs:p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute top-4 right-4 xs:top-6 xs:right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-cream z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <IconMap name="X" size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox.src.replace('w=800', 'w=1200')}
              alt={lightbox.alt}
              className="max-w-full max-h-[80vh] xs:max-h-[85vh] object-contain rounded-xl xs:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
