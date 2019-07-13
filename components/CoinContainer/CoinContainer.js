import React from 'react';
import PropTypes from 'prop-types';
import CoinContainerStyles from './CoinContainer.style';
import Coin from '../Coin/Coin';

const CoinContainer = ({ color, nutralCoins, showCoins }) => {
  const createCoin = (coin) => {
    return (
      <div className={`coin ${color}`}>
        {showCoins && coin && <Coin color={color} />}
        <style jsx>{CoinContainerStyles}</style>
      </div>
    );
  };

  return (
    <div className="coin_container">
      <div className="container-border">
        <div className="container_row">
          {createCoin(nutralCoins[0])}
          {createCoin(nutralCoins[1])}
        </div>
        <div className="container_row">
          {createCoin(nutralCoins[2])}
          {createCoin(nutralCoins[3])}
        </div>
      </div>
      <style jsx>{CoinContainerStyles}</style>
    </div>
  );
};

CoinContainer.defaultProps = {
  color: '',
  nutralCoins: [1, 3, 4],
  showCoins: false
};

CoinContainer.propTypes = {
  color: PropTypes.string,
  nutralCoins: PropTypes.array,
  showCoins: PropTypes.bool
};

export default CoinContainer;
