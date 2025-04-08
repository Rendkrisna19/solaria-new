import React from "react";
import Img1 from "../assets/solaria-header.jpg"


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-10 lg:px-20  ">
      {/* Hero Image */}
      <div className="w-full max-w-6xl mx-auto h-[80vh] md:h-[85vh] rounded-lg overflow-hidden shadow-lg relative mb-20">
        {/* Gambar */}
        <img
          src={Img1}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
