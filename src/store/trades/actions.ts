import { IWebSocketActionTypes } from '../../types';
import {
  UPDATE_CANDLES,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DATA_RECEIVED,
  WEBSOCKET_DISCONNECTED,
} from './types';
import { ITradeData } from './../../types/interfaces/trade';

export const webSocketConnected = (
  socket: WebSocket | null
): IWebSocketActionTypes => ({
  type: WEBSOCKET_CONNECTED,
  payload: socket,
});

export const webSocketDisconnected = (): IWebSocketActionTypes => ({
  type: WEBSOCKET_DISCONNECTED,
});

export const webSocketDataReceived = (
  data: ITradeData
): IWebSocketActionTypes => ({
  type: WEBSOCKET_DATA_RECEIVED,
  payload: data,
});

export const updateCandles = (data: ITradeData): IWebSocketActionTypes => ({
  type: UPDATE_CANDLES,
  payload: data,
});
