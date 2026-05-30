import { useState } from 'react';
import { motion } from 'framer-motion';
import { RESORT, FOOTER_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import Logo from '../ui/Logo';
import IconMap from '../ui/IconMap';

function SectionTitle({ children }) {
  return (
    <h4 className="font-display text-base text-cream mb-4 relative inline-block">
      {children}
      <span className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-secondary to-transparent" />
    </h4>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-dark-soft border-t border-white/10 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-padding pb-6 sm2:pb-8 relative">
        <div className="section-container">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm2:items-start sm2:text-left pb-8 sm2:pb-10 border-b border-white/10">
            <Logo size="lg" className="justify-center sm2:justify-start" />
            <p className="mt-4 max-w-sm text-sm text-cream/60 leading-relaxed">
              Where luxury meets heritage. Experience unparalleled hospitality at {RESORT.name}.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
                  aria-label={s.platform}
                >
                  <IconMap name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links · Contact · Newsletter */}
          <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-8 sm2:gap-10 pt-8 sm2:pt-10">
            <div className="min-w-0">
              <SectionTitle>Explore</SectionTitle>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm2:grid-cols-1 sm2:gap-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <SectionTitle>Contact</SectionTitle>
              <ul className="space-y-3 text-sm text-cream/70">
                <li className="flex gap-3 items-start">
                  <IconMap name="MapPin" size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">{RESORT.address}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <IconMap name="Phone" size={16} className="text-secondary shrink-0" />
                  <a href={`tel:${RESORT.phone}`} className="hover:text-secondary transition-colors">
                    {RESORT.phone}
                  </a>
                </li>
                <li className="flex gap-3 items-center min-w-0">
                  <IconMap name="Mail" size={16} className="text-secondary shrink-0" />
                  <a href={`mailto:${RESORT.email}`} className="break-all hover:text-secondary transition-colors">
                    {RESORT.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-0 sm2:col-span-2 lg:col-span-1">
              <SectionTitle>Newsletter</SectionTitle>
              <p className="text-sm text-cream/60 mb-4 leading-relaxed">
                Subscribe for exclusive offers and resort updates.
              </p>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-secondary text-sm"
                >
                  Thank you for subscribing!
                </motion.p>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 focus-within:border-secondary/40 transition-colors max-w-md sm2:max-w-none"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 min-w-0 bg-transparent px-3 py-2 text-sm text-cream placeholder:text-muted focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-secondary-light flex items-center justify-center text-dark hover:opacity-90 transition-opacity"
                    aria-label="Subscribe"
                  >
                    <IconMap name="Send" size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm2:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted text-center sm:text-left">
            <p className="break-words">
              &copy; {new Date().getFullYear()} {RESORT.name}. All rights reserved.
            </p>
            <p>Luxury hospitality with heritage elegance</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
