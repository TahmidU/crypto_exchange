import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span:first-child {
    text-align: start;
    ${({ theme }) => theme.fonts.main.regular};
    font-weight: bold;
    margin: 0 0 2.5em 0;
  }

  > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    > div {
      align-self: center;
      justify-self: center;
    }
  }

  @media only screen and (max-width: 672px) {
    > div:last-child {
      grid-template-columns: 1fr 1fr;

      > div {
        margin-bottom: 1em;

        > span:first-child {
          ${({ theme }) => theme.fonts.main.big};
        }

        > span:last-child {
          ${({ theme }) => theme.fonts.main.regular};
        }
      }
    }
  }
`;
Container.displayName = "Container";
