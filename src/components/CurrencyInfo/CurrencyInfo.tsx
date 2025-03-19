import { useSelector } from 'react-redux';
import { CurrencyLogo } from '../CurrencyLogo/CurrencyLogo';
import * as S from './styled';
import { selectSelectedSymbol } from '../../store/historicalTrades/selectors';
import { currencyList } from '../../constants';

interface IProps {
  text?: string;
}

export const CurrencyInfo: React.FC<IProps> = ({ text }) => {
  const selectedCurrency = useSelector(
    selectSelectedSymbol
  ) as keyof typeof currencyList;
  const currencyName = currencyList[selectedCurrency];

  return (
    <S.Wrapper>
      <CurrencyLogo name={currencyName} />
      <div>
        <S.CurrencyTitle>{currencyName}</S.CurrencyTitle>
        {text && <S.CurrencyText>{text}</S.CurrencyText>}
      </div>
    </S.Wrapper>
  );
};
