import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RESORT } from '../../utils/constants';
import Logo from '../ui/Logo';

const PARTICLES = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 70 + 25,
  size: Math.random() * 2.8 + 1.2,
  delay: Math.random() * 2.5,
  duration: Math.random() * 4.5 + 4,
}));

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
          }, 1000);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  const taglineText = RESORT.tagline || 'Luxury Heritage Retreat';

  return (
    <AnimatePresence>
      {!done && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex w-full max-w-[100vw]">
          <motion.div
            className="w-1/2 h-full bg-dark relative z-10 border-r border-white/[0.03]"
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
            onAnimationComplete={(definition) => {
              if (definition === 'exit' || (typeof definition === 'object' && definition.x === '-100%')) {
                onComplete?.();
              }
            }}
          />

          <motion.div
            className="w-1/2 h-full bg-dark relative z-10 border-l border-white/[0.03]"
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
          />

          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-2 sm2:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,31,0.06)_0%,rgba(15,10,8,0)_70%)]" />

            <div className="absolute inset-0 overflow-hidden">
              {PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-secondary/25 filter blur-[0.6px]"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{
                    y: [0, -180],
                    opacity: [0, 0.75, 0],
                    x: [0, Math.sin(p.id) * 30],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-[min(100%,16.5rem)] sm2:max-w-sm px-1">
              <div className="relative flex items-center justify-center">
                <svg
                  className="absolute w-28 h-28 sm2:w-40 sm2:h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 -rotate-90 pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="rgba(255, 255, 255, 0.03)"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="url(#loaderGold)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="289"
                    strokeDashoffset={289 - (289 * Math.min(progress, 100)) / 100}
                    transition={{ ease: 'easeOut' }}
                    style={{ filter: 'drop-shadow(0 0 4px rgba(198,138,31,0.25))' }}
                  />
                  <defs>
                    <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c68a1f" />
                      <stop offset="50%" stopColor="#f4cb6c" />
                      <stop offset="100%" stopColor="#a17013" />
                    </linearGradient>
                  </defs>
                </svg>

                <Logo size="loader" className="scale-[0.58] sm2:scale-[0.75] sm:scale-[0.8] md:scale-90" animated glow />
              </div>

              <p className="mt-5 sm2:mt-8 label-track text-[8px] sm2:text-[10px] sm:text-xs md:text-sm uppercase text-cream/70 font-semibold font-body text-center leading-relaxed px-1">
                {taglineText}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-3 sm2:mt-5 font-display text-sm sm2:text-base md:text-lg tracking-[0.15em] sm2:tracking-[0.25em] text-secondary font-bold"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
