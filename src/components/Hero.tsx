import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Content */}
      <div className="text-center z-10">
        {/* Main Logo */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-blackletter text-gold mb-6 animate-float">
          TODESTRIEBE
        </h1>
        
        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-muted mb-6 leading-relaxed">
            {t.hero.tagline}
          </p>
          <p className="text-lg md:text-xl text-muted/80 leading-relaxed">
            {t.hero.description}
          </p>
        </div>
        
        {/* CTA Buttons - без обводки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 text-lg font-semibold bg-gold text-coal hover:bg-gold-secondary transition-all duration-300 transform hover:scale-105">
            {t.hero.listenNow}
          </button>
          <button className="px-8 py-4 text-lg font-semibold bg-transparent text-gold hover:bg-gold hover:text-coal transition-all duration-300 transform hover:scale-105">
            {t.hero.buyMerch}
          </button>
        </div>
        
        {/* Latest Release */}
        <div className="mt-16 p-6 border border-gold/20 rounded-lg bg-coal/30 backdrop-blur-sm max-w-2xl mx-auto">
          <h3 className="text-gold font-blackletter text-xl mb-4">{t.hero.latestRelease}</h3>
          <p className="text-muted mb-4">{t.hero.albumTitle}</p>
          <p className="text-sm text-muted/70">
            {t.hero.albumDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;