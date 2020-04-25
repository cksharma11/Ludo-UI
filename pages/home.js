import React from 'react';
import Home from '../components/Home/Home';
import PageLayout from '../components/PageLayout/PageLayout';

const home = () => {
  return (
    <PageLayout>
      <Home
        title="Ludo"
        createGameLink="/createGame"
        joinGameLink="joinGame"
        loadGameLink="/loadGame"
      />
    </PageLayout>
  );
};

export default home;
