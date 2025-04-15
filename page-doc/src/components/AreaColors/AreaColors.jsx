import React from "react";

const areas = [
  { nome: "Manufatura Digital", cor: "#2E7D58" },
  { nome: "Administração", cor: "#50B4F2" },
  { nome: "Manufatura Elétrica", cor: "#255789" },
  { nome: "Mecatrônica", cor: "#4AA5A1" },
  { nome: "Soluções Digitais", cor: "#C660A3" },
];

const AreaColors = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Cores
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {areas.map((area, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* bolinha com a cor da área */}
            <div
              className="w-12 h-12 rounded-full shadow-md"
              style={{ backgroundColor: area.cor }}
            ></div>
            {/* nome da área + código da cor */}
            <div className="text-lg">
              <span className="font-semibold">{area.nome}</span> —{" "}
              <span className="text-gray-600">{area.cor}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreaColors;
