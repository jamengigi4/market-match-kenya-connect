
import React from 'react';

const PriceScrollBar = () => {
  const priceItems = [
    { emoji: '🥔', name: 'Irish Potatoes', price: 'Ksh 2,500/sack' },
    { emoji: '🌽', name: 'Maize', price: 'Ksh 3,200/sack' },
    { emoji: '🍌', name: 'Bananas', price: 'Ksh 500/bunch' },
    { emoji: '🥭', name: 'Mangoes', price: 'Ksh 800/crate' },
    { emoji: '🥬', name: 'Sukuma Wiki', price: 'Ksh 30/bunch' },
    { emoji: '🐓', name: 'Indigenous Chicken', price: 'Ksh 700' },
    { emoji: '🐄', name: 'Cow', price: 'Ksh 45,000' },
    { emoji: '🐐', name: 'Goat', price: 'Ksh 8,000' },
    { emoji: '🍯', name: 'Raw Honey', price: 'Ksh 800/L' },
    { emoji: '🥛', name: 'Milk', price: 'Ksh 60/L' },
    { emoji: '🌱', name: 'Maize Seeds', price: 'Ksh 350/kg' },
    { emoji: '🧪', name: 'Soil Test Kit', price: 'Ksh 3,500' },
    { emoji: '🧄', name: 'Garlic', price: 'Ksh 450/kg' },
    { emoji: '🥜', name: 'Groundnuts', price: 'Ksh 1,200/kg' },
    { emoji: '🥕', name: 'Carrots', price: 'Ksh 1,800/sack' },
    { emoji: '🐖', name: 'Piglet', price: 'Ksh 6,000' },
    { emoji: '🍠', name: 'Sweet Potatoes', price: 'Ksh 2,000/sack' },
    { emoji: '🐇', name: 'Rabbit', price: 'Ksh 1,500' }
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...priceItems, ...priceItems];

  return (
    <div className="w-full bg-white/95 backdrop-blur-sm border-y border-gray-200 py-3 mb-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center space-x-3 px-6 py-2 mx-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
            >
              <span className="text-xl">{item.emoji}</span>
              <div className="text-sm">
                <span className="font-semibold text-corporate-navy">{item.name}</span>
                <span className="text-corporate-gold font-bold ml-2">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceScrollBar;
