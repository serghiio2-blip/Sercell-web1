
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Gem, UserCheck, Calculator } from 'lucide-react';

const Advantages: React.FC = () => {
  const advantages = [
    { title: 'Reparación en el día', icon: <Clock />, color: 'text-blue-400' },
    { title: 'Garantía escrita', icon: <ShieldCheck />, color: 'text-emerald-400' },
    { title: 'Repuestos Premium', icon: <Gem />, color: 'text-purple-400' },
    { title: 'Técnicos Certificados', icon: <UserCheck />, color: 'text-orange-400' },
    { title: 'Presupuesto sin cargo', icon: <Calculator />, color: 'text-pink-400' },
  ];

  return (
    <section id="ventajas" className="relative py-24 overflow-hidden bg-black">
      {/* Background Image Layer - Continuidad del Hero */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 grayscale scale-110"
          alt="Tech Pattern"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center max-w-[150px] group"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)" }}
                className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-all ${adv.color}`}
              >
                {React.cloneElement(adv.icon as React.ReactElement, { size: 44, strokeWidth: 1.5 })}
              </motion.div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
                {adv.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
