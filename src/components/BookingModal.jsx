import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users } from 'lucide-react';
import Button from './ui/Button';

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', checkIn: '', checkOut: '', guests: '2' });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[201] sm:w-full sm:max-w-md glass-card rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-cream">Reserve Your Stay</h3>
                <p className="text-sm text-muted mt-1">Experience luxury at its finest</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Calendar className="text-secondary" size={28} />
                </div>
                <p className="text-lg text-cream">Booking request received!</p>
                <p className="text-sm text-muted mt-2">Our concierge will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder:text-muted focus:outline-none focus:border-secondary/50 text-sm"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder:text-muted focus:outline-none focus:border-secondary/50 text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted mb-1 block">Check-in</label>
                    <input
                      name="checkIn"
                      type="date"
                      value={form.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cream text-sm focus:outline-none focus:border-secondary/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-1 block">Check-out</label>
                    <input
                      name="checkOut"
                      type="date"
                      value={form.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cream text-sm focus:outline-none focus:border-secondary/50"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-sm focus:outline-none focus:border-secondary/50 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-dark">
                        {n} Guest{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <Button type="submit" variant="secondary" className="w-full mt-2">
                  Confirm Booking
                </Button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
