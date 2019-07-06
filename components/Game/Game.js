import React from 'react';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';
import Player from '../Player/Player';

const Game = () => {
  return (
    <div className="body">
      <GameHeader title="Ludo" playerName="Chandan" />
      <section className="main_container">
        <section className="player_row">
          <Player name="Arif" turn />
          <CoinContainer playerId="player_1" color="red" />
          <CellRow
            className="cell_row"
            cellId={1}
            color="blue"
            containerClass=""
          />
          <CoinContainer playerId="player_2" color="blue" />
          <Player name="Chandan" turn={false} />
        </section>

        <div className="board_middle_row">
          <CellRow
            className="cell_column"
            cellId={19}
            color="red"
            containerClass="cell_column_container"
          />
          <div className="clear_coins_container">
            <div id="dice" className="dice" />
          </div>
          <CellRow
            className="cell_column"
            cellId={37}
            color="yellow"
            containerClass="cell_column_container"
          />
        </div>
        <section className="player_row">
          <Player name="Goarav" turn={false} />
          <CoinContainer playerId="player_3" color="green" />
          <CellRow
            className="cell_row"
            cellId={55}
            color="green"
            containerClass=""
          />
          <CoinContainer playerId="player_4" color="yellow" />
          <Player name="Pankaj" turn={false} />
        </section>
      </section>
      <style jsx>{GameStyles}</style>
    </div>
  );
};

export default Game;
