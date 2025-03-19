import styled from 'styled-components';

export const CurrencyCard = styled.div`
  border-radius: 5px;
  background-color: #1f1e24;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex: 1;
  border: 1px solid #1f1e24;

  &[data-active='true'] {
    border: 1px solid rgba(255, 255, 240, 0.5);
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #fffff0;
  }
`;

export const CurrencyPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CurrencyTitle = styled.p`
  text-transform: capitalize;
  font-size: 14px;
`;

export const CurrencyText = styled.strong`
  font-size: 20px;
`;

export const CurrencyPercent = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  gap: 5px;
`;

export const PercentTitle = styled.p<{ $color: string }>`
  font-size: 12px;
  color: ${(props) => (props.$color === 'green' ? '#24b249' : '#f94f38')};
`;

export const PercentImage = styled.img`
  background: none;
  width: 20px;
  height: 20px;
  padding: 0;
`;
