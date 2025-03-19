import { IWebSocketActionTypes } from '../../types';
import * as types from './types';

export const webSocketConnected = (url: string): IWebSocketActionTypes => ({
  type: types.WEBSOCKET_CONNECTED,
  payload: url,
});

export const webSocketDisconnected = (): IWebSocketActionTypes => ({
  type: types.WEBSOCKET_DISCONNECTED,
});

export const webSocketDataReceived = (): IWebSocketActionTypes => ({
  type: types.WEBSOCKET_DATA_RECEIVED,
});

export const webSocketError = (error: string): IWebSocketActionTypes => ({
  type: types.WEBSOCKET_ERROR,
  payload: error,
});
