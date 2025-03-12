import { useSelector } from 'react-redux';
import { selectTrade } from '../../store/trades/selectors';
import { ITradeData } from '../../types';
import { PHRASES } from '../../constants';
import * as S from './styled';

export const TradesList = () => {
  const tradeData: ITradeData[] = useSelector(selectTrade);

  return (
    <S.Wrapper>
      <h2>{PHRASES.TRADES_LIST}</h2>
      {tradeData ? (
        <S.StyledTable>
          <table>
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
          </table>
        </S.StyledTable>
      ) : (
        PHRASES.LOADING
      )}
    </S.Wrapper>
  );
};
