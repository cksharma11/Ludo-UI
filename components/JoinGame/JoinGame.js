import React from 'react';
import Header from '../Header/Header';
import JoinGameStyles from './JoinGame.style';
import labels from '../../config/labels/labels';

const JoinGame = () => {
  return (
    <div className="container">
      <Header title="Ludo" />
      <div className="form-container">
        <form method="POST" action="/joinGame">
          <div className="activity-header">{labels.JOIN_GAME}</div>
          <input type="text" name="playerName" placeholder="name" />
          <input type="number" name="gameId" placeholder="gameId" />
          <input type="submit" value={labels.JOIN_GAME} />
        </form>
      </div>
      <style jsx>{JoinGameStyles}</style>
    </div>
  );
};

export default JoinGame;
