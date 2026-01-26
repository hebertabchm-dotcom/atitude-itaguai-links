import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import baptismPool from '../assets/baptism-pool.jpg';

const Batismo = () => {
  return (
    <section id="batismo" className="relative h-[70vh] min-h-[500px] flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background with Professional Legibility Treatment */}
      <div className="absolute inset-0 z-0">
        <img 
          src={baptismPool} 
          className="w-full h-full object-cover object-center" 
          alt="Batismo" 
        />
        <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80 z-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 md:gap-10"
        >
          {/* Direct & Acolhedor Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              Batismo nas Águas
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-medium tracking-wide">
              Um passo importante na sua caminhada de fé e celebração.
            </p>
          </div>

          {/* Practical Anchors (Direct Info) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12 py-4 border-y border-white/10 w-full justify-center">
            <div className="flex items-center gap-3 text-zinc-400">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-black uppercase tracking-widest">Fevereiro 2026</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-black uppercase tracking-widest">Atitude Itaguaí</span>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 w-full sm:w-auto">
            <a 
              href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative flex items-center justify-center gap-4 bg-white text-zinc-950 px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Quero me Batizar</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <p className="mt-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
              Está acontecendo. Você é bem-vindo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Batismo;
