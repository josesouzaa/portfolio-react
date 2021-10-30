import styled from "styled-components";

export const FooterObject = styled.footer`
  padding: 5rem 0;
  background: var(--black);
  color: var(--white);
  font-size: 1.4rem;
  text-align: center;

  a svg {
    fill: var(--white);
    background: var(--blue-h);
    clip-path: circle();
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    margin-bottom: 2rem;
    animation: arrow 0.8s infinite alternate;
    transition: 0.3s;
    &:hover {
      background: var(--blue-m);
    }
  }

  p a {
    color: var(--white);
    font-weight: 700;
  }

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(1rem);
    }
  }
`;
