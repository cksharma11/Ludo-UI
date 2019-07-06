import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import PlayerStyles from './Player.style';

const Player = ({ name, turn, coinData }) => {
  return (
    <div className={turn ? 'container active' : 'container'}>
      <div className="left">
        <div className="player-name">{name}</div>
        <div className="stat">0 coins cleared</div>
        {turn && <Dice />}
      </div>
      <div className="right">
        {coinData.map((coin) => {
          return (
            <div
              className="coin-info"
              key={`${name}${turn}${coinData.isCleared}`}
            >
              <div
                className={coin.isCleared ? `box ${coin.color}` : 'box'}
              ></div>
            </div>
          );
        })}
      </div>
      <style jsx>{PlayerStyles}</style>
    </div>
  );
};

Player.defaultProps = {
  name: 'dummy',
  turn: false,
  coinData: [
    {
      color: 'red',
      isCleared: true
    },
    {
      color: 'red',
      isCleared: false
    },
    {
      color: 'red',
      isCleared: false
    },
    {
      color: 'red',
      isCleared: false
    }
  ]
};

Player.propTypes = {
  name: PropTypes.string,
  turn: PropTypes.bool,
  coinData: PropTypes.arrayOf(PropTypes.object)
};

export default Player;
