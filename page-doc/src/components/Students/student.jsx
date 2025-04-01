import React from "react"; import SectionTitle from "../SectionTitle/SectionTitle"; import InfoCard from "../InfoCard/infocard"; import ProductCard from "../ProductCard/productcard";

const Student = () => { return ( <div className="container mx-auto p-4 bg-gray-200"> <SectionTitle title="GUIA PRÁTICO DO ALUNO!" /> <p className="text-center text-gray-600 mb-6"> Bosch Wiki é um site de informações destinado a estudantes da ETS que buscam respostas rápidas e intuitivas. </p>

<div className="grid md:grid-cols-2 gap-4">
    <InfoCard title="Manual do Aluno" text="Lorem ipsum dolor sit amet..." downloadLink="src/components/Media/Documentação.pdf" bgColor="bg-purple-600" />
    <InfoCard title="Regras" text="Lorem ipsum dolor sit amet..." bgColor="bg-green-600" />
    <InfoCard title="Feedback" text="Lorem ipsum dolor sit amet..." bgColor="bg-blue-600" />
    <InfoCard title="Intercâmbio" text="Lorem ipsum dolor sit amet..." bgColor="bg-teal-600" />
  </div>

  <SectionTitle title="CAMISETAS" />
  <div className="flex justify-center gap-6 bg-white p-6">
    <ProductCard 
      imageFront="src/components/Media/camiseta.png" 
      label="AZUL" 
      backText="A camiseta azul é usada pelos aprendizes e instrutores, com o 'Cap/ETS' no peito simbolizando nossa área"
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

  <SectionTitle title="RECONHECIMENTO DOS ALUNOS" />
  <div className="bg-white p-6 max-w-4xl mx-auto space-y-8">
  {/* Aluno Ouro - Imagem à esquerda */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    <img 
      src="src/components/Media/alunoouro.png" 
      alt="Aluno Ouro" 
      className="w-full md:w-2/5 object-cover"
    />
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-yellow-600 flex items-center gap-3 mb-3">
        <span>Aluno Ouro</span> <span>🏆</span>
      </h3>
      <p className="text-gray-700 text-lg">
        Para alcançar o título de Aluno Ouro, o estudante deve manter 100% de frequência, excelência acadêmica com média mínima de 80%, além de conduta impecável sem registros de atrasos ou advertências.
      </p>
    </div>
  </div>

  {/* Aluno Companheiro - Imagem à direita */}
  <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
    <img 
      src="src/components/Media/alunocompanheiro.png" 
      alt="Aluno Companheiro" 
      className="w-full md:w-2/5 object-cover"
    />
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-3 mb-3">
        <span>Aluno Companheiro</span> <span>🤝</span>
      </h3>
      <p className="text-gray-700 text-lg">
        Reconhece os estudantes que se destacam pela solidariedade e espírito colaborativo, ajudando ativamente os colegas, respeitando as normas e mantendo frequência e comportamento exemplares.
      </p>
    </div>
  </div>

  {/* Aluno Mange - Imagem à esquerda */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    <img 
      src="src/components/Media/alunomange.png" 
      alt="Aluno Mange" 
      className="w-full md:w-2/5 object-cover"
    />
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-700 flex items-center gap-3 mb-3">
        <span>Aluno Mange</span> <span>🎓</span>
      </h3>
      <p className="text-gray-700 text-lg">
        Celebra os estudantes com dedicação excepcional, que combinam frequência impecável com desempenho acadêmico destacado, servindo como inspiração para a comunidade escolar.
      </p>
    </div>
  </div>
</div>
</div>

); 
};

export default Student;