import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import Img1 from "../assets/menu1.jpg";
import Img2 from "../assets/menu2.jpg";
import Img3 from "../assets/menu3.jpg";
import Img4 from "../assets/menu4.jpg";
import Img5 from "../assets/menu5.jpg";
import Img6 from "../assets/menu6.jpg";
import BgLeft from "../assets/bayam.png";
import BgRight from "../assets/jamur.png";

const menuItems = [
  { image: Img1, title: "Fu Yung Hai", description: "An omelette made with beaten eggs and various ingredients" },
  { image: Img2, title: "Nasi Goreng", description: "Fried Rice with authentical Indonesia" },
  { image: Img3, title: "Nasi Sapo Tahu", description: "Sapo Tahu with Rice and Seafood" },
  { image: Img4, title: "Kwetiau Goreng", description: "Flat fried rice noodles" },
  { image: Img5, title: "Chicken Cordon Bleu", description: "Filled with ham and cheese, then rolled up" },
  { image: Img6, title: "Spaghetti Bolognese", description: "Spaghetti served with a rich, hearty meat sauce" },
];
  
const FavoritMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3; // HP Grid 1, Desktop Grid 3
  const totalSlides = Math.ceil(menuItems.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides); // Looping infinite
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  <div>

</div>
  return (
    <div className="relative w-full max-w-6xl mx-auto text-center py-10 px-4 md:px-8 overflow-hidden">
      
      <img
        src={BgLeft}
        alt="Background Left"
        className="absolute left-0 md:left-[-80px] top-[-50px] md:top-[-70px] max-w-[100px] md:max-w-[300px] opacity-80 pointer-events-none"
      />
      <img
        src={BgRight}
        alt="Background Right"
        className="absolute right-0 md:right-[-90px] top-[-100px] md:top-[-90px] max-w-[100px] md:max-w-[300px] opacity-80 pointer-events-none"
      />

      <h2 className="text-2xl font-bold mb-6">Favorite Menu</h2>
      <div></div>
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:center">
              {menuItems
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-50 h-50 items-center bg-white border-2 border-pink-400 rounded-xl shadow-lg p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-40 h-40 rounded-full object-cover border-2 border-pink-400 shadow-md"
                    />
                    <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Bulat */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "text-pink-700 opacity-100" : "text-gray-400 opacity-50"
            }`}
            size={10}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>  
    </div>
      
    );
}; 

export default FavoritMenu;
