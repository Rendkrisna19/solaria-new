import React from 'react';
import bannerImage from '../../assets/bannnersolaria.png'; 
const BannerMenu = () => {
  return (
    <div className='pt-20 md:pt-24 bg-cover bg-center'>
    <div className="w-full relative">
      <img
        src={bannerImage}
        alt="Banner Menu"
        className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gray-200 animate-pulse z-[-1]" />
    </div>
    </div>
  );
};

export default BannerMenu;
