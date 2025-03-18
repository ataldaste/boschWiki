// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header'; // Componente Header
import Footer from './components/Footer/footer'; // Componente Footer
import Documents from './components/Documents/documents'; // Página de Documentos
import Home from './components/Home/home'; // Página Inicial
import Contact from './components/Contact/contact'; //Contatos
import Student from './components/Students/student';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documents />} />
        <Route path="/contatos" element={<Contact/>} />
        <Route path='/estudantes' element={<Student/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
