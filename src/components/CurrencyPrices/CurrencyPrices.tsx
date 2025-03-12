import { useSelector } from 'react-redux';
import {
  selectPrices,
  selectSelectedSymbol,
} from '../../store/historicalTrades/selectors';
import { CurrencyCard } from '../CurrencyCard/CurrencyCard';
import * as S from './styled';
import { IApiPricesData } from '../../types';
import { PHRASES } from './../../constants';
import { convertToNumber } from '../../utils';

export const CurrencyPrices = () => {
  const prices = useSelector(selectPrices);
  const selectedSymbol = useSelector(selectSelectedSymbol);
  if (!prices) return <>{PHRASES.LOADING}</>;

  const currencyCards = prices.map((card: IApiPricesData) => {
    const { symbol, lastPrice, priceChangePercent } = card;
    return (
      <CurrencyCard
        key={symbol}
        symbol={symbol}
        price={convertToNumber(lastPrice)}
        percent={convertToNumber(priceChangePercent)}
        active={symbol === selectedSymbol ? true : false}
      />
    );
  });

  return <S.Wrapper>{currencyCards}</S.Wrapper>;
};
