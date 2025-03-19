import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';
import { tradeReducer } from './trades/reducer';
import { historicalTradesReducer } from './historicalTrades/reducer';
import { socketReducer } from './socket/reducer';
import { socketMiddleware } from './socket/socketMiddleware';

export const rootReducer = combineReducers({
  trades: tradeReducer,
  historicalTrades: historicalTradesReducer,
  socket: socketReducer,
});

export const store = createStore(
  rootReducer,
  undefined, //preloadedState ??
  applyMiddleware(thunk, socketMiddleware)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
