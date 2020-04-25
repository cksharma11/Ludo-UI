import css from 'styled-jsx/css';

const GameHeaderStyles = css`
  header {
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 25px;
    background: radial-gradient(
      ellipse at center,
      rgb(99, 155, 155) 0%,
      rgb(25, 41, 41) 99%,
      rgb(69, 108, 108) 100%
    );
  }

  .title {
    font-size: 35px;
    font-weight: bold;
  }

  .controls {
    display: flex;
  }

  button {
    background: rgb(69, 108, 108);
    margin-left: 5px;
  }
`;

export default GameHeaderStyles;
