import React from 'react';

export default function CondutaItem({ section, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 px-4 font-medium text-base text-left hover:bg-gray-100 transition"
      >
        <span>{section.title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 text-gray-700 space-y-1 list-disc list-inside">
          {section.items.map((item, idx) => {
            // Detecta títulos com **
            if (typeof item === 'string' && item.startsWith('**') && item.endsWith('**')) {
              return (
                <li key={idx} className="list-none font-semibold mt-2 mb-1 text-gray-800">
                  {item.replace(/\*\*/g, '')}
                </li>
              );
            }

            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
