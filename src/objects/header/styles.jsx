import styled from "styled-components";

export const HeaderObject = styled.header`
  width: 100%;
  background: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &.scroll {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    background: rgba(249, 249, 249, 0.8);
  }

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    > a img {
      display: block;
      width: 200px;
    }
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  gap: 1rem;

  &.list-menu li a.ativo {
    color: var(--blue-m);
    &::after {
      content: "";
      display: block;
      position: absolute;
      margin-top: 0.5rem;
      width: 100%;
      height: 1px;
      background: var(--blue-m);
      transition: width 0.3s;
    }
  }

  li {
    a {
      color: var(--black);
      padding: 0.5rem;
      font-size: 1.4rem;
      font-weight: 500;
      transition: 0.3s;
      position: relative;

      &:hover {
        color: var(--blue-m);
      }
      &:hover::after {
        width: 100%;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        margin-top: 0.5rem;
        width: 0;
        height: 1px;
        background: var(--blue-m);
        transition: width 0.3s;
      }
    }
  }

  @media screen and (max-width: 760px) {
    display: none;

    &.show.scroll {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
      background: rgba(249, 249, 249, 0.8);
    }

    &.show {
      animation: show 0.3s forwards;

      position: absolute;
      top: 0;
      left: 0;
      margin-top: 5.5rem;

      display: flex;
      flex-direction: column;

      background: var(--white);
      width: 100%;

      li {
        padding: 1rem 0 1rem 2.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.03);

        &:last-child {
          padding-bottom: 2rem;
        }

        a {
          font-size: 1.6rem;
        }
      }
    }
  }

  @keyframes show {
    0% {
      transform: translateY(-10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Navegation = styled.nav`
  > button {
    display: none;
    border: none;
    cursor: pointer;
    background: var(--blue-m);
    border-radius: 0.3rem;
    transition: 0.3s;

    &:hover {
      background: var(--blue-h);
    }

    > svg {
      fill: var(--white);
      width: 2.5rem;
      height: 2.5rem;
      transform: translateY(2px);
    }

    @media screen and (max-width: 760px) {
      display: block;
    }
  }
`;
