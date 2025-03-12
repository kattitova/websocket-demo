import { Time } from 'lightweight-charts';

export interface IApiPricesParams {
  symbols: string;
}

export interface IApiChartParams {
  symbol: string;
  interval: string;
  limit: number;
  startTime: number;
  endTime: number;
}

export interface IApiParams<T> {
  params: T;
}

export interface IApiPricesData {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface IApiChartData {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  closeTime: number;
  quoteAssetVolume: number;
  numberOfTrades: number;
  takerBuyBaseVolume: number;
  takerBuyQuoteVolume: number;
}
