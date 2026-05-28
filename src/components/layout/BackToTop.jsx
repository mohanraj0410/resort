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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-11 h-11 rounded-full glass flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
          aria-label="Back to top"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconMap name="ArrowUp" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
