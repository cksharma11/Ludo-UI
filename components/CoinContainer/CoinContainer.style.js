import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CoinContainerStyles = css`
  .coin_container {
    display: flex;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background: ${colors.gray.shade2};
  }

  .container-border {
    display: flex;
    padding: 15px;
    background: white;
  }

  .coin {
    display: flex;
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid black;
    border-radius: 6px;
    margin: 2px;
  }

  .red {
    background: rgb(223, 107, 107);
  }

  .green {
    background: rgb(108, 175, 118);
  }

  .yellow {
    background: rgb(253, 253, 151);
  }

  .blue {
    background: rgb(98, 119, 224);
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

export default CoinContainerStyles;
