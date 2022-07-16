import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
  ITradingPair,
} from "types/currency";
import { useEffect, useState } from "react";

import useAuth from "hooks/useAuth";

interface ITickerValues {
  bitstamp?: IBitstampTicker;
  bitfinex?: BitfinexTicker;
  coinbase?: ICoinbaseTicker;
}

export default function useCurrencyPair() {
  const [tradingPairsInfo, setTradingPairsInfo] = useState<ITradingPair[]>();
  const [tickerValues, setTickerValues] = useState<ITickerValues>();
  const [selectedTPairs, setSelectedTPairs] = useState<string>();
  const { bitfinexApi, bitstampApi, coinbaseApi } = useAuth();

  useEffect(() => {
    bitstampApi
      .get("trading-pairs-info")
      .then((res) => {
        setTradingPairsInfo(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tradingPairsInfo &&
      tradingPairsInfo[0] &&
      setSelectedTPairs(tradingPairsInfo[0].name);
  }, [tradingPairsInfo]);

  useEffect(() => {
    selectedTPairs &&
      getBitstampTickerInfo(selectedTPairs.split("/").join("").toLowerCase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTPairs]);

  function getBitstampTickerInfo(currencyPair: string) {
    bitstampApi
      .get(`ticker/${currencyPair}`)
      .then((res) => {
        setTickerValues((prev) => ({ ...prev, bitstamp: res.data }));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return {
    tradingPairsInfo,
    selectedTPairs,
    setSelectedTPairs,
    tickerValues,
  };
}
