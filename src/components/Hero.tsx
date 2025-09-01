import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="text-center z-10 px-4">
        {/* Main Logo */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-blackletter text-gold mb-6 animate-float">
          TODESTRIEBE
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          "Through the depths of darkness, we find the light of truth. 
          Black metal that transcends the boundaries of mortal existence."
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 text-lg font-semibold animate-shimmer bg-gradient-to-r from-gold via-gold-secondary to-gold bg-[length:200%_100%]">
            Listen Now
          </button>
          <button className="px-8 py-4 text-lg font-semibold">
            Buy Merch
          </button>
        </div>
        
        {/* Latest Release */}
        <div className="mt-16 p-6 border border-gold/20 rounded-lg bg-coal/50 backdrop-blur-sm">
          <h3 className="text-gold font-blackletter text-xl mb-4">Latest Release</h3>
          <p className="text-muted mb-4">"Abyssal Rites" - Out Now</p>
          <audio 
            controls 
            className="w-full max-w-md mx-auto"
            style={{ filter: 'invert(1) hue-rotate(180deg)' }}
          >
            <source src="/audio/preview.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" fill="#bfa14a"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" fill="#bfa14a"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
