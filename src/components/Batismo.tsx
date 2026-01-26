import { motion } from 'framer-motion';
import { Droplets, Sparkles, ArrowRight } from 'lucide-react';

const Batismo = () => {
  // Technological "Water Drop" elements
  const drops = [
    { size: 40, x: "10%", y: "20%", duration: 4, delay: 0 },
    { size: 25, x: "85%", y: "15%", duration: 6, delay: 1 },
    { size: 60, x: "75%", y: "70%", duration: 5, delay: 2 },
    { size: 30, x: "15%", y: "80%", duration: 7, delay: 0.5 },
    { size: 45, x: "50%", y: "10%", duration: 8, delay: 3 },
  ];

  return (
    <section id="batismo" className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Technological Water Drops Background */}
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl -z-10"
          style={{
            width: drop.size,
            height: drop.size,
            left: drop.x,
            top: drop.y,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Liquid Background Effects */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      {/* Animated Wave Divider (Subtle) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c120-10,240-10,360,0s240,10,360,0,240-10,360,0V120H0V0C0,0,10.68,10,321.39,56.44Z" className="fill-zinc-900"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-cyan-500/20 bg-zinc-900/50 backdrop-blur-3xl p-8 md:p-12 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              <div className="flex flex-col gap-8">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Droplets className="w-10 h-10 text-cyan-400 relative z-10" />
                </div>
                
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                    Celebrando a Sua <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Vida Nova</span>
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                    O batismo é uma festa! É o momento de declarar com alegria que você pertence a Jesus e começar uma caminhada cheia de esperança, luz e propósito.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-cyan-500/30 transition-colors">
                    <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
                    <p className="text-white font-bold text-sm">Alegria</p>
                    <p className="text-zinc-500 text-xs">Festa no Céu</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-colors">
                    <Droplets className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-white font-bold text-sm">Novidade</p>
                    <p className="text-zinc-500 text-xs">Tudo se fez Novo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Particles */}
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[2px] -z-10"
                style={{
                  top: `${20 + i * 20}%`,
                  right: `-20px`,
                }}
                animate={{
                  x: [0, 40, 0],
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>

          {/* Call to Action Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-6 text-center lg:text-left">
              <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase inline-block">
                Batismo 2026
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Vamos celebrar <br className="hidden md:block" /> essa vitória juntos?
              </h3>
              <p className="text-zinc-400 text-lg max-w-lg mx-auto lg:mx-0">
                O céu está em festa por você! O batismo é o seu "sim" mais feliz para Deus. Garanta sua vaga na nossa próxima celebração e viva esse momento extraordinário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all overflow-hidden"
              >
                <span className="relative z-10">Quero me Batizar</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4 py-2">
                <div className="flex -space-x-2">
                  {[Sparkles, Droplets, ArrowRight].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border border-cyan-500/30 bg-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                       <Icon className="w-4 h-4 text-cyan-500" />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none">
                  Junte-se a <br /> dezenas de vidas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Batismo;
