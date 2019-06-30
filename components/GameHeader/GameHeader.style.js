import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const GameHeaderStyles = css`
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-size: 20px;
    background: ${colors.palette1.shade1};
    border-bottom: 1px solid white;
  }
`;

export default GameHeaderStyles;
