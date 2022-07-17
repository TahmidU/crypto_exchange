import GJNumbersView from "components/molecules/GJNumbersView";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  min-height: 100vh;
  padding: 1rem;

  @media only screen and (max-width: 1248px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
Container.displayName = "Container";

export const SpecificCurrencyInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1248px) {
    margin-bottom: 2rem;
  }
`;
SpecificCurrencyInfoContainer.displayName = "SpecificCurrencyInfoContainer";

export const CurrencyInfoContainer = styled.div`
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

  @media only screen and (max-width: 1248px) {
    display: flex;
    flex-direction: column;

    > div:first-child {
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
`;
CurrencyInfoContainer.displayName = "CurrencyInfoContainer";

export const AvgNumberView = styled(GJNumbersView)`
  > div:last-child {
    grid-template-columns: 1fr;
  }
`;
AvgNumberView.displayName = "AvgNumberView";
