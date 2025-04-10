import { useRef, useState } from 'react';
import Kategori from '../../Kategori';
import BannerMenu from "../../../../components/layout/BannerMenu"

const menuPaket = [
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


const menuSpecial = [
  { indo: 'Fish & Chips', eng: 'Fish & Chips' },
  { indo: 'Chicken Cordon Bleu', eng: 'Chicken Cordon Bleu' },
  { indo: 'Chicken Mozarella', eng: 'Mozarella Chicken' },
  { indo: 'Chicken Steak Chessy', eng: 'Cheesy Chicken Steak' },
  { indo: 'Spaghetti Bolognaise', eng: 'Spaghetti Bolognese' },
  { indo: 'Nasi + Sapo Tahu Seafood', eng: 'Rice + Seafood Claypot Tofu' },
  { indo: 'Mie + Ayam Katsu Teriyaki Saos', eng: 'Noodles + Chicken Katsu Teriyaki Sauce' },
  { indo: 'Nasi + Sapo Tahu Sapi', eng: 'Rice + Beef Claypot Tofu' },
  { indo: 'Nasi + Sapo Tahu Ayam', eng: 'Rice + Chicken Claypot Tofu' },
  { indo: 'Nasi + Ayam Katsu Teriyaki Saos', eng: 'Rice + Chicken Katsu Teriyaki Sauce' },
  { indo: 'Nasi + Ayam Teriyaki', eng: 'Rice + Teriyaki Chicken' },
  { indo: 'Nasi + Ayam Lada Hitam', eng: 'Rice + Black Pepper Chicken' },
  { indo: 'Nasi + Chicken Bulgogi', eng: 'Rice + Chicken Bulgogi' },
  { indo: 'Nasi + Ayam Crispy Black Pepper Sauce', eng: 'Rice + Crispy Chicken with Black Pepper Sauce' },
  { indo: 'Nasi Crispy Chicken Spicy Mayo', eng: 'Rice + Crispy Chicken with Spicy Mayo' },
];


const menuPorsi = [
  { indo: 'Fillet Ikan Goreng Mentega', eng: 'Fried Fish Fillet with Butter Sauce' },
  { indo: 'Fillet Ikan Goreng Tepung', eng: 'Battered Fried Fish Fillet' },
  { indo: 'Fillet Ikan Goreng Rica-Rica', eng: 'Spicy Rica-Rica Fried Fish Fillet' },
  { indo: 'Fillet Ikan Asam Manis', eng: 'Sweet and Sour Fish Fillet' },
  { indo: 'Cumi Goreng Mentega', eng: 'Fried Squid with Butter Sauce' },
  { indo: 'Cumi Goreng Tepung', eng: 'Battered Fried Squid' },
  { indo: 'Cumi Goreng Rica-Rica', eng: 'Spicy Rica-Rica Fried Squid' },
  { indo: 'Udang Goreng Tepung', eng: 'Battered Fried Shrimp' },
  { indo: 'Bistik Sapi Mentega', eng: 'Beef Steak with Butter Sauce' },
  { indo: 'Bistik Sapi Tepung', eng: 'Battered Beef Steak' },
  { indo: 'Bistik Ayam', eng: 'Chicken Steak' },
  { indo: 'Ayam Goreng Mentega', eng: 'Fried Chicken with Butter Sauce' },
  { indo: 'Ayam Goreng Tepung', eng: 'Battered Fried Chicken' },
  { indo: 'Ayam Goreng Rica-Rica', eng: 'Spicy Rica-Rica Fried Chicken' },
  { indo: 'Ayam Nanking', eng: 'Nanking Chicken' },
  { indo: 'Ayam Asam Manis', eng: 'Sweet and Sour Chicken' },
  { indo: 'Ayam Cah Jamur', eng: 'Chicken with Mushrooms' },
  { indo: 'Ayam Cah Kapri', eng: 'Chicken with Snow Peas' },
  { indo: 'Ayam Cah Kembang Kol', eng: 'Chicken with Cauliflower' },
  { indo: 'Fu Yung Hai', eng: 'Chinese-style Omelette (Fu Yung Hai)' },
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
    
    <div>
      {/* Banner header */}
      <BannerMenu/>
      <Kategori />
      <div className="bg-gradient-to-br from-blue-50 to-whit py-10 px-4 ">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Menu <span className="text-pink-700">Makanan</span>
      </h1>

      {/* Navigasi Scroll */}
      <div className="flex gap-4 mb-8 text-sm sm:text-base font-semibold text-gray-700">
        <button
          onClick={() => scrollToSection(paketRef)}
          className="hover:underline decoration-pink-700"
        >
          Menu Paket
        </button>
        <button
          onClick={() => scrollToSection(specialRef)}
          className="hover:underline decoration-pink-700"
        >
          Menu Special
        </button>
        <button
          onClick={() => scrollToSection(porsiRef)}
          className="hover:underline decoration-pink-700"
        >
          Menu Porsi
        </button>
      </div>

      {/* Section: Menu Paket */}
      <div ref={paketRef} className="w-full max-w-6xl px-2 mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Menu Paket</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuPaket)}</div>
      </div>

      {/* Section: Menu Special */}
      <div ref={specialRef} className="w-full max-w-6xl px-2 mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Menu Special</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuSpecial)}</div>
      </div>

      {/* Section: Menu Porsi */}
      <div ref={porsiRef} className="w-full max-w-6xl px-2 mb-16">
        <h2 className="text-xl font-bold text-pink-700 mb-4">Menu Porsi</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuPorsi)}</div>
      </div>
      </div>
    </div>
  );
}
