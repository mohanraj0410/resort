import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-0 min-w-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start xs:items-center justify-between gap-3 xs:gap-4 py-4 xs:py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[13px] sm2:text-base text-cream font-medium group-hover:text-secondary transition-colors pr-2 min-w-0 break-words text-left">
          {item.q}
        </span>
        <span className="w-8 h-8 rounded-full glass flex items-center justify-center shrink-0 text-secondary">
          <IconMap name={isOpen ? 'Minus' : 'Plus'} size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 xs:pb-5 text-sm text-cream/60 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-dark overflow-hidden w-full">
      <div className="section-container max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your stay at Red Fort Resort."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl sm2:rounded-3xl px-2.5 sm2:px-4 sm:px-6 md:px-8 min-w-0"
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
