import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const Batismo = () => {
  return (
    <section id="batismo" className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 inline-block">
            Próximo Passo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight px-4">
            Batismo nas <span className="text-blue-400">Águas</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-medium px-4">
            Declare publicamente sua fé em Jesus Cristo através do batismo.
          </p>
        </motion.div>

        <motion.div
          className="group relative overflow-hidden rounded-[3rem] p-1 shadow-2xl shadow-blue-950/20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 opacity-100 group-hover:scale-105 transition-transform duration-700" />

          <div className="relative p-12 flex flex-col h-full text-white text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 mx-auto">
               <Droplets className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Batismo - Fevereiro 2025</h3>
            <p className="text-blue-50/80 text-lg mb-12 flex-grow leading-relaxed font-medium">
              Dê o próximo passo na sua caminhada com Cristo. Inscreva-se para o batismo e viva essa experiência transformadora.
            </p>
            <a
              href="https://www.e-inscricao.com/atitudeitaguai/batismofev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-5 rounded-2xl font-black text-lg text-center shadow-xl hover:shadow-blue-400/20 hover:-translate-y-1 transition-all"
            >
              Quero me Batizar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Batismo;
