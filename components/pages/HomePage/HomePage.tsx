import { IBitstampTicker, ITradingPair } from "types/currency";
import { ReactElement, useCallback, useState } from "react";

import { Container } from "./styles";
import GJNumbersView from "components/molecules/GJNumbersView";
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
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState("");
  const {
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
    handleCurrencyPairClick,
  } = useCryptoRequests();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleCurrencyPairClick = useCallback(
    _.debounce(
      (selected) => {
        handleCurrencyPairClick(selected);
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
          <TradingPairs
            tradingPairs={tradingPairsInfo}
            onClick={(selected: string) => {
              debouncedHandleCurrencyPairClick(selected),
                setSelectedCurrencyPair(selected);
            }}
          />
        </div>
        <div>
          {bitstampTickerValues && (
            <GJNumbersView
              title={selectedCurrencyPair}
              counts={Object.keys(bitstampTickerValues).map((_key) => [
                Number(bitstampTickerValues[_key as keyof IBitstampTicker]),
                _key,
              ])}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
