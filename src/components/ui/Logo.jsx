import logoImg from '../../assets/logo.png';

const sizes = {
  sm: 'h-8 w-auto',
  md: 'h-10 md:h-12 w-auto',
  lg: 'h-14 md:h-16 w-auto',
  xl: 'h-20 md:h-24 w-auto',
  loader: 'h-24 md:h-32 w-auto',
};

export default function Logo({ size = 'md', className = '', showText = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Red Sort Resort"
        className={`${sizes[size]} object-contain drop-shadow-md`}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-lg md:text-xl font-semibold text-gradient-gold">
            Red Sort
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-muted">Resort</span>
        </div>
      )}
    </div>
  );
}
