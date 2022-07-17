import { AvgNumberView, Container } from "./styles";
import { IBitstampTicker, ITradingPair } from "types/currency";
import { ReactElement, useCallback, useState } from "react";

import GJNumbersView from "components/molecules/GJNumbersView";
import TradingPairs from "components/organisms/TradingPairs";
import _ from "lodash";
import useCryptoRequests from "./useCryptoRequests";

interface IHomePageProps {
  tradingPairsInfo: ITradingPair[];
}

const ON_CLICK_INTERVAL = 1000;

/**                {(parseFloat(btcusdBitstampTickerValues.last) +
                  bitfinexTickerValues[0][7] +
                  parseFloat(
                    coinbaseTickerValues.data.rates["USD" as keyof {}]
                  )) /
                  3} */

export default function HomePage({
  tradingPairsInfo,
}: IHomePageProps): ReactElement {
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState("");
  const {
    btcusdBitstampTickerValues,
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
      <div>
        <div>
          {btcusdBitstampTickerValues &&
            bitfinexTickerValues &&
            coinbaseTickerValues && (
              <AvgNumberView
                title="BTC Avg"
                counts={[
                  [
                    (parseFloat(btcusdBitstampTickerValues.last) +
                      bitfinexTickerValues[0][7] +
                      parseFloat(
                        coinbaseTickerValues.data.rates["USD" as keyof {}]
                      )) /
                      3,
                    "Average",
                  ],
                ]}
              />
            )}
        </div>
      </div>
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
          {bitstampTickerValues ? (
            <GJNumbersView
              title={`${selectedCurrencyPair} (contents will update 1s after selecting a currency pair)`}
              counts={Object.keys(bitstampTickerValues).map((_key) => [
                Number(bitstampTickerValues[_key as keyof IBitstampTicker]),
                _key,
              ])}
            />
          ) : (
            <p>Please select a currency pair above</p>
          )}
        </div>
      </div>
    </Container>
  );
}
