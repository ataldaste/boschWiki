import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoCardGrid from "../InfoCardGrid.jsx/InfoCardGrid.jsx";
import ShirtGrid from "../ShirtGrid.jsx/ShirtGrid.jsx";
import RecognitionSection from "../RecognitionSection/RecognitionSection.jsx";
import EmailModel from "../EmailModel/EmailModel";
import ImportantSection from "../ImportantSection/ImportantSection.jsx";
import AvisosSection from "../AvisosSection/AvisosSection.jsx";
import AreaColors from "../AreaColors/AreaColors.jsx";
import CondutaAccordion from "../CondutaAccordion/CondutaAccordion.jsx";
import ResponsabilidadesSection from "../ResponsibilitySection/Responsibility.jsx";
import SeparacaoLixo from "../TrashSection/TrashSection.jsx";

const Student = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <SectionTitle title="GUIA PRÁTICO DO ALUNO!" />
      <p className="text-center text-gray-600 mb-6">
        Bosch Wiki é um site de informações destinado a estudantes da ETS que buscam respostas rápidas e intuitivas.
      </p>

      <InfoCardGrid />

      <SectionTitle title="CAMISETAS" />
      <ShirtGrid />

      <SectionTitle title="RECONHECIMENTO DOS ALUNOS" />
      <RecognitionSection />

      <div className="h-15"></div>
      <EmailModel />
      
      <div className="h-15"></div>
      <AreaColors />

      <div className="h-15"></div>
      <div className="bg-light">
      <CondutaAccordion />
      </div>
      
      <div className="h-15"></div>
      <ResponsabilidadesSection/>

      <div className="h-15"></div>
      <SeparacaoLixo/>

      <div className="h-15"></div>
      <ImportantSection/>
      <AvisosSection/>
    </div>
  );
};

export default Student;