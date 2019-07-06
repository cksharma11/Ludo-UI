import React from 'react';
import PropTypes from 'prop-types';
import CoinContainerStyles from './CoinContainer.style';
import Coin from '../Coin/Coin';

const CoinContainer = ({ playerId, color, deActiveCoins }) => {
  return (
    <div className="coin_container" id={playerId}>
      <div className="container-border">
        <div className="container_row">
          <div id={`${color}_coin_100`} className={`coin ${color}`}>
            {deActiveCoins[0] && <Coin color="red" />}
          </div>
          <div id={`${color}_coin_200`} className={`coin ${color}`}>
            {deActiveCoins[1] && <Coin color="red" />}
          </div>
        </div>
        <div className="container_row">
          <div id={`${color}_coin_300`} className={`coin ${color}`}>
            {deActiveCoins[2] && <Coin color="red" />}
          </div>
          <div id={`${color}_coin_400`} className={`coin ${color}`}>
            {deActiveCoins[3] && <Coin color="red" />}
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
  deActiveCoins: [1, 2, 3, 4]
};

CoinContainer.propTypes = {
  playerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  deActiveCoins: PropTypes.array
};

export default CoinContainer;
