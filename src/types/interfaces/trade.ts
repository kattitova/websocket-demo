import { Time } from 'lightweight-charts';
import {
  UPDATE_CANDLES,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DATA_RECEIVED,
  WEBSOCKET_DISCONNECTED,
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
  isConnected: boolean;
  socket: WebSocket | null;
}

export interface IWebSocketConnectedAction {
  type: typeof WEBSOCKET_CONNECTED;
  payload: WebSocket | null;
}

export interface IWebSocketDisconnectedAction {
  type: typeof WEBSOCKET_DISCONNECTED;
}

export interface IWebSocketDataReceivedAction {
  type: typeof WEBSOCKET_DATA_RECEIVED;
  payload: ITradeData;
}

export interface IUpdateCandlesAction {
  type: typeof UPDATE_CANDLES;
  payload: ITradeData;
}

export type IWebSocketActionTypes =
  | IWebSocketConnectedAction
  | IWebSocketDisconnectedAction
  | IWebSocketDataReceivedAction
  | IUpdateCandlesAction;
