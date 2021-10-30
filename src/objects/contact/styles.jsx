import styled from "styled-components";

export const ContactObject = styled.section`
  padding: 7rem 0;

  h1 {
    ${({ theme }) => theme.mixins.h1()}
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;

  ${({ theme }) => theme.d("m", "flex-direction: column;")}
  ${({ theme }) => theme.d("s", "flex-direction: column;")}
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  li {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  ul {
    display: flex;
    gap: 1.5rem;

    svg {
      fill: var(--black);
      width: 3.5rem;
      height: 3.5rem;
      transition: 0.3s;

      &:hover {
        fill: var(--blue-m);
      }
    }
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(14rem, 29rem));
  gap: 1.5rem;

  ${({ theme }) => theme.d("m", "grid-template-columns: minmax(27rem, 1fr);")}
  ${({ theme }) => theme.d("s", "grid-template-columns: minmax(27rem, 1fr);")}

  div {
    label {
      display: block;
      width: 100%;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input {
      display: block;
      width: 100%;
      font-size: 1.4rem;
      padding: 0.5rem;
    }

    textarea {
      width: 100%;
      font-size: 1.4rem;
      padding: 0.5rem;
    }
  }

  div:nth-child(1) {
    grid-column: 1 / 2;

    ${({ theme }) => theme.d("m", "grid-column: auto;")}
    ${({ theme }) => theme.d("s", "grid-column: auto;")}
  }

  div:nth-child(2) {
    grid-column: 2 / 3;

    ${({ theme }) => theme.d("m", "grid-column: auto;")}
    ${({ theme }) => theme.d("s", "grid-column: auto;")}
  }

  div:nth-child(3) {
    grid-column: 1 / 3;

    ${({ theme }) => theme.d("m", "grid-column: auto;")}
    ${({ theme }) => theme.d("s", "grid-column: auto;")}
  }

  button {
    display: block;
    width: 10rem;
    grid-column: 1 / 2;

    ${({ theme }) => theme.mixins.btn(1.6, theme.white, 500)}

    background: var(--blue-h);
    border: none;
    transition: 0.3s;

    &:hover {
      background: var(--blue-m);
    }
  }
`;
