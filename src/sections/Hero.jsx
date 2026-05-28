import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO_SLIDES } from '../utils/constants';
import Button from '../components/ui/Button';

export default function Hero({ onBookNow }) {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        {HERO_SLIDES.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover scale-105"
              style={{ animation: i === current ? 'kenburns 8s ease-out forwards' : 'none' }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border border-secondary/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-12 h-12 rounded-full bg-secondary/10 hidden lg:block"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
        style={{ opacity }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-secondary mb-4"
        >
          Welcome to Paradise
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-cream max-w-4xl leading-[1.1]"
        >
          Where <span className="text-gradient-gold italic">Luxury</span> Meets
          <br />
          <span className="text-gradient-red">Nature</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed"
        >
          Escape to an exclusive hillside sanctuary crafted for unforgettable moments and timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button variant="secondary" onClick={onBookNow}>
            Book Now
          </Button>
          <Button variant="outline" href="#about">
            Explore Resort
          </Button>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-28 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-secondary' : 'w-4 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-secondary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
