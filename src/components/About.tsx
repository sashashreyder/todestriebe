import React from 'react';
import { SpikeDivider } from '../assets/SpikeDivider';

const About: React.FC = () => {
  const bandMembers = [
    { name: 'Mephistopheles', instrument: 'Vocals & Guitar', role: 'Founder' },
    { name: 'Azrael', instrument: 'Lead Guitar', role: 'Lead Guitarist' },
    { name: 'Thanatos', instrument: 'Bass', role: 'Bassist' },
    { name: 'Nyx', instrument: 'Drums', role: 'Drummer' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SpikeDivider rotation={45} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">
            About
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-text-light leading-relaxed">
              Formed in the depths of 2018, Todestriebe emerged from the shadows of the underground 
              black metal scene. Our name, derived from German philosophy, represents the drive toward 
              death and destruction that exists within all living beings.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              We channel this primal energy through our music, creating atmospheric black metal that 
              explores themes of mortality, existentialism, and the human condition. Each performance 
              is a ritual, each album a journey into the abyss of human consciousness.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Our sound combines traditional black metal elements with atmospheric and post-metal 
              influences, creating a unique sonic experience that transcends genre boundaries.
            </p>
          </div>

          {/* Band Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-coal to-gray-800 rounded-lg border border-gold/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-muted">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm">Band Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-gold"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-gold"></div>
          </div>
        </div>

        {/* Band Members */}
        <div className="text-center">
          <h3 className="text-2xl font-blackletter text-gold mb-8">Band Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bandMembers.map((member) => (
              <div 
                key={member.name}
                className="p-6 border border-gold/20 rounded-lg bg-coal/30 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300">
                  <span className="text-gold font-blackletter text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-gold font-blackletter text-lg mb-2">{member.name}</h4>
                <p className="text-text-light text-sm mb-1">{member.instrument}</p>
                <p className="text-muted text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center mt-16">
          <SpikeDivider rotation={-45} />
        </div>
      </div>
    </section>
  );
};

export default About;
