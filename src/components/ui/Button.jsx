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
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
