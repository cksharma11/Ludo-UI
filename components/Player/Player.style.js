import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const PlayerStyles = css`
  .container {
    display: flex;
    justify-content: space-between;
    margin: 10px 35px;
    width: 190px;
    border: 1px solid ${colors.gray.shade1};
    border-radius: 2px;
    padding: 20px;
    font-family: 'Open Sans', sans-serif;
  }

  .player-name {
    font-size: 20px;
  }

  .stat {
    font-size: 15px;
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
    border: 1px solid ${colors.gray.shade1};
    border-radius: 4px;
  }

  .coin-position {
    text-align: right;
    padding-left: 10px;
  }

  .active {
    background: white;
  }

  .clear {
    background: green;
  }
`;

export default PlayerStyles;
