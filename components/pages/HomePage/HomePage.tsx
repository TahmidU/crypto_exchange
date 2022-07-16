import { Container } from "./styles";
import { ITradingPair } from "types/currency";
import { ReactElement } from "react";
import TradingPairs from "components/organisms/TradingPairs";
import useCurrencyPair from "./useCurrencyPair";

interface IHomePageProps {
  tradingPairsInfo: ITradingPair[];
}

export default function HomePage({
  tradingPairsInfo,
}: IHomePageProps): ReactElement {
  const {
    selectedTPairs,
    setSelectedTPairs,
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
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
        <div>{""}</div>
      </div>
    </Container>
  );
}
