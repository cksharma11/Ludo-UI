import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import PlayerStyles from './Player.style';

const Player = ({ name, turn, coins, alignment }) => {
  return (
    <div
      className={
        turn ? `container ${alignment} active` : `container ${alignment}`
      }
    >
      <div className="left-section">
        <div className="player-name">{name}</div>
        <div className="stat">0 coins cleared</div>
        {turn && <Dice />}
      </div>
      <div className="right-section">
        {coins.map((coin) => {
          return (
            <div
              key={`${name}${turn}${coins.isCleared}`}
              className={coin.isCleared ? `box ${coin.color}` : 'box'}
            ></div>
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
  coins: [
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
  ],
  alignment: 'right'
};

Player.propTypes = {
  name: PropTypes.string,
  turn: PropTypes.bool,
  coins: PropTypes.arrayOf(PropTypes.object),
  alignment: PropTypes.string
};

export default Player;
