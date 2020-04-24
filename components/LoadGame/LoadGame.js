import React from 'react';
import Header from '../Header/Header';
import LoadGameStyles from './LoadGame.style';
import labels from '../../config/labels/labels';

const LoadGame = () => {
  return (
    <div className="container">
      <Header title="Ludo" />
      <div className="form-container">
        <form method="POST" action="/loadGame">
          <div className="activity-header">{labels.LOAD_GAME}</div>
          <input type="number" name="gameId" placeholder="Game ID" />
          <input type="number" name="playerId" placeholder="Player ID" />
          <input type="submit" value={labels.LOAD_GAME} />
        </form>
        <style jsx>{LoadGameStyles}</style>
      </div>
    </div>
  );
};

export default LoadGame;
