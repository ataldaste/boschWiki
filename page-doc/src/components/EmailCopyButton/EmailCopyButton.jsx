import React from "react";

const EmailCopyButton = ({ content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Copiado pro clipboard!");
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 px-4 py-2 bg-gray-800 text-white text-xs shadow hover:bg-gray-700"
    >
      CLIQUE PARA COPIAR
    </button>
  );
};

export default EmailCopyButton;
