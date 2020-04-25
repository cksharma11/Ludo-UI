import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const JoinGameStyles = css`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 660px;
  }

  form {
    display: flex;
    height: 550px;
    width: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid ${colors.gray.shade2};
    font-family: 'Ubuntu', sans-serif;
  }

  form > input {
    background: ${colors.gray.shade3};
    width: 200px;
    height: 30px;
    border: 1px solid ${colors.gray.shade1};
    color: black;
    text-align: center;
    line-height: 2;
    text-decoration: none;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    font-family: 'Ubuntu', sans-serif;
  }

  form > input:hover {
    background: white;
  }

  .activity-header {
    font-size: 30px;
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

export default JoinGameStyles;
