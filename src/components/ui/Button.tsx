import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'white' | 'orange' | 'outline' | 'glass';
  icon?: LucideIcon;
  target?: string;
  className?: string;
}

const Button = ({ 
  label, 
  href, 
  variant = 'white', 
  icon: Icon, 
  target,
  className = '' 
}: ButtonProps) => {
  const isExternal = href.startsWith('http');
  const anchorProps = isExternal ? { target: target || '_blank', rel: 'noopener noreferrer' } : {};

  const variants = {
    white: "bg-white text-zinc-950 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]",
    orange: "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-[0_20px_50px_rgba(249,115,22,0.3)]",
    outline: "border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20",
    glass: "glass-dark text-white border border-white/10 hover:bg-white/10"
  };

  return (
    <motion.a
      href={href}
      {...anchorProps}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group flex items-center justify-center gap-3 
        px-10 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-[1.5rem] 
        font-black text-[10px] md:text-xs uppercase tracking-[0.3em] 
        transition-all duration-500 overflow-hidden text-center
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="relative z-10">{label}</span>
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform group-hover:translate-x-1" />}
      
      {/* Universal Interaction Backdrop Mask */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
};

export default Button;
