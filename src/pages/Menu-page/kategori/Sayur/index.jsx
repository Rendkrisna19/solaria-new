import React, { useState } from 'react';
import Kategori from '../../Kategori';

const menuItems = [
  { indo: 'Express Bowl', eng: 'Express Bowl' },
  { indo: 'Express Bowl Mix Rica-Rica', eng: 'Express Bowl Mix Rica-Rica' },
  { indo: 'Express Bowl Mix Mayo', eng: 'Express Bowl Mix Mayo' },
  { indo: 'Express Bowl Mix Mentega', eng: 'Express Bowl Mix Butter Sauce' },
  { indo: 'Express Bowl Mix Teriyaki', eng: 'Express Bowl Mix Teriyaki' },
  { indo: 'Express Bowl Mix Asam Manis', eng: 'Express Bowl Mix Sweet and Sour' },
  { indo: 'Express Bowl Ikan Rica-Rica', eng: 'Express Bowl Fish Rica-Rica' },
  { indo: 'Express Bowl Ikan Mayo', eng: 'Express Bowl Fish Mayo' },
  { indo: 'Express Bowl Ikan Mentega', eng: 'Express Bowl Fish with Butter Sauce' },
  { indo: 'Express Bowl Ikan Teriyaki', eng: 'Express Bowl Fish Teriyaki' },
  { indo: 'Express Bowl Ikan Asam Manis', eng: 'Express Bowl Fish Sweet and Sour' },
  { indo: 'Express Bowl Ayam Rica-Rica', eng: 'Express Bowl Chicken Rica-Rica' },
  { indo: 'Express Bowl Ayam Mayo', eng: 'Express Bowl Chicken Mayo' },
  { indo: 'Express Bowl Ayam Mentega', eng: 'Express Bowl Chicken with Butter Sauce' },
  { indo: 'Express Bowl Ayam Teriyaki', eng: 'Express Bowl Chicken Teriyaki' },
  { indo: 'Express Bowl Ayam Asam Manis', eng: 'Express Bowl Chicken Sweet and Sour' },
];


export default function MenuGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Express <span className='text-pink-700'>Bowl</span></h1>

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
