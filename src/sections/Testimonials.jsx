import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import StarRating from '../components/ui/StarRating';
import IconMap from '../components/ui/IconMap';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const review = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="section-container relative">
        <SectionHeading
          label="Testimonials"
          title="Guest Experiences"
          subtitle="Hear from those who have experienced the magic of Red Sort Resort."
        />

        <div className="max-w-3xl mx-auto relative">
          <IconMap name="Quote" size={48} className="absolute -top-4 left-0 text-secondary/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
            >
              <StarRating rating={review.rating} size={18} />
              <p className="mt-6 text-lg md:text-xl text-cream/90 leading-relaxed italic font-display">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-medium text-cream">{review.name}</p>
                  <p className="text-sm text-muted">{review.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Previous review"
            >
              <IconMap name="ChevronLeft" size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-secondary w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Next review"
            >
              <IconMap name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
