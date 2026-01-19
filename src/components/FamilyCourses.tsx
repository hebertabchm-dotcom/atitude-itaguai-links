import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, ShieldCheck, HeartPulse, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: "Comunicação, Sexo e Dinheiro",
    description: "IBA Itaguaí - Melhore a comunicação e a intimidade no seu casamento.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe_Z3Dc8d9ED0kP9dXq3RRSfKNxshh4HoZIanaRKcvQYAEuOQ/viewform?pli=1",
    icon: <Heart className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Casados Para Sempre",
    description: "IBA Itaguaí - Fortaleça os laços do seu casamento fundamentado na Bíblia.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd6eo0UCklY4DlYow8irYTN6lb_SAZlTQsFiO9Yqw5-8MV15A/viewform",
    icon: <Users className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Mulher Única",
    description: "IBA Itaguaí - Descubra o propósito e a identidade da mulher cristã.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeqmloMrtsgEptYmhhF7QFsEmny6gvbXxVQMnf8XDbAfEqkEw/viewform",
    icon: <HeartPulse className="w-10 h-10 text-orange-500" />
  },
  {
    title: "Homem ao Máximo",
    description: "IBA Itaguaí - Um curso voltado para a liderança e integridade masculina.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScA-2vm-JyC9JSO8oe4o7mcOVzVMpqqtMOVHX0mGx6hVhPHPg/viewform",
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />
  }
];

const FamilyCourses = () => {
  return (
    <section id="cursos" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Investimento</h3>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Cursos da <span className="text-gradient">Família 2026</span></h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8" />
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Crescimento espiritual e emocional para todas as fases da vida. Escolha o seu caminho hoje.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="group relative glass p-10 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-colors" />
            
            <div className="mb-8 relative z-10 p-4 bg-zinc-900/50 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
               {course.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10 leading-snug">{course.title}</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed relative z-10">{course.description}</p>
            
            <a 
              href={course.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest bg-orange-500/10 px-6 py-3 rounded-full hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all relative z-10"
            >
              Inscrever-se <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FamilyCourses;
