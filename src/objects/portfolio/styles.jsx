import styled from "styled-components";

export const PortfolioObject = styled.section`
  background: var(--black);
  padding: 7rem 0;

  > div h1 {
    ${({ theme }) => theme.mixins.h1(theme.white)}
  }
`;

export const PortfolioWrapper = styled.div`
  column-count: 3;
  column-gap: 2rem;

  ${({ theme }) => theme.d("m", "column-count: 2;")}
  ${({ theme }) => theme.d("s", "column-count: 1;")}
`;
