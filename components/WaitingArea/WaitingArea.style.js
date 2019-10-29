import css from 'styled-jsx/css';

const WaitingAreaStyles = css`
  .waiting-area {
    display: flex;
    flex-direction: column;
    height: 720px;
    width: 100%;
    align-items: center;
    padding: 20px;
  }

  .gameid {
    font-size: 40px;
    text-align: center;
    color: black;
  }

  .player-info {
    font-size: 20px;
    height: 50px;
    text-align: center;
  }

  ul {
    padding: 0;
    font-size: 30px;
    text-align: center;
    color: black;
    width: 300px;
    border-radius: 2px;
    border: 1px solid black;
  }
`;

export default WaitingAreaStyles;
