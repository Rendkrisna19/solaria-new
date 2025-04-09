import React, { useState } from "react";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

// Import background & gambar menu
// import backgroundImage from "../../assets/paperpink.jpg";
import Menu1 from "../../assets/menu1.jpg";
import Menu2 from "../../assets/menu2.jpg";
import Menu3 from "../../assets/menu3.jpg";
import Menu4 from "../../assets/menu4.jpg";

const menuItems = [
  {
    name: "Vietnam Drip",
    image: Menu1,
    rating: 4,
  },
  {
    name: "Udang Goreng Telur Asin",
    image: Menu2,
    rating: 5,
  },
  {
    name: "Udang Goreng Saus Mentega",
    image: Menu3,
    rating: 4,
  },
  {
    name: "Udang Goreng Roti Wijen",
    image: Menu4,
    rating: 5,
  },
  {
    name: "Udang Goreng Telur Asin",
    image: Menu4,
    rating: 5,
  },
  {
    name: "Udang Goreng Saus Mentega",
    image: Menu3,
    rating: 4,
  },
 
];

export default function List_Menu() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="py-16 px-4 md:px-16 bg-cover bg-center min-h-screen"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 text-center">
              <div className="flex justify-center mb-1">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-pink-500 text-xl font-bold z-10"
            >
              <IoIosClose />
            </button>
            <img
              src={selectedImage.image}
              alt="Popup"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
