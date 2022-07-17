import GJNumbersView from "components/molecules/GJNumbersView";
import { ResponsiveLine } from "@nivo/line";
import dynamic from "next/dynamic";
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
  flex-direction: column;
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

const baseLineChartWidth = "800px";
const baseLineChartHeight = "500px";
export const LineChartWrapper = styled.div`
  width: ${baseLineChartWidth};
  height: ${baseLineChartHeight};
  margin-top: 1rem;

  @media only screen and (max-width: 1428px) {
    width: calc(${baseLineChartWidth} * 0.8);
    height: calc(${baseLineChartHeight} * 0.8);
  }

  @media only screen and (max-width: 672px) {
    width: calc(${baseLineChartWidth} * 0.6);
    height: calc(${baseLineChartHeight} * 0.6);
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
LineChartWrapper.displayName = "LineChartWrapper";

export const LineChartStyle = styled(ResponsiveLine)``;
LineChartStyle.displayName = "LineChartStyle";
