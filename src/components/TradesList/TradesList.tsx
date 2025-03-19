import { useSelector } from 'react-redux';
import { ITradeData } from '../../types';
import { PHRASES } from '../../constants';
import * as S from './styled';
import { selectTrade } from '../../store/trades/selectors';

export const TradesList = () => {
  const tradeData = useSelector(selectTrade);

  return (
    <S.Wrapper>
      <h2>{PHRASES.TRADES_LIST}</h2>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <th>{PHRASES.PRICE}</th>
              <th>{PHRASES.QUANTITY}</th>
            </tr>
          </thead>
          <tbody>
            {tradeData.reverse().map((trade: ITradeData, index: number) => (
              <tr key={index}>
                <td>{Number(trade.p).toFixed(2)}</td>
                <td>{Number(trade.q).toFixed(5)}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </S.Wrapper>
  );
};
