import React, { Fragment } from 'react';
import JoinGame from '../components/JoinGame/JoinGame';
import GlobalStyles from '../components/globalStyles';

const joinGame = () => {
  return (
    <Fragment>
      <JoinGame />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

export default joinGame;
