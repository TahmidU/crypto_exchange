import { Container } from "./styles";
import { ReactElement } from "react";
import TradingPairs from "components/organisms/TradingPairs";
import useCurrencyPair from "./useCurrencyPair";

interface IHomePageProps {}

export default function HomePage({}: IHomePageProps): ReactElement {
  const {
    tradingPairsInfo,
    selectedTPairs,
    setSelectedTPairs,
    tickerValues,
  } = useCurrencyPair();

  return (
    <Container>
      <div>Test</div>
      <div>
        <div>
          {tradingPairsInfo ? (
            <TradingPairs
              tradingPairs={tradingPairsInfo}
              onClick={(selected: string) => setSelectedTPairs(selected)}
            />
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div>{tickerValues?.bitstamp?.bid || ""}</div>
      </div>
    </Container>
  );
}
