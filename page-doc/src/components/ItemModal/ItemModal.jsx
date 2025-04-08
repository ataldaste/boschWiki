import React from "react";

const ItemModal = ({ item, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(item.link);
    alert("Link copiado para a área de transferência!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-fit max-w-2xl shadow-2xl border-gray-300 relative">
        {/* barra arco-íris com botão de fechar dentro */}
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-6 bg-gradient-to-r from-[#005691] via-[#64A70B] to-[#E30613] px-4">
          <span className="text-white font-bold">{item.title}</span>
          <button
            onClick={onClose}
            className="text-white text-xl font-bold hover:text-gray-200"
            title="Fechar"
          >
            &times;
          </button>
        </div>

        {/* imagem principal */}
        <img
          src={item.image}
          alt={item.title}
          className="w-auto h-full max-h-[70vh] object-contain mt-4"
        />
        <div className="flex flex-col p-6">

          {/* conteúdo */}
          <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>

          <p className="text-gray-700 text-sm mb-4">
            {item.description || "Conteúdo ainda não disponível."}
          </p>

          {/* link com copiar e download (se for o caso) */}
          {item.link && (
            <div className="flex items-center gap-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {item.link}
              </a>

              <button onClick={handleCopy} title="Copiar link">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/clipboard.svg"
                  alt="Copiar"
                  className="w-5 h-5"
                />
              </button>

              {item.title === "Calendário" && (
                <a
                  href={item.link}
                  download
                  className="ml-2"
                  title="Baixar calendário"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/download.svg"
                    alt="Download"
                    className="w-5 h-5"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
