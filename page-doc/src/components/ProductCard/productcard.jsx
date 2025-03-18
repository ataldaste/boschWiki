import { useState } from "react";
import React from "react";

const ProductCard = ({ imageFront, label, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-72 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Frente da camiseta */}
        <div className={`absolute w-full h-full flex flex-col items-center justify-center shadow-lg bg-white transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
          <img
            src={imageFront}
            alt={`${label} frente`}
            className="w-full h-auto object-cover rounded-lg"
          />
          <span className="mt-2 font-semibold">{label}</span>
        </div>

        {/* Verso com texto */}
        <div className={`absolute w-full h-full bg-gray-500 text-white flex flex-col items-center justify-center shadow-lg p-4 transition-all duration-500 ${isFlipped ? "opacity-100 rotate-y-180" : "opacity-0"}`}>
          <span className="text-lg font-bold">{label} - Verso</span>
          <p className="text-lg mt-2 text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

