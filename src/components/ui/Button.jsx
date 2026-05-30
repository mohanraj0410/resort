import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30 hover:shadow-primary/50',
  secondary:
    'bg-gradient-to-r from-secondary to-secondary-light text-dark font-semibold shadow-lg shadow-secondary/20 hover:shadow-secondary/40',
  outline:
    'border border-white/30 text-cream hover:bg-white/10 backdrop-blur-sm',
  ghost: 'text-cream hover:bg-white/5',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  href,
  disabled,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-1.5 sm2:gap-2 max-w-full px-3 py-2 sm2:px-5 sm2:py-3 sm:px-6 sm:py-3 rounded-full text-[11px] sm2:text-sm font-medium tracking-normal sm2:tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? undefined : { scale: 1.03 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
