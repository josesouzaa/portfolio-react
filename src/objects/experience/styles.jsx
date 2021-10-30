import styled from "styled-components";

export const ExperienceObject = styled.section`
  padding: 7rem 0;

  h1 {
    ${({ theme }) => theme.mixins.h1()}
  }
`;

export const JobsWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .virta {
    ${({ theme }) =>
      theme.d(
        "s",
        `
    text-align: left;
    > div {
      justify-content: flex-start;
      > div {
        order: 1;
      }
    }
    `
      )}
  }
`;

export const JobContent = styled.div`
  max-width: 60rem;

  ${({ job }) =>
    job === "virta"
      ? `
    align-self: flex-end;
    text-align: right;
    `
      : ``}

  p {
    font-size: 1.4rem;
    line-height: 2.4rem;

    ${({ theme }) => theme.d("s", "margin-top: 1rem;")}
  }

  > div {
    ${({ job }) =>
      job === "box"
        ? `
    display: flex;
    align-items: center;
    gap: 1rem;`
        : `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    `}

    img {
      width: 10rem;
      height: 10rem;
      margin-bottom: 1rem;

      ${({ theme }) =>
        theme.d(
          "s",
          `width: 8rem;
           height: 8rem;`
        )}
    }

    > div {
      span {
        color: var(--white);
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
      }

      p {
        color: var(--blue-m);
        font-weight: 500;
      }
    }
  }
`;
