import { motion } from 'framer-motion';
import { BookOpen, Flame, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';

const TrainingCourses = () => {
  return (
    <section id="formacao" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-orange-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs mb-4 inline-block">Liderança & Fé</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight px-4 text-white">Cursos de <span className="text-gradient">Formação</span></h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed px-4 font-medium">
          Capacitação teológica e prática para você servir ao Senhor com excelência e paixão.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Membresia */}
        <motion.div 
          className="group relative flex flex-col items-start bg-zinc-900/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-orange-500/40 transition-all duration-500 overflow-hidden min-h-[450px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <BookOpen className="w-32 h-32 text-white" />
          </div>
          
          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-500">
            <BookOpen className="w-8 h-8 text-orange-500 group-hover:text-white" />
          </div>
          
          <h3 className="text-3xl font-black mb-4 tracking-tight text-white">Curso de Membresia</h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed flex-grow font-medium">
            Dê o próximo passo na sua jornada. Entenda nossa visão, valores e como você pode fazer parte desta família.
          </p>
          
          <Button 
            label="Começar Agora" 
            href="https://www.e-inscricao.com/atitudeitaguai/membresia2026" 
            variant="glass"
            icon={ArrowUpRight}
            className="bg-zinc-800 hover:bg-orange-500"
          />
        </motion.div>

        {/* Escola do Avivamento */}
        <motion.div 
          className="group relative flex flex-col items-start bg-zinc-900/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-orange-500/40 transition-all duration-500 overflow-hidden min-h-[450px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Flame className="w-32 h-32 text-white" />
          </div>

          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:-rotate-6 transition-all duration-500">
            <Flame className="w-8 h-8 text-orange-500 group-hover:text-white" />
          </div>
          
          <h3 className="text-3xl font-black mb-4 tracking-tight text-gradient">Escola do Avivamento</h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed flex-grow font-medium">
            Um mergulho profundo no sobrenatural de Deus. Ative seus dons e prepare-se para o mover extraordinário do Espírito.
          </p>
          
          <Button 
            label="Inscrever-se" 
            href="https://www.e-inscricao.com/atitudeitaguai/escoladoavivamento2026" 
            variant="glass"
            icon={ArrowUpRight}
            className="bg-zinc-800 hover:bg-orange-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCourses;
