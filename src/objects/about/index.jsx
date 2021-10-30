import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Perfil from "../../../img/perfil.jpg";
import { AboutLinks, AboutObject, AboutText } from "./styles";

const About = () => (
  <AboutObject id="sobre" className="container" data-section="sobre">
    <div>
      <img src={Perfil} alt="José de Souza" />

      <div>
        <AboutText>
          <p>
            Bem-vindo! Eu me chamo José de Souza, tenho 24 anos e sou bacharel
            em Jornalismo.
          </p>
          <br />
          <p>
            Sou um profissional com 4 anos de experiência na área de
            comunicação, que vem buscando uma transição de carreira. Em 2021
            iniciei meus estudos em tecnologia, focado em aprender as linguagem
            ligadas ao front-end.
          </p>
        </AboutText>

        <AboutLinks>
          <div>
            <h2>Me encontre na internet</h2>
            <a
              href="https://github.com/josesouzaa"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-de-souza/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin alt="Linkedin" />
            </a>
            <a
              href="https://wa.me/5511942454601?text=Olá,%20José!%20Tudo%20bem?"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp alt="Whatsapp" />
            </a>
          </div>
          <div />
          <div>
            <h2>Entre em contato</h2>
            <p>josee.souzaaa@gmail.com</p>
            <a href="#contato">Contato</a>
          </div>
        </AboutLinks>
      </div>
    </div>
  </AboutObject>
);

export default About;
