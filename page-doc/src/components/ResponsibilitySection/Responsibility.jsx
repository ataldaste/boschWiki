import React from "react";

const responsabilidades = [
  {
    id: 1,
    title: "Orientação para o futuro e foco nos resultados.",
    description: "Com orientação ao resultado, garantimos não apenas o nosso futuro, como também os alicerces para a atuação social da organização e da Fundação Robert Bosch.",
    color: "bg-red-400",
  },
  {
    id: 2,
    title: "Responsabilidade e sustentabilidade.",
    description: "Agimos com prudência e responsabilidade em benefício da sociedade e do meio ambiente.",
    color: "bg-orange-300",
  },
  {
    id: 3,
    title: "Iniciativa e determinação.",
    description: "Agimos por iniciativa própria, tomamos responsabilidades empreendedoras e lutamos por nossos objetivos com determinação.",
    color: "bg-yellow-300",
  },
  {
    id: 4,
    title: "Abertura e confiança.",
    description: "Buscamos comunicar assuntos de relevância da organização com transparência e no momento correto, construindo a base para uma cooperação de confiança.",
    color: "bg-green-300",
  },
  {
    id: 5,
    title: "Justiça.",
    description: "Atuamos nas relações de trabalho com nossos colegas e parceiros de negócios de forma justa como condição para o nosso sucesso.",
    color: "bg-blue-400",
  },
  {
    id: 6,
    title: "Confiabilidade, credibilidade e legalidade.",
    description: "Só prometemos aquilo que podemos cumprir, assumimos compromisso como uma obrigação e respeitamos o direito e a Lei.",
    color: "bg-cyan-700 text-white",
  },
  {
    id: 7,
    title: "Diversidade.",
    description: "Valorizamos e incentivamos a diversidade como fonte de riqueza e fator de sucesso.",
    color: "bg-purple-400",
  },
];

export default function ResponsabilidadesSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Responsabilidades como Colaborador Bosch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsabilidades.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-lg shadow-md ${item.color} transition-transform hover:scale-105`}
            >
              <h3 className="text-xl font-bold mb-2">{item.id}. {item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
