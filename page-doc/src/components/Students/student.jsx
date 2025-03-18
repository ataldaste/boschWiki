import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoCard from "../InfoCard/infocard";
import ProductCard from "../ProductCard/productcard";

const Student = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <SectionTitle title="GUIA PRÁTICO DO ALUNO!" />
      <p className="text-center text-gray-600 mb-6">
        Bosch Wiki é um site de informações destinado a estudantes da ETS
        que buscam respostas rápidas e intuitivas.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <InfoCard title="Manual do Aluno" text="Lorem ipsum dolor sit amet..." downloadLink="src/components/Media/Documentação.pdf" bgColor="bg-purple-600" />
        <InfoCard title="Regras" text="Lorem ipsum dolor sit amet..." bgColor="bg-green-600" />
        <InfoCard title="Feedback" text="Lorem ipsum dolor sit amet..." bgColor="bg-blue-600" />
        <InfoCard title="Intercâmbio" text="Lorem ipsum dolor sit amet..." bgColor="bg-teal-600" />
      </div>

      <SectionTitle title="CAMISETAS" />
      <div className="flex justify-center gap-6 bg-white">
      <ProductCard 
        imageFront="src/components/Media/camiseta.png" 
        label="AZUL" 
        backText="A camiseta azul é usada pelos aprendizes e instrutores, com o 'Cap/ETS' no peito simbolizando nossa area"
      />
      <ProductCard 
        imageFront="src/components/Media/camiseta.png" 
        label="BRANCO" 
        backText="A versão branca é de uso exclusivo da EQUIPE ETS."
      />
      <ProductCard 
        imageFront="src/components/Media/camiseta.png" 
        label="VERDE" 
        backText="A camiseta verde é usada pelos aprendizes e instrutores, simbolizando o Digital Talent Academy!"
      />
    </div>
  </div>
  );
};

export default Student;
