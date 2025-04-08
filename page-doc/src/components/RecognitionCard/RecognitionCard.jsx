import React from "react";

const RecognitionCard = ({ title, text, imgSrc, imgAlt, color, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-8`}>
      <div className="md:w-1/3 flex flex-col items-center">
        <img src={imgSrc} alt={imgAlt || title} className="w-full h-auto" />
        <p className="text-sm text-gray-500 mt-2 italic text-center">{imgAlt}</p>
      </div>
      <div className="md:w-1/2">
        <h2 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h2>
        <p className="text-black leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default RecognitionCard;
