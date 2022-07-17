import {
  AvgNumberView,
  Container,
  CurrencyInfoContainer,
  LineChartWrapper,
  SpecificCurrencyInfoContainer,
} from "./styles";
import { IBitstampTicker, ITradingPair } from "types/currency";
import { ReactElement, useCallback, useState } from "react";

import GJNumbersView from "components/molecules/GJNumbersView";
import TradingPairs from "components/organisms/TradingPairs";
import _ from "lodash";
import dynamic from "next/dynamic";
import useCryptoRequests from "./useCryptoRequests";

const LineChartStyle = dynamic(() => import("components/atoms/LineChart"), {
  ssr: false,
});

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
    trackLastPrice,
  } = useCryptoRequests();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleCurrencyPairClick = useCallback(
    _.debounce(
      (selected) => {
        handleCurrencyPairClick(selected), setSelectedCurrencyPair(selected);
      },
      ON_CLICK_INTERVAL,
      {}
    ),
    []
  );

  const lastPriceAverage =
    bitstampTickerValues?.last &&
    bitfinexTickerValues &&
    bitfinexTickerValues[0] &&
    bitfinexTickerValues[0][7] &&
    coinbaseTickerValues
      ? (parseFloat(bitstampTickerValues.last) +
          bitfinexTickerValues[0][7] +
          parseFloat(coinbaseTickerValues.data.rates["USD" as keyof {}])) /
        3
      : 0;

  return (
    <Container>
      <SpecificCurrencyInfoContainer>
        <div>
          <AvgNumberView
            title={`${selectedCurrencyPair} Avg`}
            counts={[[lastPriceAverage, "Average"]]}
          />
        </div>
        <LineChartWrapper>
          <LineChartStyle
            data={[
              {
                id: `${selectedCurrencyPair}`,
                color: "hsl(104, 70%, 50%)",
                data: trackLastPrice,
              },
            ]}
          />
        </LineChartWrapper>
      </SpecificCurrencyInfoContainer>
      <CurrencyInfoContainer>
        <div>
          <TradingPairs
            tradingPairs={tradingPairsInfo}
            onClick={(selected: string) => {
              debouncedHandleCurrencyPairClick(selected);
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
      </CurrencyInfoContainer>
    </Container>
  );
}
