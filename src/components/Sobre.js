import React from 'react';
import './Sobre.css';  // Adicione o arquivo de estilos específico para a seção "Sobre"
import minhaFoto from '../assets/minhaFoto.jpg';  // Caminho para sua imagem (substitua pela imagem desejada)

function Sobre() {
  return (
    <section id="sobre" className="sobre-section text-center my-5">
      <div className="container">
        {/* Imagem de Perfil */}
        <div className="sobre-img">
          <img src={minhaFoto} alt="Minha Foto" className="img-fluid" />
        </div>

        {/* Título e Texto de Introdução */}
        <div className="sobre-info">
          <h2>Sobre Mim</h2>
          <p className="sobre-text">
            Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, ciência e inovação. 
            Ao longo da minha jornada acadêmica, descobri meu amor pela programação e pela criação de soluções 
            tecnológicas que podem transformar o mundo.
          </p>
          <p className="sobre-text">
            Atualmente, estou explorando diversas áreas da tecnologia, como segurança da informação, desenvolvimento 
            web e mobile, sempre buscando aprender e aplicar novas habilidades para impactar positivamente minha 
            comunidade e o mercado de TI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
