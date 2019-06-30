import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const HomeStyles = css`
  html,
  body {
    width: 100%;
    height: 700px;
  }

  .main-container {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    display: flex;
    height: 750px;
    border: 1px solid black;
    flex-direction: column;
  }

  .options {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    display: flex;
    height: 660px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.palette1.shade2};
    padding: 100px;
  }

  a {
    border-radius: 2px;
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
  }
`;

export default HomeStyles;
