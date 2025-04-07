import React from "react";
import ProductCard from "../ProductCard/productcard";

const ShirtGrid = () => {
  const shirts = [
    {
      imageFront: "src/components/Media/camiseta.png",
      label: "AZUL",
      backText: "A camiseta azul é usada pelos aprendizes e instrutores, com o 'Cap/ETS' no peito simbolizando nossa área",
    },
    {
      imageFront: "src/components/Media/camiseta.png",
      label: "BRANCO",
      backText: "A versão branca é de uso exclusivo da EQUIPE ETS.",
    },
    {
      imageFront: "src/components/Media/camiseta.png",
      label: "VERDE",
      backText: "A camiseta verde é usada pelos aprendizes e instrutores, simbolizando o Digital Talent Academy!",
    },
  ];

  return (
    <div className="flex justify-center gap-6 bg-white p-6">
      {shirts.map((shirt, index) => (
        <ProductCard key={index} {...shirt} />
      ))}
    </div>
  );
};

export default ShirtGrid;
