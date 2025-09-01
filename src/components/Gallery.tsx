import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CrossDivider } from '../assets/CrossDivider';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Реальные изображения из папки
  const galleryImages = [
    { id: '1', src: '/img/IMG_20230923_204125.jpg', alt: 'Live performance at Oslo', title: 'Oslo Night' },
    { id: '2', src: '/img/IMG_20240114_030134_434.jpg', alt: 'Band photo in studio', title: 'Studio Session' },
    { id: '3', src: '/img/б2т.jpg', alt: 'Concert crowd', title: 'Crowd Energy' },
    { id: '4', src: '/img/б4т.jpg', alt: 'Stage setup', title: 'Stage Setup' },
    { id: '5', src: '/img/б5т.jpg', alt: 'Band members backstage', title: 'Backstage' },
    { id: '6', src: '/img/б7т.jpg', alt: 'Merchandise display', title: 'Merch Table' },
    { id: '7', src: '/img/morkbeast.jpg', alt: 'Soundcheck', title: 'Soundcheck' },
    { id: '8', src: '/img/photo_2024-07-11_12-15-11.jpg', alt: 'Fans at concert', title: 'Fan Moment' },
    { id: '9', src: '/img/Todestriebe_distorted_logo_6.png', alt: 'Guitar closeup', title: 'Instrument Detail' }
  ];

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <section id="gallery" className="py-20 relative px-4">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CrossDivider size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">{t.gallery.title}</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              className="group cursor-pointer aspect-square bg-gradient-to-br from-gray-800 to-coal rounded-lg border border-gold/20 overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-full h-full relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-gold text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42L17.3 18.7 15 21h6z"/>
                    </svg>
                    <p className="text-sm">{t.gallery.clickToView}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            {t.gallery.galleryDescription}
          </p>
          <button className="px-8 py-3 text-lg">{t.gallery.viewFullGallery}</button>
        </div>

        <div className="flex justify-center mt-16">
          <CrossDivider size={32} />
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-gold hover:text-gold-secondary transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-coal border border-gold/20 rounded-lg p-6">
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-gold font-blackletter text-xl mb-2">{selectedImage.title}</h3>
              <p className="text-muted">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;