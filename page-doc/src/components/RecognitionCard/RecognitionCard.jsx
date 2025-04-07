import React from "react";

const RecognitionCard = ({ title, text, imgSrc, color, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}>
      <img src={imgSrc} alt={title} className="w-full md:w-2/5 object-cover" />
      <div className="flex-1">
        <h3 className={`text-2xl font-bold ${color} flex items-center gap-3 mb-3`}>
          <span>{title}</span>
        </h3>
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
    </div>
  );
};

export default RecognitionCard;
