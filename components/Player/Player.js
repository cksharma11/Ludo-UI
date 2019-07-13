import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import PlayerStyles from './Player.style';
import noop from '../../config/utils/noop';

const Player = ({ name, turn, coins, alignment, onRollDice, diceValue }) => {
  return (
    <div
      className={
        turn ? `container ${alignment} active` : `container ${alignment}`
      }
    >
      <div className="left-section">
        <div className="player-name">{name}</div>
        <div className="stat">0 coins cleared</div>
        {turn && <Dice onRollDice={onRollDice} diceValue={diceValue} />}
      </div>
      <div className="right-section" key="right-section">
        {Object.keys(coins).map((coin) => {
          return <div key={`${name}${turn}${coin}`} className="box"></div>;
        })}
      </div>
      <style jsx>{PlayerStyles}</style>
    </div>
  );
};

Player.defaultProps = {
  name: 'dummy',
  turn: false,
  coins: {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  },
  alignment: 'right',
  onRollDice: noop,
  diceValue: 1
};

Player.propTypes = {
  name: PropTypes.string,
  turn: PropTypes.bool,
  coins: PropTypes.arrayOf(PropTypes.object),
  alignment: PropTypes.string,
  onRollDice: PropTypes.func,
  diceValue: PropTypes.number
};

export default Player;
