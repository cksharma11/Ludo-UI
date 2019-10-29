import React from 'react';
import CreateGameStyles from './CreateGame.style';
import Header from '../Header/Header';
import labels from '../../config/labels/labels';
import globalStyles from '../globalStyle';

const CreateGame = () => {
  return (
    <div>
      <Header title="Ludo" />
      <div className="form-container">
        <form method="POST" action="/createGame">
          <div className="activity-header">{labels.HOST_GAME}</div>
          <input type="text" name="hostName" placeholder="hostname" />
          <input
            type="number"
            name="numberOfPlayers"
            placeholder="number of players"
          />
          <input type="submit" value={labels.CREATE_GAME} />
        </form>
      </div>
      <style jsx>{CreateGameStyles}</style>
      <style jsx>{globalStyles}</style>
    </div>
  );
};

export default CreateGame;
