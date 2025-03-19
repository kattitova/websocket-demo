import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getTradeState = (state: RootState) => state.trades;

export const selectTrade = createSelector(
  getTradeState,
  (state) => state.trades
);

// export const selectIsConnected = createSelector(
//   getTradeState,
//   (state) => state.isConnected
// );

export const selectCandlesNow = createSelector(
  getTradeState,
  (state) => state.candles
);
