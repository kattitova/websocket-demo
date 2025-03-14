import * as S from './styled';

interface IProps {
  name: string;
}

export const CurrencyLogo: React.FC<IProps> = ({ name }) => {
  return <S.CurrencyLogo src={`./${name}.png`} alt={name} />;
};
