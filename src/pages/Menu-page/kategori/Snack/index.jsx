import React, { useState } from 'react';
import Kategori from '../../Kategori';

const menuItems = [
    { indo: 'French Fries', eng: 'French Fries' },
    { indo: 'Fish Ball Satay', eng: 'Fish Ball Satay' },
    { indo: 'Prawn Ball Satay', eng: 'Prawn Ball Satay' },
    { indo: 'Spring Roll', eng: 'Spring Roll' },
    { indo: 'Fish Cake', eng: 'Fish Cake' },
    { indo: 'Cuttlefish Ball Satay', eng: 'Cuttlefish Ball Satay' },
    { indo: 'Crispy Mini Wonton', eng: 'Crispy Mini Wonton' },
    { indo: 'Siomay', eng: 'Siomay (Steamed Dumpling)' },
    { indo: 'Wedges with Bolognaise Sauce', eng: 'Wedges with Bolognaise Sauce' },
    { indo: 'Chikado', eng: 'Chikado' },
];


export default function MenuGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Menu <span className='text-pink-700'>Snack</span></h1>

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
