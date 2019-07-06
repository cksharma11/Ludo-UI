import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CoinStyles = css`
  .coin {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: 10%;
    border: 1px solid ${colors.gray.shade3};
  }

  .dark_red {
    background: red;
  }

  .dark_green {
    background: green;
  }

  .dark_yellow {
    background: yellow;
  }

  .dark_blue {
    background: blue;
  }
`;

export default CoinStyles;
