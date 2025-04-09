import { useRef, useState } from 'react';
import Kategori from '../../Kategori';

export default function MenuMinuman() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Ref untuk navigasi scroll
  const iceRef = useRef(null);
  const specialRef = useRef(null);
  const coffeeRef = useRef(null);
  const juiceRef = useRef(null);
  const otherRef = useRef(null);

  // Fungsi scroll smooth ke masing-masing ref
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fungsi render menu item
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

    const menuIceBlended = [
      { indo: 'Taro Milk Shake', eng: 'Taro Milk Shake' },
      { indo: 'Blackcurrant', eng: 'Blackcurrant' },
      { indo: 'Frozen Capucino', eng: 'Frozen Cappuccino' },
      { indo: 'Milk Shake Blackcurrant', eng: 'Milk Shake Blackcurrant' },
      { indo: 'Milk Shake', eng: 'Milk Shake' },
    ];
    
  const menuSpecialDrink = [
    {
      indo: 'Cookies n Cream Iced Blended',
      eng: 'Cookies n Cream Iced Blended',
    },
    {
      indo: 'Vanilla Latte Iced Blended',
      eng: 'Vanilla Latte Iced Blended',
    },
    {
      indo: 'Blueberry Iced Blended',
      eng: 'Blueberry Iced Blended',
    },
  ];

  const menuCoffeeTea = [
    {
      indo: 'Kopi Vietnam (Hot)',
      eng: 'Vietnamese Coffee (Hot)',
    },
    {
      indo: 'Es Kopi Malaka',
      eng: 'Iced Malaka Coffee',
    },
    {
      indo: 'Teh Tarik',
      eng: 'Pulled Tea',
    },
    {
      indo: 'Thai Tea',
      eng: 'Thai Tea',
    },
    {
      indo: 'Lychee Tea',
      eng: 'Lychee Tea',
    },
    {
      indo: 'Es Lemon Tea',
      eng: 'Iced Lemon Tea',
    },
    {
      indo: 'Es Lemonade',
      eng: 'Iced Lemonade',
    },
    {
      indo: 'Ice Tea Green',
      eng: 'Iced Green Tea',
    },
    {
      indo: 'Es Teh Manis',
      eng: 'Iced Sweet Tea',
    },
    {
      indo: 'Teh Manis Panas (Hot)',
      eng: 'Sweet Tea (Hot)',
    },
    {
      indo: 'Es Teh Tawar',
      eng: 'Iced Unsweetened Tea',
    },
    {
      indo: 'Teh Panas (Hot)',
      eng: 'Hot Tea',
    },
  ];

  const menuJuice = [
    {
      indo: 'Orange Juice',
      eng: 'Orange Juice',
    },
    {
      indo: 'Jus Alpukat',
      eng: 'Avocado Juice',
    },
    {
      indo: 'Jus Melon',
      eng: 'Melon Juice',
    },
    {
      indo: 'Jus Sirsak',
      eng: 'Soursop Juice',
    },
    {
      indo: 'Jus Mangga',
      eng: 'Mango Juice',
    },
    {
      indo: 'Jus Tomat',
      eng: 'Tomato Juice',
    },
    {
      indo: 'Es Jeruk',
      eng: 'Iced Orange',
    },
    {
      indo: 'Melon Lemonade',
      eng: 'Melon Lemonade',
    },
  ];

  const menuOtherDrink = [
    {
      indo: 'Air Mineral',
      eng: 'Mineral Water',
    },
    {
      indo: 'Sjora',
      eng: 'Sjora',
    },
    {
      indo: 'Milo',
      eng: 'Milo',
    },
    {
      indo: 'Teh Botol Sosro',
      eng: 'Teh Botol Sosro (Sweet Bottled Tea)',
    },
    {
      indo: 'Coke/Sprite/Fanta',
      eng: 'Coke / Sprite / Fanta',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-4 pt-28 md:pt-24">
      {/* Judul Halaman */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Menu <span className="text-pink-700">Minuman</span>
      </h1>

      {/* Navigasi Scroll */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm sm:text-base font-semibold text-gray-700">
        <button onClick={() => scrollToSection(iceRef)} className="hover:underline decoration-pink-700">
          ICE BLENDED
        </button>
        <button onClick={() => scrollToSection(specialRef)} className="hover:underline decoration-pink-700">
          SPECIAL DRINK
        </button>
        <button onClick={() => scrollToSection(coffeeRef)} className="hover:underline decoration-pink-700">
          COFFEE & TEA
        </button>
        <button onClick={() => scrollToSection(juiceRef)} className="hover:underline decoration-pink-700">
          JUICE
        </button>
        <button onClick={() => scrollToSection(otherRef)} className="hover:underline decoration-pink-700">
          OTHER DRINK
        </button>
      </div>

      {/* Section: ICE BLENDED */}
      <div ref={iceRef} id="ice-blended" className="w-full max-w-6xl px-2 mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-pink-700 mb-4">ICE BLENDED</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuIceBlended)}</div>
      </div>

      {/* Section: SPECIAL DRINK */}
      <div ref={specialRef} id="special-drink" className="w-full max-w-6xl px-2 mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-pink-700 mb-4">SPECIAL DRINK</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuSpecialDrink)}</div>
      </div>

      {/* Section: COFFEE & TEA */}
      <div ref={coffeeRef} id="coffee-tea" className="w-full max-w-6xl px-2 mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-pink-700 mb-4">COFFEE & TEA</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuCoffeeTea)}</div>
      </div>

      {/* Section: JUICE */}
      <div ref={juiceRef} id="juice" className="w-full max-w-6xl px-2 mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-pink-700 mb-4">JUICE</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuJuice)}</div>
      </div>

      {/* Section: OTHER DRINK */}
      <div ref={otherRef} id="other-drink" className="w-full max-w-6xl px-2 mb-16 scroll-mt-24">
        <h2 className="text-xl font-bold text-pink-700 mb-4">OTHER DRINK</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{renderMenu(menuOtherDrink)}</div>
      </div>
      <Kategori/>
    </div>
  );
}
