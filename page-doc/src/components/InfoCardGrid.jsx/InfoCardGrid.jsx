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
      text: "O feedback é realizado individualmente com seu padrinho/madrinha (ou, em alguns casos, com os instrutores que acompanharam a turma ao longo do semestre). Esse processo ocorre semestralmente e a nota será definida em conjunto entre você e os avaliadores, durante uma conversa colaborativa",
      bgColor: "bg-[#007BC0]",
    },
    {
      title: "Intercâmbio",
      text: "O intercâmbio acontece uma vez por ano. Dois alunos de cada turma são selecionados pelos instrutores para participar em outra planta da Bosch ao redor do mundo. A escolha é baseada em notas, comportamento, desempenho no curso e outros critérios definidos pela equipe",
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
