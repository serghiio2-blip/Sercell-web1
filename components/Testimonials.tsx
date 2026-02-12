
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Carlos Ruiz", text: "Excelente servicio. Cambiaron el pin de carga de mi Xiaomi en 1 hora. Quedó impecable.", rating: 5 },
    { name: "Lucía Méndez", text: "La atención es de otro nivel. Me explicaron todo el proceso de reparación de placa. Muy profesionales.", rating: 5 },
    { name: "Martín Gómez", text: "El chatbot me ayudó a sacarme todas las dudas antes de ir. El laboratorio es impresionante.", rating: 5 }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000" 
          className="w-full h-full object-cover opacity-20"
          alt="Hardware detail"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-5xl font-black font-poppins text-white tracking-tighter mb-6">Feedback de <br /><span className="text-blue-500">Usuarios</span></h2>
            <div className="flex gap-2 text-blue-500 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-gray-400 text-lg font-bold">
              Consolidando confianza a través de la precisión técnica en cada dispositivo.
            </p>
          </div>

          <div className="w-full lg:w-2/3 flex gap-8 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
            {reviews.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[350px] bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 relative group"
              >
                <Quote className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={40} />
                <div className="flex gap-1 text-blue-400 mb-6">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                </div>
                <p className="text-white text-xl font-medium italic mb-8 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white">
                    {r.name.charAt(0)}
                  </div>
                  <span className="font-black text-white uppercase tracking-widest text-sm">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
