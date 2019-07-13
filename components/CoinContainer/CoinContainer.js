import React from 'react';
import PropTypes from 'prop-types';
import CoinContainerStyles from './CoinContainer.style';
import Coin from '../Coin/Coin';

const CoinContainer = ({ playerId, color, nutralCoins, showCoins }) => {
  return (
    <div className="coin_container" id={playerId}>
      <div className="container-border">
        <div className="container_row">
          <div className={`coin ${color}`}>
            {showCoins && nutralCoins[0] && <Coin color={color} />}
          </div>
          <div className={`coin ${color}`}>
            {showCoins && nutralCoins[1] && <Coin color={color} />}
          </div>
        </div>
        <div className="container_row">
          <div className={`coin ${color}`}>
            {showCoins && nutralCoins[2] && <Coin color={color} />}
          </div>
          <div className={`coin ${color}`}>
            {showCoins && nutralCoins[3] && <Coin color={color} />}
          </div>
        </div>
      </div>
      <style jsx>{CoinContainerStyles}</style>
    </div>
  );
};

CoinContainer.defaultProps = {
  playerId: 0,
  color: '',
  nutralCoins: [1, 2, 3, 4],
  showCoins: false
};

CoinContainer.propTypes = {
  playerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  nutralCoins: PropTypes.array,
  showCoins: PropTypes.bool
};

export default CoinContainer;
