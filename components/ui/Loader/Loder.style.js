import css from 'styled-jsx/css';
import colors from '../../../config/styles/colors';

const LoaderStyles = css`
  .loader {
    border: 10px solid ${colors.gray.shade1};
    border-radius: 50%;
    border-top: 10px solid ${colors.gray.shade3};
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyles;
