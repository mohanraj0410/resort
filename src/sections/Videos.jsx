import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SHORT_VIDEOS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';

function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <div
      className="relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] rounded-2xl overflow-hidden glass-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark/30">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Play size={24} className="text-cream ml-1" fill="currentColor" />
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-dark/90 to-transparent">
          <p className="text-sm font-medium text-cream">{item.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="section-padding bg-dark-soft overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex-1">
            <SectionHeading
              label="Experience"
              title="Resort Reels"
              subtitle="Short glimpses into the Crimson Vale lifestyle."
              align="left"
            />
          </div>
          <div className="hidden sm:flex gap-2 shrink-0 self-end mb-12 md:mb-16">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {SHORT_VIDEOS.map((item) => (
          <div key={item.title} className="snap-center">
            <VideoCard item={item} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
