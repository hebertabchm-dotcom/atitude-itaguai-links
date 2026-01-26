import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import logoCircle from '../assets/logo-circle.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cursos 2026', href: '#cursos' },
    { name: 'Vida Vitoriosa', href: '#vida-vitoriosa' },
    { name: 'Formação', href: '#formacao' },
    { name: 'Batismo', href: '#batismo' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-6 md:pt-8 px-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`
          flex items-center justify-between w-full max-w-6xl 
          px-6 py-3 rounded-2xl md:rounded-[2.5rem] 
          border border-white/10 backdrop-blur-2xl transition-all duration-500 pointer-events-auto
          ${scrolled ? 'bg-zinc-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white/5 shadow-xl'}
        `}
      >
        {/* Brand/Logo Section */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
            <img 
              src={logoCircle} 
              alt="Atitude Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 p-0.5 object-cover relative z-10"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] leading-none">
              Atitude
            </span>
            <span className="text-cyan-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-0.5">
              Itaguaí
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links - Modern Indicators */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-6 py-2.5 rounded-full text-zinc-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-all group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Social & Mobile Actions */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/atitude.itaguai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-500 transition-all group"
            title="Instagram"
          >
            <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>

          {/* Mobile Toggle Button - Tech Style */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Improved Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 bg-zinc-950/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl lg:hidden flex flex-col gap-2 z-50"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 flex items-center justify-between group active:bg-cyan-500 transition-all border border-transparent active:border-cyan-400"
                >
                  <span className="font-black text-xs uppercase tracking-[0.2em] text-zinc-300 group-active:text-white">
                    {link.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-active:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <a 
                href="https://www.instagram.com/atitude.itaguai/" 
                target="_blank" 
                className="mt-2 flex items-center justify-center gap-3 bg-white text-zinc-950 p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl"
              >
                <Instagram className="w-5 h-5" />
                Siga nosso Instagram
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
