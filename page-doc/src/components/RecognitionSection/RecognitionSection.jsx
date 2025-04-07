import React from "react";
import RecognitionCard from "../RecognitionCard/RecognitionCard";

const recognitions = [
  {
    title: "Aluno Ouro",
    text: "Para alcançar o título de Aluno Ouro, o estudante deve manter 100% de frequência, excelência acadêmica com média mínima de 80%, além de conduta impecável sem registros de atrasos ou advertências.",
    imgSrc: "src/components/Media/alunoouro.png",
    color: "text-yellow-500",
    reverse: false,
  },
  {
    title: "Aluno Companheiro",
    text: "Reconhece os estudantes que se destacam pela solidariedade e espírito colaborativo, ajudando ativamente os colegas, respeitando as normas e mantendo frequência e comportamento exemplares.",
    imgSrc: "src/components/Media/alunocompanheiro.png",
    color: "text-blue-600",
    reverse: true,
  },
  {
    title: "Aluno Mange",
    text: "Celebra os estudantes com dedicação excepcional, que combinam frequência impecável com desempenho acadêmico destacado, servindo como inspiração para a comunidade escolar.",
    imgSrc: "src/components/Media/alunomange.png",
    color: "text-neutral-700",
    reverse: false,
  },
];

const RecognitionSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">


      <div className="space-y-16">
        {recognitions.map((item, index) => (
          <div key={index}>
            <RecognitionCard {...item} />
            {index < recognitions.length - 1 && (
              <div className="my-8 border-t border-gray-200 w-11/12 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecognitionSection;
