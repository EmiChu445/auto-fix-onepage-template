
import React from 'react';

const teamMembers = [
  {
    name: 'Jonas Jonaitis',
    role: 'Vyriausiasis mechanikas',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: '15 metų patirtis automobilių remonto srityje. Specializuojasi variklio sistemose.'
  },
  {
    name: 'Tomas Tomaitis',
    role: 'Elektros sistemų specialistas',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Elektrikos ir elektronikos sistemų ekspertas su 10 metų patirtimi.'
  },
  {
    name: 'Marius Mariūnas',
    role: 'Diagnostikos technikas',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Kompiuterinės diagnostikos specialistas, sertifikuotas dirbti su naujausia įranga.'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">Mūsų komanda</h2>
          <div className="w-24 h-1 bg-[#e63946] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Susipažinkite su mūsų profesionalų komanda, kuri rūpinsis jūsų automobiliu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0d2240] mb-1">{member.name}</h3>
                <p className="text-[#e63946] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
