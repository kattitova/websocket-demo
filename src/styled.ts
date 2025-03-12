import styled from 'styled-components';

export const App = styled.div`
  width: 100%;
  background-color: #100f14;
  border-radius: 10px;
  display: grid;
  /* grid-template-columns: 1fr 0.3fr; */
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'header aside'
    'main aside';

  header {
    grid-area: header;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 2px solid #1f1e24;

    h1 {
      font-size: 18px;
    }
  }

  main {
    grid-area: main;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  aside {
    grid-area: aside;
    border-left: 2px solid #1f1e24;
    padding: 10px;
    display: grid;
    grid-template-rows: 80px 1fr;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
`;
