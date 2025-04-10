import React from "react";
import ListMenu from "./List_menu";
import ListDropdown from "./ListDropdown";
import bannerImage from "../../assets/bannnersolaria.png";
import Scroll from "./ScrollTop"
import Kategori from "./Kategori"
import BannerMenu from "../../components/layout/BannerMenu"

export default function Menu() {
  return (
    <div
      className="pt-20 md:pt-24 bg-cover bg-center min-h-screen">
        <BannerMenu/>
      <Kategori />
      <div className="pt-8  text-center">
        <h2 className="text-4xl font-semibold text-black">
          Menu <span className="text-pink-500">Kami</span>
        </h2>
      </div>
      <ListMenu />
      <ListDropdown />
      <Scroll />
    </div>

  );
}
