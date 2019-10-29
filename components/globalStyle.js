import css from 'styled-jsx/css';
import colors from '../config/styles/colors';

const globalStyles = css.global`
  body,
  html {
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:300&display=swap');
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

export default globalStyles;
