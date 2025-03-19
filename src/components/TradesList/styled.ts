import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TableWrapper = styled.div`
  height: 600px;
  overflow-y: scroll;
  width: 100%;
`;

export const Table = styled.table`
  text-align: left;
  width: 100%;

  th,
  tr:nth-child(even) {
    background-color: #1f1e24;
  }

  th,
  td {
    padding: 5px;
  }
`;
