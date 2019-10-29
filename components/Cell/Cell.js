import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CellStyles from './Cell.style';
import Coin from '../Coin/Coin';

const Cell = ({ id, className, gameData, playerId }) => {
  const [placedCoins, setPlacedCoins] = useState([]);

  useEffect(() => {
    const newPlacedCoins = gameData.coinsPosition.filter(
      (coin) => coin.position === +id
    );
    setPlacedCoins(newPlacedCoins);
  }, [gameData]);

  return (
    <div id={id} className={className}>
      {placedCoins.length
        ? placedCoins.map((coin) => (
            <Coin
              color={coin.color}
              id={coin.id}
              gameData={gameData}
              playerId={playerId}
              key={coin.id}
            />
          ))
        : null}
      <style jsx>{CellStyles}</style>
    </div>
  );
};

Cell.defaultProps = {
  id: 0,
  className: ''
};

Cell.propTypes = {
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  gameData: PropTypes.object.isRequired,
  playerId: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired
};

export default Cell;
