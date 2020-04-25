import React from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice/Dice';
import PlayerStyles from './Player.style';
import noop from '../../config/utils/noop';
import Coin from '../Coin/Coin';
import labels from '../../config/labels/labels';

const Player = ({
  player,
  turn,
  alignment,
  onRollDice,
  diceValue,
  isWindowPlayer
}) => {
  const { coins } = player.coins;
  const { name } = player;
  const sortedCoins = coins.sort((a, b) => b.position - a.position);
  const clearedCoins = coins.filter(
    (coin) => coin.position === labels.CLEAR_COIN_POSITION
  );
  const coinsToWin = 4 - clearedCoins.length;

  const windowPlayerClass = isWindowPlayer ? 'window' : '';
  const activePlayerClass = turn ? 'current-turn' : '';
  const containerClass = `container ${alignment} ${windowPlayerClass} ${activePlayerClass} ${player.color}`;

  return (
    <div className={containerClass}>
      <div className="left-section">
        <div className="player-name">{name}</div>
        <div className="stat">{`${coinsToWin} coin(s) to win`}</div>
        {turn && (
          <Dice
            onRollDice={onRollDice}
            diceValue={diceValue}
            isWindowPlayer={isWindowPlayer}
          />
        )}
      </div>
      <div className="right-section" key="right-section">
        {sortedCoins.map((coin) => {
          const isClearedCoin = coin.position === labels.CLEAR_COIN_POSITION;
          return (
            <div key={`${coin.number}`} className="box">
              {isClearedCoin && <Coin color={player.color} />}
            </div>
          );
        })}
      </div>
      <style jsx>{PlayerStyles}</style>
    </div>
  );
};

Player.defaultProps = {
  turn: false,
  alignment: 'right',
  onRollDice: noop,
  diceValue: 1,
  isWindowPlayer: false
};

Player.propTypes = {
  turn: PropTypes.bool,
  alignment: PropTypes.string,
  onRollDice: PropTypes.func,
  diceValue: PropTypes.number,
  isWindowPlayer: PropTypes.bool,
  player: PropTypes.object.isRequired
};

export default Player;
