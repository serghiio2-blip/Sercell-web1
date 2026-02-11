
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Carlos Ruiz", text: "Excelente servicio. Cambiaron el pin de carga de mi iPhone en 1 hora. Quedó perfecto.", rating: 5 },
    { name: "Lucía Méndez", text: "La atención es de otro nivel. Me explicaron todo el proceso de reparación de placa. Muy confiables.", rating: 5 },
    { name: "Martín Gómez", text: "El chatbot me ayudó a sacarme todas las dudas antes de ir. La garantía me dio mucha tranquilidad.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-black font-poppins">Lo que dicen <span className="text-emerald-400">nuestros clientes</span></h2>
            <div className="mt-4 flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <p className="text-gray-400 mt-2">Más de 5,000 reparaciones exitosas en el último año.</p>
          </div>
          <div className="w-full md:w-2/3 flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            {reviews.map((r, i) => (
              <motion.div 
                key={i}
                className="min-w-[300px] glass p-8 rounded-3xl"
              >
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} fill="currentColor" size={12} />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{r.text}"</p>
                <span className="font-bold text-white text-sm uppercase tracking-widest">{r.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
