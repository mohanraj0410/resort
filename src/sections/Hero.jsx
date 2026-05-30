import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IconMap from '../components/ui/IconMap';
import { HERO_SLIDES } from '../utils/constants';
import Button from '../components/ui/Button';

export default function Hero() {
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
    <section
      id="home"
      className="relative h-[100dvh] min-h-[480px] max-h-[900px] sm:min-h-[560px] md:min-h-[600px] overflow-hidden w-full"
    >
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
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/25 to-dark/50" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center w-full max-w-full section-container !px-3 sm2:!px-5"
        style={{ opacity }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="label-track text-[9px] sm2:text-xs sm:text-sm uppercase hero-label mb-2 sm2:mb-4 max-w-full"
        >
          Welcome to Paradise
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="heading-balance hero-heading-shadow font-display text-[1.45rem] sm2:text-[1.85rem] sm3:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-semibold text-cream w-full max-w-full sm2:max-w-lg sm:max-w-2xl md:max-w-4xl"
        >
          Where <span className="hero-label italic" style={{ color: "#c21a12",}}>Luxury</span> Meets
          <br />
          <span className="hero-text-accent italic">Nature</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-3 sm2:mt-6 text-[13px] sm2:text-base sm:text-lg md:text-xl hero-body w-full max-w-full sm2:max-w-md md:max-w-xl leading-relaxed"
        >
          Escape to an exclusive hillside sanctuary crafted for unforgettable moments and timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm2:flex-row gap-3 mt-6 sm2:mt-10 w-full max-w-full sm2:max-w-none justify-center"
        >
          <Button variant="outline" href="#about" className="w-full sm2:w-auto max-w-full">
            Explore Resort
          </Button>
        </motion.div>

        <div className="absolute bottom-[4.75rem] sm2:bottom-28 sm:bottom-32 flex gap-1.5 sm2:gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 sm2:w-8 bg-secondary' : 'w-2.5 sm2:w-4 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-4 sm2:bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-secondary-light transition-colors safe-bottom z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <IconMap name="ChevronDown" size={22} />
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
