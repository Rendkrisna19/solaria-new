import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4 border-b border-gray-300 flex justify-between items-center px-6 ">
      {/* Logo -> Kembali ke Home */}
      <RouterLink to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
      </RouterLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold">
        <li>
          <RouterLink
            to="/"
            className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
          >
            HOME
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/Menu"
            className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
          >
            MENU
          </RouterLink>
        </li>
        {[
          { name: "PROMO", to: "promo" },
          { name: "LOCATION", to: "location" },
          { name: "CONTACT US", to: "contact" },
        ].map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
            >
              {item.name}
            </ScrollLink>
          </li>
        ))}
        <li>
          <RouterLink
            to="/About"
            className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
          >
            ABOUT US
          </RouterLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden pr-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <RouterLink
                to="/"
                className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </RouterLink>
            </li>
            {[
              { name: "Menu", to: "menu" },
              { name: "Promo", to: "promo" },
              { name: "Location", to: "location" },
              { name: "Contact Us", to: "contact" },
            ].map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
            <li>
              <RouterLink
                to="/About"
                className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
