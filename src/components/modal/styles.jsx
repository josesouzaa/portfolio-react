import styled from "styled-components";

export const ModalItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: Min(120rem, 90vw);
    background: var(--white);
    color: var(--black);
    padding: 2rem;
    border-radius: 0.4rem;
    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "h1 h1" "img desc";

    ${({ theme }) =>
      theme.d(
        "m",
        `
      grid-template-columns: 1fr;
      grid-template-areas: "h1" "img" "desc";
    `
      )}
    ${({ theme }) =>
      theme.d(
        "s",
        `
      grid-template-columns: 1fr;
      grid-template-areas: "h1" "img" "desc";
    `
      )}

    img {
      width: 100%;
      grid-area: img;
    }

    h1.title {
      grid-area: h1;
      color: var(--black);

      ${({ theme }) => theme.mixins.h1()}

      font-size: 2.5rem;
      margin-bottom: 0;
      padding: 1rem 0;
    }

    ul {
      grid-area: desc;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        font-size: 1.4rem;
        line-height: 2rem;

        span {
          font-size: 1.4rem;
          font-weight: 500;
          margin-right: 0.5rem;
        }

        a {
          font-size: 1.4rem;
          color: var(--blue-h);
          transition: color 0.3s;

          &:hover {
            color: var(--blue-l);
          }
        }
      }
    }
  }

  svg {
    position: absolute;
    display: block;
    width: 4rem;
    height: 4rem;
    top: -11px;
    right: -11px;
    fill: var(--white);
    background: var(--blue-h);
    padding: 1rem;
    clip-path: circle();
    cursor: pointer;
    transition: background 0.3s;

    ${({ theme }) =>
      theme.d(
        "s",
        `
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
    `
      )}
    &:hover {
      background: var(--blue-m);
    }
  }
`;
