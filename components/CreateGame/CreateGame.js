import React from 'react';

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
    </form>
  );
};

export default CreateGame;
