import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4 border-b border-gray-300 flex justify-between items-center px-6">
      {/* Logo */}
      <RouterLink to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
      </RouterLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold">
        <li>
          <RouterLink to="/" className="text-pink-600 hover:text-gray-600 transition-all duration-300">HOME</RouterLink>
        </li>
        <li>
          <RouterLink to="/Menu" className="text-pink-600 hover:text-gray-600 transition-all duration-300">MENU</RouterLink>
        </li>
        <li>
          <ScrollLink to="promo" smooth={true} duration={500} offset={-80} className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300">
            PROMO
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/#location" className="text-pink-600 hover:text-gray-600 transition-all duration-300">LOCATION</RouterLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300">
            CONTACT US
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/About" className="text-pink-600 hover:text-gray-600 transition-all duration-300">ABOUT</RouterLink>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden pr-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            <li><RouterLink to="/" onClick={() => setIsOpen(false)} className="text-pink-600 hover:text-gray-600">HOME</RouterLink></li>
            <li><RouterLink to="/Menu" onClick={() => setIsOpen(false)} className="text-pink-600 hover:text-gray-600">MENU</RouterLink></li>
            <li><ScrollLink to="promo" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="cursor-pointer text-pink-600 hover:text-gray-600">PROMO</ScrollLink></li>
            <li><RouterLink to="/#location" onClick={() => setIsOpen(false)} className="text-pink-600 hover:text-gray-600">LOCATION</RouterLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="cursor-pointer text-pink-600 hover:text-gray-600">CONTACT US</ScrollLink></li>
            <li><RouterLink to="/About" onClick={() => setIsOpen(false)} className="text-pink-600 hover:text-gray-600">ABOUT</RouterLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
