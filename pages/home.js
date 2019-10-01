import React from 'react';
import Home from '../components/Home/Home';

const home = () => {
  return (
    <Home
      title="Ludo"
      createGameLink="/createGame"
      joinGameLink="joinGame"
      loadGameLink="/loadGame"
    />
  );
};

export default home;
