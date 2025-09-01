import React from 'react';
import { tours } from '../data/tours';
import { CrossDivider } from '../assets/CrossDivider';

const Tour: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="tour" className="py-20 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #bfa14a,
              #bfa14a 1px,
              transparent 1px,
              transparent 20px
            )
          `
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CrossDivider size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">
            Tour
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Tour Dates */}
        <div className="max-w-4xl mx-auto">
          {tours.map((tour, index) => (
            <div 
              key={tour.id}
              className={`mb-6 p-6 border border-gold/20 rounded-lg bg-coal/30 hover:border-gold/40 transition-all duration-300 group ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-12'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Date */}
                <div className="text-center md:text-left">
                  <div className="text-gold font-blackletter text-2xl mb-2">
                    {formatDate(tour.date)}
                  </div>
                  <div className="text-muted text-sm">
                    {new Date(tour.date).getFullYear()}
                  </div>
                </div>

                {/* Location */}
                <div className="text-center">
                  <div className="text-text-light font-semibold text-lg mb-1">
                    {tour.city}
                  </div>
                  <div className="text-muted text-sm">
                    {tour.venue}
                  </div>
                </div>

                {/* Actions */}
                <div className="text-center md:text-right space-y-2">
                  {tour.ticketsUrl ? (
                    <button className="w-full md:w-auto px-6 py-2 text-sm">
                      Get Tickets
                    </button>
                  ) : (
                    <button className="w-full md:w-auto px-6 py-2 text-sm bg-gold text-coal">
                      RSVP
                    </button>
                  )}
                  <div className="text-xs text-muted">
                    {tour.ticketsUrl ? 'Tickets available' : 'Free entry'}
                  </div>
                </div>
              </div>

              {/* Hover effect line */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Can't make it to a show? Follow us on social media for updates, 
            behind-the-scenes content, and exclusive merchandise drops.
          </p>
          <button className="px-8 py-3 text-lg">
            Follow Updates
          </button>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center mt-16">
          <CrossDivider size={32} />
        </div>
      </div>
    </section>
  );
};

export default Tour;
