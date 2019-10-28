/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import GameContext from '../context/withGameContext/withGameContext';

const App = ({ Component, pageProps, gameData: initialGameData }) => {
  return (
    <Container>
      <GameContext.Provider gameData={initialGameData}>
        <Head>
          <title>Ludo</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#aad500" />
        </Head>
        <Component {...pageProps} />
      </GameContext.Provider>
    </Container>
  );
};

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
  gameData: PropTypes.object
};

App.defaultProps = {
  pageProps: {},
  Component: () => {},
  gameData: {}
};

export default App;
