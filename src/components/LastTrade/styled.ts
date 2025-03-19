import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;

  img {
    background-color: #1f1e24;
    padding: 5px;
    width: 28px;
    height: 28px;
  }

  p {
    font-size: 15px;
  }
`;

export const TimeText = styled.span`
  font-size: 10px;
`;

export const CurrencyPrice = styled.p<{ $color: string }>`
  color: ${(props) => (props.$color === 'red' ? '#f94f38' : '#24b249')};
  font-size: 15px;
  font-weight: 600;
`;
