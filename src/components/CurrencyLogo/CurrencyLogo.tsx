import * as S from './styled';

interface IProps {
  name: string;
}

export const CurrencyLogo = ({ name }: IProps) => {
  return <S.CurrencyLogo src={`./${name}.png`} alt={name} />;
};
