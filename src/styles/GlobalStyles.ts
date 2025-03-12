import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  #root {
    width: 100%;
    padding: 50px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #29292d;
    color: #FFFFF0;
  }

  button, input {
    outline: none;
  }

  a {
    color: #FFFFF0;
    text-decoration: none;
  }

  h2 {
      font-size: 16px;
      text-transform: uppercase;
    }

  /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
