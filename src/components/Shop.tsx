import React, { useState } from 'react';
import { products } from '../data/products';
import { SpikeDivider } from '../assets/SpikeDivider';

const Shop: React.FC = () => {
  const [, setCartItems] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = (productId: string, productName: string) => {
    setCartItems(prev => [...prev, productId]);
    setToastMessage(`${productName} added to cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const categories = ['All', 'Clothing', 'Music', 'Merchandise'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="shop" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SpikeDivider rotation={0} />
          </div>
          <h2 className="text-4xl md:text-5xl font-blackletter text-gold mb-4">Shop</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm border border-gold/20 rounded-md transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-coal border-gold'
                    : 'text-gold hover:border-gold/40 hover:bg-gold/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group border border-gold/20 rounded-lg bg-coal/30 hover:border-gold/40 transition-all duration-300 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-coal relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-muted">
                    <svg className="w-20 h-20 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <p className="text-xs">{product.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-gold font-blackletter text-lg mb-2">{product.title}</h3>
                <p className="text-muted text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-xl">${product.price}</span>
                  <button onClick={() => addToCart(product.id, product.title)} className="px-4 py-2 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            All merchandise is limited edition and hand-numbered. Get your piece of the Todestriebe legacy before it's gone.
          </p>
          <button className="px-8 py-3 text-lg">View All Products</button>
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
