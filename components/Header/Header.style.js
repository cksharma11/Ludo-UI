import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const HeaderStyles = css`
  .header {
    font-family: fantasy;
    font-size: 150px;
    text-align: center;
    width: 100%;
    height: 200px;
    background: ${colors.orange.shade1};
    color: ${colors.gray.shade1};
  }
`;

export default HeaderStyles;
