import GJNumbersView from "components/molecules/GJNumbersView";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  min-height: 100vh;
  padding: 1rem;

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > div:last-child {
    display: grid;
    grid-template-rows: 40% 60%;

    > div:first-child {
      justify-self: center;
      align-self: center;
      width: 100%;
      display: flex;
    }

    p {
      ${({ theme }) => theme.fonts.main.bigger};
      text-align: center;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 1248px) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > div:first-child {
      margin-bottom: 2rem;
    }

    > div:last-child {
      display: flex;
      flex-direction: column;

      > div:first-child {
        justify-content: center;
        margin-bottom: 2rem;
      }
    }
  }

  /*@media only screen and (max-width: 672px) {
    > div:last-child > div:last-child > div:first-child > div:last-child {
      grid-template-columns: 1fr 1fr;
    }
  }*/
`;
Container.displayName = "Container";

export const AvgNumberView = styled(GJNumbersView)`
  > div:last-child {
    grid-template-columns: 1fr;
  }
`;
AvgNumberView.displayName = "AvgNumberView";
