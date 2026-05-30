import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { RESORT } from '../../utils/constants';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={RESORT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed z-50 w-11 h-11 sm2:w-14 sm2:h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/40 right-2.5 sm2:right-4 sm:right-6 bottom-[max(0.75rem,env(safe-area-inset-bottom))] sm2:bottom-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <FaWhatsapp className="relative text-white text-2xl xs:text-3xl sm:text-4xl" />
    </motion.a>
  );
}
