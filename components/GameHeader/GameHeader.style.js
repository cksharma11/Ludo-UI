import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const GameHeaderStyles = css`
  header {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 25px;
    background: ${colors.palette1.shade1};
    border-bottom: 1px solid #ccc1c1;
  }

  .controls {
    display: flex;
  }

  button {
    margin-left: 5px;
  }
`;

export default GameHeaderStyles;
