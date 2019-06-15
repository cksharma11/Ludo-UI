import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CreateGameStyles = css`
  form {
    font-family: fantasy;
    display: flex;
    height: 550px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.gray.shade2};
  }

  form > input {
    background: ${colors.gray.shade3};
    font-family: fantasy;
    width: 200px;
    height: 30px;
    border: 1px solid ${colors.gray.shade1};
    color: ${colors.orange.shade1};
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

export default CreateGameStyles;
