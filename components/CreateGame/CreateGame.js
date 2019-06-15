import React, { Fragment } from 'react';
import CreateGameStyles from './CreateGame.style';
import Header from '../Header/Header';

const CreateGame = () => {
  return (
    <Fragment>
      <Header title="Ludo" />
      <form method="POST" action="/createGame">
        <div className="activity-header">Host Game</div>
        <input type="text" name="hostname" placeholder="hostname" />
        <input
          type="number"
          name="numberOfPlayers"
          placeholder="number of players"
        />
        <input type="submit" value="Create Game" />
      </form>
      <style jsx>{CreateGameStyles}</style>
    </Fragment>
  );
};

export default CreateGame;
