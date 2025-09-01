import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-coal/95 backdrop-blur-sm border-b border-gold' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with glowing background */}
          <div className="flex items-center">
            <div className="relative group">
              {/* золотая подложка */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
              >
                <span className="h-16 w-64 md:h-20 md:w-80 lg:h-24 lg:w-96 rounded-full bg-gradient-to-b from-gold/60 to-transparent blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </span>

              <img
                src="/img/Todestriebe_distorted_logo_6.png"
                alt="Todestriebe Logo"
                className="h-16 md:h-24 lg:h-28 cursor-pointer 
                           [filter:drop-shadow(0_0_14px_rgba(191,161,74,0.75))] 
                           transition-transform duration-300 group-hover:scale-[1.03]"
                onClick={() => scrollToSection('hero')}
                onError={(e) => {
                  (e.currentTarget.style.display = 'none');
                  const fallback = document.createElement('span');
                  fallback.textContent = 'TODESTRIEBE';
                  fallback.className =
                    'text-3xl md:text-4xl lg:text-5xl font-blackletter text-gold cursor-pointer';
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'about', label: t.nav.about },
              { id: 'tour', label: t.nav.tour },
              { id: 'shop', label: t.nav.shop },
              { id: 'gallery', label: t.nav.gallery },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-light hover:text-gold transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher and Mobile menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="md:hidden text-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
