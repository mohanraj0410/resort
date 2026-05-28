import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, size = 16 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-secondary text-secondary' : 'text-white/20'}
        />
      ))}
    </div>
  );
}
