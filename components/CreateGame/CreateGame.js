import React, { Fragment } from 'react';
import CreateGameStyles from './CreateGame.style';
import Header from '../Header/Header';
import labels from '../../config/labels/labels';

const CreateGame = () => {
  return (
    <Fragment>
      <Header title="Ludo" />
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
      <style jsx>{CreateGameStyles}</style>
    </Fragment>
  );
};

export default CreateGame;
