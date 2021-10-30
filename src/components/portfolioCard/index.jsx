import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modal";

const FigureItem = styled.figure`
  margin: 0;
  display: flex;
  margin-bottom: 2rem;
  break-inside: avoid;
  position: relative;

  img {
    width: 100%;
    border-radius: 4px;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3;

    > * {
      transform: translateY(7rem);
      transition: transform 0.3s;
    }

    h2 {
      display: block;
      font-size: 2rem;
      color: var(--white);
    }

    p {
      display: block;
      font-size: 1.4rem;
      color: var(--white);
    }

    &:hover {
      opacity: 1;
    }

    &:hover > * {
      transform: translateY(0rem);
    }
  }
`;

const PortfolioCard = ({ title, img, item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <FigureItem>
        <img src={img} alt={title} />
        <div
          role="button"
          onClick={() => {
            setOpenModal(!openModal);
          }}
          aria-hidden="true"
        >
          <h2>{title}</h2>
          <p>Clique para expandir</p>
        </div>
      </FigureItem>

      {openModal && (
        <Modal item={item} setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
};

export default PortfolioCard;
