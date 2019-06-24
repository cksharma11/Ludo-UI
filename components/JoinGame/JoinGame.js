import React, { Fragment } from 'react';
import Header from '../Header/Header';
import JoinGameStyles from './JoinGame.style';

const JoinGame = () => {
  return (
    <Fragment>
      <Header title="Ludo" />
      <form method="POST" action="joinGame">
        <div className="activity-header">Join Game</div>
        <input type="text" name="playerName" placeholder="name" />
        <input type="number" name="gameId" placeholder="gameId" />
        <input type="submit" value="Join Game" />
      </form>
      <style jsx>{JoinGameStyles}</style>
    </Fragment>
  );
};

export default JoinGame;
