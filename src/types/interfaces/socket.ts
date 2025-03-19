import * as types from '../../store/socket/types';

export interface ISocketStore {
  isConnected: boolean;
  error: string | null;
}

export interface IWebSocketConnectedAction {
  type: typeof types.WEBSOCKET_CONNECTED;
  payload: string;
}

export interface IWebSocketDisconnectedAction {
  type: typeof types.WEBSOCKET_DISCONNECTED;
}

export interface IWebSocketDataReceivedAction {
  type: typeof types.WEBSOCKET_DATA_RECEIVED;
}

export interface IWebSocketError {
  type: typeof types.WEBSOCKET_ERROR;
  payload: string;
}

export type IWebSocketActionTypes =
  | IWebSocketConnectedAction
  | IWebSocketDisconnectedAction
  | IWebSocketDataReceivedAction
  | IWebSocketError;
