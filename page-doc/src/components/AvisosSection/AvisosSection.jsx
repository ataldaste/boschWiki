import React from "react";

const avisos = [
  {
    id: 1,
    titulo: "Porta de Emergência",
    mensagem: "Não abrir a porta dos fundos perto dos armários — aciona o alarme dos bombeiros.",
  },
  {
    id: 2,
    titulo: "Refeitório",
    mensagem: "Refeitório fechado hoje das 12h às 13h para manutenção programada.",
  },
  {
    id: 3,
    titulo: "Sistema ALMA",
    mensagem: "Atualização obrigatória do sistema ALMA até sexta-feira, 18h.",
  },
  {
    id: 4,
    titulo: "Segurança Interna",
    mensagem: "Evite deixar pertences nos corredores — risco de acidentes e obstrução.",
  },
  {
    id: 5,
    titulo: "Treinamento 5S",
    mensagem: "Treinamento obrigatório sobre 5S acontecerá em 12/04 às 14h na sala de reuniões 3.",
  },
  {
    id: 6,
    titulo: "Laboratórios",
    mensagem: "Uso de tomadas restrito aos pontos autorizados nos laboratórios.",
  },
];

const AvisosSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto border border-gray-200 shadow">
        {/* cabeçalho com borda top vermelha estilo Bosch */}
        <div className="bg-white border-t-4 border-[#e30613] px-6 py-6">
          <h2 className="text-2xl font-bold text-gray-900">Avisos Internos</h2>
          <p className="text-sm text-gray-600 mt-1">
            Informações críticas para todos os colaboradores
          </p>
        </div>

        {/* lista de avisos */}
        <div className="bg-white divide-y divide-gray-200">
          {avisos.map((aviso) => (
            <div
              key={aviso.id}
              className="px-6 py-5 hover:bg-[#f9f9f9] transition flex flex-col gap-1"
            >
              <div className="flex items-center gap-2 text-[#e30613] font-semibold text-sm uppercase tracking-wide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                {aviso.titulo}
              </div>
              <p className="text-gray-800 text-[15px] leading-snug">
                {aviso.mensagem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvisosSection;
