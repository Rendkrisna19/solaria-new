import React from "react";
import Img1 from "../assets/promo.jpg";
import Img2 from "../assets/promo.jpg";
import BgLeft from "../assets/jamur.png";
import BgRight from "../assets/lobak.png";

const Galery = () => {
  return (
    
    <div className="relative w-full max-w-screen-xl mx-auto py-10 px-4 md:px-10 lg:px-20 text-center oveflow-hidden">

      <img
        src={BgLeft}
        alt="Background Left"
        className="absolute bottom-[-2px] left-0 md:left-[-250px] max-w-[400px] md:max-w-[600px] opacity-80 pointer-events-none hidden md:block z-[-1]"
      />
      <img 
        src={BgRight}
        alt="Background Right"
        className="absolute bottom-[-100px] right-0 md:right-[-222px] max-w-[400] md:max-w-[600px] opacity-80 pointer-events-none hidden md:block z-[-1]"
       />

      <h2 className="text-2xl font-bold">Get more with our deals</h2>

      {/* Grid Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[Img1, Img2].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-right mt-4 text-pink-600 cursor-pointer hover:underline">View All</p>
    </div>
  );
  
};

export default Galery;
