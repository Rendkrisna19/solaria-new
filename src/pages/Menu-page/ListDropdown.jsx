import React from "react";
import menuImage from "../../assets/menu1.jpg"; // Ganti sesuai gambar kamu

const menuItems = [
  {
    name: "Vietnam Drip",
    description: "Kopi khas Vietnam dengan rasa kuat.",
    rating: 9.1,
    image: menuImage,
  },
  {
    name: "Udang Goreng Telur Asin",
    description: "Udang renyah dengan balutan telur asin.",
    rating: 9.4,
    image: menuImage,
  },
  {
    name: "Udang Goreng Saus Mentega",
    description: "Udang gurih saus mentega yang lezat.",
    rating: 8.9,
    image: menuImage,
  },
  {
    name: "Udang Goreng Roti Wijen",
    description: "Udang garing dengan lapisan wijen.",
    rating: 9.2,
    image: menuImage,
  },
  {
    name: "Vietnam Drip",
    description: "Kopi khas Vietnam dengan rasa kuat.",
    rating: 9.1,
    image: menuImage,
  },
  {
    name: "Udang Goreng Telur Asin",
    description: "Udang renyah dengan balutan telur asin.",
    rating: 9.4,
    image: menuImage,
  },
  {
    name: "Udang Goreng Saus Mentega",
    description: "Udang gurih saus mentega yang lezat.",
    rating: 8.9,
    image: menuImage,
  },
  {
    name: "Udang Goreng Roti Wijen",
    description: "Udang garing dengan lapisan wijen.",
    rating: 9.2,
    image: menuImage,
  },
];

export default function ListDropdown() {
  return (
    <div className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-black mb-10">
        Menu <span className="text-pink-500">Lainnya</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group border border-pink-300 rounded-lg p-4 shadow-md bg-white hover:bg-pink-50 transition"
          >
            <div className="flex items-center gap-4 cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-pink-400"
              />
              <h3 className="text-lg font-medium capitalize group-hover:text-pink-600 transition">
                {item.name}
              </h3>
            </div>

            {/* Dropdown content */}
            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-pink-200 rounded-lg p-4 shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-10">
              <p className="text-sm text-gray-700">{item.description}</p>
              <div className="mt-2 flex items-center gap-1 text-yellow-500 text-sm font-medium ">
                <span>⭐</span>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  