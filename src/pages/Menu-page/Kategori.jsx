import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import gambar kategori
import makananImg from '../../assets/menu1.jpg';
import minumanImg from '../../assets/menu1.jpg';
import nasiImg from '../../assets/menu1.jpg';
import mieImg from '../../assets/menu1.jpg';
import bowlImg from '../../assets/menu1.jpg';
import addonImg from '../../assets/menu1.jpg';
import snackImg from '../../assets/menu1.jpg';
import allImg from '../../assets/menu1.jpg';

const menuItems = [
  { label: 'Menu Paket', path: 'paket', image: makananImg },
  { label: 'Menu Special', path: 'special', image: minumanImg },
  { label: 'Menu Porsi', path: 'porsi', image: nasiImg },
  { label: 'Nasi Goreng', path: 'nasi-goreng', image: mieImg },
  { label: 'Mie Goreng', path: 'mie-goreng', image: mieImg },
  { label: 'Kwetiau', path: 'kwetiau', image: mieImg },
  { label: 'Bihun', path: 'bihun', image: mieImg },
  { label: 'Bowl', path: 'sayur', image: bowlImg },
  { label: 'Add On', path: 'addon', image: addonImg },
  { label: 'Snack', path: 'snack', image: snackImg },
  { label: 'All', path: '', image: allImg },
];

const groupItems = (items, itemsPerGroup) => {
  let groups = [];
  for (let i = 0; i < items.length; i += itemsPerGroup) {
    groups.push(items.slice(i, i + itemsPerGroup));
  }
  return groups;
};

const CulinaryCarousel = () => {
  const navigate = useNavigate();
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(5);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const groupedItems = groupItems(menuItems, itemsPerSlide);

  return (
    <div className="bg-pink-700 py-10 text-center text-white pt-28 md:pt-24">
      <h2 className="text-2xl font-bold mb-6">Explore Our Culinary</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          stopOnHover={false}
          swipeable
          emulateTouch
        >
          {groupedItems.map((group, index) => (
            <div key={index} className="flex justify-center gap-8">
              {group.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => navigate(`/menu/${item.path}`)}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-28 h-28 rounded-full object-cover mb-2 border-2 border-white hover:scale-105 transition-transform"
                  />
                  <p className="text-sm text-white">{item.label}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CulinaryCarousel;
