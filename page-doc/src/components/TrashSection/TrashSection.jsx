import React from 'react';

const lixos = [
  { cor: 'text-blue-500', nome: 'Lixo Azul', descricao: 'Papel e derivados', bg: 'fill-blue-500' },
  { cor: 'text-red-500', nome: 'Lixo Vermelho', descricao: 'Plásticos', bg: 'fill-red-500' },
  { cor: 'text-yellow-500', nome: 'Lixo Amarelo', descricao: 'Metais', bg: 'fill-yellow-500' },
  { cor: 'text-green-500', nome: 'Lixo Verde', descricao: 'Vidro', bg: 'fill-green-500' },
  { cor: 'text-gray-400', nome: 'Lixo Cinza', descricao: 'Orgânicos e não recicláveis', bg: 'fill-gray-400' },
];

export default function SeparacaoLixo() {
  return (
    <div className="p-8 bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Separação do Lixo</h2>
      <p className="mb-6 text-gray-700 text-center">O lixo deve ser separado conforme as normas de CaP:</p>
      <ul className="flex flex-wrap justify-center gap-10">
        {lixos.map((item, idx) => (
          <li key={idx} className="flex flex-col items-center text-center">
            <svg
              className={`w-24 h-24 mb-3 ${item.bg}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 3v1H4v2h16V4h-5V3H9zm1 4v12h2V7h-2zm4 0v12h2V7h-2zM5 7v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7H5z" />
            </svg>
            <div>
              <span className={`${item.cor} font-bold text-lg block`}>{item.nome}</span>
              <span className="text-gray-700">{item.descricao}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
