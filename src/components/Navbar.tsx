import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import logoCircle from '../assets/logo-circle.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Cursos 2026', href: '#cursos' },
    { name: 'Vida Vitoriosa', href: '#vida-vitoriosa' },
    { name: 'Formação', href: '#formacao' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-dark border-b border-white/5 mx-4 mt-4 rounded-3xl">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-orange-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          <img 
            src={logoCircle} 
            alt="Atitude Logo" 
            className="h-12 w-12 rounded-full border border-orange-500/50 p-0.5 object-cover relative z-10"
          />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-white font-black text-xs uppercase tracking-widest leading-none">Atitude</span>
          <span className="text-orange-500 font-bold text-[10px] uppercase tracking-tighter">Itaguaí</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-zinc-400 font-bold text-xs uppercase tracking-widest hover:text-orange-500 transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://www.instagram.com/atitude.itaguai/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 p-2.5 rounded-full hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 transition-all group"
          title="Instagram"
        >
          <Instagram className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
        </a>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 glass-dark border border-white/10 rounded-[2rem] md:hidden backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 rounded-2xl bg-white/5 text-center font-black text-xs uppercase tracking-widest text-zinc-300 active:bg-orange-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/atitude.itaguai/" 
                target="_blank" 
                className="flex items-center justify-center gap-3 bg-orange-500 p-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-xl shadow-orange-900/20"
              >
                <Instagram className="w-5 h-5" />
                Seguir Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
