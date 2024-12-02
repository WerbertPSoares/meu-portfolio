import React from 'react';
import './App.css';

// Componentes Importados
import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Seção de Header com logo e navegação */}
      <Header />

      {/* Seção Sobre */}
      <div className="section" id="sobre">
        <Sobre />
      </div>

      {/* Seção de Projetos */}
      <div className="section" id="projetos">
        <Projetos />
      </div>

      {/* Seção de Contato */}
      <div className="section" id="contato">
        <Contato />
      </div>

      {/* Seção de Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
