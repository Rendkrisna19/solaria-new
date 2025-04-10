import React from 'react';
import bannerImage from '../../assets/bannnersolaria.png'; 
const BannerMenu = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img
        src={bannerImage}
        alt="Banner Menu"
        className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gray-200 animate-pulse z-[-1]" />
    </div>
  );
};

export default BannerMenu;
