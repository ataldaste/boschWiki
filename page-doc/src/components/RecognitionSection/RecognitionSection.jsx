import React from "react";
import RecognitionCard from "../RecognitionCard/RecognitionCard";

const recognitions = [
  {
    title: "Aluno Ouro",
    text: "Para alcançar o título de Aluno Ouro, o estudante deve manter 100% de frequência, excelência acadêmica com média mínima de 95, além de conduta impecável sem registros de atrasos ou advertências.",
    imgSrc: "src/components/Media/alunoouro.png",
    imgAlt: "Alunos de Digital Solutions, 2025",
    color: "text-yellow-500",
    reverse: false,
  },
  {
    title: "Aluno Companheiro",
    text: "Reconhece os estudantes que se destacam pela solidariedade e espírito colaborativo, ajudando ativamente os colegas, respeitando as normas e mantendo frequência e comportamento exemplares.",
    imgSrc: "src/components/Media/alunocompanheiro.png",
    imgAlt: "Alunos de Mecatrônica, 2025",
    color: "text-blue-600",
    reverse: true,
  },
  {
    title: "Aluno Mange",
    text: "Celebra os estudantes com dedicação excepcional, que combinam frequência impecável com desempenho acadêmico destacado, servindo como inspiração para a comunidade escolar.",
    imgSrc: "src/components/Media/alunomange.png",
    imgAlt: "Diego Jacober, Ex-Aluno do DTA, 2024.",
    color: "text-neutral-700",
    reverse: false,
  },
];

const RecognitionSection = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {recognitions.map((item, index) => (
          <div key={index}>
            <RecognitionCard {...item} />
            {index < recognitions.length - 1 && (
              <div className="my-12 w-10/12 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecognitionSection;
