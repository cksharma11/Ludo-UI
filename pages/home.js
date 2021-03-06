import React from 'react';
import Home from '../components/Home/Home';
import GlobalStyles from '../components/globalStyles';
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
      <style jsx>{GlobalStyles}</style>
    </PageLayout>
  );
};

export default home;
