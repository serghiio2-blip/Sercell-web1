
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
    <section id="ventajas" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center max-w-[150px]"
            >
              <div className={`mb-4 ${adv.color}`}>
                {React.cloneElement(adv.icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
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
