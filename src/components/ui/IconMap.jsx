import {
  FaBed,
  FaWater,
  FaMountain,
  FaFire,
  FaTree,
  FaWifi,
  FaCar,
  FaHeart,
  FaBirthdayCake,
  FaMusic,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  MdSpa,
  MdRestaurant,
  MdBusinessCenter,
  MdHeadset,
  MdEmail,
  MdChat,
  MdSchedule,
  MdLocationOn,
  MdSend,
} from 'react-icons/md';
import { IoClose, IoChevronDown, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { BsZoomIn, BsQuote, BsPlus, BsDash } from 'react-icons/bs';
import { IoPlayCircle } from 'react-icons/io5';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoIosArrowUp } from 'react-icons/io';

const ICONS = {
  Bed: FaBed,
  Waves: FaWater,
  Sparkles: MdSpa,
  UtensilsCrossed: MdRestaurant,
  Mountain: FaMountain,
  Flame: FaFire,
  Trees: FaTree,
  Wifi: FaWifi,
  Car: FaCar,
  Heart: FaHeart,
  Briefcase: MdBusinessCenter,
  Cake: FaBirthdayCake,
  Music: FaMusic,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  Twitter: FaTwitter,
  Youtube: FaYoutube,
  Phone: FaPhone,
  Mail: FaEnvelope,
  Email: MdEmail,
  MapPin: MdLocationOn,
  Send: MdSend,
  Headphones: MdHeadset,
  MessageSquare: MdChat,
  Clock: MdSchedule,
  Menu: HiMenuAlt3,
  X: IoClose,
  ChevronDown: IoChevronDown,
  ChevronLeft: IoChevronBack,
  ChevronRight: IoChevronForward,
  ZoomIn: BsZoomIn,
  Quote: BsQuote,
  ArrowUp: IoIosArrowUp,
  Calendar: MdSchedule,
  Users: FaBed,
  Play: FaMusic,
  Navigation: MdLocationOn,
  Plus: BsPlus,
  Minus: BsDash,
  Play: IoPlayCircle,
};

export default function IconMap({ name, className = '', size = 20, ...props }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} size={size} {...props} />;
}

export { FaWhatsapp };
