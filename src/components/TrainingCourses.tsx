import { motion } from 'framer-motion';
import { BookOpen, Flame, ArrowUpRight } from 'lucide-react';

const TrainingCourses = () => {
  return (
    <section id="formacao" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-4 inline-block">Liderança & Fé</span>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Cursos de <span className="text-gradient">Formação</span></h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
          Capacitação teológica e prática para você servir ao Senhor com excelência e paixão.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Membresia */}
        <motion.div 
          className="group relative flex flex-col items-start bg-zinc-900/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-orange-500/40 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <BookOpen className="w-32 h-32" />
          </div>
          
          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-500">
            <BookOpen className="w-8 h-8 text-orange-500 group-hover:text-white" />
          </div>
          
          <h3 className="text-3xl font-black mb-4 tracking-tight">Curso de Membresia</h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed flex-grow">
            Dê o próximo passo na sua jornada. Entenda nossa visão, valores e como você pode fazer parte desta família.
          </p>
          
          <a 
            href="https://www.e-inscricao.com/atitudeitaguai/membresia2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-800 px-8 py-3.5 rounded-2xl text-white font-bold hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
          >
            Começar Agora <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Escola do Avivamento */}
        <motion.div 
          className="group relative flex flex-col items-start bg-zinc-900/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-orange-500/40 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Flame className="w-32 h-32" />
          </div>

          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:-rotate-6 transition-all duration-500">
            <Flame className="w-8 h-8 text-orange-500 group-hover:text-white" />
          </div>
          
          <h3 className="text-3xl font-black mb-4 tracking-tight text-gradient">Escola do Avivamento</h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed flex-grow">
            Um mergulho profundo no sobrenatural de Deus. Ative seus dons e prepare-se para o mover extraordinário do Espírito.
          </p>
          
          <a 
            href="https://www.e-inscricao.com/atitudeitaguai/escoladoavivamento2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-800 px-8 py-3.5 rounded-2xl text-white font-bold hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
          >
            Inscrever-se <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCourses;
