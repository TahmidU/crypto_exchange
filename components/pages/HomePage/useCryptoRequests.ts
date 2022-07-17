import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
} from "types/currency";
import { useEffect, useState } from "react";

import { IChartPoints } from "types/chart";
import useAuth from "hooks/useAuth";

interface IIntervalLastPrice {
  currentTime: number;
  data: IChartPoints[];
}

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
  const [btcusdLastPrice, setBtcusdLastPrice] = useState<IIntervalLastPrice>({
    currentTime: 0,
    data: [],
  });

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

  useEffect(() => {
    const intervalReq = setInterval(() => {
      getBitstampTickerInfo("btcusd").then((data: IBitstampTicker) =>
        setBtcusdLastPrice((prev) => ({
          currentTime: prev.currentTime + 10,
          data: [...prev.data, { x: prev.currentTime, y: Number(data.last) }],
        }))
      );
    }, 10000);

    return () => clearInterval(intervalReq);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers

  function handleCurrencyPairClick(selected: string) {
    const formattedCurrencyPair = selected.split("/").join("").toLowerCase();
    getBitstampTickerInfo(formattedCurrencyPair).then((data) =>
      setBitstampTickerValues(data)
    );
  }

  // HTTP requests

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
    btcusdLastPrice: btcusdLastPrice.data,
  };
}
