import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getHistoricalTradesStore = (state: RootState) =>
  state.historicalTrades;

export const selectSymbols = createSelector(
  getHistoricalTradesStore,
  (state) => state.symbols
);

export const selectSelectedSymbol = createSelector(
  getHistoricalTradesStore,
  (state) => state.selectedSymbol
);

export const selectSelectedInterval = createSelector(
  getHistoricalTradesStore,
  (state) => state.selectedInterval
);

export const selectPricesStore = createSelector(
  getHistoricalTradesStore,
  (state) => state.prices
);
export const selectPrices = createSelector(
  selectPricesStore,
  (state) => state.data
);
export const selectPricesIsLoading = createSelector(
  selectPricesStore,
  (state) => state.isLoading
);

export const selectCandlesStore = createSelector(
  getHistoricalTradesStore,
  (state) => state.candles
);
export const selectCandles = createSelector(
  selectCandlesStore,
  (state) => state.data
);
export const selectCandlesIsLoading = createSelector(
  selectCandlesStore,
  (state) => state.isLoading
);
