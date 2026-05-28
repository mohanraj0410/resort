import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { RESORT, FOOTER_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import IconMap from '../ui/IconMap';

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
    <footer className="bg-dark-soft border-t border-white/10">
      <div className="section-padding pb-8">
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <h3 className="font-display text-3xl font-semibold text-gradient-gold">{RESORT.name}</h3>
            <p className="mt-3 text-muted text-sm leading-relaxed">{RESORT.tagline}</p>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Where luxury meets nature. Experience unparalleled hospitality in the heart of the hills.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
                  aria-label={s.platform}
                >
                  <IconMap name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream/70 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                <span>{RESORT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary shrink-0" />
                <a href={`tel:${RESORT.phone}`} className="hover:text-secondary transition-colors">
                  {RESORT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary shrink-0" />
                <a href={`mailto:${RESORT.email}`} className="hover:text-secondary transition-colors">
                  {RESORT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Newsletter</h4>
            <p className="text-sm text-cream/60 mb-4">Subscribe for exclusive offers and resort updates.</p>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-secondary text-sm"
              >
                Thank you for subscribing!
              </motion.p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-cream placeholder:text-muted focus:outline-none focus:border-secondary/50"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-secondary-light flex items-center justify-center text-dark shrink-0 hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="section-container mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {RESORT.name} Resort. All rights reserved.</p>
          <p>Designed with luxury &amp; passion</p>
        </div>
      </div>
    </footer>
  );
}
