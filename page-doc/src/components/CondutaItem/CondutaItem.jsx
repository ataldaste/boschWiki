import React from 'react';

export default function CondutaItem({ section, isOpen, onClick }) {
  return (
    <div className="mb-2 border border-gray-300 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-4 bg-gray-200 hover:bg-gray-300 transition-colors font-medium text-left"
      >
        {/* título com tamanho aumentado */}
        <span className="text-lg sm:text-xl font-semibold">{section.title}</span>

        {/* ícone de seta rotaciona quando abre */}
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-4 text-base sm:text-lg text-gray-700">
          <ul className="space-y-1 list-disc list-inside">
            {section.items.map((item, idx) =>
              item.startsWith('**') && item.endsWith('**') ? (
                <li
                  key={idx}
                  className="list-none font-semibold mt-3 mb-1 text-gray-800"
                >
                  {item.replace(/\*\*/g, '')}
                </li>
              ) : (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
