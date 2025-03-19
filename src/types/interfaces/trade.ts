import { Time } from 'lightweight-charts';
import {
  CLEAR_CANDLES,
  CLEAR_TRADES,
  GET_TRADES,
  SET_CANDLES,
} from '../../store/trades/types';

export interface ITradeData {
  e: string; // Event type
  E: number; // Event time (timestamp)
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  T: number; // Trade time (timestamp)
  m: boolean; // Is the buyer the market maker?
  M: boolean;
}

export interface ITradeCandle {
  time: Time;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

export interface ITradeStore {
  trades: ITradeData[];
  candles: ITradeCandle[];
}

export interface IGetTradesAction {
  type: typeof GET_TRADES;
  payload: ITradeData;
}

export interface IClearTrades {
  type: typeof CLEAR_TRADES;
}

export interface ISetCandlesAction {
  type: typeof SET_CANDLES;
  payload: ITradeData;
}

export interface IClearCandlesAction {
  type: typeof CLEAR_CANDLES;
}

export type ITradeActionTypes =
  | IGetTradesAction
  | IClearTrades
  | ISetCandlesAction
  | IClearCandlesAction;
