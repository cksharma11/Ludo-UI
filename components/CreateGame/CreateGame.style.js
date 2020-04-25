import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CreateGameStyles = css`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 660px;
    font-family: 'Ubuntu', sans-serif;
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
`;

export default CreateGameStyles;
