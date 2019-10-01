import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const LoadGameStyles = css`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 660px;
    background: ${colors.palette1.shade2};
  }

  form {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    display: flex;
    height: 550px;
    width: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid ${colors.gray.shade2};
  }

  form > input {
    background: ${colors.gray.shade3};
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
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
  }

  form > input:hover {
    background: white;
  }

  .activity-header {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-size: 30px;
  }
`;

export default LoadGameStyles;
