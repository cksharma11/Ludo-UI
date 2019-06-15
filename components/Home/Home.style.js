import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const HomeStyles = css`
  html,
  body {
    width: 100%;
    height: 700px;
  }

  .main-container {
    font-family: fantasy;
    display: flex;
    height: 750px;
    border: 1px solid black;
    flex-direction: column;
  }

  .options {
    font-family: fantasy;
    display: flex;
    height: 550px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.gray.shade2};
    padding: 100px;
  }

  a {
    border-radius: 2px;
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
  }
`;

export default HomeStyles;
