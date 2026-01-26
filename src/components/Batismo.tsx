import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import baptismPool from '../assets/baptism-pool.jpg';

const Batismo = () => {
  return (
    <section id="batismo" className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden">
      {/* Immersive Background Image with Premium Multi-layer Treatment */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={baptismPool} 
          className="w-full h-full object-cover object-center" 
          alt="Batismo" 
        />
        {/* Advanced Layered Overlays for Depth and Contrast */}
        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 z-10" />
      </div>

      {/* Celebratory Floating Elements (Liquid Tech) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/5 blur-3xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30 w-full">
        <div className="flex flex-col items-center lg:items-start max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:gap-14 text-center lg:text-left"
          >
            <div className="space-y-8 md:space-y-10">
              {/* Badge - Highlighting Joy */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mx-auto lg:mx-0"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>O Céu em Festa • 2026</span>
              </motion.div>

              <div className="space-y-4 md:space-y-6">
                <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">
                  BATISMO <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    2026
                  </span>
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold text-zinc-200 tracking-tight">
                  Sua Maior Celebração de Fé!
                </h3>
              </div>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Prepare-se para o momento mais feliz da sua história! <br className="hidden md:block" />
                O <span className="text-white font-black underline decoration-cyan-500/50 underline-offset-8">Batismo</span> é a festa onde decidimos viver o extraordinário de Deus. <br className="hidden md:block" />
                Uma marca da <span className="text-cyan-400 font-black">Atitude</span> que transforma o seu destino.
              </p>
            </div>

            {/* CTA Area - Fixed Visual Bug */}
            <div className="flex flex-col sm:flex-row items-center gap-10 pt-4">
              <motion.a 
                href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative flex items-center justify-center gap-6 bg-white text-zinc-950 px-14 py-7 md:px-20 md:py-8 rounded-[2.5rem] font-black text-xs md:text-sm uppercase tracking-[0.4em] shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(255,255,255,0.35)] transition-all duration-500"
              >
                <span className="relative z-10">Quero me Batizar</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-3 transition-transform" />
                {/* Simplified Tech Shine Effect instead of complex dual-background mask */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-[2.5rem]" />
              </motion.a>

              <div className="flex flex-col gap-2 items-center sm:items-start px-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Status</span>
                </div>
                <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest pl-6">
                  Inscrições Abertas p/ Fevereiro
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.4em] pt-8 opacity-50 justify-center lg:justify-start">
              <Heart className="w-4 h-4 text-cyan-600" />
              <span>Sua Atitude Muda Tudo</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* High-End Bottom Tech Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};

export default Batismo;
