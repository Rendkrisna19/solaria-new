import React from "react";
import ListMenu from "./List_menu";
import ListDropdown from "./ListDropdown";
import bannerImage from "../../assets/bannnersolaria.png";
// import Bgpaper from "../../assets/paperpink.jpg";
import Scroll from "./ScrollTop"
import DownlodMenu from "./DwnldMenu"

export default function Menu() {
  return (
    <div
      className="pt-20 md:pt-24 bg-cover bg-center min-h-screen"
    // style={{ backgroundImage: `url(${Bgpaper})` }}
    >
      {/* Optional: bisa taruh juga overlay warna jika ingin kontras teks lebih jelas */}
      <div className="w-full min-h-screen">

        <div className="w-full relative">
          <img
            src={bannerImage}
            alt="Banner Menu"
            className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gray-200 animate-pulse z-[-1]"></div>
        </div>


        {/* Title section */}
        <div className="pt-8  text-center">
          <h2 className="text-4xl font-semibold text-black">
            Menu <span className="text-pink-500">Kami</span>
          </h2>
        </div>

        {/* Komponen list menu */}
        <ListMenu />

        {/* Komponen dropdown */}
        <ListDropdown />
        <DownlodMenu />
        <Scroll />
      </div>
    </div>
  );
}
