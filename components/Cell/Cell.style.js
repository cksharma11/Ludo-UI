import css from 'styled-jsx/css';

const CellStyles = css`
  .cell {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    border: 1px solid #433e5d;
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

  .safe-cell::before {
    font-weight: bold;
    color: navy;
    font-size: 15px;
    content: 'x';
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CellStyles;
