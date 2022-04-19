import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 62.5%;

    --mainColor: '#F19C79';
    
    --white: '#fff';

    --black: '#2B303A';
    --darkGray: '#4F4F4F';
    --lightGray: '#DBDBDB';
    --gray: '#ADADAD';

    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;

    letter-spacing: .9px;
    font-family: 'Poppins', sans-serif;
  }
`;
