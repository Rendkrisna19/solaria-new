import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MapImage from "../assets/peta-web.png";

const Location = () => {
  const [getPosition, setGetPosition] = useState(true);
  const [locationCoords, setLocationCoords] = useState({
    latitude: '',
    longitude: '',
  });

  const routerLocation = useLocation();

  // Scroll otomatis ke section #location jika URL mengandung hash #location
  useEffect(() => {
    if (routerLocation.hash === "#location") {
      const element = document.getElementById("location");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); 
      }
    }
  }, [routerLocation]);

  const handleOpenMaps = () => {
    try {
      setGetPosition(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocationCoords({ latitude, longitude });
            setGetPosition(false);
          },
          () => {
            setGetPosition(false);
            alert("Unable to retrieve your location. Please enable location access.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
        setGetPosition(false);
      }
    } catch (error) {
      console.error("Error getting location: ", error);
      setGetPosition(false);
    }
  };

  useEffect(() => {
    handleOpenMaps();
  }, []);

  return (
    <div className="text-center py-10 px-4" id="location">
      <h2 className="text-2xl font-bold">
        Our location is always near to you
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Find the nearest store in your city
      </p>

      <div className="text-center my-6">
        {getPosition ? (
          <button className="bg-primary text-white px-6 py-2 rounded-md text-lg font-semibold shadow-md">
            Loading your location...
          </button>
        ) : (
          <a
            href="#location"
            className="bg-pink-600 text-white px-6 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-pink-700 transition-all duration-300"
          >
            Store Near Me
          </a>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="w-full max-w-4xl mx-auto mt-6 shadow-lg rounded-lg overflow-hidden">
          <img
            src={MapImage}
            alt="Location Map"
            className="w-full h-60 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
