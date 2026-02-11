
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Battery, Zap, Cpu, Search } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -8, backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
    className="bg-[#0c0c0c] border border-white/10 p-12 rounded-[2.5rem] group relative overflow-hidden transition-all duration-300"
  >
    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
      {icon}
    </div>
    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30 group-hover:bg-blue-600 transition-all">
      <div className="text-blue-500 group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
    </div>
    <h3 className="text-3xl font-black mb-5 font-poppins text-white leading-tight">{title}</h3>
    <p className="text-white text-lg leading-relaxed font-medium opacity-90">
      {description}
    </p>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Módulos Flagship',
      description: 'Pantallas OLED de alta densidad para Xiaomi y Motorola. Recuperamos la respuesta táctil y el brillo original de fábrica.',
      icon: <Smartphone />,
    },
    {
      title: 'Celdas de Energía',
      description: 'Reemplazo de baterías con certificación de seguridad. Soporte completo para carga ultra-rápida TurboPower e HyperCharge.',
      icon: <Battery />,
    },
    {
      title: 'Puertos de Carga',
      description: 'Soldadura láser para puertos USB-C. Restauramos la conexión de datos y la carga estable en minutos.',
      icon: <Zap />,
    },
    {
      title: 'Ingeniería de Placas',
      description: 'Reparación de circuitos integrados, problemas de señal y daños por humedad con microscopía avanzada.',
      icon: <Cpu />,
    },
    {
      title: 'Escaneo Técnico',
      description: 'Diagnóstico por software oficial para detectar fallas ocultas. Entrega de informe técnico completo sin costo.',
      icon: <Search />,
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8 font-poppins tracking-tighter text-white">
              Soluciones de <br /><span className="text-blue-500">Alto Rendimiento</span>
            </h2>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed opacity-80">
              Nuestro laboratorio está diseñado para manejar la complejidad técnica de los últimos lanzamientos de <span className="text-blue-400">Xiaomi</span> y <span className="text-blue-400">Motorola</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={s.title} {...s} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
