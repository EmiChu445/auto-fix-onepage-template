
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0d2240] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Auto<span className="text-[#e63946]">Fix</span></h3>
            <p className="mb-4 text-gray-300 max-w-xs">
              Profesionalus automobilių remonto servisas, teikiantis kokybiškas paslaugas nuo 2000 metų.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#e63946] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#e63946] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#e63946] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Nuorodos</h3>
            <ul className="space-y-2">
              {['Paslaugos', 'Apie mus', 'Komanda', 'Atsiliepimai', 'Kontaktai'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase() === 'paslaugos' ? 'services' : 
                                               item.toLowerCase() === 'apie mus' ? 'about' :
                                               item.toLowerCase() === 'komanda' ? 'team' :
                                               item.toLowerCase() === 'atsiliepimai' ? 'testimonials' :
                                               'contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Kontaktai</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Remonto g. 123, Vilnius</li>
              <li className="text-gray-300">Tel: +370 600 12345</li>
              <li className="text-gray-300">El. paštas: info@autofix.lt</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400">
            &copy; {currentYear} AutoFix. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
