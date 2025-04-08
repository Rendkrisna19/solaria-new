import React from "react";
import imgFooter from "../../assets/imgfooter.png";
import FacebookIcon from "../../assets/fbicon.png";
import InstagramIcon from "../../assets/igicon.png";
import TiktokIcon from "../../assets/tticon.png";
import TwitterIcon from "../../assets/xicon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10 text-gray-700" id="contact">
      <div className="px-6 pt-10 max-w-screen-xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Kolom 1*/}
        <div>
          <img src={imgFooter} alt="imgFooter" className="w-22 h-20 object-contain mb-5 " />
          <div
          className="flex gap-3">
            <img src={FacebookIcon} alt="Facebook" onClick={()=>window.open('https://www.facebook.com/p/Solaria-Indonesia-100057582874563/?locale=id_ID')} className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={InstagramIcon} alt="Instagram" onClick={()=>window.open('https://www.instagram.com/solaria.indonesia/')} className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={TiktokIcon} alt="Tiktok" onClick={()=>window.open('https://www.tiktok.com/@solaria.indonesia')} className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={TwitterIcon} alt="Twitter" onClick={()=>window.open('https://x.com/solariaid')} className="w-8 h-8 cursor-pointer hover:opacity-75" />
          </div>
        </div>

        {/* Kolom 2*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer transition">News</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-pink-500 cursor-pointer transition">About Us</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Career</li>
          </ul>
        </div>

        {/* Kolom 3*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer transition">Outlet Location</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Halal Certificate</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Terms and Conditions</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Solaria Indonesia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
