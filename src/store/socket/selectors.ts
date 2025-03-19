import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getSocketState = (state: RootState) => state.socket;

export const selectIsConnected = createSelector(
  getSocketState,
  (state) => state.isConnected
);
