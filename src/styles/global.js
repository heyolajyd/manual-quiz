import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: `(max-width: 576px)`,
  md: `(max-width: 768px)`,
  lg: `(max-width: 992px)`,
  xl: `(max-width: 1200px)`,
};

export const theme = {
  colors: {
    tealLight: '#34d1d1',
    tealDark: '#0c3c3d',
    grey: '#494949',
    lightGrey: '#6c6c6c',
    white: '#fff',
    lightCyan: 'lightCyan',
    lightTeal: '#e5f5f4',
  },
  textSizes: {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '80px',
  },
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
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }  

  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default globalStyle;
