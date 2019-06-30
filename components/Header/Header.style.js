import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const HeaderStyles = css`
  .header {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-size: 50px;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid white;
    background: ${colors.palette1.shade1};
    color: black;
  }
`;

export default HeaderStyles;
