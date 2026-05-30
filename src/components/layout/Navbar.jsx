import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Logo from '../ui/Logo';
import IconMap from '../ui/IconMap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.id);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navBg =
    scrolled || mobileOpen
      ? 'bg-dark/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
      : 'bg-white/[0.03] backdrop-blur-md border-b border-white/5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full max-w-[100vw] ${navBg}`}>
      <nav className="section-container flex items-center justify-between gap-1.5 sm2:gap-2 h-14 sm2:h-16 md:h-20 min-w-0">
        <a href="#home" className="group flex items-center gap-1 sm2:gap-2 min-w-0 flex-1 overflow-hidden">
          <div className="p-0.5 sm2:p-1.5 rounded-full bg-white/[0.04] border border-secondary/15 group-hover:border-secondary/30 transition-all duration-300 backdrop-blur-md shadow-inner shrink-0">
            <Logo size="sm" className="group-hover:opacity-90 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight min-w-0 overflow-hidden">
            <span className="text-xs sm2:text-base md:text-lg font-display font-bold tracking-wide sm2:tracking-wider text-gradient-gold truncate">
              Red Fort
            </span>
            <span className="sm2:block text-[8px] md:text-[9.5px] tracking-[0.15em] uppercase text-muted font-medium truncate">
              Resort
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 whitespace-nowrap ${
                  activeId === link.id ? 'text-secondary' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden w-9 h-9 flex items-center justify-center text-cream rounded-lg hover:bg-white/10 transition-colors shrink-0 -mr-0.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <IconMap name={mobileOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <ul className="section-container flex flex-col py-3 sm2:py-6 gap-0.5 sm2:gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-[15px] sm:text-lg py-2.5 sm2:py-3 ${
                      activeId === link.id ? 'text-secondary' : 'text-cream'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
