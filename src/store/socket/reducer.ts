import { ISocketStore, IWebSocketActionTypes } from '../../types';
import * as types from './types';

const initialState: ISocketStore = {
  isConnected: false,
  error: null,
};

export const socketReducer = (
  state = initialState,
  action: IWebSocketActionTypes
) => {
  switch (action.type) {
    case types.WEBSOCKET_CONNECTED:
      return { ...state, isConnected: true };

    case types.WEBSOCKET_DISCONNECTED: {
      return { ...state, isConnected: false };
    }

    case types.WEBSOCKET_DATA_RECEIVED:
      return {
        ...state,
        isConnected: true,
      };

    case types.WEBSOCKET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
