import css from 'styled-jsx/css';
import colors from '../config/styles/colors';

const globalStyles = css.global`
  body,
  html {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');
    padding: 0;
    margin: 0;
    background: ${colors.palette1.shade5};
    font-family: 'Open Sans', sans-serif;
  }
  button {
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
  }
`;

export default globalStyles;
