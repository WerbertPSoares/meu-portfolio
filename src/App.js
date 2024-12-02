import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Aqui estão os componentes principais do site */}
      <div>
        <Header />
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}

export default App;

