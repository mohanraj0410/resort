import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RESORT } from '../../utils/constants';
import Logo from '../ui/Logo';

const LOADER_MS = 800;

export default function PageLoader({ onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Single timeout — no rAF loop, no 60fps re-renders
    const id = setTimeout(() => setDone(true), LOADER_MS);
    return () => clearTimeout(id);
  }, []);

  const taglineText = RESORT.tagline || 'Luxury Heritage Retreat';

  return (
    <AnimatePresence>
      {!done && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex w-full max-w-[100vw] bg-dark">
          <motion.div
            className="w-1/2 h-full bg-dark relative z-10 border-r border-white/[0.03]"
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
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
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-2 sm2:px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,138,31,0.08)_0%,rgba(15,10,8,0)_65%)]" />

            <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-[min(100%,16.5rem)] sm2:max-w-sm px-1">
              <div className="relative flex items-center justify-center">
                {/* CSS-animated ring — zero JS overhead */}
                <svg
                  className="absolute w-28 h-28 sm2:w-40 sm2:h-40 md:w-48 md:h-48 -rotate-90 pointer-events-none"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="rgba(232,221,208,0.6)"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="url(#loaderGold)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="289"
                    strokeDashoffset="289"
                    style={{
                      animation: `loader-fill ${LOADER_MS}ms linear forwards`,
                    }}
                  />
                  <defs>
                    <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c68a1f" />
                      <stop offset="50%" stopColor="#f4cb6c" />
                      <stop offset="100%" stopColor="#a17013" />
                    </linearGradient>
                  </defs>
                </svg>

                <Logo size="loader" className="scale-[0.58] sm2:scale-[0.75] md:scale-90" glow />
              </div>

              <p className="mt-5 sm2:mt-8 label-track text-[8px] sm2:text-[10px] sm:text-xs uppercase text-cream/70 font-semibold font-body text-center leading-relaxed px-1">
                {taglineText}
              </p>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
