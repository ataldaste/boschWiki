import React from "react";
import InfoCard from "../InfoCard/infocard";

const InfoCardGrid = () => {
  const cards = [
    {
      title: "Manual do Aluno",
      text: "Lorem ipsum dolor sit amet...",
      downloadLink: "src/components/Media/Documentação.pdf",
      bgColor: "bg-[#9E2896]",
    },
    {
      title: "Regras",
      text: "Lorem ipsum dolor sit amet...",
      bgColor: "bg-[#00884A]",
    },
    {
      title: "Feedback",
      text: "Lorem ipsum dolor sit amet...",
      bgColor: "bg-[#007BC0]",
    },
    {
      title: "Intercâmbio",
      text: "Lorem ipsum dolor sit amet...",
      bgColor: "bg-[#18837E]",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default InfoCardGrid;
