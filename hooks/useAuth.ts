import axios from "axios";

/**
 * https://api.coinbase.com/v2/
 * https://api-pub.bitfinex.com/v2/
 * https://www.bitstamp.net/api/v2/
 */

export default function useAuth() {
  const api = axios.create({ baseURL: "api/" });

  return {
    api,
  };
}
