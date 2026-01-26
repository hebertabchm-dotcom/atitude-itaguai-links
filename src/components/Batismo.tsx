import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Waves, Heart } from 'lucide-react';
import Button from './ui/Button';
import baptismPool from '../assets/baptism-pool.jpg';

const Batismo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="batismo" className="relative min-h-[95vh] flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden">
      {/* Immersive Parallax Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          src={baptismPool} 
          className="w-full h-[120%] object-cover object-center" 
          alt="Batismo" 
        />
        {/* Advanced Layered Overlays */}
        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)] z-10" />
      </div>

      {/* Celebratory Floating Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/5 blur-[100px]"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30 w-full">
        <div className="flex flex-col items-center lg:items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 md:gap-14 text-center lg:text-left"
          >
            <div className="space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mx-auto lg:mx-0 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <Waves className="w-5 h-5 animate-pulse" />
                <span>O Céu em Festa • 2026</span>
              </motion.div>

              <div className="space-y-6 md:space-y-8">
                <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-white leading-[0.75] tracking-tighter">
                  BATISMO <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-600">
                    2026
                  </span>
                </h2>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                  A Sua Maior Celebração!
                </h3>
              </div>

              <p className="text-zinc-400 text-2xl md:text-3xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                O momento mais feliz da sua história te espera. <br className="hidden md:block" />
                O <span className="text-white font-black underline decoration-cyan-500 decoration-4 underline-offset-8">Batismo</span> é a festa extraordinária onde você declara publicamente a sua fé.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-12 pt-8">
              <Button 
                label="Quero me Batizar" 
                href="https://www.e-inscricao.com/atitudeitaguai/batismofev" 
                variant="white"
                className="w-full sm:w-auto shadow-[0_40px_100px_-20px_rgba(255,255,255,0.3)] !rounded-[3rem] px-16 py-8 md:px-24 md:py-10"
              />

              <div className="flex flex-col gap-3 items-center sm:items-start px-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  <span className="text-white text-sm font-black uppercase tracking-[0.4em]">Status</span>
                </div>
                <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] pl-8">
                  Inscrições Abertas
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-zinc-500 font-black text-xs uppercase tracking-[0.5em] pt-12 opacity-40 justify-center lg:justify-start">
              <Heart className="w-5 h-5 text-cyan-600 fill-cyan-600" />
              <span>O Próximo Passo Começa Aqui</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent z-40" />
    </section>
  );
};

export default Batismo;
