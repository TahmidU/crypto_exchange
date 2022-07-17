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
import { ResponsiveLine } from "@nivo/line";
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
      <SpecificCurrencyInfoContainer>
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
        <LineChartWrapper>
          <LineChartStyle
            data={[
              {
                id: "BTC/USD",
                color: "hsl(104,70%,50%)",
                data: [
                  { x: 0, y: 0 },
                  { x: 5, y: 25 },
                  { x: 10, y: 100 },
                  { x: 15, y: 225 },
                ],
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
      </CurrencyInfoContainer>
    </Container>
  );
}
