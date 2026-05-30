import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import IconMap from '../ui/IconMap';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed z-50 w-9 h-9 sm2:w-11 sm2:h-11 rounded-full glass flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors right-2.5 sm2:right-4 sm:right-6 bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))+3.75rem)] sm2:bottom-24"
          aria-label="Back to top"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconMap name="ArrowUp" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
