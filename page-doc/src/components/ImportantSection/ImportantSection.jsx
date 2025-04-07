import React, { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";

const items = [
  {
    title: "Brand Guide",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/book.svg",
    description: "Guia de identidade visual da empresa.",
    image: "/images/brand.png",
    link: "https://exemplo.com/brand-guide",
  },
  {
    title: "5’S",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/layers.svg",
    description: "Metodologia de organização japonesa.",
    image: "/images/5s.png",
    link: "https://exemplo.com/5s",
  },
  {
    title: "Mentoria",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/people.svg",
    description: "Programa de mentoria para desenvolvimento profissional.",
    image: "/images/mentor.png",
    link: "https://exemplo.com/mentoria",
  },
  {
    title: "Alma",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/heart.svg",
    description: "O ALMA é um informativo para colaboradores Bosch acerca dos programas de saúde mental oferecidos pela empresa.",
    image: "src/components/media/alma.png",
    link: "https://exemplo.com/alma",
  },
  {
    title: "Crachás",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-badge.svg",
    description: "Emissão e gestão de crachás.",
    image: "/images/id.png",
  },
  {
    title: "Refeitório",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/cup-hot.svg",
    description: "Informações sobre refeições e horários.",
    image: "/images/coffee.png",
  },
  {
    title: "Padrinhos",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-heart.svg",
    description: "Alunos veteranos de apoio aos novatos.",
    image: "/images/padrinhos.png",
  },
  {
    title: "Calendário",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/calendar-event.svg",
    description: "Eventos e datas importantes.",
    image: "/images/calendar.png",
    link: "/downloads/calendario.pdf",
  },
  {
    title: "Docupedia",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/file-earmark-text.svg",
    description: "Repositório de documentos e materiais de referência.",
    image: "/images/docupedia.png",
    link: "https://exemplo.com/docupedia",
  },
  {
    title: "Design System",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/palette.svg",
    description: "Guia de componentes e padrões de design da aplicação.",
    image: "/images/designsystem.png",
    link: "https://exemplo.com/design-system",
  },
];

const ImportantSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative bg-white py-10 px-4 shadow-inner">
      {/* Arco-íris com cores padrão Bosch */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#005691] via-[#64A70B] to-[#E30613]" />

      <h2 className="text-center text-2xl font-bold mb-10">IMPORTANTES</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className="w-36 h-36 flex flex-col items-center justify-center p-4 border shadow hover:shadow-lg bg-white"
          >
            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-2" />
            <span className="text-base font-medium text-center">{item.title}</span>
          </button>
        ))}
      </div>

      {selected && (
        <ItemModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ImportantSection;
