import {
  BitfinexTicker,
  IBitstampTicker,
  ICoinbaseTicker,
} from "types/currency";
import { useEffect, useState } from "react";

import { IChartPoints } from "types/chart";
import useAuth from "hooks/useAuth";

interface IIntervalLastPrice {
  currency: string;
  currentTime: number;
  data: IChartPoints[];
}

const GRAPH_INTERVAL_MS = 10000;

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

  const [trackLastPrice, setTrackLastPrice] = useState<IIntervalLastPrice>({
    currency: "",
    currentTime: 0,
    data: [],
  });

  const { api } = useAuth();

  useEffect(() => {
    if (trackLastPrice.currency === "") return;

    const intervalReq = setInterval(() => {
      getBitstampTickerInfo(trackLastPrice.currency).then(
        (data: IBitstampTicker) =>
          setTrackLastPrice((prev) => ({
            ...prev,
            currentTime: prev.currentTime + GRAPH_INTERVAL_MS / 1000,
            data: [...prev.data, { x: prev.currentTime, y: Number(data.last) }],
          }))
      );
    }, GRAPH_INTERVAL_MS);

    return () => {
      clearInterval(intervalReq);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackLastPrice.currency]);

  // Handlers

  function handleCurrencyPairClick(selected: string) {
    const formattedBitstampCurrency = selected
      .split("/")
      .join("")
      .toLowerCase();
    getBitstampTickerInfo(formattedBitstampCurrency).then((data) =>
      setBitstampTickerValues(data)
    );

    const formattedBitfinexCurrency = `t${selected
      .split("/")
      .join("")
      .toUpperCase()}`;
    getBitfinexTickerInfo(formattedBitfinexCurrency).then((data) =>
      setBitfinexTickerValues(data)
    );

    const formattedCoinbaseCurrency = selected.split("/")[0].toUpperCase();
    getCoinbaseTickerInfo(formattedCoinbaseCurrency).then((data) =>
      setCoinbaseTickerValues(data)
    );

    setTrackLastPrice({
      data: [],
      currency: formattedBitstampCurrency,
      currentTime: 0,
    });
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
    bitstampTickerValues,
    bitfinexTickerValues,
    coinbaseTickerValues,
    trackLastPrice: trackLastPrice.data,
  };
}
