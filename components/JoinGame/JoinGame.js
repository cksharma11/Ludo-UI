import React from 'react';

const JoinGame = () => {
  return (
    <form method="POST" action="joinGame">
      <input type="text" name="name" placeholder="name" />
      <input type="number" name="gameId" placeholder="gameId" />
      <input type="submit" />
    </form>
  );
};

export default JoinGame;
