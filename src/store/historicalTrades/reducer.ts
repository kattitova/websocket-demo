import {
  IDataActionTypes,
  IHistoricalTradesStore,
} from '../../types/interfaces/historicalTrades';
import * as constants from '../../constants';
import * as types from './types';
import { parseChartData } from '../../utils';

const initialState: IHistoricalTradesStore = {
  symbols: constants.symbols,
  selectedSymbol: 'BTCUSDT',
  selectedInterval: '1d',
  prices: {
    data: [],
    isLoading: false,
    error: null,
  },
  candles: {
    data: [],
    isLoading: false,
    error: null,
  },
};

type DataKeys = keyof Pick<IHistoricalTradesStore, 'candles' | 'prices'>;

export const historicalTradesReducer = (
  state = initialState,
  action: IDataActionTypes
): IHistoricalTradesStore => {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        [action.key]: {
          ...state[action.key as DataKeys],
          isLoading: true,
          error: null,
        },
      };
    case types.GET_DATA_SUCCESS: {
      const { key, data } = action.payload;
      const newData = key === 'candles' ? parseChartData(data) : data;

      return {
        ...state,
        [key]: {
          ...state[key as DataKeys],
          data: newData,
          isLoading: false,
          error: null,
        },
      };
    }
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key as DataKeys],
          isLoading: false,
          error: action.payload.error,
        },
      };
    case types.SET_SELECTED_SYMBOL:
      return {
        ...state,
        selectedSymbol: action.payload,
      };
    default:
      return state;
  }
};
