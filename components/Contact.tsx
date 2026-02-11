
import React from 'react';
import { motion } from 'framer-motion';
// Add Zap to imports and remove unused MapPin and Clock
import { MessageCircle, Sparkles, ExternalLink, Navigation, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  // Enlace con Directions API: Fuerza a Google Maps a trazar la ruta desde donde esté el usuario
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Juana+de+Arziu+1272+Buenos+Aires";
  const whatsappUrl = "https://wa.me/5491136379073";

  return (
    <section id="contacto" className="py-32 bg-black relative">
      {/* Luces de fondo estilo laboratorio */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-6xl font-black mb-12 font-poppins tracking-tighter">
                Logística y <br /><span className="text-blue-500 text-glow">Soporte</span>
              </h2>
            </motion.div>
            
            <div className="space-y-10">
              <motion.a 
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                className="flex items-start gap-8 group cursor-pointer bg-white/5 p-8 rounded-[3rem] border border-white/5 transition-all shadow-xl"
              >
                <div className="w-20 h-20 bg-blue-600/20 rounded-[1.5rem] flex items-center justify-center text-blue-500 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-lg shadow-blue-500/20">
                  <Navigation size={40} />
                </div>
                <div>
                  <h4 className="font-black text-blue-400 uppercase text-[10px] tracking-[0.4em] mb-3">Toca para iniciar ruta GPS</h4>
                  <p className="text-3xl font-black text-white leading-tight flex items-center gap-4">
                    Juana de Arziu 1272
                    <ExternalLink size={24} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                  </p>
                  <p className="text-gray-400 font-bold mt-2 text-lg">Buenos Aires, Argentina</p>
                </div>
              </motion.a>
              
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                className="flex items-start gap-8 group cursor-pointer bg-emerald-500/5 p-8 rounded-[3rem] border border-emerald-500/5 transition-all shadow-xl"
              >
                <div className="w-20 h-20 bg-emerald-600/20 rounded-[1.5rem] flex items-center justify-center text-emerald-500 border border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-lg shadow-emerald-500/20">
                  <MessageCircle size={40} />
                </div>
                <div>
                  <h4 className="font-black text-emerald-400 uppercase text-[10px] tracking-[0.4em] mb-3">Comunicación Directa</h4>
                  <p className="text-3xl font-black text-white leading-tight">11 3637-9073</p>
                  <p className="text-gray-400 font-bold mt-2 text-lg">Chat de ingeniería en vivo</p>
                </div>
              </motion.a>
            </div>
            
            {/* Mapa interactivo mejorado visualmente */}
            <div className="mt-16 group relative">
               <a 
                href={mapsDirectionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block h-96 bg-white/5 border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 z-10 flex items-center justify-center transition-all duration-700 backdrop-blur-sm">
                  <div className="bg-white text-black px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl flex items-center gap-4 animate-bounce">
                    <Navigation size={32} />
                    ¡INICIAR RUTA AHORA!
                  </div>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.567!2d-58.4687!3d-34.6186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzA3LjAiUyA1OMKwMjgnMDcuMyJX!5e0!3m2!1ses!2sar!4v1634567890123!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) brightness(0.7)' }} 
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#080808] border-2 border-blue-500/20 p-14 rounded-[5rem] shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12">
              <Sparkles size={200} className="text-blue-500" />
            </div>
            <h3 className="text-5xl font-black mb-14 text-white font-poppins tracking-tighter">Orden de <span className="text-blue-500">Servicio</span></h3>
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] ml-4">Identidad</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="Nombre completo" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] ml-4">Contacto</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="Número de móvil" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] ml-4">Dispositivo Xiaomi / Motorola</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="Ej: Redmi Note 13 Pro+" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] ml-4">Estado del Sistema</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:border-blue-500 outline-none transition-all font-bold text-lg resize-none" placeholder="Describe la anomalía técnica..." />
              </div>
              <button className="w-full py-10 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-black text-2xl shadow-[0_30px_60px_rgba(37,99,235,0.4)] transition-all active:scale-95 group flex items-center justify-center gap-4">
                ENVIAR TICKET
                <Zap size={28} className="group-hover:animate-bounce" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
