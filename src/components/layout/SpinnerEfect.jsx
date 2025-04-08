import React from 'react';

export default function SpinnerEfect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-pink-500">Loading</span>
        </div>
      </div>
    </div>
  );
}
