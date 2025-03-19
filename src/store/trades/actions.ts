import { ITradeActionTypes, ITradeData } from './../../types/interfaces/trade';
import { CLEAR_CANDLES, CLEAR_TRADES, GET_TRADES, SET_CANDLES } from './types';

export const getTrades = (data: ITradeData): ITradeActionTypes => ({
  type: GET_TRADES,
  payload: data,
});

export const clearTrades = (): ITradeActionTypes => ({
  type: CLEAR_TRADES,
});

export const setCandles = (data: ITradeData): ITradeActionTypes => ({
  type: SET_CANDLES,
  payload: data,
});

export const clearCandles = (): ITradeActionTypes => ({
  type: CLEAR_CANDLES,
});
