import React, { useState } from 'react';
import Kategori from '../../Kategori';

const menuItems = [
  { indo: 'Nasi Goreng Kepiting', eng: 'Crab Fried Rice' },
  { indo: 'Nasi Goreng Kambing', eng: 'Lamb Fried Rice' },
  { indo: 'Nasi Goreng Seafood', eng: 'Seafood Fried Rice' },
  { indo: 'Nasi Goreng Teri Medan', eng: 'Medanese Anchovy Fried Rice' },
  { indo: 'Nasi Goreng Tom Yum Seafood', eng: 'Tom Yum Seafood Fried Rice' },
  { indo: 'Smocked Chicken Fried Rice', eng: 'Smoked Chicken Fried Rice' },
  { indo: 'Nasi Goreng Italy', eng: 'Italian Fried Rice' },
  { indo: 'Nasi Goreng Bebek Cabe Ijo', eng: 'Green Chili Duck Fried Rice' },
  { indo: 'Nasi Goreng Sapi Cabe Ijo', eng: 'Green Chili Beef Fried Rice' },
  { indo: 'Nasi Goreng Teri Cabe Ijo', eng: 'Green Chili Anchovy Fried Rice' },
  { indo: 'Nasi Goreng Modern', eng: 'Modern Fried Rice' },
  { indo: 'Nasi Goreng Petai', eng: 'Stinky Bean Fried Rice' },
  { indo: 'Nasi Goreng Sosis', eng: 'Sausage Fried Rice' },
  { indo: 'Nasi Goreng Tom Yum Ayam', eng: 'Tom Yum Chicken Fried Rice' },
  { indo: 'Nasi Goreng', eng: 'Fried Rice' },
];


export default function MenuGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Menu <span className='text-pink-700'>Nasi</span></h1>

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
