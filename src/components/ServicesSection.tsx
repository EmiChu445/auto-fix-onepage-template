
import React from 'react';
import { Wrench, FileCheck, Gauge, Battery, Cpu, Tool } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Mechaninis remontas',
    description: 'Variklio, pavarų dėžės, stabdžių sistemos ir kitų mechaninių dalių remontas ir priežiūra.'
  },
  {
    icon: <FileCheck className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Techninė apžiūra',
    description: 'Išsami transporto priemonės patikra, siekiant užtikrinti jos saugumą ir atitikimą standartams.'
  },
  {
    icon: <Gauge className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Diagnostika',
    description: 'Kompiuterinė diagnostika, leidžianti tiksliai nustatyti jūsų automobilio problemas.'
  },
  {
    icon: <Battery className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Elektros sistema',
    description: 'Automobilio elektros sistemos problemų sprendimas ir komponentų keitimas.'
  },
  {
    icon: <Cpu className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Elektronikos sistema',
    description: 'Elektroninių automobilio komponentų remontas ir programinės įrangos atnaujinimai.'
  },
  {
    icon: <Tool className="h-12 w-12 text-[#e63946] mb-4" />,
    title: 'Ratų montavimas',
    description: 'Padangų keitimas, balansavimas ir ratų geometrijos reguliavimas.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">Mūsų paslaugos</h2>
          <div className="w-24 h-1 bg-[#e63946] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siūlome platų automobilių remonto paslaugų spektrą, kad jūsų automobilis veiktų sklandžiai ir saugiai.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-[#0d2240] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
