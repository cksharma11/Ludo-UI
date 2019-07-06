/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import Game from '../components/Game/Game';
import { parseCookie, API_URL } from '../utils/utils';
import app from '../https/app';

const GamePage = ({ gameData, playerId }) => {
  return <Game {...gameData} />;
};

GamePage.defaultProps = {
  gameData: {},
  playerId: 0
};

GamePage.propTypes = {
  gameData: PropTypes.object,
  playerId: PropTypes.number
};

GamePage.getInitialProps = async ({ req }) => {
  const cookies = parseCookie(req.headers.cookie);
  const { gameId, playerId } = cookies;
  const gameData = await app.get(`${API_URL}/getGameData`, {
    gameId
  });
  return { gameData, playerId };
};

export default GamePage;