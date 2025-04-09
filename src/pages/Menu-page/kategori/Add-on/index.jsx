import React, { useState } from 'react';
import Kategori from '../../Kategori';

const menuItems = [
  { indo: 'Cap Cay Seafood', eng: 'Seafood Cap Cay' },
  { indo: 'Cap Cay Goreng', eng: 'Stir-fried Cap Cay' },
  { indo: 'Cap Cay Kuah', eng: 'Cap Cay with Gravy' },
  { indo: 'Soup Ayam', eng: 'Chicken Soup' },
  { indo: 'Nasi Putih', eng: 'Steamed Rice' },
  { indo: 'I Fu Mie Seafood', eng: 'Crispy Noodles with Seafood' },
  { indo: 'Lo Mie', eng: 'Lo Mein Noodles' },
];



export default function MenuGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Menu <span className='text-pink-700'>Lainnya</span></h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative p-4 rounded-md border-l-4 shadow transition-all duration-300 cursor-pointer 
          ${hoveredIndex === index
                ? 'bg-pink-500 text-white border-pink-500'
                : 'bg-white text-gray-800 border-pink-200 hover:bg-pink-500 hover:text-white hover:border-pink-500'}`}
          >
            <h2 className="text-sm sm:text-base font-medium tracking-wide transition-all duration-300">
              {hoveredIndex === index ? item.eng : item.indo}
            </h2>
          </div>

        ))}
      </div>
      <Kategori />
    </div>
  );
}
