import React, { useState } from 'react';
import CondutaItem from '../CondutaItem/CondutaItem';

export default function CondutaAccordion() {
  const [openIndex, setOpenIndex] = useState(0); 

  const condutaSections = [
    {
      id: 'Conduta',
      title: '7.0 O Aprendiz e sua Conduta',
      items: [
        'Obrigatório respeito, empatia e companheirismo com todos.',
        'Infração grave: injúria racial, preconceito, bullying ou desrespeito.',
        'Proibido uso pessoal do celular durante aulas.',
        'Proibido comer em sala — usar área de café nos horários definidos.',
        'Proibido uso de objetos alheios ao conteúdo da aula.',
        'Proibido conversas paralelas, dormir ou demonstrações de afeto em excesso.',
        'Proibido comércio, jogos de azar, uso de fones não corporativos.',
        'Mochilas devem ficar nos armários da sala.'
      ]
    },
    {
      id: 'Restaurante',
      title: '7.1 Normas no Restaurante',
      items: [
        'Respeitar filas e funcionários.',
        'Conversar com moderação, sem tumulto.',
        'Obedecer aos limites de consumo.',
        'Proibido carinho excessivo.',
        'Descartar resíduos e devolver bandejas corretamente.'
      ]
    },
    {
      id: 'Fretado',
      title: '7.2 Normas no Fretado',
      items: [
        'Uso de cinto de segurança é obrigatório.',
        'Proibido ficar em pé ou trocar de roupa.',
        'Volume moderado nas conversas.',
        'Proibido afeto excessivo ou tirar fotos sem autorização.',
        'Música só com fones.'
      ]
    },
    {
      id: 'TI',
      title: '7.4 Uso dos Equipamentos de Informática',
      items: [
        'Proibido mexer em arquivos de outros.',
        'Comunique qualquer incidente ao instrutor.',
        'Sempre bloquear a tela ao se ausentar.',
        'Deslogar e desligar após o uso.',
        'Proibido acessar e-mails pessoais (exceto Canva para apresentação).'
      ]
    },
    {
      id: 'Vestimenta',
      title: '7.5 Normas de Vestimenta',
      items: [
        '**Parte superior:**',
        'Camiseta ETS ou camisa Bosch obrigatória.',
        'Proibido SENAI, time ou roupas alternativas.',
        'Trocar roupa só nos vestiários.',
        'Sem casacos na operação de máquinas.',
        'Sem acessórios na área fabril.',
        '**Parte inferior:**',
        'Calça jeans ou cargo obrigatória.',
        'Proibido saias, shorts, vestidos, legging ou rasgadas.',
        'Casos especiais: conversar com gestor.',
        '**Calçados:**',
        'Proibido sandálias, chinelos, sapatos abertos.',
        'Obrigatório sapato de segurança nas áreas técnicas.',
        'EPI é responsabilidade do aprendiz.'
      ]
    },
    {
      id: 'Ocorrencias',
      title: '8. Ocorrências: Faltas, Atrasos e Saída Antecipada',
      items: [
        'Justificar ausência ao instrutor com cópia ao gestor.',
        'Faltas abonadas só com: atestado médico, alistamento ou óbito direto.',
        'Atestados em até 72h ao ambulatório (ou cap.ambulatorio@br.bosch.com).',
        'Alistamento e óbito: enviar ao CSC.',
        'Outros casos: alinhar com gestor antes.'
      ]
    }
  ];

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Conduta do Aprendiz</h2>
      {condutaSections.map((section, i) => (
        <CondutaItem
          key={section.id}
          section={section}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
