
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Žinutė išsiųsta!",
      description: "Mes susisieksime su jumis kaip įmanoma greičiau.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">Susisiekite su mumis</h2>
          <div className="w-24 h-1 bg-[#e63946] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turite klausimų? Susisiekite su mumis ir mes mielai jums padėsime.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Vardas</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d2240]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">El. paštas</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d2240]"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono numeris</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d2240]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Žinutė</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d2240]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#e63946] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all font-medium"
              >
                Siųsti užklausą
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-[#0d2240] p-8 rounded-lg shadow-md text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Kontaktinė informacija</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#e63946] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Telefonas</p>
                    <p>+370 600 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#e63946] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">El. paštas</p>
                    <p>info@autofix.lt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#e63946] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Adresas</p>
                    <p>Remonto g. 123, Vilnius, Lietuva</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#e63946] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Darbo laikas</p>
                    <p>Pirm - Penkt: 8:00 - 18:00</p>
                    <p>Šeštadienis: 9:00 - 15:00</p>
                    <p>Sekmadienis: Nedirbame</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
