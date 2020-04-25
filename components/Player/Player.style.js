import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const PlayerStyles = css`
  .container {
    display: flex;
    justify-content: space-between;
    margin: 10px 35px;
    width: 190px;
    padding: 20px;
    font-family: 'Ubuntu', sans-serif;
    opacity: 40%;
    background: #4a7575;
    border-radius: 2px;
  }

  .current-turn {
    opacity: 40%;
    box-shadow: 0 0 50px black;
  }
  .window {
    font-weight: bold;
    opacity: 100%;
  }

  .player-name {
    font-size: 20px;
    border-bottom: 1px solid;
  }

  .stat {
    font-size: 15px;
  }

  .red {
    border: 1px solid rgb(231, 96, 96);
  }

  .green {
    border: 1px solid rgb(112, 236, 112);
  }

  .yellow {
    border: 1px solid rgb(230, 230, 91);
  }

  .blue {
    border: 1px solid rgb(84, 84, 235);
  }

  .left {
    height: 190px;
    position: absolute;
    left: 0;
  }

  .right {
    height: 190px;
    position: absolute;
    right: 0;
  }

  .left-section,
  .right-section {
    display: flex;
    flex-direction: column;
  }

  .right-section {
    justify-content: space-around;
  }

  .box {
    width: 40px;
    height: 40px;
    border-bottom: 1px solid ${colors.gray.shade1};
    border-radius: 4px;
  }

  .coin-position {
    text-align: right;
    padding-left: 10px;
  }

  .clear {
    background: green;
  }
`;

export default PlayerStyles;
