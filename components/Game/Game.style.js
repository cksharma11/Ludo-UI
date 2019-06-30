import css from 'styled-jsx/css';

const GameStyles = css`
  .body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }

  .main_container {
    display: flex;
    padding: 15px;
    align-items: center;
    background: whitesmoke;
    flex-direction: column;
  }

  .player_row {
    display: flex;
  }

  .board_middle_row {
    display: flex;
    width: 630px;
    justify-content: space-between;
  }

  ${'' /* .red {
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
  } */}

  .dice {
    width: 35px;
    height: 35px;
    margin: -18px;
    align-self: center;
    border: 1px solid black;
    border-radius: 2px;
    background: #ceffa2;
  }

  .coin_symbol {
    height: 50%;
    width: 50%;
    align-self: center;
    border: 1px solid #f1b091eb;
    border-radius: 50%;
  }

  .clear_coins_container {
    width: 0px;
    height: 0px;
    border-top: 63px solid rgb(84, 84, 235);
    border-bottom: 63px solid rgb(112, 236, 112);
    border-left: 63px solid rgb(231, 96, 96);
    border-right: 63px solid rgb(230, 230, 91);
  }
`;

export default GameStyles;
