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
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className={`
          flex items-center justify-between w-full max-w-6xl 
          px-6 py-3 md:py-4 rounded-2xl md:rounded-[3rem] 
          border border-white/5 backdrop-blur-2xl transition-all duration-700 pointer-events-auto
          ${scrolled ? 'bg-zinc-950/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]' : 'bg-white/5 shadow-2xl'}
        `}
      >
        {/* Brand Section - Restored Orange */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full duration-500" />
            <img 
              src={logoCircle} 
              alt="Atitude Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 p-0.5 object-cover relative z-10 transition-colors group-hover:border-orange-500/50"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xs md:text-sm uppercase tracking-[0.25em] leading-none">
              Atitude
            </span>
            <span className="text-orange-500 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-1 italic">
              Itaguaí
            </span>
          </div>
        </div>

        {/* Desktop Menu - Refined & Modern */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-950/20 p-1.5 rounded-full border border-white/5 backdrop-blur-3xl shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-7 py-2.5 rounded-full text-zinc-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-white transition-all duration-500 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500">{link.name}</span>
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 scale-95 group-hover:scale-100 transition-all duration-500 rounded-full" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-1/2 transition-all duration-500 rounded-full" />
            </a>
          ))}
        </div>

        {/* Global Actions - Redesigned Tech Look */}
        <div className="flex items-center gap-3">
          <motion.a 
            href="https://www.instagram.com/atitude.itaguai/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-[1.25rem] border border-white/10 bg-white/5 hover:bg-orange-600 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 group"
            title="Instagram"
          >
            <Instagram className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
          </motion.a>

          {/* Mobile Tech Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-[1.25rem] bg-white/5 text-white border border-white/10 active:scale-90 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Ultra-Modern Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="absolute top-full left-0 right-0 mt-6 p-6 bg-zinc-950/98 backdrop-blur-[50px] border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.9)] lg:hidden flex flex-col gap-3 z-50 overflow-hidden"
            >
              {/* Subtle Tech Pattern Background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-8 py-5 rounded-2xl bg-white/5 flex items-center justify-between group active:bg-orange-600 transition-all border border-white/5 active:border-orange-400"
                >
                  <span className="font-black text-xs uppercase tracking-[0.3em] text-zinc-400 group-active:text-white">
                    {link.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-orange-600 opacity-0 group-active:opacity-100 transition-opacity shadow-[0_0_10px_rgba(249,115,22,1)]" />
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://www.instagram.com/atitude.itaguai/" 
                target="_blank" 
                className="mt-4 flex items-center justify-center gap-4 bg-orange-600 text-white p-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-2xl shadow-orange-950/50 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
                <Instagram className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Conheça nosso Instagram</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
