import { motion } from 'framer-motion';
import { Instagram, MapPin, Calendar, ArrowUp } from 'lucide-react';
import logoCircle from '../assets/logo-circle.jpg';
import yearlyMessage from '../assets/yearly-message.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 pt-24 md:pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-950/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
        {/* Church Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 lg:col-span-1">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
              <img 
                src={logoCircle} 
                alt="Atitude Itaguai" 
                className="h-16 md:h-20 w-16 md:w-20 rounded-full border-2 border-orange-500 shadow-2xl p-1 bg-zinc-900 relative z-10 transition-transform group-hover:rotate-12"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter leading-none">Atitude</span>
              <span className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-widest pl-0.5">Itaguaí</span>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed text-sm font-medium max-w-xs md:max-w-none">
            Uma igreja relevante, apaixonada por Deus e comprometida com a transformação de vidas na cidade de Itaguaí.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/atitude.itaguai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all group"
            >
              <Instagram className="w-6 h-6 text-orange-500 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex flex-col gap-8">
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Cultos</h4>
          <ul className="space-y-8">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                <Calendar className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="font-black text-white uppercase text-xs tracking-widest mb-1">Quarta-feira</p>
                <p className="text-sm text-zinc-400 font-bold">20:00 — Oração & Palavra</p>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                <Calendar className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="font-black text-white uppercase text-xs tracking-widest mb-1">Domingo</p>
                <p className="text-sm text-zinc-400 font-bold">10:00 e 19:00 — Celebração</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-8">
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Local</h4>
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
              <MapPin className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="font-black text-white uppercase text-xs tracking-widest mb-2">Endereço</p>
              <p className="text-sm text-zinc-400 font-bold leading-relaxed">
                Av. Ayrton Senna da Silva, 40 <br />
                Centro de Itaguaí, RJ
              </p>
            </div>
          </div>
        </div>

        {/* Theme */}
        <div className="flex flex-col gap-8">
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Tema 2026</h4>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-dark p-6 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <img 
              src={yearlyMessage} 
              alt="Chamados ao Extraordinário" 
              className="w-full h-auto drop-shadow-2xl"
            />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 text-center opacity-70">
              Extraordinário
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
          © 2026 Atitude Itaguaí • Feito com Paixão
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-3 text-zinc-500 hover:text-orange-500 font-black text-[10px] uppercase tracking-widest transition-all group"
        >
          <span>Voltar ao Topo</span>
          <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
