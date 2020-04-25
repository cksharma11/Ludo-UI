import css from 'styled-jsx/css';

const GlobalStyles = css.global`
  body,
  html {
    padding: 0;
    margin: 0;
    background: radial-gradient(
      ellipse at center,
      rgb(99, 155, 155) 0%,
      rgb(25, 41, 41) 99%,
      rgb(69, 108, 108) 100%
    );
    font-family: 'Ubuntu', sans-serif;
  }
  button {
    font-family: 'Ubuntu', sans-serif;
    border-radius: 3px;
  }
`;

export default GlobalStyles;
