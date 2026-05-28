import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageLoader from '../components/layout/PageLoader';
import ScrollProgress from '../components/layout/ScrollProgress';
import BackToTop from '../components/layout/BackToTop';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import BookingModal from '../components/BookingModal';
import { pageTransition } from '../animations/variants';

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  const openBooking = () => setBookingOpen(true);

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar onBookNow={openBooking} />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <Outlet context={{ onBookNow: openBooking }} />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
