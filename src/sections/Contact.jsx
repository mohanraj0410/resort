import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { RESORT, SOCIAL_LINKS } from '../utils/constants';
import { validateContactForm } from '../utils/validators';
import { sendEnquiry } from '../utils/sendEnquiry';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';
import IconMap from '../components/ui/IconMap';
import { slideInLeft, slideInRight } from '../animations/variants';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSubmitError('');

    try {
      await sendEnquiry(form);
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitError(
        'Could not send your message. Please try WhatsApp or email us directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-cream placeholder:text-muted text-sm focus:outline-none transition-colors ${
      errors[field] ? 'border-primary-light' : 'border-white/10 focus:border-secondary/50'
    }`;

  return (
    <section id="contact" className="section-padding bg-dark overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          subtitle="Our concierge team is ready to assist with reservations, events, and special requests."
        />

        <div className="grid lg:grid-cols-2 gap-6 sm2:gap-10 lg:gap-16 min-w-0">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl xs:rounded-3xl p-8 xs:p-10 text-center min-w-0"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <IconMap name="Send" size={28} className="text-secondary" />
                </div>
                <h3 className="font-display text-2xl text-cream">Message Sent!</h3>
                <p className="text-muted mt-2 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm2:space-y-4 glass-card rounded-2xl sm2:rounded-3xl p-3 sm2:p-5 sm:p-6 md:p-8 min-w-0">
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-primary-light text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-primary-light text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-primary-light text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-primary-light text-xs mt-1">{errors.message}</p>}
                </div>
                {submitError && (
                  <p className="text-primary-light text-sm text-center">{submitError}</p>
                )}
                <Button type="submit" variant="secondary" className="w-full" disabled={loading}>
                  <IconMap name="Send" size={16} />
                  {loading ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center min-w-0"
          >
            <div className="glass-card rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 mb-5 xs:mb-6 text-center sm:text-left min-w-0">
              <Logo size="lg" className="justify-center sm:justify-start mb-6" />
              <h3 className="font-display text-xl font-semibold text-cream mb-2">{RESORT.name}</h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                Reach our concierge for bookings, events, and personalized experiences at {RESORT.name}.
              </p>
              <Button variant="primary" href={RESORT.whatsappUrl} className="w-full sm:w-auto">
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </Button>
            </div>

            <div>
              <p className="text-sm text-muted mb-4 text-center sm:text-left">Follow us on social media</p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
                    aria-label={s.platform}
                  >
                    <IconMap name={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
