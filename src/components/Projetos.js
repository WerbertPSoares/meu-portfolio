import React from 'react';
import './Projetos.css'; // Adicione um arquivo CSS separado para estilizar a seção

function Projetos() {
  return (
    <section id="projetos" className="projetos-section">
      <h2>Projetos</h2>
      <div className="projetos-container">
        {/* Projeto 1 */}
        <div className="projeto-card">
          <img
            src="https://via.placeholder.com/300x200.png?text=ReadCycle"
            alt="ReadCycle"
            className="projeto-image"
          />
          <h3>ReadCycle</h3>
          <p>Site de doação de livros. <a href="https://github.com/werbert/readcycle" target="_blank" rel="noopener noreferrer">Veja no GitHub</a></p>
        </div>
        
        {/* Projeto 2 */}
        <div className="projeto-card">
          <img
            src="https://via.placeholder.com/300x200.png?text=Gestor+de+Tarefas"
            alt="Gestor de Tarefas"
            className="projeto-image"
          />
          <h3>Gestor de Tarefas</h3>
          <p>Aplicação de gerenciamento de listas encadeadas em C. <a href="https://github.com/werbert/gestor-tarefas" target="_blank" rel="noopener noreferrer">Veja no GitHub</a></p>
        </div>

        {/* Projeto 3 */}
        <div className="projeto-card">
          <img
            src="https://via.placeholder.com/300x200.png?text=Scanner+de+Vulnerabilidades"
            alt="Scanner de Vulnerabilidades Web"
            className="projeto-image"
          />
          <h3>Scanner de Vulnerabilidades Web</h3>
          <p>Ferramenta para escanear sites e identificar vulnerabilidades comuns. <a href="https://github.com/seuusuario/scanner-vulnerabilidades" target="_blank" rel="noopener noreferrer">Veja no GitHub</a></p>
        </div>

        {/* Projeto 4 */}
        <div className="projeto-card">
          <img
            src="https://via.placeholder.com/300x200.png?text=App+Senhas"
            alt="Aplicativo de Gerenciamento de Senhas"
            className="projeto-image"
          />
          <h3>Aplicativo de Gerenciamento de Senhas</h3>
          <p>App para armazenamento seguro de senhas. <a href="https://github.com/seuusuario/app-senhas" target="_blank" rel="noopener noreferrer">Veja no GitHub</a></p>
        </div>

        {/* Projeto 5 */}
        <div className="projeto-card">
          <img
            src="https://via.placeholder.com/300x200.png?text=Plataforma+de+Segurança"
            alt="Plataforma de Monitoramento de Segurança Web"
            className="projeto-image"
          />
          <h3>Plataforma de Monitoramento de Segurança Web</h3>
          <p>Aplicação web para verificar a segurança de sites. <a href="https://github.com/seuusuario/plataforma-seguranca" target="_blank" rel="noopener noreferrer">Veja no GitHub</a></p>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
