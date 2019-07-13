import React from 'react';
import PropTypes from 'prop-types';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';

const Game = ({ gameData, playerId }) => {
  const { players } = gameData;
  const sameScreenPlayer = players.filter(
    (player) => player.playerId === +playerId
  )[0];

  return (
    <div className="body">
      <GameHeader title="Ludo" playerName={sameScreenPlayer.name} />
      <section className="main_container">
        <section className="player_row">
          {players[0] && (
            <Player
              name={players[0].name}
              turn={players[0].turn}
              alignment="left"
            />
          )}
          <CoinContainer
            playerId="player_1"
            color="red"
            showCoins={players[0] !== undefined}
          />
          <CellRow
            className="cell_row"
            cellId={1}
            color="blue"
            containerClass=""
          />
          <CoinContainer
            playerId="player_2"
            color="blue"
            showCoins={players[1] !== undefined}
          />
          {players[1] && (
            <Player
              name={players[1].name}
              turn={players[1].turn}
              alignment="right"
            />
          )}
        </section>

        <div className="board_middle_row">
          <CellRow
            className="cell_column"
            cellId={19}
            color="red"
            containerClass="cell_column_container"
          />
          <div className="clear_coins_container" />
          <CellRow
            className="cell_column"
            cellId={37}
            color="yellow"
            containerClass="cell_column_container"
          />
        </div>
        <section className="player_row">
          {players[2] && (
            <Player
              name={players[2].name}
              turn={players[2].turn}
              alignment="left"
            />
          )}
          <CoinContainer
            playerId="player_3"
            color="green"
            showCoins={players[2] !== undefined}
          />
          <CellRow
            className="cell_row"
            cellId={55}
            color="green"
            containerClass=""
          />
          <CoinContainer
            playerId="player_4"
            color="yellow"
            showCoins={players[3] !== undefined}
          />
          {players[3] && (
            <Player
              name={players[3].name}
              turn={players[3].turn}
              alignment="right"
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
