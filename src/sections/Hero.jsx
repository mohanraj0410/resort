import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconMap from "../components/ui/IconMap";
import { HERO_SLIDES } from "../utils/constants";
import Button from "../components/ui/Button";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Pre-render all slides; use CSS opacity to crossfade instead of unmounting/remounting
  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[480px] max-h-[900px] sm:min-h-[560px] md:min-h-[600px] overflow-hidden w-full"
    >
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding={i === 0 ? "sync" : "async"}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-dark/5 to-dark/15" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center w-full max-w-full section-container !px-3 sm2:!px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="label-track text-[9px] sm2:text-xs sm:text-sm uppercase hero-label mb-2 sm2:mb-4 max-w-full"
        >
          Welcome to Paradise
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="heading-balance font-display text-[1.45rem] sm2:text-[1.85rem] sm3:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-semibold text-white w-full max-w-full sm2:max-w-lg sm:max-w-2xl md:max-w-4xl"
        >
          Where{" "}
          <span className="hero-label italic" style={{ color: "#c21a12" }}>
            Luxury
          </span>{" "}
          Meets
          <br />
          <span className="hero-text-accent italic">Nature</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-3 sm2:mt-6 text-[13px] sm2:text-base sm:text-lg md:text-xl hero-body w-full max-w-full sm2:max-w-md md:max-w-xl leading-relaxed"
        >
          Escape to an exclusive hillside sanctuary crafted for unforgettable
          moments and timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm2:flex-row gap-3 mt-6 sm2:mt-10 w-full max-w-full sm2:max-w-none justify-center"
        >
          <Button
            variant="outline"
            href="#about"
            className="w-full sm2:w-auto max-w-full bg-primary hero-btn"
          >
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
                i === current
                  ? "w-6 sm2:w-8 bg-secondary"
                  : "w-2.5 sm2:w-4 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-cue absolute bottom-4 sm2:bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-secondary-light transition-colors safe-bottom z-10"
        aria-label="Scroll down"
      >
        <IconMap name="ChevronDown" size={22} />
      </a>
    </section>
  );
}
