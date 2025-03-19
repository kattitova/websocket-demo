import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { useEffect } from 'react';
import { GET_PRICE_URL, PHRASES, WS_URL } from './constants';
import { getData } from './store/historicalTrades/thunks';
import {
  selectSelectedSymbol,
  selectSymbols,
} from './store/historicalTrades/selectors';
import { prisesParams } from './api/params';
import { IApiPricesParams } from './types';
import * as S from './styled';
import { CurrencyPrices } from './components/CurrencyPrices';
import { Statistic } from './components/Statistic';
// import { getTradeData } from './store/trades/thunks';
import { LastTrade } from './components/LastTrade';
import { TradesList } from './components/TradesList';
import { webSocketConnected } from './store/socket/actions';
import { selectIsConnected } from './store/socket/selectors';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const symbols = useSelector(selectSymbols);
  const selectedSymbol = useSelector(selectSelectedSymbol);
  const isConnected = useSelector(selectIsConnected);

  useEffect(() => {
    dispatch(
      getData<IApiPricesParams>(GET_PRICE_URL, 'prices', prisesParams(symbols))
    );
  }, []);

  useEffect(() => {
    dispatch(webSocketConnected(WS_URL(selectedSymbol)));
    //dispatch(getTradeData(WS_URL(selectedSymbol)));
  }, [selectedSymbol]);

  return (
    <S.App>
      <header>
        <S.Logo src='./logo.png' alt='logo' />
        <h1>{PHRASES.BINANCE_TRADES_DASHBOARD}</h1>
      </header>
      <main>
        <CurrencyPrices />
        <Statistic />
      </main>
      <aside>
        {isConnected ? (
          <>
            <LastTrade />
            <TradesList />
          </>
        ) : (
          <p>{PHRASES.LOADING}</p>
        )}
      </aside>
    </S.App>
  );
}

export default App;
