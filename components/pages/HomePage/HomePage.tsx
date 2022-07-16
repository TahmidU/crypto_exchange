import { ReactElement, useCallback } from "react";

import { Container } from "./styles";
import { ITradingPair } from "types/currency";
import TradingPairs from "components/organisms/TradingPairs";
import _ from "lodash";
import useCryptoRequests from "./useCryptoRequests";

interface IHomePageProps {
  tradingPairsInfo: ITradingPair[];
}

const ON_CLICK_INTERVAL = 1000;

export default function HomePage({
  tradingPairsInfo,
}: IHomePageProps): ReactElement {
  const {
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
    handleTradingPairClick,
  } = useCryptoRequests();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleTradingPairClick = useCallback(
    _.debounce(
      (selected) => {
        handleTradingPairClick(selected);
      },
      ON_CLICK_INTERVAL,
      {}
    ),
    []
  );

  return (
    <Container>
      <div>Test</div>
      <div>
        <div>
          {tradingPairsInfo ? (
            <TradingPairs
              tradingPairs={tradingPairsInfo}
              onClick={(selected: string) =>
                debouncedHandleTradingPairClick(selected)
              }
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
