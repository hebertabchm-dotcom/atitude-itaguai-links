import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import baptismPool from '../assets/baptism-pool.jpg';

const Batismo = () => {
  return (
    <section id="batismo" className="relative min-h-[80vh] flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={baptismPool} 
          className="w-full h-full object-cover object-center" 
          alt="Batismo Celebration" 
        />
        {/* Sophisticated Overlay System */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40 z-10" />
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-multiply z-10" />
      </div>

      {/* "Liquid Tech" Micro-interactions (Ornaments) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side - Editorial Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase"
              >
                <Sparkles className="w-4 h-4" />
                <span>Próximo Passo • 2026</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                O Céu faz <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Uma Festa</span> <br />
                por Você!
              </h2>

              <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed font-medium max-w-xl">
                O batismo é o seu "sim" mais feliz para Deus. Uma celebração de vida nova, esperança e um futuro extraordinário que começa agora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                "Nova Identidade em Cristo",
                "Celebração com a Família",
                "Testemunho Público de Fé",
                "Início do seu Propósito"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <span className="text-zinc-100 text-xs md:text-sm font-black uppercase tracking-widest">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-4 bg-white text-zinc-950 px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all overflow-hidden"
              >
                <span className="relative z-10 transition-colors group-hover:text-cyan-600">Quero me Batizar</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform group-hover:text-cyan-600" />
                <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 relative z-10" />
                </div>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                  Vagas abertas para a <br /> próxima celebração
                </p>
              </div>
            </div>
          </motion.div>

          {/* Empty column for layout balance on LG screens */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-20" />
    </section>
  );
};

export default Batismo;
