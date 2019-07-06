import React from 'react';
import PropTypes from 'prop-types';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';

const Game = ({ gameData, playerId }) => {
  const { players } = gameData;
  const windowPlayer = players.filter((player) => player.id === playerId)[0];

  return (
    <div className="body">
      <GameHeader title="Ludo" playerName={windowPlayer.name} />
      <section className="main_container">
        <section className="player_row">
          {players[0] && (
            <Player
              name={players[0].name}
              turn={players[0].turn}
              alignment="left"
            />
          )}
          <CoinContainer playerId="player_1" color="red" />
          <CellRow
            className="cell_row"
            cellId={1}
            color="blue"
            containerClass=""
          />
          <CoinContainer playerId="player_2" color="blue" />
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
          <CoinContainer playerId="player_3" color="green" />
          <CellRow
            className="cell_row"
            cellId={55}
            color="green"
            containerClass=""
          />
          <CoinContainer playerId="player_4" color="yellow" />
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

Game.defaultProps = {
  gameData: {
    players: [
      {
        name: 'test 1',
        id: 1,
        turn: true
      },
      {
        name: 'test 1',
        id: 2,
        turn: false
      }
    ]
  },
  playerId: 1
};

Game.propTypes = {
  gameData: PropTypes.object,
  playerId: PropTypes.number
};

export default Game;
