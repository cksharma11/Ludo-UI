import React from 'react';
import PropTypes from 'prop-types';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';
import GameHook from './GameHook';
import { startingCells } from '../../config/data/cells-structure';
import { findElementFromObjectArray } from '../../utils/utils';

const Game = ({ gameData, playerId }) => {
  const {
    currentPlayerIndex,
    // updateCurrentPlayerIndex,
    rollDice,
    diceValue
  } = GameHook({
    gameData
  });
  const {
    players: [player1, player2, player3, player4]
  } = gameData;

  const sameScreenPlayer = findElementFromObjectArray(
    gameData.players,
    'playerId',
    +playerId
  );

  return (
    <div className="body">
      <GameHeader playerName={sameScreenPlayer.playerName} />
      <section className="main_container">
        <section className="player_row">
          {player1 && (
            <Player
              name={player1.playerName}
              turn={currentPlayerIndex === 0}
              alignment="left"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
          <CoinContainer color="red" showCoins={player1 !== undefined} />
          <CellRow
            className="cell_row"
            cellId={startingCells[0]}
            color="blue"
            containerClass=""
          />
          <CoinContainer color="blue" showCoins={player2 !== undefined} />
          {player2 && (
            <Player
              name={player2.playerName}
              turn={currentPlayerIndex === 1}
              alignment="right"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
        </section>

        <div className="board_middle_row">
          <CellRow
            className="cell_column"
            cellId={startingCells[1]}
            color="red"
            containerClass="cell_column_container"
          />
          <div className="clear_coins_container" />
          <CellRow
            className="cell_column"
            cellId={startingCells[2]}
            color="yellow"
            containerClass="cell_column_container"
          />
        </div>

        <section className="player_row">
          {player3 && (
            <Player
              name={player3.playerName}
              turn={currentPlayerIndex === 2}
              alignment="left"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
          <CoinContainer color="green" showCoins={player3 !== undefined} />
          <CellRow
            className="cell_row"
            cellId={startingCells[3]}
            color="green"
            containerClass=""
          />
          <CoinContainer color="yellow" showCoins={player4 !== undefined} />
          {player4 && (
            <Player
              name={player4.playerName}
              turn={currentPlayerIndex === 3}
              alignment="right"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
        </section>
      </section>
      <style jsx>{GameStyles}</style>
    </div>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired,
  playerId: PropTypes.number.isRequired
};

export default Game;
