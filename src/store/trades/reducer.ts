import moment from 'moment';
import { ITradeActionTypes, ITradeStore } from '../../types';
import { SET_CANDLES, GET_TRADES, CLEAR_TRADES, CLEAR_CANDLES } from './types';
import { Time } from 'lightweight-charts';

export const initialState: ITradeStore = {
  trades: [],
  candles: [],
};

export const tradeReducer = (
  state = initialState,
  action: ITradeActionTypes
): ITradeStore => {
  switch (action.type) {
    case GET_TRADES:
      return {
        ...state,
        trades: [...state.trades.slice(-49), action.payload],
      };

    case CLEAR_TRADES:
      return { ...state, trades: [] };

    case CLEAR_CANDLES:
      return { ...state, candles: [] };

    case SET_CANDLES: {
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
