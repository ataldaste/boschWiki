import React from "react";
import EmailCopyButton from "../EmailCopyButton/EmailCopyButton";

const emails = [
  {
    subject: "Fulano de Tal - Edv: 00000000 - Correção de ponto",
    body: `Olá! Bom dia.

Poderia corrigir esta ocorrência de ponto por favor?

Nome:
EDV:
Turma:
Data da Ocorrência:
Motivo:`,
  },
  {
    subject: "Fulano de Tal - Edv: 00000000 - Correção de ponto",
    body: `Olá! Bom dia.

Poderia corrigir esta ocorrência de ponto por favor?

Nome:
EDV:
Turma:
Data da Ocorrência:
Motivo:`,
  },
];

const EmailModel = () => {
  return (
     <div className="bg-white p-6 max-w-5xl mx-auto text-gray-800">
     <h3 className="text-2xl font-bold text-center mb-6">
       MODELOS DE EMAIL
     </h3>

     <p className="text-center text-sm text-gray-600 mb-8">
       Abaixo estão os modelos padrão de e-mail utilizados na ETS para comunicação com os instrutores.
       Copie e edite conforme sua necessidade.
     </p>

    <div className="bg-gray-100 p-6 max-w-5xl mx-auto text-gray-800">
      {/* bloco de endereçamento */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white mb-8 space-y-2 text-sm max-w-md mx-auto">
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Para:</span>
          <span className="text-blue-800">instrutorPadrinho@bosch.com</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Cc:</span>
          <span className="text-blue-800">instrutordodia@bosch.com</span>
        </div>
      </div>

      {/* grid com dois cards de e-mail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emails.map((email, idx) => (
          <div
            key={idx}
            className="border border-black rounded bg-white p-4 shadow text-sm"
          >
            <div className="mb-2">
              <span className="font-semibold text-gray-700">Assunto:</span>{" "}
              <span className="text-gray-800">{email.subject}</span>
            </div>
            <pre className="whitespace-pre-wrap text-gray-800 text-sm mt-4">
              {email.body}
            </pre>
            <div className="mt-4 text-right">
              <EmailCopyButton content={`${email.subject}\n\n${email.body}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EmailModel;
