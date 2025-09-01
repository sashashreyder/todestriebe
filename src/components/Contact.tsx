import React, { useState } from 'react';
import { CrossDivider } from '../assets/CrossDivider';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'Spotify', icon: '🎵', url: '#' },
    { name: 'Bandcamp', icon: '💿', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CrossDivider size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">Contact</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-blackletter text-gold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-coal border border-gold/20 rounded-md text-text-light focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-coal border border-gold/20 rounded-md text-text-light focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-light mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-coal border border-gold/20 rounded-md text-text-light focus:border-gold focus:outline-none transition-colors duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking</option>
                  <option value="press">Press</option>
                  <option value="merchandise">Merchandise</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-coal border border-gold/20 rounded-md text-text-light focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="w-full px-8 py-3 text-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-blackletter text-gold mb-6">Follow us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 p-4 border border-gold/20 rounded-lg hover:border-gold/40 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-text-light group-hover:text-gold transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-blackletter text-gold mb-6">Get in touch</h3>
              <div className="space-y-4 text-text-light">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>contact@todestriebe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Worldwide</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-blackletter text-gold mb-6">Newsletter</h3>
              <p className="text-muted mb-4">
                Stay updated with tour dates, new releases, and exclusive content.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-coal border border-gold/20 rounded-md text-text-light focus:border-gold focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center mt-16">
          <CrossDivider size={32} />
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-gold text-coal px-6 py-3 rounded-lg shadow-lg z-50">
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
