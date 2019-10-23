import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CellStyles from './Cell.style';

const Cell = ({ id, className, gameData }) => {
  const [color, setColor] = useState('');

  console.log(gameData.players[0].coins.coins[1], 'coins', id);
  useEffect(() => {
    const coins = [];
    gameData.players.forEach((player) => {
      const playerCoins = player.coins.coins;
      playerCoins.forEach((coin) => {
        if (coin.position == id) {
          coins.push(player.color);
        }
      });
    });
    const color11 = coins.length && 'green';
    setColor(color11);
  }, []);

  return (
    <div id={id} className={`${className} ${color}`}>
      <style jsx>{CellStyles}</style>
    </div>
  );
};

Cell.defaultProps = {
  id: 0,
  className: ''
};

Cell.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string
};

export default Cell;
