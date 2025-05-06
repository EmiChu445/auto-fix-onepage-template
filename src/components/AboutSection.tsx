
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  'Daugiau nei 20 metų patirtis automobilių remonto srityje',
  'Kvalifikuoti meistrai su sertifikatais',
  'Moderniausia diagnostikos įranga',
  'Originalios ir kokybiškos atsarginės dalys',
  'Garantija visiems atliktiems darbams',
  'Patogus priėmimo laikas ir greitas aptarnavimas'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1632823471565-1035f440111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mechanics working on a car" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">Apie mus</h2>
            <div className="w-24 h-1 bg-[#e63946] mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              AutoFix teikia aukštos kokybės automobilių remonto ir priežiūros paslaugas nuo 2000 metų. 
              Mūsų tikslas – užtikrinti, kad jūsų automobilis būtų saugus, patikimas ir efektyvus.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Mes didžiuojamės savo darbu ir teikiame tik geriausias paslaugas, naudodami moderniausią įrangą 
              ir įdarbindami kvalifikuotus specialistus.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-[#e63946] mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
