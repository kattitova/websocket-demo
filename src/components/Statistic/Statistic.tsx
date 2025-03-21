import { BrowserRouter, Route, Routes } from 'react-router';
import { PHRASES } from '../../constants';
import * as S from './styled';
import { CandlesChart } from '../CandlesChart';
import { CurrencyInfo } from '../CurrencyInfo';

export const Statistic = () => {
  return (
    <BrowserRouter>
      <S.Wrapper>
        <S.Header>
          <h2>{PHRASES.STATISTIC}</h2>
          <S.Menu>
            <S.StyledLink to='/' end>
              {PHRASES.NOW}
            </S.StyledLink>
            <S.StyledLink to='/1d'>D</S.StyledLink>
            <S.StyledLink to='/1w'>W</S.StyledLink>
            <S.StyledLink to='/1m'>M</S.StyledLink>
            <S.StyledLink to='/3m'>3M</S.StyledLink>
            <S.StyledLink to='/6m'>6M</S.StyledLink>
          </S.Menu>
          <CurrencyInfo text='Selected Currency' />
        </S.Header>
        <Routes>
          <Route
            path='/'
            element={<CandlesChart period='1d' interval='1h' />}
          />
          <Route
            path='/1d'
            element={<CandlesChart period='1d' interval='1h' />}
          />
          <Route
            path='/1w'
            element={<CandlesChart period='1w' interval='4h' />}
          />
          <Route
            path='/1m'
            element={<CandlesChart period='1m' interval='12h' />}
          />
          <Route
            path='/3m'
            element={<CandlesChart period='3m' interval='1d' />}
          />
          <Route
            path='/6m'
            element={<CandlesChart period='6m' interval='3d' />}
          />
        </Routes>
      </S.Wrapper>
    </BrowserRouter>
  );
};
