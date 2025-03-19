import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import * as S from './styled';
import { currencyList } from '../../constants';
import { setSelectedSymbol } from '../../store/historicalTrades/actions';
import { CurrencyLogo } from '../CurrencyLogo';

interface IProps {
  symbol: string;
  price: number;
  percent: number;
  active: boolean;
}

export const CurrencyCard: React.FC<IProps> = ({
  symbol,
  price,
  percent,
  active,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const percentColor = percent > 0 ? 'green' : 'red';
  const currency = symbol as keyof typeof currencyList;
  const name = currencyList[currency];

  const handleSelectCurrency = (currency: string) => {
    dispatch(setSelectedSymbol(currency));
  };

  return (
    <S.CurrencyCard
      onClick={() => handleSelectCurrency(currency)}
      data-active={active}
    >
      <CurrencyLogo name={name} />
      <S.CurrencyPrice>
        <S.CurrencyTitle>{name}</S.CurrencyTitle>
        <S.CurrencyText>{`$${price}`}</S.CurrencyText>
      </S.CurrencyPrice>
      <S.CurrencyPercent>
        <S.PercentTitle $color={percentColor}>{`${percent}%`}</S.PercentTitle>
        <S.PercentImage src={`${percentColor}-arrow.png`} alt='arrow' />
      </S.CurrencyPercent>
    </S.CurrencyCard>
  );
};
