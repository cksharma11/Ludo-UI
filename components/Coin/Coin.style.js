import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CoinStyles = css`
  .coin {
    font-family: 'Open Sans', sans-serif;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: 10%;
    border: 2px solid ${colors.coin};
    z-index: 1;
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

  .playable-coin {
    border: 2px solid white;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
    animation-name: example;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }

  @keyframes example {
    0% {
      opacity: 0%;
    }
    25% {
      opacity: 25%;
    }
    50% {
      opacity: 50%;
    }
    75% {
      opacity: 75%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export default CoinStyles;
