import React from "react";
import bgKayu from "../../assets/paperpink.jpg"; // background kayu
import menuImage from "../../assets/downlod.png"; // gambar makanan png
// import katalogPDF from "../../assets/test.pdf"; // file PDF

export default function DwnldMenu() {
  return (
    <div
      className="w-full bg-cover bg-center min-h-[400px] flex items-center justify-center px-6 py-9"
      style={{ backgroundImage: `url(${bgKayu})` }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Kiri: Teks & Tombol */}
        <div className="text-white text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold">
            Dapatkan Katalog <br /> Menu Lengkapnya
          </h2>
          <a
            // href={katalogPDF}
            download
            className="inline-block bg-white hover:bg-pink-700 text-pink-500 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            DOWNLOAD DISINI
          </a>
        </div>

        {/* Kanan: Gambar Makanan */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src={menuImage}
            alt="Gambar Menu"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
