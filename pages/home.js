import React, { Fragment } from 'react';
import Home from '../components/Home/Home';
import GlobalStyles from '../components/globalStyles';

const home = () => {
  return (
    <Fragment>
      <Home
        title="Ludo"
        createGameLink="/createGame"
        joinGameLink="joinGame"
        loadGameLink="/loadGame"
      />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

export default home;
