import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const HomeStyles = css`
  .main-container {
    display: flex;
    height: 85vhpx;
    flex-direction: column;
  }

  .options {
    display: flex;
    height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  a {
    border-radius: 2px;
    width: 200px;
    height: 30px;
    border: 1px solid ${colors.gray.shade1};
    color: black;
    text-align: center;
    line-height: 2;
    text-decoration: none;
    padding: 5px;
    margin: 5px;
  }

  a:hover {
    background: white;
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
  }
  button {
    font-family: 'Ubuntu', sans-serif;
    border-radius: 3px;
  }
`;

export default HomeStyles;
