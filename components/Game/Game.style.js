import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

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
    background: ${colors.palette1.shade2};
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

  .coin_symbol {
    height: 50%;
    width: 50%;
    align-self: center;
    border: 1px solid #f1b091eb;
    border-radius: 50%;
  }

  .clear_coins_container {
    width: 0;
    height: 0;
    border-top: 63px solid rgb(84, 84, 235);
    border-bottom: 63px solid rgb(112, 236, 112);
    border-left: 63px solid rgb(231, 96, 96);
    border-right: 63px solid rgb(230, 230, 91);
  }
`;

export default GameStyles;
