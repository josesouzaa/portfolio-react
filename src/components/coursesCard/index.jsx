import React from "react";
import styled from "styled-components";

const Course = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 2rem;

  > p {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 10rem;
      height: 10rem;

      ${({ theme }) =>
        theme.d(
          "s",
          `width: 8rem;
           height: 8rem;`
        )}
    }

    > div {
      span {
        font-size: 1.2rem;
        background: var(--blue-m);
        padding: 0.3rem;
        border-radius: 0.5rem;
      }

      h2 {
        font-size: 1.6rem;
        font-weight: 500;
        margin: 1rem 0 0 0;
        line-height: 2.3rem;

        ${({ theme }) => theme.d("s", "font-size: 1.4rem;")}
      }

      p {
        color: var(--blue-m);
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }
`;

const CoursesCard = ({ status, title, inst, resumo, img }) => (
  <Course>
    <div>
      <img src={img} alt="Origamid" />
      <div>
        <span>{status}</span>
        <h2>{title}</h2>
        <p>{inst}</p>
      </div>
    </div>
    <p>{resumo}</p>
  </Course>
);

export default CoursesCard;
