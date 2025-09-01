import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';
import { CrossDivider } from '../assets/CrossDivider';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openModal = (image: typeof galleryImages[0]) => {
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
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CrossDivider size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">Gallery</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              className="group cursor-pointer aspect-square bg-gradient-to-br from-gray-800 to-coal rounded-lg border border-gold/20 overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="text-center text-muted">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <p className="text-xs">{image.title}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-gold text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42L17.3 18.7 15 21h6z"/>
                    </svg>
                    <p className="text-sm">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Capturing the raw energy and atmosphere of our live performances and behind-the-scenes moments.
          </p>
          <button className="px-8 py-3 text-lg">View Full Gallery</button>
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
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-coal rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-muted">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <p className="text-lg">{selectedImage.title}</p>
                </div>
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
