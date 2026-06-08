import { useState, useCallback, memo } from 'react';
import IconMap from '../components/ui/IconMap';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';

const imageHeights = ['h-44 xs:h-52 sm:h-56', 'h-40 xs:h-48 sm:h-52', 'h-48 xs:h-56 sm:h-64'];

const GalleryImage = memo(function GalleryImage({ src, alt, category, className }) {
  return (
    <div className={`relative overflow-hidden bg-dark group ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 xs:p-4">
        <span className="text-xs xs:text-sm text-white">{category}</span>
        <IconMap name="ZoomIn" size={18} className="text-secondary shrink-0" />
      </div>
    </div>
  );
});

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="section-padding bg-dark overflow-hidden content-auto">
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
              className={`px-2.5 py-1 sm2:px-4 sm2:py-2 rounded-full text-[10px] sm2:text-sm transition-colors duration-200 whitespace-nowrap ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                  : 'glass text-cream/70 hover:text-cream hover:bg-primary/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm2:columns-2 lg:columns-3 gap-3 sm2:gap-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.category}-${img.alt}-${i}`}
              className="break-inside-avoid mb-3 xs:mb-4 cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <GalleryImage
                src={img.src}
                alt={img.alt}
                category={img.category}
                className={`rounded-xl xs:rounded-2xl ${imageHeights[i % 3]}`}
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-3 xs:p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 xs:top-6 xs:right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <IconMap name="X" size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[80vh] xs:max-h-[85vh] object-contain rounded-xl xs:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
