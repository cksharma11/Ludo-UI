import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';
import GameHook from './GameHook';
import { startingCells } from '../../config/data/cells-structure';
import { API_URL } from '../../utils/utils';
import app from '../../https/app';

const POLLING_INTERVAL = 1000;

const Game = ({ gameData: initialGameData, playerId, gameId }) => {
  const [gameData, setGameData] = useState(initialGameData);

  useEffect(() => {
    setTimeout(async () => {
      const res = await app.post(`${API_URL}/getGameData`, {
        body: JSON.stringify({ gameId })
      });
      setGameData(res);
    }, POLLING_INTERVAL);
  }, [gameData]);

  const {
    currentPlayerIndex,
    rollDice,
    diceValue,
    windowPlayer,
    getDeactivatedCoins,
    getCoins
  } = GameHook({
    gameData,
    playerId
  });
  const {
    players: [player1, player2, player3, player4]
  } = gameData;

  return (
    <div className="body">
      <GameHeader playerName={windowPlayer} />
      <section className="main_container">
        <section className="player_row">
          {player1 && (
            <Player
              name={player1.name}
              turn={currentPlayerIndex === 0}
              alignment="left"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
          <CoinContainer
            nutralCoins={getDeactivatedCoins(getCoins(player1))}
            color="red"
            showCoins={player1 !== undefined}
          />
          <CellRow
            className="cell_row"
            cellId={startingCells[0]}
            color="blue"
            containerClass=""
          />
          <CoinContainer
            nutralCoins={getDeactivatedCoins(getCoins(player2))}
            color="blue"
            showCoins={player2 !== undefined}
          />
          {player2 && (
            <Player
              name={player2.name}
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
              name={player3.name}
              turn={currentPlayerIndex === 2}
              alignment="left"
              onRollDice={rollDice}
              diceValue={diceValue}
            />
          )}
          <CoinContainer
            nutralCoins={getDeactivatedCoins(getCoins(player3))}
            color="green"
            showCoins={player3 !== undefined}
          />
          <CellRow
            className="cell_row"
            cellId={startingCells[3]}
            color="green"
            containerClass=""
          />
          <CoinContainer
            nutralCoins={getDeactivatedCoins(getCoins(player4))}
            color="yellow"
            showCoins={player4 !== undefined}
          />
          {player4 && (
            <Player
              name={player4.name}
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
  playerId: PropTypes.number.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Game;
