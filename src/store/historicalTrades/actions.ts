import {
  IDataActionTypes,
  IHistoricalTradesStore,
} from '../../types/interfaces/historicalTrades';
import * as types from './types';

export const getDataRequest = (
  key: keyof IHistoricalTradesStore
): IDataActionTypes => ({
  type: types.GET_DATA_REQUEST,
  key,
});

export const getDataSuccess = <T>(data: {
  data: T[];
  key: keyof IHistoricalTradesStore;
}): IDataActionTypes<T> => ({
  type: types.GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (
  error: string,
  key: keyof IHistoricalTradesStore
): IDataActionTypes => ({
  type: types.GET_DATA_FAILURE,
  payload: { error, key },
});

export const setSelectedSymbol = (symbol: string): IDataActionTypes => ({
  type: types.SET_SELECTED_SYMBOL,
  payload: symbol,
});
