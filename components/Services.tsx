
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Battery, Zap, Cpu, Search } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -10, backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
    className="bg-black/60 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] group relative overflow-hidden transition-all duration-500"
  >
    {/* Decoración: Barra de carga sutil en la parte superior */}
    <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
      <motion.div 
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear", delay }}
        className="w-1/2 h-full bg-blue-500/30 blur-sm"
      />
    </div>

    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
      {icon}
    </div>
    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30 group-hover:bg-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
      <div className="text-blue-400 group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
    </div>
    <h3 className="text-3xl font-black mb-5 font-poppins text-white leading-tight group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
      {description}
    </p>
  </motion.div>
);

const Services: React.FC = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const services = [
    { title: 'Módulos Flagship', description: 'Pantallas OLED de alta densidad para Xiaomi y Motorola. Recuperamos la respuesta táctil y el brillo original de fábrica.', icon: <Smartphone /> },
    { title: 'Celdas de Energía', description: 'Reemplazo de baterías con certificación de seguridad. Soporte completo para carga ultra-rápida TurboPower e HyperCharge.', icon: <Battery /> },
    { title: 'Puertos de Carga', description: 'Soldadura láser para puertos USB-C. Restauramos la conexión de datos y la carga estable en minutos.', icon: <Zap /> },
    { title: 'Ingeniería de Placas', description: 'Reparación de circuitos integrados, problemas de señal y daños por humedad con microscopía avanzada.', icon: <Cpu /> },
    { title: 'Escaneo Técnico', description: 'Diagnóstico por software oficial para detectar fallas ocultas. Entrega de informe técnico completo sin costo.', icon: <Search /> }
  ];

  return (
    <section id="servicios" className="relative py-32 overflow-hidden bg-black">
      {/* Background Image Layer with Skeleton */}
      <div className="absolute inset-0 z-0">
        {!bgLoaded && <div className="absolute inset-0 skeleton" />}
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
          onLoad={() => setBgLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${bgLoaded ? 'opacity-30' : 'opacity-0'}`}
          alt="Technical Lab"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 font-poppins tracking-tighter text-white">
              Sistemas de <br /><span className="text-blue-500 text-glow">Alto Nivel</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl font-bold leading-relaxed max-w-2xl">
              Equipamiento de grado industrial para la complejidad de <span className="text-blue-400">Xiaomi</span> y <span className="text-blue-400">Motorola</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <ServiceCard key={s.title} {...s} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
