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
    width: 400px;
    border-radius: 2px;
    border: 1px solid black;
  }

  .container {
    width: 100vw;
    height: 100vh;
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:300&display=swap');
    padding: 0;
    margin: -8px;
    background: radial-gradient(
      ellipse at center,
      rgb(99, 155, 155) 0%,
      rgb(25, 41, 41) 99%,
      rgb(69, 108, 108) 100%
    );
    font-family: 'Ubuntu', sans-serif;
  }
  button {
    font-family: 'Ubuntu', sans-serif;
    border-radius: 3px;
  }
`;

export default WaitingAreaStyles;
