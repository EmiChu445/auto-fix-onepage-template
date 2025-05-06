
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Profesionalus automobilių remontas
          </h1>
          <p className="text-xl text-white mb-8">
            Mūsų ekspertai suteiks jūsų automobiliui priežiūrą, kurios jis nusipelno. 
            Greitas, kokybiškas ir patikimas remontas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#e63946] text-white font-medium rounded-md hover:bg-opacity-90 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Susisiekite
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#0d2240] transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mūsų paslaugos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
