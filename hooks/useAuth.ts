import axios from "axios";

export default function useAuth() {
  const coinbaseApi = axios.create({ baseURL: `https://api.coinbase.com/v2/` });
  const bitfinexApi = axios.create({
    baseURL: `https://api-pub.bitfinex.com/v2/`,
  });
  const bitstampApi = axios.create({
    baseURL: `https://www.bitstamp.net/api/v2/`,
  });

  return {
    coinbaseApi,
    bitfinexApi,
    bitstampApi,
  };
}
