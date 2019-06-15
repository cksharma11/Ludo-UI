import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const JoinGameStyles = css`
  form {
    font-family: fantasy;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.gray.shade2};
    padding: 100px;
  }

  form > input {
    background: ${colors.gray.shade3};
    font-family: fantasy;
    width: 200px;
    height: 30px;
    border: 1px solid black;
    color: ${colors.gray.shade1};
    text-align: center;
    line-height: 2;
    text-decoration: none;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
  }

  .activity-header {
    font-family: fantasy;
    font-size: 30px;
  }
`;

export default JoinGameStyles;
