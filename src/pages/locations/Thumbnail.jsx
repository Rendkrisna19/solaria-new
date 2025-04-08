
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useAxios from "../../lib/api/config";
import { useQuery } from "@tanstack/react-query";

export default function Thumbnail() {
  const { latitude, longitude } = useParams();
  const { axiosIntance } = useAxios();
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['query-get-store-near-me'],
    queryFn: async () => {
      const response = await axiosIntance.post('/store-near-me', {
        location: `${latitude}, ${longitude}`
      });
      return response.data
    }
  })

  const handleViewLocationOnMaps = React.useCallback((latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">
      <span className="text-pink-700">Solaria</span> Store's
      </h2>
      <p className="text-lg text-center text-gray-500 mb-6">Near Me</p>

      {isSuccess && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.near_me.map((store, index) => (
            <motion.div
              onClick={()=> handleViewLocationOnMaps(store.latitude, store.longitude)}
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-4 shadow-lg shadow-pink-200 border border-pink-700 
                       transition-all duration-300 
                      hover:bg-pink-700 hover:text-white"
            >
              <h3 className="text-xl font-semibold transition-all duration-300">{store.store_name}</h3>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}