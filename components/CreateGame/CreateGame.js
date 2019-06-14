import React from 'react';
import CreateGameStyles from './CreateGame.style';

const CreateGame = () => {
  return (
    <form method="POST" action="createGame">
      <input type="text" name="hostname" placeholder="hostname" />
      <input
        type="number"
        name="numberOfPlayers"
        placeholder="number of players"
      />
      <input type="submit" />
      <style jsx>{CreateGameStyles}</style>
    </form>
  );
};

export default CreateGame;
