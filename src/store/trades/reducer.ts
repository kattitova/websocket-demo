import moment from 'moment';
import { ITradeStore, IWebSocketActionTypes } from '../../types';
import {
  UPDATE_CANDLES,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DATA_RECEIVED,
  WEBSOCKET_DISCONNECTED,
} from './types';
import { Time } from 'lightweight-charts';

export const initialState: ITradeStore = {
  trades: [],
  candles: [],
  isConnected: false,
  socket: null,
};

export const tradeReducer = (
  state = initialState,
  action: IWebSocketActionTypes
): ITradeStore => {
  switch (action.type) {
    case WEBSOCKET_CONNECTED:
      return { ...state, isConnected: true, socket: action.payload };
    case WEBSOCKET_DISCONNECTED:
      return {
        ...state,
        isConnected: false,
        socket: null,
        trades: [],
        candles: [],
      };
    case WEBSOCKET_DATA_RECEIVED:
      return {
        ...state,
        isConnected: true,
        trades: [...state.trades.slice(-49), action.payload],
      };
    case UPDATE_CANDLES: {
      const trade = action.payload;
      const tradeTime = moment(trade.T).startOf('minute').unix();
      const updatedCandles = [...state.candles];

      const lastCandle = updatedCandles[updatedCandles.length - 1];

      if (lastCandle && lastCandle.time === tradeTime) {
        // Update current candle
        lastCandle.high = Math.max(lastCandle.high, parseFloat(trade.p));
        lastCandle.low = Math.min(lastCandle.low, parseFloat(trade.p));
        lastCandle.close = parseFloat(trade.p);
        lastCandle.volume += parseFloat(trade.q);
      } else {
        // Add new candle
        if (!updatedCandles.some((candle) => candle.time === tradeTime)) {
          updatedCandles.push({
            time: tradeTime as Time,
            open: parseFloat(trade.p),
            high: parseFloat(trade.p),
            low: parseFloat(trade.p),
            close: parseFloat(trade.p),
            volume: parseFloat(trade.q),
          });
        }
      }

      // Delete oldest candles, save only 30 candles
      if (updatedCandles.length > 30) {
        updatedCandles.shift();
      }

      return { ...state, candles: updatedCandles };
    }
    default:
      return state;
  }
};
