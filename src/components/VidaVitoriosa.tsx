import { motion } from 'framer-motion';
import { Star, Briefcase } from 'lucide-react';

const VidaVitoriosa = () => {
  return (
    <section id="vida-vitoriosa" className="py-24 md:py-32 px-6 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-orange-600/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800/50 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 inline-block">
            Encontros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight px-4">
            Vida <span className="text-orange-500">Vitoriosa</span> 2026
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-medium px-4">
            Um divisor de águas na sua caminhada cristã. Prepare-se para o novo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Participant Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-[3rem] p-1 shadow-2xl shadow-orange-950/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-800 opacity-100 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="relative p-12 flex flex-col h-full text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8">
                 <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tight">Vou Participar</h3>
              <p className="text-orange-50/80 text-lg mb-12 flex-grow leading-relaxed font-medium">
                Quero viver dias inesquecíveis na presença do Senhor e ser transformado por Sua glória.
              </p>
              <a 
                href="https://www.e-inscricao.com/atitudeitaguai/vidavitoriosa2026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-5 rounded-2xl font-black text-lg text-center shadow-xl hover:shadow-orange-400/20 hover:-translate-y-1 transition-all"
              >
                Participante
              </a>
            </div>
          </motion.div>

          {/* Team Card */}
          <motion.div 
            className="glass relative p-12 md:p-1 flex flex-col h-full rounded-[3rem] overflow-hidden group border-2 border-dashed border-zinc-800 hover:border-orange-500/50 transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-11 flex flex-col h-full">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:rotate-12 transition-all duration-500">
                 <Briefcase className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tight">Vou Trabalhar</h3>
              <p className="text-zinc-400 text-lg mb-12 flex-grow leading-relaxed">
                Quero servir no Reino e ser instrumento de Deus na vida de outras pessoas nestes dias.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScwOwFZfljE2549VWLvegT39bTRAP1gNygsEjE6wvuaAL9hgw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative px-8 py-5 rounded-2xl font-black text-lg text-center overflow-hidden border-2 border-orange-500 text-orange-500"
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Equipe</span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VidaVitoriosa;
