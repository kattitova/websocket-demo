import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';
import { tradeReducer } from './trades/reducer';
import { historicalTradesReducer } from './historicalTrades/reducer';

export const rootReducer = combineReducers({
  trades: tradeReducer,
  historicalTrades: historicalTradesReducer,
});

export const store = createStore(
  rootReducer,
  undefined, //preloadedState ??
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
