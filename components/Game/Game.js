import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';
import useGameHook from './GameHook';
import { startingCells } from '../../config/data/cells-structure';
import { API_URL } from '../../utils/utils';
import app from '../../https/app';
import constants from '../../constants/contants';
import CongratulationsPopup from '../CongratulationsPopup/CongratulationsPopup';
import colors from '../../config/styles/colors';

const { POLLING_INTERVAL } = constants;

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
    getInactiveCoins,
    getCoins,
    isWindowPlayer,
    cellRowConfigs
  } = useGameHook({
    gameData,
    playerId
  });
  const {
    players: [player1, player2, player3, player4]
  } = gameData;

  const renderPlayer = (player, alignment, playerIndex) => {
    return player ? (
      <Player
        player={player}
        turn={currentPlayerIndex === playerIndex}
        alignment={alignment}
        onRollDice={rollDice}
        diceValue={diceValue}
        isWindowPlayer={isWindowPlayer(player, windowPlayer)}
      />
    ) : null;
  };

  const renderCoinContainer = (player, color) => {
    return (
      <CoinContainer
        nutralCoins={getInactiveCoins(getCoins(player))}
        color={color}
        showCoins={player !== undefined}
        gameData={gameData}
        playerId={playerId}
      />
    );
  };

  const renderCellRow = (index) => {
    const { className, color, containerClass } = cellRowConfigs[index];
    return (
      <CellRow
        className={className}
        cellId={startingCells[index]}
        color={color}
        containerClass={containerClass}
        gameData={gameData}
        playerId={playerId}
      >
        <style jsx>{GameStyles}</style>
      </CellRow>
    );
  };

  return (
    <div className="body">
      <GameHeader playerName={windowPlayer.name} gameId={gameData.id} />
      <section className="main_container">
        <section className="player_row">
          {renderPlayer(player1, 'left', 0)}
          {renderCoinContainer(player1, 'red')}
          {renderCellRow(0)}
          {renderCoinContainer(player2, 'blue')}
          {renderPlayer(player2, 'right', 1)}
        </section>

        <div className="board_middle_row">
          {renderCellRow(1)}
          <div className="clear_coins_container" />
          {renderCellRow(2)}
        </div>

        <section className="player_row">
          {renderPlayer(player3, 'left', 2)}
          {renderCoinContainer(player3, 'green')}
          {renderCellRow(3)}
          {renderCoinContainer(player4, 'yellow')}
          {renderPlayer(player4, 'right', 3)}
        </section>
      </section>
      {gameData.winningPlayer && (
        <CongratulationsPopup player={gameData.winningPlayer} />
      )}
      <style jsx global>{`
        body,
        html {
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');
          padding: 0;
          margin: 0;
          background: ${colors.palette1.shade5};
          font-family: 'Open Sans', sans-serif;
        }
        button {
          font-family: 'Open Sans', sans-serif;
          border-radius: 3px;
        }
      `}</style>
      <style jsx>{GameStyles}</style>
    </div>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired,
  playerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  gameId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Game;
