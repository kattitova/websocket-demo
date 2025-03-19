import { useSelector } from 'react-redux';
import { FORMAT_DATE, PHRASES } from '../../constants';
import moment from 'moment';
import * as S from './styled';
import { CurrencyInfo } from '../CurrencyInfo';
import { selectTrade } from '../../store/trades/selectors';

export const LastTrade = () => {
  const tradeData = useSelector(selectTrade);
  const tradeDataLength = tradeData.length - 1;
  const currentTradeData = tradeData[tradeDataLength];
  const tradeTime = moment(currentTradeData.T).format(FORMAT_DATE.REGULAR);
  const currencyPrice = parseFloat(currentTradeData.p).toFixed(2);

  return (
    <S.Wrapper>
      <S.InfoBlock>
        <h2>{PHRASES.LAST_TRADE}</h2>
        <S.TimeText>{tradeTime}</S.TimeText>
      </S.InfoBlock>
      <S.InfoBlock>
        <CurrencyInfo />
        <S.CurrencyPrice $color={currentTradeData.m ? 'red' : 'green'}>
          {currencyPrice} USDT
        </S.CurrencyPrice>
      </S.InfoBlock>
    </S.Wrapper>
  );
};
