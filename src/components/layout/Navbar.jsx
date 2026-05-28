import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import IconMap from '../ui/IconMap';

export default function Navbar({ onBookNow }) {
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
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg =
    scrolled || mobileOpen
      ? 'bg-dark/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
      : 'bg-white/[0.03] backdrop-blur-md border-b border-white/5';

  return (
    <header className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="section-container flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group">
          <Logo size="md" className="group-hover:opacity-90 transition-opacity" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
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

        <div className="hidden lg:block">
          <Button variant="secondary" onClick={onBookNow}>
            Book Now
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-cream rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <IconMap name={mobileOpen ? 'X' : 'Menu'} size={24} />
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
            <ul className="flex flex-col px-6 py-6 gap-4">
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
                    className={`block text-lg py-2 ${
                      activeId === link.id ? 'text-secondary' : 'text-cream'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    onBookNow();
                    setMobileOpen(false);
                  }}
                >
                  Book Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
