import styled from "styled-components";

export const AboutObject = styled.section`
  > div {
    padding: 7rem 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    justify-items: center;
    align-items: center;

    ${({ theme }) => theme.d("m", "display: block;")}
    ${({ theme }) => theme.d("s", "display: block;")}

    > img {
      clip-path: circle();
      max-width: 70%;

      ${({ theme }) => theme.d("m", "display: none;")}
      ${({ theme }) => theme.d("s", "display: none;")}
    }
  }
`;

export const AboutText = styled.div`
  max-width: 90%;
  font-size: 1.6rem;
  line-height: 2.4rem;

  ${({ theme }) => theme.d("m", "max-width: 100%;")}
  ${({ theme }) => theme.d("s", "max-width: 100%;")}
`;

export const AboutLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;

  ${({ theme }) => theme.d("s", "flex-direction: column;")}

  > div > a > svg {
    width: 3.5rem;
    height: auto;
    fill: var(--black);
    margin-right: 1rem;
    transition: 0.3s;

    &:hover {
      fill: var(--blue-m);
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  > div:nth-child(1) a {
    display: inline-block;
  }

  > div:nth-child(2) {
    content: "";
    background: var(--black);
    width: 0.1rem;
    height: auto;

    ${({ theme }) =>
      theme.d(
        "s",
        `height: 0.1rem;
          width: 70%;`
      )}
  }

  > div:nth-child(3) {
    p {
      font-size: 1.4rem;
      font-weight: 300;
      padding-bottom: 2.5rem;
    }

    a {
      ${({ theme }) => theme.mixins.btn(1.4, theme.black, 600)}
      padding: 0.3rem 3rem;
      transition: 0.3s;

      &:hover {
        color: var(--blue-m);
        border-color: var(--blue-m);
      }
    }
  }
`;
