import { useRef, useState } from 'react';
import { SHORT_VIDEOS } from '../utils/constants';
import SectionHeading from '../components/ui/SectionHeading';
import IconMap from '../components/ui/IconMap';

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
      className="relative flex-shrink-0 w-[min(calc(100vw-1.5rem),220px)] sm2:w-[260px] sm3:w-[300px] md:w-[320px] rounded-2xl overflow-hidden glass-card group snap-center"
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
          preload="none"
          className="w-full h-full object-cover"
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark/30">
            <div className="w-12 h-12 xs:w-14 xs:h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <IconMap name="Play" size={24} className="text-cream ml-0.5 xs:ml-1" />
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 xs:p-4 bg-gradient-to-t from-dark/90 to-transparent">
          <p className="text-xs xs:text-sm font-medium text-cream line-clamp-2">{item.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('[data-video-card]')?.offsetWidth ?? 280;
      scrollRef.current.scrollBy({ left: dir * (cardWidth + 16), behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="section-padding bg-dark-soft overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col sm3:flex-row sm3:items-end justify-between gap-4 mb-8 xs:mb-10 min-w-0">
          <div className="flex-1 min-w-0">
            <SectionHeading
              label="Experience"
              title="Resort Reels"
              subtitle="Short glimpses into the Red Fort Resort lifestyle."
              align="left"
            />
          </div>
          <div className="flex gap-2 shrink-0 self-start sm3:self-end sm3:mb-12 md:mb-16">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Previous"
            >
              <IconMap name="ChevronLeft" size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:bg-white/10"
              aria-label="Next"
            >
              <IconMap name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 xs:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-pl-4 xs:scroll-pl-5 sm:scroll-pl-8 md:scroll-pl-10 lg:scroll-pl-12 pr-4 xs:pr-5 sm:pr-8"
        style={{
          scrollbarWidth: 'none',
          paddingLeft: 'max(1rem, calc((100% - min(100%, 80rem)) / 2 + 1rem))',
          paddingRight: 'max(1rem, calc((100% - min(100%, 80rem)) / 2 + 1rem))',
        }}
      >
        {SHORT_VIDEOS.map((item) => (
          <div key={item.title} data-video-card>
            <VideoCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
