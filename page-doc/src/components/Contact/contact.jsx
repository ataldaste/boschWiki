// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nome</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Digite seu nome" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">E-mail</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Digite seu e-mail" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
