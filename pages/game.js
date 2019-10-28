/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import Game from '../components/Game/Game';
import { parseCookie, API_URL } from '../utils/utils';
import app from '../https/app';
import { withGameContext } from '../context/withGameContext/withGameContext';

const GamePage = ({ gameData, playerId, gameId }) => {
  return <Game gameData={gameData} playerId={playerId} gameId={gameId} />;
};

GamePage.defaultProps = {
  gameData: {},
  playerId: 0,
  gameId: 0
};

GamePage.propTypes = {
  gameData: PropTypes.object,
  playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gameId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GamePage.getInitialProps = async ({ req, setGameData }) => {
  const cookies = parseCookie(req.headers.cookie);
  const { gameId, playerId } = cookies;
  const gameData = await app.post(`${API_URL}/getGameData`, {
    body: JSON.stringify({ gameId })
  });
  setGameData(gameData);
  return { gameData, playerId, gameId };
};

export { GamePage };
export default withGameContext(GamePage);
