import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  ContactContent,
  ContactForm,
  ContactObject,
  // eslint-disable-next-line prettier/prettier
  ContactWrapper
} from "./styles";

const Contact = () => (
  <ContactObject className="container" id="#contato" data-section="contato">
    <h1>Contato</h1>
    <ContactWrapper>
      <ContactContent>
        <h2>Informações</h2>
        <ol>
          <li>
            <MdLocationOn alt="Localização" />
            Taboão da Serra - São Paulo
          </li>
          <li>
            <MdEmail alt="email" />
            josee.souzaaa@gmail.com
          </li>
        </ol>
        <h2>Redes</h2>
        <ul>
          <li>
            <a
              href="https://github.com/josesouzaa"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jose-de-souza/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin alt="Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511942454601?text=Olá,%20José!%20Tudo%20bem?"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp alt="Whatsapp" />
            </a>
          </li>
        </ul>
      </ContactContent>
      <ContactForm
        action="https://formsubmit.co/joseesouzaaa@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            name="nome"
            id="nome"
            type="text"
            placeholder="Nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="mensagem">Escreva sua mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            rows="5"
            placeholder="Escreva sua mensagem"
          />
        </div>
        <button type="submit">Enviar</button>
      </ContactForm>
    </ContactWrapper>
  </ContactObject>
);

export default Contact;
