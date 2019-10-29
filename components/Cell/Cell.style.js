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
    background: rgb(223, 107, 107);
  }

  .green {
    background: rgb(108, 175, 118);
  }

  .yellow {
    background: rgb(253, 253, 151);
  }

  .blue {
    background: rgb(98, 119, 224);
  }

  .dark_red {
    background: rgb(235, 41, 41);
  }

  .dark_green {
    background: rgb(11, 157, 34);
  }

  .dark_yellow {
    background: rgb(255, 255, 0);
  }

  .dark_blue {
    background: rgb(40, 71, 230);
  }

  .safe-cell {
    top: 32px;
    opacity: 1;
  }
  /* .safe-cell::before,
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
  } */
`;

export default CellStyles;
