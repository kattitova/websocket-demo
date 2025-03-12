import * as types from '../../store/historicalTrades/types';
import { IApiChartData, IApiPricesData } from './api';

export interface IStore<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
}

// export interface ICandlesData {
//   selectedSymbol: string;
//   selectedInterval: string;
//   candlesData: number[];
// }

// export interface ILineChart {
//   selectedSymbol: string;
//   selectedInterval: string;
//   lineChartData: number[];
// }

export interface IHistoricalTradesStore {
  symbols: string[];
  selectedSymbol: string;
  selectedInterval: string;
  prices: IStore<IApiPricesData[]>;
  candles: IStore<IApiChartData[]>;
  //lineChart: IStore<ILineChart>;
}

export interface IDataRequestAction {
  type: typeof types.GET_DATA_REQUEST;
  key: keyof IHistoricalTradesStore;
}

export interface IDataSuccessAction<T> {
  type: typeof types.GET_DATA_SUCCESS;
  payload: { data: T[]; key: keyof IHistoricalTradesStore };
}

export interface IDataFailureAction {
  type: typeof types.GET_DATA_FAILURE;
  payload: { error: string; key: keyof IHistoricalTradesStore };
}

export interface ISetSelectedSymbol {
  type: typeof types.SET_SELECTED_SYMBOL;
  payload: string;
}

export type IDataActionTypes<T = null> =
  | IDataRequestAction
  | IDataSuccessAction<T>
  | IDataFailureAction
  | ISetSelectedSymbol;
