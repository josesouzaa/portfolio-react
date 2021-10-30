import styled from "styled-components";
import IntroBG from "../../../img/code-bg.jpg";

export const IntroObject = styled.section`
  background: url(${IntroBG}) no-repeat center center;
  background-size: cover;
  padding: 7rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }

  > div.container {
    position: relative;
    z-index: 10;

    color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    p {
      font-size: 2.4rem;
    }

    h1 {
      font-size: 3.6rem;
      font-weight: 700;
      text-align: center;

      ${({ theme }) => theme.d("s", "font-size: 2.8rem;")}
    }

    a {
      margin-top: 1.5rem;

      ${({ theme }) => theme.mixins.btn(1.6, theme.white, 500)}
      background: var(--blue-h);
      border: none;
      transition: 0.3s;

      &:hover {
        background: var(--blue-m);
      }
    }
  }
`;
