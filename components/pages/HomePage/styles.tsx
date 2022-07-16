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

    p {
      ${({ theme }) => theme.fonts.main.bigger};
      text-align: center;
      font-weight: bold;
    }

    > div:first-child {
      justify-self: center;
      align-self: center;
    }
  }
`;
Container.displayName = "Container";

export const AvgNumberView = styled(GJNumbersView)`
  > div:last-child {
    grid-template-columns: 1fr;
  }
`;
AvgNumberView.displayName = "AvgNumberView";
