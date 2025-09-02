import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SpikeDivider } from '../assets/SpikeDivider';

const Shop: React.FC = () => {
  const { t } = useLanguage();
  const [, setCartItems] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = (productId: string, productName: string) => {
    setCartItems(prev => [...prev, productId]);
    setToastMessage(`${productName} added to cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const categories = [
    { key: 'All', label: t.shop.all },
    { key: 'Clothing', label: t.shop.clothing },
    { key: 'Music', label: t.shop.music },
    { key: 'Merchandise', label: t.shop.merchandise }
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 'tee1', title: 'Todestriebe Tee', price: 35, image: '/img/б2т.jpg', category: 'Clothing', description: 'Black metal band t-shirt with band logo' },
    { id: 'vinyl1', title: 'LP "Abyssal Rites"', price: 29, image: '/img/б4т.jpg', category: 'Music', description: 'Limited edition vinyl record' },
    { id: 'hoodie1', title: 'Todestriebe Hoodie', price: 55, image: '/img/б5т.jpg', category: 'Clothing', description: 'Dark hoodie with embroidered logo' },
    { id: 'poster1', title: 'Tour Poster 2025', price: 15, image: '/img/б7т.jpg', category: 'Merchandise', description: 'Limited tour poster' },
    { id: 'patch1', title: 'Band Patch', price: 8, image: '/img/morkbeast.jpg', category: 'Merchandise', description: 'Embroidered band patch' },
    { id: 'cd1', title: 'CD "Abyssal Rites"', price: 18, image: '/img/photo_2024-07-11_12-15-11.jpg', category: 'Music', description: 'CD version of the album' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="shop" className="py-20 relative px-4">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SpikeDivider rotation={0} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">{t.shop.title}</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
  <div className="flex flex-wrap gap-2 justify-center">
    {categories.map((category) => (
      <button
        key={category.key}
        onClick={() => setSelectedCategory(category.key)}
        className={`px-4 py-2 text-sm border border-gold/20 rounded-md transition-all duration-300
          ${
            category.key === 'All'
              ? selectedCategory === 'All'
                ? 'bg-gold text-black border-gold'
                : 'text-black hover:border-gold/40 hover:bg-gold/10'
              : selectedCategory === category.key
                ? 'bg-gold text-coal border-gold'
                : 'text-gold hover:border-gold/40 hover:bg-gold/10'
          }`}
      >
        {category.label}
      </button>
    ))}
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group border border-gold/20 rounded-lg bg-coal/30 hover:border-gold/40 transition-all duration-300 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-gold font-blackletter text-lg mb-2">{product.title}</h3>
                <p className="text-muted text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-xl">${product.price}</span>
                  <button onClick={() => addToCart(product.id, product.title)} className="px-4 py-2 text-sm">
                    {t.shop.addToCart}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            {t.shop.shopDescription}
          </p>
          <button className="px-8 py-3 text-lg">{t.shop.viewAllProducts}</button>
        </div>

        <div className="flex justify-center mt-16">
          <SpikeDivider rotation={180} />
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-8 right-8 bg-gold text-coal px-6 py-3 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default Shop;
