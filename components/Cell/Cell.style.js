import css from 'styled-jsx/css';
import colors from '../../config/styles/colors';

const CellStyles = css`
  .cell {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    background: white;
    border: 1px solid ${colors.gray.shade2};
  }

  .red {
    background: rgb(231, 96, 96);
  }

  .green {
    background: rgb(112, 236, 112);
  }

  .yellow {
    background: rgb(230, 230, 91);
  }

  .blue {
    background: rgb(84, 84, 235);
  }

  .dark_red {
    background: red;
  }

  .dark_green {
    background: green;
  }

  .dark_yellow {
    background: yellow;
  }

  .dark_blue {
    background: blue;
  }

  .safe-cell {
    top: 32px;
    opacity: 1;
  }
  .safe-cell::before,
  .safe-cell::after {
    content: ' ';
    width: 2px;
    background-color: #333;
  }
  .safe-cell::before {
    transform: rotate(45deg);
  }
  .safe-cell::after {
    transform: rotate(-45deg);
  }
`;

export default CellStyles;
