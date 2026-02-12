
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryItem: React.FC<{ img: any; index: number }> = ({ img, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -15 }}
      className="group relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 skeleton z-10" 
          />
        )}
      </AnimatePresence>

      <img 
        src={img.url} 
        alt={img.alt} 
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ${
          isLoaded ? 'opacity-100 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110' : 'opacity-0'
        }`} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
      
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black tracking-widest uppercase rounded-full">
            {img.category}
          </span>
        </div>
        <h4 className="text-white font-black text-xl mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
          {img.title}
        </h4>
        <p className="text-gray-300 text-[10px] font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {img.alt}
        </p>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=800", category: "CÁMARAS SAMSUNG", title: "S24 Ultra 200MP", alt: "Reemplazo de sensor principal y alineación OIS" },
    { url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800", category: "CÁMARAS IPHONE", title: "Lentes iPhone 15 Pro", alt: "Limpieza de prisma y cambio de cristales de zafiro" },
    { url: "https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=800", category: "CÁMARAS MOTOROLA", title: "Edge 50 Laser Focus", alt: "Reparación de módulo de enfoque asistido" },
    { url: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800", category: "INGENIERÍA", title: "Micro-soldadura IC", alt: "Intervención en placa base de alta densidad" },
    { url: "https://images.unsplash.com/photo-1601524909162-441400827265?q=80&w=800", category: "PLACAS", title: "Controlador de Energía", alt: "Restauración de protocolos de carga rápida" },
    { url: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800", category: "MÓDULOS", title: "Samsung Fold OLED", alt: "Cambio de pantalla plegable original" },
    { url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800", category: "BATERÍAS", title: "Celdas Li-ion 5000mAh", alt: "Reemplazo con celdas certificadas originales" },
    { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", category: "LABORATORIO", title: "Estación de Trabajo", alt: "Equipamiento anti-estático de grado industrial" },
    { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", category: "CALIDAD", title: "Test de Stress", alt: "Control de rendimiento post-reparación" }
  ];

  return (
    <section id="galeria" className="relative py-32 overflow-hidden bg-black">
      {/* Background Image Layer for Gallery */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950445-8462f459c32f?q=80&w=2000" 
          className="w-full h-full object-cover opacity-10"
          alt="Technical Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl font-black font-poppins tracking-tighter text-white">
              Portafolio de <br /><span className="text-blue-500 text-glow">Dispositivos</span>
            </h2>
          </motion.div>
          <div className="flex flex-col items-end">
            <div className="w-20 h-1 bg-blue-600 mb-4" />
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] text-right">
              Especialidad: Samsung • iPhone • Motorola • Xiaomi
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
