import React, { useState } from 'react';
import Kategori from "../../Kategori";

const menuItems = [
  { id: 1, indo: 'Nasi Goreng Spesial', eng: 'Special Fried Rice' },
  { id: 2, indo: 'Mie Ayam Bakso', eng: 'Chicken Noodles with Meatballs' },
  { id: 3, indo: 'Sate Ayam Madura', eng: 'Madura Chicken Satay' },
  { id: 4, indo: 'Ayam Geprek Level 5', eng: 'Crispy Spicy Chicken Level 5' },
  { id: 5, indo: 'Soto Betawi', eng: 'Jakarta Beef Soup' },
  { id: 6, indo: 'Rendang Padang', eng: 'Padang Beef Rendang' },
];

const MenuGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Menu <span className='text-pink-700'>Mie</span></h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-2xl shadow-lg transition duration-300 p-6 text-center cursor-pointer transform hover:-translate-y-1 
              ${hoveredIndex === index ? 'bg-pink-500 text-white shadow-2xl' : 'bg-white text-gray-700'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 className="text-sm font-normal">
              {hoveredIndex === index ? item.eng : item.indo}
            </h2>
          </div>
        ))}
      </div>
      <Kategori />
    </div>
  );
};

export default MenuGrid;
