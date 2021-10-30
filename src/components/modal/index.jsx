import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalItem } from "./styles";

const Modal = ({ item, setOpenModal, openModal }) => (
  <ModalItem
    onClick={(event) => {
      if (event.target === event.currentTarget) setOpenModal(!openModal);
    }}
  >
    <div>
      <img src={item.previewgif} alt={item.titulo} />
      <h1 className="title">{item.titulo}</h1>
      <ul>
        <li>
          <span>Descrição:</span>
          {item.descricao}
        </li>
        <li>
          <span>Tecnologias:</span>
          {item.tecnologias}
        </li>
        <li>
          <span>Repositório:</span>
          <a href={item.repositorio} target="_blank" rel="noreferrer">
            Clique para ver o repositório.
          </a>
        </li>
        <li>
          <span>Deploy:</span>
          <a href={item.deployments} target="_blank" rel="noreferrer">
            Clique para visualizar a página.
          </a>
        </li>
      </ul>
      <AiOutlineClose onClick={() => setOpenModal(!openModal)} />
    </div>
  </ModalItem>
);
export default Modal;
