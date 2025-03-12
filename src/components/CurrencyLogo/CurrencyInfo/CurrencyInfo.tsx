import { useSelector } from 'react-redux';
import { CurrencyLogo } from '../CurrencyLogo';
import * as S from './styled';
import { selectSelectedSymbol } from '../../../store/historicalTrades/selectors';
import { currencyList } from '../../../constants';

interface IProps {
  text?: string;
}

export const CurrencyInfo = ({ text }: IProps) => {
  const selectedCurrency = useSelector(
    selectSelectedSymbol
  ) as keyof typeof currencyList;
  const currencyName = currencyList[selectedCurrency];

  return (
    <S.Wrapper>
      <CurrencyLogo name={currencyName} />
      <div>
        <p>{currencyName}</p>
        {text && <span>{text}</span>}
      </div>
    </S.Wrapper>
  );
};
