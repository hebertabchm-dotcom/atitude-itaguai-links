import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import baptismPool from '../assets/baptism-pool.jpg';

const Batismo = () => {
  return (
    <section id="batismo" className="relative min-h-[80vh] flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden">
      {/* Immersive Background Image with Premium Treatment */}
      <div className="absolute inset-0 z-0">
        <img 
          src={baptismPool} 
          className="w-full h-full object-cover object-center scale-105" 
          alt="Batismo" 
        />
        {/* Advanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 z-10" />
      </div>

      {/* Floating Technological Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10 blur-2xl"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:gap-14"
          >
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase"
              >
                <Sparkles className="w-4 h-4" />
                <span>Uma Nova Vida • 2026</span>
              </motion.div>

              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
                Batismo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2026</span>
              </h2>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
                O céu faz uma festa por você! <br />
                O <span className="text-white">batismo</span> é o seu passo mais importante. Uma celebração da <span className="text-cyan-400">Atitude</span> que muda tudo.
              </p>
            </div>

            {/* Timeless Call to Action */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-5 bg-white text-zinc-950 px-14 py-6 md:px-16 md:py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-300"
              >
                <span className="relative z-10 transition-colors group-hover:text-cyan-600">Quero me Batizar</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-3 transition-transform group-hover:text-cyan-600" />
                <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[2rem]" />
              </a>

              <div className="flex flex-col gap-1 px-2">
                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Status</span>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <p className="text-white text-xs font-black uppercase tracking-widest">Inscrições Abertas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
};

export default Batismo;
