import React from 'react';
import CoinContainer from '../CoinContainer/CoinContainer';
import GameHeader from '../GameHeader/GameHeader';
import CellRow from '../CellRow/CellRow';
import GameStyles from './Game.style';

const Game = () => {
  return (
    <div className="body">
      <GameHeader title="Ludo" playerName="Chandan" />
      <section className="main_container">
        <section className="player_row">
          <CoinContainer playerId="player_1" color="red" />
          <CellRow
            className="cell_row"
            cellId={1}
            color="blue"
            containerClass=""
            specialCells={[5, 6, 8, 11, 14, 17]}
          />
          <CoinContainer playerId="player_2" color="blue" />
        </section>

        <div className="board_middle_row">
          <CellRow
            className="cell_column"
            cellId={19}
            color="red"
            containerClass="cell_column_container"
            specialCells={[22, 23, 26, 29, 32, 35]}
          />
          <div className="clear_coins_container">
            <div id="dice" className="dice" />
          </div>
          <CellRow
            className="cell_column"
            cellId={37}
            color="yellow"
            containerClass="cell_column_container"
            specialCells={[38, 41, 44, 47, 50, 51]}
          />
        </div>

        <section className="player_row">
          <CoinContainer playerId="player_3" color="green" />
          <CellRow
            className="cell_row"
            cellId={55}
            color="green"
            containerClass=""
            specialCells={[56, 59, 62, 65, 67, 68]}
          />
          <CoinContainer playerId="player_4" color="yellow" />
        </section>
      </section>
      <style jsx>{GameStyles}</style>
    </div>
  );
};

export default Game;
