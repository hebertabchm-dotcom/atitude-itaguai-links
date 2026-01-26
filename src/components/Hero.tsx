import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';
import yearlyMessage from '../assets/yearly-message.png';
import logoCircle from '../assets/logo-circle.jpg';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={ref} className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-32 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -z-10 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-900/10 blur-[120px] rounded-full -z-10" 
      />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          style={{ y: y2 }}
          className="mb-8 md:mb-12 relative"
        >
          {/* Main Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <img 
              src={yearlyMessage} 
              alt="Chamados ao Extraordinário" 
              className="max-w-[200px] sm:max-w-[300px] md:max-w-lg w-full mx-auto drop-shadow-[0_20px_50px_rgba(249,115,22,0.4)] animate-float"
            />
          </div>
          
          {/* Floating Branding Icon with Parallax Rotation */}
          <motion.div 
            className="absolute -top-10 -right-10 h-24 w-24 rounded-full glass p-1 shadow-2xl hidden lg:block"
            style={{ rotate }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 rounded-full" />
            <img src={logoCircle} className="h-full w-full rounded-full object-cover border border-orange-500/30" alt="Icon" />
          </motion.div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div className="h-px w-6 md:w-8 bg-orange-500/30" />
              <span className="px-3 md:px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase">
                Atitude Itaguaí
              </span>
              <div className="h-px w-6 md:w-8 bg-orange-500/30" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1] md:leading-[0.9] text-white">
              VIVENDO O <br />
              <span className="text-gradient">EXTRAORDINÁRIO</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Acreditamos que você foi chamado para ir além. <br className="hidden md:block" /> 
            Em 2026, prepare-se para romper limites e viver as promessas de Deus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <Button 
              label="Ver Cursos 2026" 
              href="#cursos" 
              variant="white"
              className="w-full sm:w-auto"
            />
            <Button 
              label="Conheça Nosso Instagram" 
              href="https://www.instagram.com/atitude.itaguai/" 
              variant="outline"
              className="w-full sm:w-auto"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-black tracking-widest text-white">Rolar</span>
        <div className="w-px h-10 md:h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
