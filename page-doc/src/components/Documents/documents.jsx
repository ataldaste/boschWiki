import React, { useState } from 'react';
import DocPadrão from '../Media/Documentação.pdf'

// Dados fictícios para os tópicos da documentação
const topics = [
  {
    id: 'prototyping',
    title: 'Prototipagem',
    content: 'Aqui estão os passos para instalar o sistema localmente. Siga as instruções.',
    subsections: [
      { id: 'description', title: 'Descrição', content: 'Passos para a prototipagem.' },
      { id: 'usage', title: 'Utilização', content: 'Como utilizar o protótipo.' },
    ],
  },
  {
    id: 'design_rules',
    title: 'Regras de design',
    content: 'Esta seção trata sobre a configuração do sistema após a instalação.',
    subsections: [
      { id: 'overview', title: 'Visão Geral', content: 'Visão geral das regras de design.' },
      { id: 'standards', title: 'Padrões', content: 'Padrões adotados pelo sistema.' },
    ],
  },
  {
    id: 'citation_slogans',
    title: 'Citação e Slogans',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'fonts_texts',
    title: 'Fontes e textos',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'margin',
    title: 'Margem',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
    subsections: [
      { id: 'description', title: 'Descrição', content: 'Detalhes sobre margens.' },
      { id: 'usage', title: 'Utilização', content: 'Como usar as margens no sistema.' },
    ],
  },
  {
    id: 'location',
    title: 'Localização',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'color',
    title: 'Cores',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'dark_mode',
    title: 'Dark Mode',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'supergraphic',
    title: 'Super Gráfico',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'image',
    title: 'Imagem',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'tables_graphics_diagrams',
    title: 'Tabelas, gráficos e diagramas',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'illustration',
    title: 'Ilustrações',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'icon',
    title: 'Ícones',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'linguage_typography',
    title: 'Linguaguem e tipografia',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'bumpers',
    title: 'Bumpers e etiquetas',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'qr_code',
    title: 'Códigos QR',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'teste_digital_design_system',
    title: 'Teste Digital ...',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'ux',
    title: 'User Experience',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'accessibility',
    title: 'Acessibilidade',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'angular',
    title: 'Angular',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'folder_structure',
    title: 'Estrutura de Pastas',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'spring_boot',
    title: 'Spring Boot',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'my_sql',
    title: 'MYSQL',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
  {
    id: 'documentation',
    title: 'Documentação',
    content: 'Aqui estão as perguntas mais frequentes sobre o sistema.',
  },
];

const Documents = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [breadcrumb, setBreadcrumb] = useState(['Padrões ETS']);

  // Função para selecionar um tópico
  const handleSelectTopic = (id) => {
    const topic = topics.find((t) => t.id === id);
    if (topic) {
      setSelectedTopic(topic);
      setBreadcrumb(['Padrões ETS', topic.title]); // Atualiza o breadcrumb
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Menu Lateral (Hamburguer) */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Padrões ETS</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => handleSelectTopic(topic.id)}
                className="w-full text-left py-2 px-4 mb-2 text-gray-300 hover:text-white focus:outline-none"
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Conteúdo main */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Breadcrumb */}
        <div className="mb-4 text-gray-500">
          {breadcrumb.join(' > ')}
        </div>
        {/* Título da Seção */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedTopic.title}</h1>
        <p className="text-lg text-gray-700">{selectedTopic.content}</p>

         {/* Sub-seções */}
         {selectedTopic.subsections && (
          <div className="mt-8">
            {selectedTopic.subsections.map((subsection) => (
              <div id={subsection.id} key={subsection.id} className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">{subsection.title}</h2>
                <p className="text-lg text-gray-700">{subsection.content}</p>
              </div>
            ))}
            <div>
              <a href={DocPadrão} download="Documentacao.pdf" target="_blank">
                <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded cursor-pointer">
                  Baixar Documento
                </button>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Sumário*/}
      <div className="w-40 h-200 bg-[#003e64] p-4">
        <h3 className="text-xl text-white font-semibold">Sumário</h3>
        <ul className='p-2'>
          {selectedTopic.subsections && selectedTopic.subsections.map((subsection) => (
            <li key={subsection.id}>
              <a
                href={`#${subsection.id}`}
                className="cursor-pointer text-white hover:text-gray-400"
              >
                {subsection.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;