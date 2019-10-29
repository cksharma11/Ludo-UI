import React from 'react';
import PropTypes from 'prop-types';
import CoinContainerStyles from './CoinContainer.style';
import Coin from '../Coin/Coin';

const CoinContainer = ({ color, showCoins, gameData, playerId }) => {
  const createCoin = (id) => {
    const inactiveCoins = gameData.coinsPosition.filter(
      (c) => c.position === 0 && c.color === color
    );
    const coin = inactiveCoins.find((c) => c.id === id);
    return (
      <div className={`coin ${color}`}>
        {showCoins && coin && (
          <Coin
            color={color}
            id={coin.id}
            gameData={gameData}
            playerId={playerId}
            isPlayable={coin.isPlayable}
          />
        )}
        <style jsx>{CoinContainerStyles}</style>
      </div>
    );
  };

  return (
    <div className="coin_container">
      <div className="container-border">
        <div className="container_row">
          {createCoin(1)}
          {createCoin(2)}
        </div>
        <div className="container_row">
          {createCoin(3)}
          {createCoin(4)}
        </div>
      </div>
      <style jsx>{CoinContainerStyles}</style>
    </div>
  );
};

CoinContainer.defaultProps = {
  color: '',
  showCoins: false
};

CoinContainer.propTypes = {
  color: PropTypes.string,
  showCoins: PropTypes.bool,
  gameData: PropTypes.object.isRequired,
  playerId: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
};

export default CoinContainer;
