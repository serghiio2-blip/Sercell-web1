
import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    // 3 Módulos
    {
      url: "https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=800",
      category: "MÓDULOS",
      title: "Xiaomi 14 Ultra OLED",
      alt: "Cambio de módulo completo original"
    },
    {
      url: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800",
      category: "MÓDULOS",
      title: "Ensamblaje Motorola Razr",
      alt: "Pantalla flexible de alta precisión"
    },
    {
      url: "https://images.unsplash.com/photo-1556656793-062ff9878258?q=80&w=800",
      category: "MÓDULOS",
      title: "Calibración Táctil",
      alt: "Ajuste de respuesta hápitica"
    },
    // 3 Placas de Carga
    {
      url: "https://images.unsplash.com/photo-1601524909162-441400827265?q=80&w=800",
      category: "PLACAS DE CARGA",
      title: "Micro-soldadura USB-C",
      alt: "Restauración de pines de carga rápida"
    },
    {
      url: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800",
      category: "PLACAS DE CARGA",
      title: "Controlador de Voltaje",
      alt: "Reparación de circuito de carga"
    },
    {
      url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800",
      category: "PLACAS DE CARGA",
      title: "Módulo HyperCharge",
      alt: "Soporte para carga 120W"
    },
    // 3 Baterías
    {
      url: "https://images.unsplash.com/photo-1611073221761-0ba199572412?q=80&w=800",
      category: "BATERÍAS",
      title: "Celdas de Litio Premium",
      alt: "Reemplazo de batería alta densidad"
    },
    {
      url: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=800",
      category: "BATERÍAS",
      title: "Ciclo de Testeo",
      alt: "Verificación de capacidad real"
    },
    {
      url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800",
      category: "BATERÍAS",
      title: "Carga Segura",
      alt: "Batería certificada con garantía"
    },
    // 3 Cámaras
    {
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
      category: "CÁMARAS",
      title: "Sensor Leica Xiaomi",
      alt: "Alineación de lentes de cámara"
    },
    {
      url: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=800",
      category: "CÁMARAS",
      title: "Lector de Imagen",
      alt: "Reparación de enfoque láser"
    },
    {
      url: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=800",
      category: "CÁMARAS",
      title: "Cristales de Zafiro",
      alt: "Reemplazo de vidrios de cámara"
    },
    // 2 Exteriores
    {
      url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
      category: "EXTERIORES",
      title: "Laboratorio serCell",
      alt: "Instalaciones de alta tecnología"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
      category: "EXTERIORES",
      title: "Control de Calidad",
      alt: "Revisión final antes de entrega"
    }
  ];

  return (
    <section id="galeria" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl font-black font-poppins tracking-tighter text-white">
              Evidencia de <br /><span className="text-blue-500 text-glow">Ingeniería</span>
            </h2>
          </motion.div>
          <div className="flex flex-col items-end">
            <div className="w-20 h-1 bg-blue-600 mb-4" />
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] text-right">
              Procesos certificados Xiaomi / Motorola
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -15 }}
              className="group relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/5 bg-black shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black tracking-widest uppercase rounded-full">
                    {img.category}
                  </span>
                </div>
                <h4 className="text-white font-black text-xl mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {img.title}
                </h4>
                <p className="text-gray-400 text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
