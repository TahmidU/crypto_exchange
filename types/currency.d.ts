export interface ITradingPair {
  trading: string;
  base_decimals: number;
  url_symbol: string;
  name: string;
  instant_and_market_orders: string;
  minimum_order: string;
  counter_decimals: number;
  description: string;
}

export interface IBitstampTicker {
  high: string;
  last: string;
  timestamp: string;
  bid: string;
  vwap: string;
  volume: string;
  low: string;
  ask: string;
  open: string;
}

export type BitfinexTicker = [
  [
    "string",
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]
];

export interface ICoinbaseTicker {
  data: {
    currency: string;
    rates: {
      [string]: string;
    };
  };
}
