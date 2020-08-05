import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    tealLight: '#34d1d1',
    tealDark: '#0c3c3d',
    grey: '#494949',
    white: '#fff',
    lightCyan: 'lightCyan',
  },
  textSizes: {},
  fonts: {
    montserrat: 'Montserrat',
    sansSerif: 'sans-serif',
    helvetica: 'Helvetica Neue',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const globalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 14px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }  

  body {
    margin: 0;
    font-family: "Open Sans", sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default globalStyle;
