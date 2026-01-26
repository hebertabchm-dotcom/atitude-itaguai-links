import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import baptismBeach from '../assets/baptism-beach.png';

const Batismo = () => {
  return (
    <section id="batismo" className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative - Subtler Blue Tech */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Visual Side - Professional Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-cyan-900/10 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10" />
              <img 
                src={baptismBeach} 
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Batismo na Praia" 
              />
              
              <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-xs font-black uppercase tracking-widest">Uma Celebração Inesquecível</span>
                </div>
              </div>
            </div>

            {/* Glowing Tech Ornament */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full -z-10 animate-pulse" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-10"
          >
            <div className="space-y-6">
              <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase inline-block">
                Batismo 2026
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                O Céu faz <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Uma Festa</span> por Você!
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                O batismo nas águas é o momento mais feliz e marcante da sua vida com Deus. É onde você declara publicamente que nasceu de novo para viver os sonhos extraordinários d'Ele. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Celebração com a família",
                  "Testemunho público de fé",
                  "Início de uma nova jornada",
                  "Comunhão e alegria total"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                    <span className="text-zinc-300 text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Quero me Batizar</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <p className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">
                    Vagas disponíveis para a próxima celebração
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Batismo;
