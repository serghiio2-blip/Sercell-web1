
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-extrabold tracking-tighter font-poppins mb-4">
            ser<span className="text-blue-500">Cell</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} serCell Premium Tech Service. Todos los derechos reservados.<br />
            Diseñado para el futuro de la movilidad.
          </p>
        </div>
      </footer>

      {/* Interactive Chatbot */}
      <Chatbot />
    </div>
  );
};

export default App;
