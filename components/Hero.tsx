
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5491136379073";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Ultra-Futurista */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000" 
          alt="Cyber Laboratory Hardware"
          className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_10s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 border border-blue-500/40 rounded-full bg-blue-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Zap className="w-4 h-4 text-blue-400 fill-blue-400 animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.4em] text-blue-300 uppercase">
              Ingeniería serCell High-End
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black mb-6 leading-[0.85] tracking-tighter text-white font-poppins">
            REPARACIÓN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 text-glow">EXTREMA.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-white text-xl md:text-3xl font-bold mb-14 leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
            Especialistas en micro-arquitectura móvil de <br />
            <span className="text-blue-400">Samsung S24 Ultra</span>, <span className="text-blue-400">iPhone 15 Pro</span> & <span className="text-blue-400">Motorola Edge</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a 
            href="#contacto"
            className="group px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl flex items-center gap-4 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_50px_rgba(37,99,235,0.5)] active:scale-95"
          >
            SOLICITAR TURNO
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-6 bg-white/5 backdrop-blur-2xl border border-white/20 text-white rounded-[2rem] font-black text-xl flex items-center gap-4 hover:bg-white/10 transition-all active:scale-95"
          >
            <MessageCircle className="w-7 h-7 text-emerald-400" />
            WHATSAPP
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll - Inicio de la continuidad de fondo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 z-30">
        <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase">Sistemas</span>
        <motion.div 
          animate={{ height: [40, 80, 40] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[2px] bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" 
        />
      </div>
    </section>
  );
};

export default Hero;
