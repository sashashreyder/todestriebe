import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gold/20 bg-coal/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-blackletter text-gold mb-2">TODESTRIEBE</h3>
            <p className="text-muted text-sm">
              Through darkness, we find truth
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#about" className="text-muted hover:text-gold transition-colors duration-300">
                About
              </a>
              <a href="#tour" className="text-muted hover:text-gold transition-colors duration-300">
                Tour
              </a>
              <a href="#shop" className="text-muted hover:text-gold transition-colors duration-300">
                Shop
              </a>
              <a href="#gallery" className="text-muted hover:text-gold transition-colors duration-300">
                Gallery
              </a>
              <a href="#contact" className="text-muted hover:text-gold transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a href="#" className="text-muted hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </a>
            </div>
            <div className="text-xs text-muted">
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-8 pt-8 text-center">
          <p className="text-muted text-sm">
            © {currentYear} Todestriebe. All rights reserved. 
            <span className="mx-2">|</span>
            <span className="text-gold">Black Metal</span>
            <span className="mx-2">|</span>
            <span className="text-gold">Worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
