import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { IWebSocketActionTypes } from '../../types';
import { AppDispatch, RootState } from '../store';
import * as types from './types';
import {
  webSocketDataReceived,
  webSocketDisconnected,
  webSocketError,
} from './actions';
import {
  clearCandles,
  clearTrades,
  getTrades,
  setCandles,
} from '../trades/actions';

export const socketMiddleware: Middleware = (
  store: MiddlewareAPI<AppDispatch, RootState>
) => {
  let socket: WebSocket | null = null;
  let url: string;

  return (next: AppDispatch) => (action: IWebSocketActionTypes) => {
    const manualDisconnectSocket = () => {
      socket.close();
      store.dispatch(clearTrades());
      store.dispatch(clearCandles());
    };

    switch (action.type) {
      case types.WEBSOCKET_CONNECTED: {
        if (socket && url) {
          console.log(`Closing previous WebSocket: ${url}`);
          socket.onmessage = null;
          socket.onclose = null;
          socket.onerror = null;
          socket.close();
          store.dispatch(webSocketDisconnected());
        }

        socket = new WebSocket(action.payload);

        socket.onopen = () => {
          url = action.payload;
          console.log(`WebSocket connected ${url}`);
        };

        socket.onmessage = (event) => {
          if (socket?.readyState !== WebSocket.OPEN) return;

          const response = JSON.parse(event.data);
          store.dispatch(webSocketDataReceived());
          store.dispatch(getTrades(response));
          store.dispatch(setCandles(response));
        };

        socket.onerror = (event) => {
          console.error(`WebSocket error: ${url}`, event);
          store.dispatch(webSocketError(`WebSocket error: ${url}`));
        };

        socket.onclose = (event) => {
          console.log(
            `WebSocket closed: ${url}, code: ${event.code}, reason: ${event.reason}`
          );
          store.dispatch(webSocketDisconnected());
        };

        break;
      }

      case types.WEBSOCKET_DISCONNECTED: {
        if (socket) {
          console.log(`Manually closing WebSocket: ${url}`);
          socket.close();
          store.dispatch(clearTrades());
          store.dispatch(clearCandles());
        }
        return next(action);
      }

      default:
        return next(action);
    }
  };
};
