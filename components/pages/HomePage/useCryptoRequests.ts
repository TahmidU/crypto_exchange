import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
} from "types/currency";
import { useEffect, useState } from "react";

import useAuth from "hooks/useAuth";

export default function useCryptoRequests() {
  const [btcusdBitstampTickerValues, setBtcusdBitstampTickerValues] = useState<
    IBitstampTicker
  >();
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
    getBitstampTickerInfo("btcusd").then((data) =>
      setBtcusdBitstampTickerValues(data)
    );
    getBitfinexTickerInfo("tBTCUSD").then((data) =>
      setBitfinexTickerValues(data)
    );
    getCoinbaseTickerInfo("BTC").then((data) => setCoinbaseTickerValues(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCurrencyPairClick(selected: string) {
    const formattedCurrencyPair = selected.split("/").join("").toLowerCase();
    getBitstampTickerInfo(formattedCurrencyPair).then((data) =>
      setBitstampTickerValues(data)
    );
  }

  async function getCoinbaseTickerInfo(currency: string) {
    return await api
      .get(`ticker/coinbase/${currency}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  async function getBitfinexTickerInfo(currency: string) {
    return await api
      .get(`ticker/bitfinex/${currency}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  async function getBitstampTickerInfo(currency: string) {
    return await api
      .get(`ticker/bitstamp/${currency}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  return {
    handleCurrencyPairClick,
    btcusdBitstampTickerValues,
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
  };
}
