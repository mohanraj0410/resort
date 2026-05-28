import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { RESORT } from '../../utils/constants';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={RESORT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <FaWhatsapp className="relative text-white text-3xl sm:text-4xl" />
    </motion.a>
  );
}
