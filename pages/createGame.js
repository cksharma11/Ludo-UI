import React, { Fragment } from 'react';
import CreateGame from '../components/CreateGame/CreateGame';
import GlobalStyles from '../components/globalStyles';

const createGame = () => {
  return (
    <Fragment>
      <CreateGame />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

export default createGame;
