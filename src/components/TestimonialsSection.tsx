
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Paulius Povilaitis',
    testimonial: 'Puikus aptarnavimas ir profesionalus darbas. Problema buvo greitai surasta ir išspręsta. Rekomenduoju visiems.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Justina Justinaitė',
    testimonial: 'Labai patenkinta serviso darbu. Specialistai išsamiai paaiškino problemas ir pasiūlė optimaliausius sprendimus.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Andrius Andriūnas',
    testimonial: 'Greitai ir kokybiškai atliktas remontas. Kainos labai konkurencingos, o darbo kokybė aukšta.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">Klientų atsiliepimai</h2>
          <div className="w-24 h-1 bg-[#e63946] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sužinokite, ką apie mūsų servisą mano mūsų klientai.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <p className="font-medium text-[#0d2240]">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
