import {
  Bed,
  Waves,
  Sparkles,
  UtensilsCrossed,
  Mountain,
  Flame,
  Trees,
  Wifi,
  Car,
  Heart,
  Briefcase,
  Cake,
  Music,
  Camera,
  Share2,
  AtSign,
  PlayCircle,
} from 'lucide-react';

const ICONS = {
  Bed,
  Waves,
  Sparkles,
  UtensilsCrossed,
  Mountain,
  Flame,
  Trees,
  Wifi,
  Car,
  Heart,
  Briefcase,
  Cake,
  Music,
  Instagram: Camera,
  Facebook: Share2,
  Twitter: AtSign,
  Youtube: PlayCircle,
};

export default function IconMap({ name, className = 'w-6 h-6', ...props }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} {...props} />;
}
