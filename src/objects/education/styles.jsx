import styled from "styled-components";

export const EducationObject = styled.section`
  padding: 7rem 0;
  background: var(--black);
  color: var(--white);

  h1 {
    ${({ theme }) => theme.mixins.h1(theme.white)}
  }

  > div > div {
    display: grid;
    grid-template-columns: minmax(29rem, 40rem) minmax(29rem, 40rem);
    gap: 4rem;
    justify-content: center;

    ${({ theme }) =>
      theme.d("m", "grid-template-columns: minmax(29rem, 40rem)")}
    ${({ theme }) =>
      theme.d("s", "grid-template-columns: minmax(27rem, 40rem);")}
  }
`;
