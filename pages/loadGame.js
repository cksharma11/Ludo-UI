import React, { Fragment } from 'react';
import LoadGame from '../components/LoadGame/LoadGame';
import GlobalStyles from '../components/globalStyles';

const loadGame = () => {
  return (
    <Fragment>
      <LoadGame />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

export default loadGame;
