import css from 'styled-jsx/css';

const CoinContainerStyles = css`
  .coin_container {
    display: flex;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background: #433e5d;
    /* background: #3c4844; */
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
    background: rgb(231, 96, 96);
  }

  .green {
    background: rgb(112, 236, 112);
  }

  .yellow {
    background: rgb(230, 230, 91);
  }

  .blue {
    background: rgb(84, 84, 235);
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
