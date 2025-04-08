import React from "react";

const InfoCard = ({ title, text, bgColor, downloadLink }) => (
     <div className={`p-8 shadow-md ${bgColor} text-white rounded-none w-full h-70 flex flex-col justify-center items-center`}>
       <h3 className="font-bold text-2xl text-center uppercase">{title}</h3>
       <p className="mt-4 mb-2 text-lg text-center max-w-[80%]">{text}</p>
       {downloadLink && (
         <a href={downloadLink} download className="mt-4 px-4 py-2 bg-white text-black font-bold rounded shadow hover:bg-gray-300">
            Download
         </a>
       )}
     </div>
   );
   
   export default InfoCard;
