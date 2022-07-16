import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
} from "types/currency";
import { useEffect, useState } from "react";

import { debounce } from "utils";
import useAuth from "hooks/useAuth";

export default function useCryptoRequests() {
  const [selectedTPairs, setSelectedTPairs] = useState<string>();

  const [bitstampTickerValues, setBitstampTickerValues] = useState<
    IBitstampTicker
  >();
  const [bitfinexTickerValues, setBitfinexTickerValues] = useState<
    BitfinexTicker
  >();
  const [coinbaseTickerValues, setCoinbaseTickerValues] = useState<
    ICoinbaseTicker
  >();

  const { api } = useAuth();

  useEffect(() => {
    if (selectedTPairs) {
      const formattedCurrencyPair = selectedTPairs
        .split("/")
        .join("")
        .toLowerCase();
      getBitstampTickerInfo(formattedCurrencyPair);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTPairs]);

  function getBitstampTickerInfo(currencyPair: string) {
    api
      .get(`ticker/bitstamp/${currencyPair}`)
      .then((res) => {
        setBitstampTickerValues(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return {
    selectedTPairs,
    setSelectedTPairs: debounce(setSelectedTPairs),
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
  };
}
