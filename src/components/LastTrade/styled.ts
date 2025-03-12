import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    gap: 5px;

    img {
      background-color: #1f1e24;
      padding: 5px;
      width: 28px;
      height: 28px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 10px;
  }
`;
