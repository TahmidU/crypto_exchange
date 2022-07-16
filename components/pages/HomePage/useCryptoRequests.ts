import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
} from "types/currency";
import { useEffect, useState } from "react";

import useAuth from "hooks/useAuth";

export default function useCryptoRequests() {
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

  function handleCurrencyPairClick(selected: string) {
    const formattedCurrencyPair = selected.split("/").join("").toLowerCase();
    getBitstampTickerInfo(formattedCurrencyPair);
  }

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
    handleCurrencyPairClick,
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
  };
}
