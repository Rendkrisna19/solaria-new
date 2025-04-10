import { useRef, useState } from 'react';
import Kategori from '../../Kategori';

const mieGoreng = [
  { indo: 'Nasi + Fillet Ikan Goreng Mentega', eng: 'Rice + Fried Fish Fillet with Butter' },
  { indo: 'Nasi + Fillet Ikan Goreng Tepung', eng: 'Rice + Crispy Fried Fish Fillet' },
  { indo: 'Nasi + Fillet Ikan Goreng Rica-Rica', eng: 'Rice + Spicy Rica-Rica Fish Fillet' },
  { indo: 'Nasi + Fillet Ikan Asam Manis', eng: 'Rice + Sweet and Sour Fish Fillet' },
  { indo: 'Nasi + Cumi Goreng Mentega', eng: 'Rice + Fried Squid with Butter' },
  { indo: 'Nasi + Cumi Goreng Tepung', eng: 'Rice + Crispy Fried Squid' },
  { indo: 'Nasi + Cumi Goreng Rica-Rica', eng: 'Rice + Spicy Rica-Rica Squid' },
  { indo: 'Nasi Cap Cay Seafood', eng: 'Rice + Seafood Cap Cay' },
  { indo: 'Nasi + Udang Goreng Tepung', eng: 'Rice + Crispy Fried Shrimp' },
  { indo: 'Nasi Bistik Sapi Mentega', eng: 'Rice + Beef Steak with Butter Sauce' },
  { indo: 'Nasi Bistik Sapi Tepung', eng: 'Rice + Crispy Beef Steak' },
  { indo: 'Nasi Bistik Ayam', eng: 'Rice + Chicken Steak' },
  { indo: 'Nasi + Ayam Goreng Mentega', eng: 'Rice + Fried Chicken with Butter' },
  { indo: 'Nasi + Ayam Goreng Tepung', eng: 'Rice + Crispy Fried Chicken' },
  { indo: 'Nasi + Ayam Goreng Rica-Rica', eng: 'Rice + Spicy Rica-Rica Fried Chicken' },
  { indo: 'Nasi + Ayam Nanking', eng: 'Rice + Nanking Chicken' },
  { indo: 'Nasi + Ayam Asam Manis', eng: 'Rice + Sweet and Sour Chicken' },
  { indo: 'Nasi Cap Cay', eng: 'Rice + Stir-Fried Vegetables (Cap Cay)' },
  { indo: 'Nasi Ayam Cah Jamur', eng: 'Rice + Chicken and Mushrooms Stir-Fry' },
  { indo: 'Nasi Ayam Cah Kapri', eng: 'Rice + Chicken and Snow Peas Stir-Fry' },
  { indo: 'Nasi Ayam Cah Kembang Kol', eng: 'Rice + Chicken and Cauliflower Stir-Fry' },
  { indo: 'Nasi Fu Yung Hai', eng: 'Rice + Fu Yung Hai (Chinese Omelette)' },
];


const kwetiau = [
  { indo: 'Kwetiau Ayam Pangsit Rebus Bakso', eng: 'Flat Noodles with Chicken, Dumplings & Meatballs' },
  { indo: 'Kwetiau Seafood Goreng', eng: 'Seafood Fried Flat Noodles' },
  { indo: 'Kwetiau Masak Ayam', eng: 'Flat Noodles with Cooked Chicken' },
  { indo: 'Kwetiau Sapi Goreng', eng: 'Beef Fried Flat Noodles' },
  { indo: 'Kwetiau Sapi Siram', eng: 'Beef Gravy Flat Noodles' },
  { indo: 'Kwetiau Sapi Goreng', eng: 'Beef Fried Flat Noodles' }, // Duplicate, bisa diganti jika perlu
  { indo: 'Kwetiau Goreng Ayam', eng: 'Chicken Fried Flat Noodles' },
  { indo: 'Kwetiau Ayam Siram', eng: 'Chicken Gravy Flat Noodles' },
  { indo: 'Kwetiau Ayam Bakso', eng: 'Flat Noodles with Chicken & Meatballs' },
  { indo: 'Kwetiau Ayam Pangsit Rebus', eng: 'Flat Noodles with Chicken & Dumplings' },
  { indo: 'Kwetiau Ayam', eng: 'Chicken Flat Noodles' },
];


const bihun = [
  { indo: 'Bihun Goreng Seafood', eng: 'Seafood Fried Vermicelli' },
  { indo: 'Bihun Goreng Sapi', eng: 'Beef Fried Vermicelli' },
  { indo: 'Bihun Siram Sapi', eng: 'Beef Gravy Vermicelli' },
  { indo: 'Bihun Ayam Pangsit Rebus Bakso', eng: 'Vermicelli with Chicken, Dumplings & Meatballs' },
  { indo: 'Bihun Goreng Ayam', eng: 'Chicken Fried Vermicelli' },
  { indo: 'Bihun Kuah Ayam', eng: 'Chicken Vermicelli Soup' },
  { indo: 'Bihun Ayam Bakso', eng: 'Vermicelli with Chicken & Meatballs' },
  { indo: 'Bihun Ayam Pangsit Rebus', eng: 'Vermicelli with Chicken & Dumplings' },
  { indo: 'Bihun Ayam', eng: 'Chicken Vermicelli' },
];

export default function MenuGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const paketRef = useRef(null);
  const specialRef = useRef(null);
  const porsiRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderMenu = (menuArray) =>
    menuArray.map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`relative p-4 rounded-md border-l-4 shadow transition-all duration-300 cursor-pointer 
          ${
            hoveredIndex === index
              ? 'bg-pink-500 text-white border-pink-500'
              : 'bg-white text-gray-800 border-pink-200 hover:bg-pink-500 hover:text-white hover:border-pink-500'
          }`}
      >
        <h2 className="text-sm sm:text-base font-medium tracking-wide transition-all duration-300">
          {hoveredIndex === index ? item.eng : item.indo}
        </h2>
      </div>
    ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      {/* Judul Halaman */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Menu <span className="text-pink-700">Mie</span>
      </h1>

      {/* Navigasi Scroll */}
      <div className="flex gap-4 mb-8 text-sm sm:text-base font-semibold text-gray-700">
        <button
          onClick={() => scrollToSection(paketRef)}
          className="hover:underline decoration-pink-700"
        >
          Mie Goreng
        </button>
        <button
          onClick={() => scrollToSection(specialRef)}
          className="hover:underline decoration-pink-700"
        >
          Kwetiau
        </button>
        <button
          onClick={() => scrollToSection(porsiRef)}
          className="hover:underline decoration-pink-700"
        >
          Bihun
        </button>
      </div>

      {/* Section: Menu Paket */}
      <div ref={mieGoreng} className="w-full max-w-6xl px-2 mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Mie Goreng</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(mieGoreng)}</div>
      </div>

      {/* Section: Menu Special */}
      <div ref={kwetiau} className="w-full max-w-6xl px-2 mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Kwetiau</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(kwetiau)}</div>
      </div>

      {/* Section: Menu Porsi */}
      <div ref={bihun} className="w-full max-w-6xl px-2 mb-16">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Bihun</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(bihun)}</div>
      </div>

      <Kategori />
    </div>
  );
}
