import { useSelector } from 'react-redux';
import { FORMAT_DATE, PHRASES } from '../../constants';
import { selectTrade } from '../../store/trades/selectors';
import { ITradeData } from '../../types';
import moment from 'moment';
import * as S from './styled';
import { CurrencyInfo } from '../CurrencyInfo';

export const LastTrade = () => {
  const tradeData: ITradeData[] = useSelector(selectTrade);

  if (!tradeData.length) return;
  const tradeDataLength = tradeData.length - 1;
  const currentTradeData = tradeData[tradeDataLength];
  const tradeTime = moment(currentTradeData.T).format(FORMAT_DATE.REGULAR);

  return (
    <S.Wrapper>
      <div>
        <h2>{PHRASES.LAST_TRADE}</h2>
        <span>{tradeTime}</span>
      </div>
      <div>
        <CurrencyInfo />
        <p>
          {tradeData ? (
            <strong style={{ color: currentTradeData.m ? 'red' : 'green' }}>
              {parseFloat(currentTradeData.p).toFixed(2)} USDT
            </strong>
          ) : (
            PHRASES.LOADING
          )}{' '}
        </p>
      </div>
    </S.Wrapper>
  );
};
