import { useState } from 'react';
import { motion } from 'framer-motion';
import { RESORT, FOOTER_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import LogoImg from '../../assets/logo.png';
import IconMap from '../ui/IconMap';
import Button from '../ui/Button';

function FooterHeading({ children }) {
  return (
    <h4 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-5">
      <span className="w-6 h-px bg-gradient-to-r from-secondary to-secondary/0" />
      {children}
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
    <footer className="relative bg-dark overflow-hidden w-full">
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[min(100%,36rem)] h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(198,138,31,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(161,13,13,0.06) 0%, transparent 70%)' }} />

      <div className="section-padding section-padding-bottom-2 relative">
        <div className="section-container section-padding-bottom-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
            {/* Brand */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#home" className="group flex items-center gap-1.5 sm2:gap-2 min-w-0 flex-1 overflow-hidden">
            <div className="border-secondary-light bg-white shadow-[0_0_5px_rgba(198,138,31,0.2)] border-1 rounded-2xl w-14 p-1 flex items-center justify-center">
              <img
              src={LogoImg}
              alt={RESORT.name}
              className="w-8 h-8 sm2:w-9 sm2:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain rounded-lg sm2:rounded-xl"
              />
              </div>
              <div className="flex flex-col leading-tight min-w-0 overflow-hidden">
            <span className="text-xs sm2:text-sm md:text-base lg:text-lg font-display font-bold tracking-wide sm2:tracking-wider text-gradient-gold truncate">
              Red Fort
            </span>
            <span className="sm2:block text-[8px] md:text-[9.5px] tracking-[0.15em] uppercase text-muted font-medium truncate">
              Resort
            </span>
          </div>
          </a>
              <p className="mt-5 font-display text-lg italic text-cream/80 leading-relaxed max-w-xs">
                Where luxury meets heritage
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-sm">
                Experience unparalleled hospitality at {RESORT.name}.
              </p>

              <div className="flex gap-3 mt-6">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary hover:text-secondary-light hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(198,138,31,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
                    aria-label={s.platform}
                  >
                    <IconMap name={s.icon} size={16} />
                  </a>
                ))}
              </div>

              <Button
                variant="primary"
                href={RESORT.whatsappUrl}
                target="_blank"
                className="mt-6 w-full sm2:w-auto lg:hidden"
              >
                <IconMap name="MessageSquare" size={16} />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Explore + Contact */}
            <div className="lg:col-span-5 grid grid-cols-1 sm2:grid-cols-2 gap-8 sm2:gap-6">
              <div className="min-w-0">
                <FooterHeading>Explore</FooterHeading>
                <ul className="space-y-3">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-cream/65 hover:text-cream transition-colors"
                      >
                        <span className="w-0 h-px bg-secondary group-hover:w-3 transition-all duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">
                <FooterHeading>Contact</FooterHeading>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start group">
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                      <IconMap name="MapPin" size={15} className="text-secondary" />
                    </span>
                    <span className="text-sm text-cream/70 leading-relaxed break-words pt-1.5">
                      {RESORT.address}
                    </span>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                      <IconMap name="Phone" size={15} className="text-secondary" />
                    </span>
                    <a
                      href={`tel:${RESORT.phone}`}
                      className="text-sm text-cream/70 hover:text-secondary transition-colors"
                    >
                      {RESORT.phone}
                    </a>
                  </li>
                  <li className="flex gap-3 items-center group min-w-0">
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                      <IconMap name="Mail" size={15} className="text-secondary" />
                    </span>
                    <a
                      href={`mailto:${RESORT.email}`}
                      className="text-sm text-cream/70 hover:text-secondary transition-colors break-all"
                    >
                      {RESORT.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3 min-w-0">
              <div className="glass-card rounded-2xl p-5 sm2:p-6 h-full border-secondary/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(198,138,31,0.1) 0%, transparent 70%)' }} />

                <FooterHeading>Newsletter</FooterHeading>
                <p className="text-sm text-cream/60 mb-5 leading-relaxed relative">
                  Exclusive offers, seasonal packages, and resort news — delivered to your inbox.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-secondary relative"
                  >
                    <span className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                      <IconMap name="Send" size={18} />
                    </span>
                    <p className="text-sm font-medium">Thank you for subscribing!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletter} className="space-y-3 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full min-w-0 px-4 py-3 rounded-xl bg-white border border-border text-sm text-cream placeholder:text-muted/60 focus:outline-none focus:border-secondary transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-secondary to-secondary-light text-dark text-sm font-semibold hover:shadow-[0_8px_24px_rgba(198,138,31,0.35)] hover:opacity-95 transition-all duration-300"
                    >
                      <IconMap name="Send" size={16} />
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 sm2:mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted text-center sm:text-left break-words">
              &copy; {new Date().getFullYear()} {RESORT.name}. All rights reserved.
            </p>
            <p className="font-display text-sm italic text-cream/40 tracking-wide">
              Luxury hospitality with heritage elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
